# 📖 Kullanım Kılavuzu / User Guide

## 🇹🇷 Türkçe

### Hızlı Başlangıç

#### Adım 1: Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/ksbicorp/Json-Naked.git
cd Json-Naked

# Bağımlılıkları yükleyin
npm install
```

#### Adım 2: API Anahtarı Ayarlama

1. [Google AI Studio](https://aistudio.google.com/app/apikey)'ya gidin
2. Yeni bir API anahtarı oluşturun
3. Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local
GEMINI_API_KEY=your_api_key_here
```

#### Adım 3: Uygulamayı Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

---

### Arayüz Kullanımı

#### Sol Panel - Sohbet Arayüzü

```
┌─────────────────────────────────┐
│ 💬 Gemini Sohbet                │
│ gemini-3-pro-preview            │
├─────────────────────────────────┤
│                                 │
│  Kullanıcı: Merhaba!      [🔵] │
│                                 │
│  [🤖] AI: Merhaba! Nasıl        │
│       yardımcı olabilirim?      │
│                                 │
├─────────────────────────────────┤
│ Bir şey sorun...         [📤]  │
└─────────────────────────────────┘
```

**Özellikler:**
- 💬 Gerçek zamanlı sohbet
- 🔵 Kullanıcı mesajları (mavi)
- 🤖 AI yanıtları (gri)
- 📤 Hızlı gönderim (Enter tuşu)

#### Sağ Panel - Görselleştirme

```
┌─────────────────────────────────┐
│ 🖥️ Çalışma Döngüsü              │
│ [●] İŞLENİYOR                   │
├─────────────────────────────────┤
│                                 │
│ [1] Doğal Dil Girdisi ✓        │
│     "Merhaba!"                  │
│                                 │
│ [2] JSON Serileştirme ⏳        │
│     { "contents": [...] }       │
│                                 │
│ [3] API Yanıtı ⏺                │
│     Bekleniyor...               │
│                                 │
│ [4] Ayrıştırma ⏺                │
│     -                           │
│                                 │
└─────────────────────────────────┘
```

**Göstergeler:**
- ✓ Tamamlandı (Yeşil)
- ⏳ İşleniyor (Sarı)
- ⏺ Bekliyor (Gri)

---

### Kullanım Senaryoları

#### 1. Basit Soru-Cevap

**Kullanıcı:**
```
Yapay zeka nedir?
```

**Görselleştirme:**
```
[1] Doğal Dil → "Yapay zeka nedir?"
[2] JSON → {"role": "user", "parts": [{"text": "Yapay zeka nedir?"}]}
[3] API → {candidates: [...], safetyRatings: [...]}
[4] Çıktı → "Yapay zeka, makinelerin insan zekasını..."
```

#### 2. Kod Soruları

**Kullanıcı:**
```
JavaScript'te array map fonksiyonu nasıl kullanılır?
```

**Çalışma Akışı:**
1. ✅ Girdi alınır
2. ✅ JSON payload oluşturulur
3. ✅ Gemini API'ye gönderilir
4. ✅ Yanıt parse edilir ve gösterilir

#### 3. Karmaşık Açıklamalar

**Kullanıcı:**
```
Kuantum bilgisayarlar klasik bilgisayarlardan nasıl farklıdır?
```

**JSON Request Örneği:**
```json
{
  "model": "gemini-3-pro-preview",
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Kuantum bilgisayarlar klasik bilgisayarlardan nasıl farklıdır?"
        }
      ]
    }
  ],
  "config": {
    "temperature": 0.7,
    "topK": 40,
    "topP": 0.95,
    "maxOutputTokens": 2048
  }
}
```

---

### JSON Yapısını Anlama

#### Request Payload (Gönderilen)

```json
{
  "model": "gemini-3-pro-preview",
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Kullanıcının sorusu"
        }
      ]
    }
  ],
  "config": {
    "temperature": 0.7,     // Yaratıcılık seviyesi
    "topK": 40,             // Token seçim havuzu
    "topP": 0.95,           // Olasılık eşiği
    "maxOutputTokens": 2048 // Maksimum yanıt uzunluğu
  }
}
```

**Parametreler:**
- `temperature`: 0.0-1.0 arası, yüksek = daha yaratıcı
- `topK`: En olası K token'ı değerlendir
- `topP`: Kümülatif olasılık eşiği
- `maxOutputTokens`: Yanıt token limiti

#### Response Payload (Gelen)

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "AI'ın ürettiği yanıt metni..."
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 10,
    "candidatesTokenCount": 150,
    "totalTokenCount": 160
  },
  "safetyRatings": [...]
}
```

**Önemli Alanlar:**
- `candidates[0].content.parts[0].text`: Asıl yanıt metni
- `finishReason`: Yanıtın neden bittiği (STOP, MAX_TOKENS, vb.)
- `usageMetadata`: Token kullanım istatistikleri
- `safetyRatings`: Güvenlik kontrol sonuçları

---

### Klavye Kısayolları

| Tuş | Aksiyon |
|-----|---------|
| `Enter` | Mesaj gönder |
| `Shift + Enter` | Yeni satır |
| `Esc` | Input alanını temizle |

---

### İpuçları ve En İyi Uygulamalar

#### ✅ Yapılması Gerekenler

1. **Açık Sorular Sorun**
   - ✅ İyi: "JavaScript'te closure nedir ve nasıl çalışır?"
   - ❌ Kötü: "closure"

2. **JSON Yapısını İnceleyin**
   - Request ve response payload'larını karşılaştırın
   - Token sayılarını gözlemleyin
   - Safety ratings'i kontrol edin

3. **Adım Adım İzleyin**
   - Her stage'i dikkatle okuyun
   - Veri dönüşümlerini takip edin
   - JSON formatını öğrenin

#### ❌ Kaçınılması Gerekenler

1. **Çok Kısa Mesajlar**
   - Tek kelime veya çok kısa sorular yerine detaylı sorular sorun

2. **API Anahtarını Paylaşma**
   - `.env.local` dosyasını asla commit etmeyin
   - API anahtarınızı başkalarıyla paylaşmayın

3. **Rate Limits'i Aşma**
   - Çok hızlı ardışık istekler göndermeyin
   - API kotanızı takip edin

---

### Sorun Giderme

#### Uygulama Başlamıyor

**Hata:** `Cannot find module`
```bash
# Çözüm: Bağımlılıkları yeniden yükleyin
rm -rf node_modules package-lock.json
npm install
```

**Hata:** `Port 5173 already in use`
```bash
# Çözüm: Farklı bir port kullanın
npm run dev -- --port 3000
```

#### API Hataları

**Hata:** `API Key not set`
```bash
# Çözüm: .env.local dosyasını kontrol edin
cat .env.local
# GEMINI_API_KEY=... olmalı
```

**Hata:** `Rate limit exceeded`
```
Çözüm: Birkaç dakika bekleyin ve tekrar deneyin.
Google AI Studio'da kotanızı kontrol edin.
```

#### Görselleştirme Çalışmıyor

**Sorun:** JSON gösterilmiyor
```
Çözüm: 
1. Console'u açın (F12)
2. Hataları kontrol edin
3. Sayfayı yenileyin (Ctrl+R)
```

---

### Örnek Kullanım Senaryoları

#### Senaryo 1: Öğrenci - API Öğrenmek

**Amaç:** REST API'lerin nasıl çalıştığını öğrenmek

**Adımlar:**
1. Herhangi bir soru sorun
2. Sağ panelde JSON request'i inceleyin
3. Response yapısını analiz edin
4. Token kullanımını gözlemleyin

**Öğrenilenler:**
- JSON serileştirme
- HTTP request/response döngüsü
- API parametreleri
- Veri ayrıştırma

#### Senaryo 2: Geliştirici - Debug

**Amaç:** Gemini API entegrasyonunu test etmek

**Adımlar:**
1. Farklı soru tipleri deneyin
2. Request payload'ları karşılaştırın
3. Response time'ları ölçün
4. Hata durumlarını gözlemleyin

**Öğrenilenler:**
- API davranışları
- Optimum parametreler
- Hata yönetimi
- Token optimizasyonu

#### Senaryo 3: Eğitmen - Ders Materyali

**Amaç:** AI API'lerini öğretmek

**Adımlar:**
1. Canlı demo yapın
2. Her stage'i açıklayın
3. JSON yapısını gösterin
4. Gerçek zamanlı soru-cevap

**Öğrenilenler:**
- AI sistemlerinin çalışma prensibi
- Veri akış mimarisi
- API tasarım kalıpları

---

## 🇬🇧 English

### Quick Start

[Similar structure as Turkish version...]

### Interface Usage

#### Left Panel - Chat Interface

Real-time chat with Gemini AI showing user messages (blue) and AI responses (gray).

#### Right Panel - Visualization

Live 4-stage workflow visualization showing:
1. Natural Language Input
2. JSON Serialization
3. API Response
4. Parsing & Render

### Usage Examples

[Detailed examples in English following Turkish structure...]

---

<div align="center">
  <p>💡 Bu kılavuz sürekli güncellenmektedir / This guide is continuously updated</p>
  <p>Sorularınız için Issues açın / Open Issues for questions</p>
</div>
