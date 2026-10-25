# 00-02 · Xcode ayarları, Apple ID ve imza

> ⏱ ~1 saat · 🎚️ kolay · ⬅️ [00-01](../01-xcode-tour/) · ➡️ [00-03](../03-shortcuts-and-snippets/)
> Branch: yok (bu drill'de repoya giren dosya yok)

## Neden önemli?
iOS'ta Apple'ın onaylamadığı kod cihazda çalışmaz. İmzalamayı anlamayan bir geliştirici, ilk "No signing certificate" hatasında saatlerini kaybeder. Mülakatlarda da "provisioning profile nedir?" sorusu sık gelir. Ayrıca doğru Xcode ayarları her gün zaman kazandırır ve diff'leri temiz tutar.

## Kavram
İmzalamanın tüm parçaları ve aralarındaki ilişki: [toolbox/signing.md](../../../toolbox/signing.md). Önce o sayfadaki diyagramı oku, sonra adımlara geç.

Kısa özet:
- **Sertifika** = "sen kimsin". Gizli yarısı olan **private key** Keychain'de durur ve asıl değerli olan odur.
- **Provisioning profile** = sertifika + uygulama kimliği (bundle ID) + cihazlar + izinler. Süresi olan bir izin belgesi.
- **Team** = imzanın sahibi: kişisel (ücretsiz "Personal Team") ya da kurum.

## Adım adım

### A · Eski kurum sertifikalarını temizle
Bilgisayarında İstanbul Büyükşehir Belediyesi takımına ait **hâlâ geçerli** (2027'ye kadar) dağıtım sertifikaları ve süresi dolmuş iki provisioning profile var. Bir kurumun geçerli imza anahtarlarının kişisel bir makinede durması güvenlik riski.

1. **Keychain Access** uygulamasını aç (⌘Space › "Keychain Access").
2. Sol tarafta **login**, üstte **My Certificates** sekmesini seç.
3. Arama kutusuna `Istanbul` yaz. 5 kayıt göreceksin (2 farklı sertifika ve kopyaları).
4. Kaydı açınca altında bir 🔑 private key olduğunu gör. Sertifika ile anahtar birlikte durur.
5. Hepsini seç › sağ tık › **Delete**. Bu işlem geri alınamaz.
6. Finder'da ⌘⇧G'ye bas, `~/Library/MobileDevice/Provisioning Profiles` yolunu yapıştır ve içindeki 2 dosyayı çöpe at.

> İstersen İBB'deki ekibe de haber ver; sertifikaları Apple tarafında iptal etsinler.

### B · Kişisel hesabını ekle
1. Xcode › Settings (⌘,) › **Accounts** › sol alttaki **+** › **Apple ID**. Kişisel hesabınla giriş yap (şifre ve 2FA'yı sen girersin).
2. Hesabın altında takımını gör: ücretli üyeliğin yoksa **"Ahmet … (Personal Team)"**.
3. Takımı seç › **Manage Certificates…** › **+** › **Apple Development**. Xcode senin için bir private key ve sertifika üretti; ikisi de Keychain'e kaydedildi.
4. [developer.apple.com/account](https://developer.apple.com/account) adresine aynı hesapla gir › **Membership** bölümüne bak. Ücretli üyelik var mı, varsa bitiş tarihi ne?

### C · Xcode ayarları
[toolbox/xcode-settings.md](../../../toolbox/xcode-settings.md) dosyasındaki tabloları sırayla uygula:
1. Text Editing › Display, Editing ve Indentation
2. Navigation
3. Behaviors (build fail → Issue Navigator, run → debug area, test fail → Test Navigator)
4. Locations › Command Line Tools = Xcode 27.0
5. Components › iOS 27 Simulator yüklü mü?

### D · AI asistanları
Xcode'unda ChatGPT entegrasyonu açık. Settings › **Intelligence** bölümüne ve Text Editing › Editing'deki **predictive code completion** ayarına bak.
**Mentor önerisi:** Drill'lerde ikisini de kapalı tut. Build ve capstone'larda istersen açarsın, ama yazdığı her satırı açıklayabilmen gerekir.

### E · Gizli ayar
Xcode'u kapat ve Terminal'de çalıştır:
```bash
defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES
```
Xcode'u açıp ⌘B'ye bas. Activity bar'da build süresini görmelisin.

## Alıştırma
**Görev:** Kurulumu tamamla ve kontrol için mentora "00-02 kontrol et" de. Mentor şu komutlarla doğrulayacak:

| Kontrol | Komut | Beklenen |
|---|---|---|
| İmza kimlikleri | `security find-identity -v -p codesigning` | Sadece `Apple Development: …` var, `Istanbul…` yok |
| Eski profile'lar | `ls ~/Library/MobileDevice/Provisioning\ Profiles` | Boş (ya da sadece yeni oluşanlar) |
| Command Line Tools | `xcode-select -p` | `/Applications/Xcode.app/Contents/Developer` |
| Xcode ayarları | `defaults read com.apple.dt.Xcode` | Page guide 120, trim whitespace açık, build süresi açık |

**Kendi iPhone'unda çalıştırma (iPhone'un varsa):**
1. `HelloXcode` › Target › **Signing & Capabilities** › "Automatically manage signing" açık, Team: Personal Team.
2. iPhone'u kabloyla bağla. iPhone'da **Ayarlar › Gizlilik ve Güvenlik › Geliştirici Modu**'nu aç (telefon yeniden başlar).
3. Xcode'da çalıştırma hedefi olarak iPhone'unu seç, ⌘R.
4. "Untrusted Developer" uyarısı gelirse: iPhone › Ayarlar › Genel › VPN ve Aygıt Yönetimi › kendi Apple ID'n › Güven.

| Durum | Beklenen |
|---|---|
| iPhone'da ⌘R | Profil kartın telefonda açılıyor |
| 7 gün sonra | Uygulama açılmıyor (ücretsiz profile süresi doldu), tekrar ⌘R ile düzeliyor |

## Bonus
- Keychain Access'te yeni Apple Development sertifikana çift tıkla: geçerlilik süresi ne kadar? Team ID'n ne?
- `~/Library/Developer/Xcode/UserData/Provisioning Profiles` klasörüne bak. iPhone'da çalıştırdıktan sonra burada ne oluştu?

## Mülakat köşesi
<details>
<summary>Provisioning profile nedir, içinde neler vardır?</summary>

Bir uygulamanın hangi cihazlarda, hangi sertifikayla ve hangi izinlerle (entitlement) çalışabileceğini tanımlayan, Apple tarafından imzalanmış ve süresi olan bir belgedir. İçinde: App ID (bundle ID), bir veya daha fazla sertifika, development profile'larında cihaz UDID listesi, entitlement'lar ve bitiş tarihi bulunur.
</details>

<details>
<summary>Development ve distribution sertifikası farkı nedir?</summary>

Development sertifikası, uygulamayı kayıtlı test cihazlarında debug etmek içindir. Distribution sertifikası TestFlight, App Store, Ad Hoc ve Enterprise dağıtımı için kullanılır. Distribution sertifikasının private key'i, takım adına yayın yapabilmek anlamına geldiği için çok daha hassastır.
</details>

<details>
<summary>Sertifikanın private key'i kaybolursa ne olur?</summary>

Sertifika tek başına imza atamaz; o sertifikayla bir daha imzalama yapılamaz. Yeni bir sertifika (ve yeni bir private key) oluşturulur, profile'lar yeniden üretilir. Yayındaki uygulamalar etkilenmez. Ekiplerde bu yüzden private key'ler güvenli bir yerde paylaşılır (ör. fastlane `match`).
</details>

## Kaynaklar
- [toolbox/signing.md](../../../toolbox/signing.md), [toolbox/xcode-settings.md](../../../toolbox/xcode-settings.md)
- [Enabling Developer Mode on a device](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device) (Apple)

## ✅ Bitirme listesi
- [ ] İBB sertifikaları ve eski profile'lar silindi
- [ ] Kişisel Apple ID eklendi, Apple Development sertifikası oluştu
- [ ] Üyelik durumu kontrol edildi
- [ ] Xcode ayarları uygulandı, mentor kontrolü yeşil
- [ ] Sertifika, private key ve provisioning profile ilişkisini sesli anlatabiliyorum
