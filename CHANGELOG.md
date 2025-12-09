# 📝 Değişiklik Günlüğü / Changelog

Tüm önemli değişiklikler bu dosyada belgelenecektir.

Format [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standardına dayanır ve bu proje [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kullanır.

---

## [Unreleased]

### Planlanan Özellikler / Planned Features
- 🌓 Karanlık/Aydınlık tema toggle
- 💾 Sohbet geçmişi kaydetme (LocalStorage)
- 📤 JSON/Markdown export
- 🌊 Streaming yanıt desteği
- 📊 Token kullanım istatistikleri
- 🔍 JSON yapısı için detaylı search/filter
- 🎨 Tema özelleştirme seçenekleri
- 📱 Geliştirilmiş mobil deneyim
- 🌐 Tam i18n desteği (çoklu dil)
- 🔄 Sohbet geçmişini yönetme (silme, favorilere ekleme)

---

## [1.0.0] - 2024-12-09

### 🎉 İlk Sürüm / Initial Release

#### Eklenen / Added
- ✨ Temel sohbet arayüzü (Chat interface)
- 🔍 4-aşamalı iş akışı görselleştirmesi
  - Doğal dil girdisi
  - JSON serileştirme
  - API yanıtı
  - Ayrıştırma ve render
- 📦 JSON payload görüntüleyici
- 🤖 Google Gemini 3.0 Pro entegrasyonu
- 📱 Responsive tasarım (mobil uyumlu)
- 🎨 Karanlık tema UI
- 💬 Gerçek zamanlı sohbet
- ⌨️ Klavye kısayolları (Enter ile gönderim)
- 🔄 Canlı durum göstergeleri
- 📚 Kapsamlı dokümantasyon
  - README.md (Türkçe/İngilizce)
  - CONTRIBUTING.md
  - ARCHITECTURE.md
  - USAGE.md
  - FAQ.md
  - LICENSE (MIT)
- 📊 Mermaid workflow diyagramları
- 🎯 TypeScript tip güvenliği
- ⚡ Vite build tool
- 🎨 Lucide React icon kütüphanesi

#### Teknik Özellikler / Technical Features
- React 19.2 with Hooks
- TypeScript 5.8 strict mode
- Vite 6.2 build system
- Google GenAI SDK 1.31.0
- Tailwind CSS (inline styling)
- Client-side only architecture
- Environment variable support

---

## [0.5.0] - 2024-12-08 (Beta)

### Eklenen / Added
- 🧪 Beta test versiyonu
- 🔧 Temel Gemini API entegrasyonu
- 📝 İlk UI mockup'ları
- 🎨 Tasarım sistem kurulumu

### Değiştirilen / Changed
- 🔄 Component yapısı iyileştirmesi
- 📦 Bağımlılık güncellemeleri

---

## [0.1.0] - 2024-12-01 (Alpha)

### Eklenen / Added
- 🎬 İlk prototip
- ⚙️ Proje yapısı
- 📋 Planlama dokümanları

---

## Sürüm Notasyonu / Version Notation

Bu projede **Semantic Versioning** kullanılır:

```
MAJOR.MINOR.PATCH

MAJOR: Geriye uyumsuz değişiklikler
MINOR: Geriye uyumlu yeni özellikler
PATCH: Geriye uyumlu hata düzeltmeleri
```

### Örnekler / Examples

- `1.0.0` → `1.0.1`: Hata düzeltmesi (patch)
- `1.0.0` → `1.1.0`: Yeni özellik (minor)
- `1.0.0` → `2.0.0`: Breaking change (major)

---

## Değişiklik Türleri / Types of Changes

- **Added** / **Eklenen**: Yeni özellikler
- **Changed** / **Değiştirilen**: Mevcut özelliklerde değişiklikler
- **Deprecated** / **Kullanımdan Kaldırılacak**: Yakında kaldırılacak özellikler
- **Removed** / **Kaldırılan**: Kaldırılan özellikler
- **Fixed** / **Düzeltilen**: Hata düzeltmeleri
- **Security** / **Güvenlik**: Güvenlik yamalarıi

---

## Gelecek Planları / Future Plans

### v1.1.0 (Yakında / Coming Soon)
- [ ] 🌓 Theme toggle (dark/light)
- [ ] 💾 LocalStorage persistence
- [ ] 📤 Export functionality
- [ ] 🔍 Advanced JSON viewer
- [ ] 📊 Usage statistics dashboard

### v1.2.0
- [ ] 🌊 Streaming responses
- [ ] 🎨 Custom themes
- [ ] 🔄 History management
- [ ] 📱 PWA support
- [ ] 🌐 Multi-language UI

### v2.0.0
- [ ] 🤖 Multiple AI model support
- [ ] 🔐 User authentication
- [ ] 💾 Cloud sync
- [ ] 📊 Advanced analytics
- [ ] 🎓 Tutorial mode

---

## Katkıda Bulunma / Contributing

Bu changelog'u güncel tutmak için:

1. Her PR'da ilgili değişiklikleri `[Unreleased]` bölümüne ekleyin
2. Sürüm çıktığında `[Unreleased]`'dan yeni sürüm bölümüne taşıyın
3. Değişiklik türünü doğru kategoriye yerleştirin
4. Kısa ama açıklayıcı mesajlar kullanın
5. İlgili issue/PR numaralarını referans edin

**Format:**
```markdown
- 🎯 Emoji + Kısa açıklama (#PR-number)
```

**Örnek:**
```markdown
- ✨ Add dark mode toggle (#42)
- 🐛 Fix JSON viewer scroll issue (#45)
```

---

## Bağlantılar / Links

- [Unreleased]: https://github.com/ksbicorp/Json-Naked/compare/v1.0.0...HEAD
- [1.0.0]: https://github.com/ksbicorp/Json-Naked/releases/tag/v1.0.0
- [0.5.0]: https://github.com/ksbicorp/Json-Naked/releases/tag/v0.5.0
- [0.1.0]: https://github.com/ksbicorp/Json-Naked/releases/tag/v0.1.0

---

<div align="center">
  <p>📅 Son Güncelleme / Last Updated: 2024-12-09</p>
  <p>Made with ❤️ by Json-Naked Contributors</p>
</div>
