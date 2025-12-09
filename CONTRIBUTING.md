# Katkıda Bulunma Rehberi / Contributing Guide

🇹🇷 **Türkçe** | 🇬🇧 **English**

---

## 🇹🇷 Türkçe

### Hoş Geldiniz! 👋

Json-Naked projesine katkıda bulunmayı düşündüğünüz için teşekkür ederiz! Bu belge, projeye nasıl katkıda bulunabileceğinizi açıklar.

### Davranış Kuralları

- Saygılı ve yapıcı olun
- Farklı görüşlere açık olun
- Yardımsever bir topluluk oluşturmaya katkıda bulunun

### Nasıl Katkıda Bulunabilirsiniz?

#### 🐛 Hata Bildirimi

Bir hata buldunuz mu?

1. [Issues](https://github.com/ksbicorp/Json-Naked/issues) sayfasında benzer bir hata kaydının olmadığını kontrol edin
2. Yoksa, yeni bir issue açın ve şunları ekleyin:
   - Hatanın açık bir başlığı
   - Hatayı yeniden oluşturmak için adımlar
   - Beklenen davranış
   - Gerçekleşen davranış
   - Ekran görüntüleri (varsa)
   - Ortam bilgisi (tarayıcı, işletim sistemi, Node.js versiyonu)

#### ✨ Yeni Özellik Önerisi

Yeni bir özellik fikriniz mi var?

1. İlk önce [Issues](https://github.com/ksbicorp/Json-Naked/issues) sayfasında benzer bir öneri olmadığını kontrol edin
2. Yeni bir "Feature Request" issue'su açın
3. Özelliği detaylı açıklayın:
   - Hangi problemi çözer?
   - Nasıl çalışmalı?
   - Kullanıcı deneyimini nasıl iyileştirir?

#### 💻 Kod Katkısı

Kod katkısında bulunmak için:

1. **Fork ve Clone**
   ```bash
   # Projeyi fork edin (GitHub arayüzünden)
   # Sonra klonlayın:
   git clone https://github.com/YOUR-USERNAME/Json-Naked.git
   cd Json-Naked
   ```

2. **Geliştirme Ortamını Kurun**
   ```bash
   npm install
   # .env.local dosyası oluşturun ve API anahtarınızı ekleyin
   echo "GEMINI_API_KEY=your_api_key" > .env.local
   ```

3. **Yeni Bir Branch Oluşturun**
   ```bash
   git checkout -b feature/ozellik-adi
   # veya
   git checkout -b fix/hata-adi
   ```

4. **Değişikliklerinizi Yapın**
   - Kodu yazın
   - Mevcut kod stiline uyun
   - TypeScript tip kontrollerini geçtiğinden emin olun
   - Yorumları Türkçe veya İngilizce ekleyin

5. **Test Edin**
   ```bash
   npm run dev  # Yerel olarak test edin
   npm run build # Build'in başarılı olduğunu kontrol edin
   ```

6. **Commit Edin**
   ```bash
   git add .
   git commit -m "feat: yeni özellik açıklaması"
   # veya
   git commit -m "fix: hata düzeltmesi açıklaması"
   ```

   **Commit Mesaj Formatı:**
   - `feat:` - Yeni özellik
   - `fix:` - Hata düzeltmesi
   - `docs:` - Dokümantasyon değişikliği
   - `style:` - Kod formatı değişikliği
   - `refactor:` - Kod iyileştirmesi
   - `test:` - Test ekleme/değiştirme
   - `chore:` - Diğer değişiklikler

7. **Push Edin ve PR Açın**
   ```bash
   git push origin feature/ozellik-adi
   ```
   
   GitHub'da repository'nize gidin ve "Pull Request" açın.

### Pull Request Kuralları

✅ **İyi PR'lar:**
- Tek bir özellik veya düzeltmeye odaklanır
- Açıklayıcı başlık ve detaylı açıklama içerir
- Değişikliklerin ekran görüntülerini içerir (UI değişiklikleri için)
- Test edilmiş ve çalışır durumda

❌ **Kaçınılması Gerekenler:**
- Çok fazla değişiklik içeren büyük PR'lar
- İlgisiz değişiklikler
- Test edilmemiş kod
- Kırık build

### Kod Stili

- **TypeScript**: Strict mode kullanın
- **React**: Functional components ve hooks kullanın
- **Naming**: camelCase (değişkenler), PascalCase (componentler)
- **Imports**: Alfabetik sıralayın
- **Comments**: Türkçe veya İngilizce, anlaşılır açıklamalar

### Geliştirme İpuçları

1. **Canlı Reload**: `npm run dev` otomatik yeniden yükleme sağlar
2. **Type Checking**: VSCode TypeScript eklentisi kullanın
3. **Console Logs**: Geliştirme sırasında kullanın, commit etmeden önce temizleyin
4. **Component Structure**: Mevcut component yapısını takip edin

### Sorularınız mı Var?

- [Issues](https://github.com/ksbicorp/Json-Naked/issues) sayfasında soru sorun
- Mevcut issue'ları ve PR'ları inceleyin
- README.md dosyasını okuyun

---

## 🇬🇧 English

### Welcome! 👋

Thank you for considering contributing to Json-Naked! This document explains how you can contribute to the project.

### Code of Conduct

- Be respectful and constructive
- Be open to different opinions
- Help build a supportive community

### How to Contribute?

#### 🐛 Bug Reports

Found a bug?

1. Check if a similar bug report exists in [Issues](https://github.com/ksbicorp/Json-Naked/issues)
2. If not, open a new issue and include:
   - Clear title for the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment info (browser, OS, Node.js version)

#### ✨ Feature Requests

Have a new feature idea?

1. First check if a similar suggestion exists in [Issues](https://github.com/ksbicorp/Json-Naked/issues)
2. Open a new "Feature Request" issue
3. Describe the feature in detail:
   - What problem does it solve?
   - How should it work?
   - How does it improve user experience?

#### 💻 Code Contributions

To contribute code:

1. **Fork and Clone**
   ```bash
   # Fork the project (from GitHub interface)
   # Then clone:
   git clone https://github.com/YOUR-USERNAME/Json-Naked.git
   cd Json-Naked
   ```

2. **Set Up Development Environment**
   ```bash
   npm install
   # Create .env.local file and add your API key
   echo "GEMINI_API_KEY=your_api_key" > .env.local
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/feature-name
   # or
   git checkout -b fix/bug-name
   ```

4. **Make Your Changes**
   - Write code
   - Follow existing code style
   - Ensure TypeScript type checks pass
   - Add comments in Turkish or English

5. **Test**
   ```bash
   npm run dev  # Test locally
   npm run build # Check if build succeeds
   ```

6. **Commit**
   ```bash
   git add .
   git commit -m "feat: new feature description"
   # or
   git commit -m "fix: bug fix description"
   ```

   **Commit Message Format:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation change
   - `style:` - Code format change
   - `refactor:` - Code improvement
   - `test:` - Add/modify tests
   - `chore:` - Other changes

7. **Push and Open PR**
   ```bash
   git push origin feature/feature-name
   ```
   
   Go to your repository on GitHub and open a "Pull Request".

### Pull Request Guidelines

✅ **Good PRs:**
- Focus on a single feature or fix
- Include descriptive title and detailed description
- Include screenshots of changes (for UI changes)
- Tested and working

❌ **Avoid:**
- Large PRs with too many changes
- Unrelated changes
- Untested code
- Broken builds

### Code Style

- **TypeScript**: Use strict mode
- **React**: Use functional components and hooks
- **Naming**: camelCase (variables), PascalCase (components)
- **Imports**: Sort alphabetically
- **Comments**: Turkish or English, clear explanations

### Development Tips

1. **Live Reload**: `npm run dev` provides automatic reloading
2. **Type Checking**: Use VSCode TypeScript extension
3. **Console Logs**: Use during development, clean before commit
4. **Component Structure**: Follow existing component structure

### Questions?

- Ask in [Issues](https://github.com/ksbicorp/Json-Naked/issues)
- Review existing issues and PRs
- Read the README.md file

---

<div align="center">
  <p>🙏 Katkılarınız için teşekkür ederiz! / Thank you for your contributions!</p>
  <p>Made with ❤️ by the community</p>
</div>
