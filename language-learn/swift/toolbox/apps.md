# Uygulamalar ve araçlar

**Toplu kurulum yok.** Her araç ihtiyaç duyulduğu modülde, o modülün drill'iyle birlikte kurulur ve öğrenilir.

Durum: ✅ zaten var · 📦 o modülde kurulacak · 💡 isteğe bağlı

## Xcode ile gelenler (ek kurulum yok)

| Araç | Ne işe yarar | Ne zaman |
|---|---|---|
| ✅ Simulator | iPhone/iPad simülatörü | 00 |
| ✅ Instruments | Performans, bellek, enerji analizi | 01-10 (Leaks), 12 |
| ✅ Accessibility Inspector | VoiceOver etiketleri ve kontrast denetimi | 10 |
| ✅ Icon Composer | Katmanlı uygulama ikonu tasarımı | Capstone'lar |
| ✅ Create ML | Kodsuz makine öğrenmesi modeli eğitimi | Kapsam dışı (merak edersen) |
| ✅ `swift format` | Kod formatlayıcı (Swift 6 toolchain'i ile gelir) | 00-06 |

## Modül modül kurulum takvimi

| Modül | Araç | Ne işe yarar | Nasıl |
|---|---|---|---|
| 00-06 | 📦 SwiftLint | Stil ve hata kuralları | SPM build tool plugin olarak paketin içine eklenir (Homebrew gerekmez) |
| 03 | ✅ [SF Symbols](https://developer.apple.com/sf-symbols/) | Apple'ın ikon kütüphanesi; isim, varyant ve sürüm uyumluluğu | Zaten yüklü |
| 03 | 💡 [InjectionIII](https://github.com/johnno1962/InjectionIII) | Çalışan uygulamada hot reload (Flutter'daki gibi) | GitHub release veya App Store |
| 03 | 💡 [RocketSim](https://www.rocketsim.app) | Simülatöre ekran kaydı, grid, network izleme gibi ekler (ücretli özellikleri var) | Mac App Store |
| 04 | 📦 [Proxyman](https://proxyman.com) | Uygulamanın ağ trafiğini görme, isteği değiştirme | Web sitesinden (ücretsiz sürüm yeterli) |
| 11 | 📦 SwiftGen, Sourcery, Periphery | Kod üretimi ve kullanılmayan kod tespiti | Homebrew veya SPM plugin |
| 11 | 📦 Firebase CLI | Firebase projesi yönetimi | Homebrew / npm |
| 12 | 📦 [xcodes](https://github.com/XcodesOrg/xcodes) | Birden fazla Xcode sürümünü kurma ve geçiş | Homebrew |
| 12 | 📦 xcbeautify | Okunur `xcodebuild` çıktısı (CI) | Homebrew |
| 12 | 📦 fastlane | Build/TestFlight otomasyonu | Homebrew veya Bundler |

## Bilgisayarında zaten olanlar
- ✅ `gh` (GitHub CLI): giriş yapılmış durumda
- ✅ Shottr: ekran görüntüsü. PR'lara ve README'lere görsel eklerken işe yarar
- ✅ Visual Studio Code / Cursor: Markdown dokümanları için. Swift kodu için Xcode kullan

## Git arayüzü (isteğe bağlı)
Komut satırını öğrenmek önce gelir (00-05). Sonrasında görsel bir arayüz istersen: Xcode'un kendi Source Control navigator'ı (⌘2), [Fork](https://git-fork.com) veya GitHub Desktop.
