# ⚡ Hızlı Başlangıç / Quick Start

<div align="center">
  <h3>5 Dakikada Json-Naked'ı Çalıştırın / Run Json-Naked in 5 Minutes</h3>
</div>

---

## 🇹🇷 Türkçe

### 3 Basit Adım

#### 1️⃣ Klonla ve Yükle
```bash
git clone https://github.com/ksbicorp/Json-Naked.git
cd Json-Naked
npm install
```

#### 2️⃣ API Anahtarını Ayarla
```bash
# .env.local.example dosyasını kopyala
cp .env.local.example .env.local

# Düzenle ve API anahtarını ekle
# API anahtarı: https://aistudio.google.com/app/apikey
nano .env.local  # veya favori editörünüz
```

**Dosya içeriği şöyle olmalı:**
```bash
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### 3️⃣ Başlat!
```bash
npm run dev
```

🎉 **Tebrikler!** Tarayıcınızda `http://localhost:5173` adresini açın.

---

### İlk Kullanım

1. Sol paneldeki metin kutusuna bir soru yazın:
   ```
   Örnek: "Yapay zeka nedir?"
   ```

2. **Enter** tuşuna basın veya 📤 butonuna tıklayın

3. Sağ panelde 4 aşamayı izleyin:
   - 🔵 **Adım 1**: Girdiniz alınıyor
   - 🟣 **Adım 2**: JSON oluşturuluyor
   - 🟠 **Adım 3**: API yanıtı alınıyor
   - 🟢 **Adım 4**: Metin parse ediliyor

4. Sol panelde AI yanıtını görün!

---

### Video Anlatım (Yakında)

[Buraya bir video eklenecek]

---

## 🇬🇧 English

### 3 Simple Steps

#### 1️⃣ Clone and Install
```bash
git clone https://github.com/ksbicorp/Json-Naked.git
cd Json-Naked
npm install
```

#### 2️⃣ Set Up API Key
```bash
# Copy the example env file
cp .env.local.example .env.local

# Edit and add your API key
# Get API key: https://aistudio.google.com/app/apikey
nano .env.local  # or your favorite editor
```

**File content should be:**
```bash
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### 3️⃣ Start!
```bash
npm run dev
```

🎉 **Congratulations!** Open `http://localhost:5173` in your browser.

---

### First Use

1. Type a question in the text box on the left panel:
   ```
   Example: "What is artificial intelligence?"
   ```

2. Press **Enter** or click the 📤 button

3. Watch the 4 stages on the right panel:
   - 🔵 **Step 1**: Your input is received
   - 🟣 **Step 2**: JSON is being created
   - 🟠 **Step 3**: API response is received
   - 🟢 **Step 4**: Text is being parsed

4. See the AI response in the left panel!

---

### Sorun mu Yaşıyorsunuz? / Having Issues?

#### Port zaten kullanımda / Port already in use
```bash
npm run dev -- --port 3000
```

#### API anahtarı çalışmıyor / API key not working
```bash
# Dosyanın doğru konumda olduğundan emin olun
# Make sure file is in the right location
cat .env.local

# Uygulamayı yeniden başlatın
# Restart the application
# Ctrl+C ile durdurun, sonra tekrar:
npm run dev
```

#### Bağımlılık hataları / Dependency errors
```bash
# Node modules'ı temizle ve yeniden yükle
# Clean and reinstall node modules
rm -rf node_modules package-lock.json
npm install
```

---

### Daha Fazla Yardım / More Help

- 📖 Detaylı kurulum: [README.md](README.md)
- ❓ Sık sorulanlar: [FAQ.md](FAQ.md)
- 💡 Kullanım örnekleri: [USAGE.md](USAGE.md)
- 🐛 Sorun bildirin: [Issues](https://github.com/ksbicorp/Json-Naked/issues)

---

### Klavye Kısayolları / Keyboard Shortcuts

| Tuş / Key | Aksiyon / Action |
|-----------|------------------|
| `Enter` | Mesaj gönder / Send message |
| `Shift + Enter` | Yeni satır / New line |
| `Ctrl + C` | Uygulamayı durdur / Stop app |

---

### Sonraki Adımlar / Next Steps

1. ✅ Farklı sorular deneyin / Try different questions
2. ✅ JSON yapılarını inceleyin / Inspect JSON structures
3. ✅ Token kullanımını gözlemleyin / Observe token usage
4. ✅ [USAGE.md](USAGE.md)'yi okuyun / Read USAGE.md
5. ✅ Katkıda bulunun! / Contribute!

---

<div align="center">
  <p>🚀 Mutlu kodlamalar! / Happy coding!</p>
  <p>⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!</p>
  <p>⭐ Don't forget to star if you like the project!</p>
</div>
