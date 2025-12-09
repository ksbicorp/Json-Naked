# 🏗️ Teknik Mimari / Technical Architecture

## 🇹🇷 Türkçe

### Genel Bakış

Json-Naked, modern web teknolojileri kullanılarak geliştirilmiş, tek sayfalık bir React uygulamasıdır. Uygulama, Google Gemini AI ile entegre çalışarak, yapay zeka isteklerinin yaşam döngüsünü görselleştirir.

### Mimari Diyagramı

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Browser)                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                   React Application                     │ │
│  │                                                          │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
│  │  │   App.tsx    │  │  Components  │  │   Services   │ │ │
│  │  │              │  │              │  │              │ │ │
│  │  │  - State     │  │ - JsonViewer │  │ - gemini.ts  │ │ │
│  │  │  - UI Logic  │  │ - Workflow   │  │              │ │ │
│  │  │  - Routing   │  │   Step       │  │              │ │ │
│  │  └──────┬───────┘  └──────────────┘  └──────┬───────┘ │ │
│  │         │                                     │         │ │
│  │         └─────────────────┬───────────────────┘         │ │
│  │                           │                             │ │
│  └───────────────────────────┼─────────────────────────────┘ │
└─────────────────────────────┼─────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
                   ┌──────────────────────┐
                   │   Google Gemini API   │
                   │  gemini-3-pro-preview │
                   └──────────────────────┘
```

### Katmanlı Yapı

#### 1. Sunum Katmanı (Presentation Layer)
- **Lokasyon**: `App.tsx`, `components/`
- **Sorumluluklar**:
  - Kullanıcı arayüzü render etme
  - Kullanıcı etkileşimlerini yönetme
  - Görsel feedback sağlama
  - State güncellemelerini UI'a yansıtma

**Temel Componentler:**

```typescript
App.tsx
├── ChatInterface (Sol Panel)
│   ├── Header
│   ├── MessageList
│   │   └── Message (User/AI)
│   └── InputArea
│       ├── TextArea
│       └── SendButton
│
└── VisualizationPanel (Sağ Panel)
    ├── Header
    └── WorkflowSteps
        ├── Step1: Natural Input
        ├── Step2: JSON Serialization
        ├── Step3: API Response
        └── Step4: Parsing & Render
```

#### 2. İş Mantığı Katmanı (Business Logic Layer)
- **Lokasyon**: `services/gemini.ts`
- **Sorumluluklar**:
  - API isteklerini yönetme
  - Veri dönüşümleri
  - Hata yönetimi
  - Payload oluşturma

**Veri Akışı:**

```typescript
User Input (String)
    ↓
formatHistory() → ChatMessage[] → API Format
    ↓
createRequestPayload() → GenerateContentRequest
    ↓
sendToGemini() → API Call
    ↓
parseResponse() → Extracted Text
    ↓
Update State → UI Render
```

#### 3. Veri Katmanı (Data Layer)
- **Lokasyon**: `types.ts`
- **Sorumluluklar**:
  - Tip tanımları
  - Veri modelleri
  - Interface'ler

**Ana Tipler:**

```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

interface TransactionLog {
  id: string;
  requestPayload: any;
  responsePayload: any;
  rawPrompt: string;
  parsedOutput: string;
  steps: string[];
}
```

### State Yönetimi

**React Hooks Kullanımı:**

```typescript
// Ana state yönetimi
const [prompt, setPrompt] = useState('');
const [history, setHistory] = useState<ChatMessage[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [currentTransaction, setCurrentTransaction] = useState<TransactionLog>();
const [workflowStage, setWorkflowStage] = useState<0|1|2|3|4>(0);
```

**State Akışı:**

1. **Kullanıcı Input** → `setPrompt()`
2. **API Çağrısı** → `setIsLoading(true)` → `setWorkflowStage(1)`
3. **Payload Oluşturma** → `setCurrentTransaction()` → `setWorkflowStage(2)`
4. **API Yanıtı** → `setCurrentTransaction()` → `setWorkflowStage(3)`
5. **Parse & Render** → `setHistory()` → `setWorkflowStage(4)` → `setIsLoading(false)`

### API Entegrasyonu

**Gemini SDK Kullanımı:**

```typescript
// services/gemini.ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey });
const response = await ai.models.generateContent({
  model: 'gemini-3-pro-preview',
  contents: formattedMessages,
  config: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  }
});
```

**İstek Yapısı:**

```json
{
  "model": "gemini-3-pro-preview",
  "contents": [
    {
      "role": "user",
      "parts": [{ "text": "User's question" }]
    }
  ],
  "config": { ... }
}
```

**Yanıt Yapısı:**

```json
{
  "candidates": [
    {
      "content": {
        "parts": [{ "text": "AI response" }],
        "role": "model"
      }
    }
  ],
  "safetyRatings": [...],
  "usageMetadata": { ... }
}
```

### Görselleştirme Sistemi

**4-Aşama Workflow:**

```typescript
enum WorkflowStage {
  IDLE = 0,      // Bekleme
  INPUT = 1,     // Kullanıcı girdisi alındı
  REQUEST = 2,   // JSON oluşturuldu, API'ye gönderildi
  RESPONSE = 3,  // API yanıtı alındı
  RENDER = 4     // Parse edildi, UI'a yansıtıldı
}
```

**Görsel Feedback:**

- **Stage 0**: Boş durum görseli
- **Stage 1**: Kullanıcı mesajı highlight
- **Stage 2**: Request JSON animasyonlu gösterim
- **Stage 3**: Response JSON görüntüleme
- **Stage 4**: Final output render

### Performans Optimizasyonları

1. **Lazy Updates**: State güncellemeleri geciktirilmiş (setTimeout) - eğitici amaçlı
2. **Memoization**: Component re-render'ları minimize edilmiş
3. **Code Splitting**: Vite otomatik chunk'lama
4. **Tree Shaking**: Kullanılmayan kod elimine ediliyor

### Güvenlik

- **API Key**: Environment variable olarak saklanıyor (`.env.local`)
- **Client-side Only**: Backend olmadan çalışıyor
- **HTTPS**: Production'da zorunlu
- **No Data Storage**: Kullanıcı verileri saklanmıyor

### Build ve Deployment

**Development:**
```bash
npm run dev    # Vite dev server (port 5173)
```

**Production:**
```bash
npm run build  # TypeScript compile + Vite build
npm run preview # Production preview
```

**Output:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

### Bağımlılıklar

**Runtime Dependencies:**
- `react` (19.2): UI framework
- `react-dom` (19.2): DOM rendering
- `@google/genai` (1.31): Gemini SDK
- `lucide-react` (0.556): Icon library

**Dev Dependencies:**
- `typescript` (5.8): Type checking
- `vite` (6.2): Build tool
- `@vitejs/plugin-react` (5.0): React plugin
- `@types/node` (22.14): Node types

### Genişletilebilirlik

Projeye eklenebilecek özellikler:

1. **History Storage**: LocalStorage ile sohbet geçmişi saklama
2. **Export**: Konuşmaları JSON/Markdown olarak export
3. **Themes**: Light/Dark tema toggle
4. **Multi-Language**: i18n desteği
5. **Advanced Viz**: Daha detaylı JSON tree viewer
6. **Streaming**: Gerçek zamanlı yanıt streaming

---

## 🇬🇧 English

### Overview

Json-Naked is a single-page React application developed using modern web technologies. The application works integrated with Google Gemini AI to visualize the lifecycle of AI requests.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Browser)                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                   React Application                     │ │
│  │                                                          │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
│  │  │   App.tsx    │  │  Components  │  │   Services   │ │ │
│  │  │              │  │              │  │              │ │ │
│  │  │  - State     │  │ - JsonViewer │  │ - gemini.ts  │ │ │
│  │  │  - UI Logic  │  │ - Workflow   │  │              │ │ │
│  │  │  - Routing   │  │   Step       │  │              │ │ │
│  │  └──────┬───────┘  └──────────────┘  └──────┬───────┘ │ │
│  │         │                                     │         │ │
│  │         └─────────────────┬───────────────────┘         │ │
│  │                           │                             │ │
│  └───────────────────────────┼─────────────────────────────┘ │
└─────────────────────────────┼─────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
                   ┌──────────────────────┐
                   │   Google Gemini API   │
                   │  gemini-3-pro-preview │
                   └──────────────────────┘
```

### Layered Structure

[Similar structure as Turkish version above...]

### Key Technologies

- **Frontend Framework**: React 19.2 with TypeScript
- **Build Tool**: Vite 6.2
- **AI Integration**: Google Gemini API (gemini-3-pro-preview)
- **Styling**: Tailwind CSS (via className)
- **Icons**: Lucide React

### Data Flow

```
User Input → State Update → Service Call → API Request
                                              ↓
UI Render ← State Update ← Parse Response ← API Response
```

### Security Considerations

- API keys stored in environment variables
- No backend server required
- Client-side only implementation
- No persistent data storage

### Performance

- Optimized re-renders with React hooks
- Code splitting via Vite
- Tree shaking for minimal bundle size
- Lazy state updates for educational pacing

---

<div align="center">
  <p>📚 Bu dokümantasyon sürekli güncellenmektedir / This documentation is continuously updated</p>
</div>
