# 📋 Sık Sorulan Sorular / FAQ

## 🇹🇷 Türkçe

### Genel Sorular

#### 1. Json-Naked nedir?

Json-Naked (Gemini Algoritma Keşfedici), yapay zeka API'lerinin nasıl çalıştığını görselleştiren eğitici bir web uygulamasıdır. Doğal dilin JSON'a nasıl dönüştüğünü, AI tarafından nasıl işlendiğini ve tekrar doğal dile nasıl döndürüldüğünü adım adım gösterir.

#### 2. Bu uygulama kimin için?

- 👨‍💻 **Geliştiriciler**: API entegrasyonu öğrenmek isteyenler
- 🎓 **Öğrenciler**: AI sistemlerini anlamak isteyenler
- 👨‍🏫 **Eğitmenler**: API'leri ders malzemesi olarak kullanmak isteyenler
- 🤔 **Meraklılar**: AI'ın perde arkasını görmek isteyenler

#### 3. Ücretsiz mi?

Evet, uygulama tamamen açık kaynaklıdır ve ücretsizdir. Ancak Google Gemini API'sini kullanmak için bir API anahtarına ihtiyacınız var. Gemini API'nin ücretsiz kotası vardır, bunun üzerindeki kullanımlar ücretlendirilir.

#### 4. Verileri kaydediyor mu?

Hayır. Json-Naked hiçbir veriyi saklamaz. Tüm sohbetler tarayıcınızın belleğinde tutulur ve sayfa yenilendiğinde silinir. API anahtarınız da yalnızca tarayıcınızda saklanır.

---

### Kurulum ve Yapılandırma

#### 5. Nasıl yüklenir?

```bash
git clone https://github.com/ksbicorp/Json-Naked.git
cd Json-Naked
npm install
```

Detaylı kurulum için [README.md](README.md#-kurulum--installation) dosyasına bakın.

#### 6. API anahtarı nereden alınır?

1. [Google AI Studio](https://aistudio.google.com/app/apikey)'ya gidin
2. Google hesabınızla giriş yapın
3. "Create API Key" butonuna tıklayın
4. Anahtarı kopyalayın
5. `.env.local` dosyasına ekleyin

#### 7. API anahtarı çalışmıyor, ne yapmalıyım?

**Kontrol Listesi:**
- [ ] `.env.local` dosyası doğru konumda mı? (proje kök dizini)
- [ ] Dosya adı doğru mu? (`.env.local`, `.env` değil)
- [ ] Anahtar formatı doğru mu? `GEMINI_API_KEY=AIza...`
- [ ] Uygulama yeniden başlatıldı mı? (`npm run dev` komutunu yeniden çalıştırın)
- [ ] API anahtarı aktif mi? (AI Studio'dan kontrol edin)

#### 8. Hangi port'ta çalışır?

Varsayılan olarak `http://localhost:5173` adresinde çalışır. Farklı bir port kullanmak için:

```bash
npm run dev -- --port 3000
```

---

### Kullanım

#### 9. İlk mesajı gönderdim ama yanıt gelmiyor?

**Olası sebepler:**
1. **API anahtarı eksik**: `.env.local` dosyasını kontrol edin
2. **İnternet bağlantısı**: Çevrimiçi olduğunuzdan emin olun
3. **API kotası doldu**: Google AI Studio'dan kullanımı kontrol edin
4. **Tarayıcı console hataları**: F12 ile console'u açın ve hataları kontrol edin

#### 10. JSON görselleştirmesi neden boş?

Eğer sağ panelde JSON yapıları görünmüyorsa:
1. Bir mesaj gönderdiğinizden emin olun
2. Sayfayı yenileyin (Ctrl+R veya Cmd+R)
3. Tarayıcı console'unda hata olup olmadığını kontrol edin
4. Farklı bir tarayıcı deneyin (Chrome, Firefox önerilir)

#### 11. Mesajları nasıl silebilirim?

Şu anda sohbet geçmişini silme özelliği yoktur. Sayfayı yenilediğinizde tüm geçmiş temizlenir. Gelecek versiyonlarda "Geçmişi Temizle" özelliği eklenebilir.

#### 12. Hangi dillerde soru sorabilirim?

Gemini AI, Türkçe dahil 100+ dili destekler. Herhangi bir dilde soru sorabilirsiniz ve aynı dilde yanıt alırsınız.

---

### Teknik Sorular

#### 13. Hangi teknolojiler kullanılıyor?

- **Frontend**: React 19.2, TypeScript 5.8
- **Build Tool**: Vite 6.2
- **AI Model**: Google Gemini 3.0 Pro
- **Styling**: Tailwind CSS (inline)
- **Icons**: Lucide React

Detaylar için [ARCHITECTURE.md](ARCHITECTURE.md) dosyasına bakın.

#### 14. Backend var mı?

Hayır. Json-Naked tamamen client-side (tarayıcı tabanlı) bir uygulamadır. Doğrudan tarayıcınızdan Gemini API'sine istek gönderir. Bu yaklaşım:
- ✅ Daha hızlı yanıt süresi
- ✅ Sunucu maliyeti yok
- ✅ Kolay deployment
- ⚠️ API anahtarı client'ta (güvenli değil production için)

#### 15. Production'a nasıl deploy edilir?

**Vercel için:**
```bash
npm run build
vercel --prod
```

**Netlify için:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Environment Variables:**
Production ortamında API anahtarını environment variable olarak ayarlayın. `.env.local` dosyasını commit etmeyin!

#### 16. Mobil cihazlarda çalışır mı?

Evet! Uygulama responsive tasarıma sahiptir. Mobil cihazlarda:
- Sol panel (sohbet) üstte
- Sağ panel (görselleştirme) altta
- Dikey scroll ile kullanılabilir

Ancak en iyi deneyim için tablet veya masaüstü önerilir.

#### 17. Offline çalışır mı?

Hayır. Uygulama Gemini API'sine internet bağlantısı gerektirir. Offline kullanım için:
- Mock API yanıtları eklenebilir
- Service Worker ile caching yapılabilir
- Bu özellik şu anda mevcut değil

---

### Katkıda Bulunma

#### 18. Nasıl katkıda bulunabilirim?

[CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyin. Kısa özet:
1. Fork yapın
2. Feature branch oluşturun
3. Değişikliklerinizi yapın
4. Test edin
5. Pull Request açın

#### 19. Hangi katkılar kabul edilir?

**Kabul edilen:**
- ✅ Hata düzeltmeleri
- ✅ Yeni özellikler (önceden tartışılmış)
- ✅ Dokümantasyon iyileştirmeleri
- ✅ UI/UX iyileştirmeleri
- ✅ Performans optimizasyonları

**Kabul edilmeyen:**
- ❌ Büyük refactoring'ler (önce issue açın)
- ❌ Breaking changes (major version değişikliği gerektirir)
- ❌ Bağımlılık eklemeleri (gerekçelendirilmemişse)

#### 20. Issue açmadan PR gönderebilir miyim?

Küçük değişiklikler (typo düzeltmeleri, dokümantasyon güncellemeleri) için evet. Ancak yeni özellikler için önce bir issue açıp tartışmanız önerilir.

---

### Sorun Giderme

#### 21. "Module not found" hatası alıyorum

```bash
# Node modules'ı temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
```

#### 22. "Port already in use" hatası

```bash
# Farklı port kullan
npm run dev -- --port 3001

# veya çalışan process'i bul ve durdur
lsof -ti:5173 | xargs kill -9
```

#### 23. TypeScript hataları alıyorum

```bash
# TypeScript'i güncelle
npm install typescript@latest --save-dev

# Type definitions'ı güncelle
npm install @types/node@latest --save-dev
```

#### 24. Build başarısız oluyor

**Kontrol edin:**
1. Node.js versiyonu (v18 veya üzeri olmalı)
2. npm versiyonu (`npm --version`)
3. Disk alanı (build için ~100MB gerekli)
4. Syntax hataları (`npm run build 2>&1 | grep error`)

#### 25. API rate limit hatası

```
Error: Rate limit exceeded
```

**Çözüm:**
- Birkaç dakika bekleyin
- Google AI Studio'dan kotanızı kontrol edin
- Ücretsiz kotayı aştıysanız, billing aktifleştirin veya yarın tekrar deneyin

---

### Özellik İstekleri

#### 26. Karanlık/aydınlık tema toggle eklenecek mi?

Bu özellik yol haritasında var. Şu anda sadece karanlık tema destekleniyor.

#### 27. Sohbet geçmişi kaydetme özelliği olacak mı?

Evet, gelecek versiyonlarda:
- LocalStorage'a kaydetme
- JSON export
- Markdown export
özellikleri eklenebilir.

#### 28. Başka AI modelleri eklenecek mi?

Potansiyel olarak evet. Aşağıdaki modeller değerlendirilebilir:
- OpenAI GPT-4
- Anthropic Claude
- Cohere
- Local LLMs (Ollama)

#### 29. Streaming yanıt desteği gelecek mi?

Evet, bu özellik de yol haritasında. Streaming ile:
- Daha hızlı ilk token
- Gerçek zamanlı yanıt
- Daha iyi UX

#### 30. Mobil uygulama olacak mı?

Şu anda planlanmıyor. Ancak web uygulaması responsive olduğu için mobil tarayıcılarda da kullanılabilir. React Native ile mobil uygulama community contribution olarak kabul edilebilir.

---

## 🇬🇧 English

### General Questions

#### 1. What is Json-Naked?

Json-Naked (Gemini Algorithm Explorer) is an educational web application that visualizes how AI APIs work. It shows step-by-step how natural language transforms into JSON, how it's processed by AI, and how it's converted back to natural language.

#### 2. Who is this for?

- 👨‍💻 **Developers**: Learning API integration
- 🎓 **Students**: Understanding AI systems
- 👨‍🏫 **Educators**: Using APIs as teaching materials
- 🤔 **Enthusiasts**: Seeing behind the scenes of AI

[Rest of English FAQ follows similar structure...]

---

<div align="center">
  <p>❓ Sorunuz yanıtlanmadı mı? / Question not answered?</p>
  <p><a href="https://github.com/ksbicorp/Json-Naked/issues/new">Yeni Issue Aç / Open New Issue</a></p>
</div>
