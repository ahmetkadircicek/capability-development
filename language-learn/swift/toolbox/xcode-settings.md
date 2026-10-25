# Xcode ayarları

Önerilen ayarlar ve nedenleri. Kurulumu [00-02](../00-setup/drills/02-xcode-settings-and-signing/) drill'inde yapacaksın. Ayarları değiştirdikten sonra mentor `defaults read com.apple.dt.Xcode` ile kontrol eder.

Ayarları açmak için: **Xcode › Settings…** (⌘,)

> Xcode her yıl menülerde küçük değişiklikler yapıyor. Bir ayarı burada yazdığı yerde bulamazsan Settings penceresinin sağ üstündeki arama kutusunu kullan ve bu sayfayı güncelle.

## Text Editing › Display
| Ayar | Değer | Neden |
|---|---|---|
| Line numbers | ✅ | Hata mesajları ve review yorumları satır numarası verir |
| Code folding ribbon | ✅ | Uzun dosyalarda blokları katlamak için |
| Page guide at column | ✅ **120** | SwiftLint'in satır uzunluğu sınırıyla aynı |
| Minimap | Tercihe bağlı | Büyük ekranda faydalı, küçük ekranda yer kaplar |

## Text Editing › Editing
| Ayar | Değer | Neden |
|---|---|---|
| Automatically trim trailing whitespace | ✅ | Diff'lerde gereksiz satır değişikliği olmaz |
| Including whitespace-only lines | ✅ | Aynı sebep |
| Predictive code completion (AI) | ❌ (drill'lerde) | Aşağıdaki "AI asistanları" bölümüne bak |

## Text Editing › Indentation
| Ayar | Değer |
|---|---|
| Prefer indent using | Spaces |
| Tab width / Indent width | 4 / 4 |
| Re-indent on paste | ✅ |

## Navigation
| Ayar | Değer | Neden |
|---|---|---|
| Navigation style | Open in Tabs | Dosyalar sekme olarak açılır, kaybolmaz |

## Behaviors
Bir olay olduğunda Xcode'un ne yapacağını belirler.

| Olay | Davranış |
|---|---|
| Build › Fails | Show navigator: **Issue Navigator** |
| Running › Starts | Show debugger: **Variables & Console View** |
| Testing › Fails | Show navigator: **Test Navigator**, ses çal |

## Accounts
- Kişisel Apple ID'n ekli olmalı (00-02 drill'inde ekleniyor). Ayrıntılar: [signing.md](signing.md)

## Components
- iOS 27 Simulator runtime'ı yüklü olmalı.
- Kullanmadığın eski runtime'lar disk alanı yer. Silmek istersen buradan kaldırabilirsin (karar senin).

## Locations
- **Command Line Tools:** `Xcode 27.0` seçili olmalı. Terminaldeki `swift` ve `xcodebuild` bu Xcode'u kullanır. Kontrol: `xcode-select -p`

## Intelligence (AI asistanları)
Xcode'da yerleşik bir coding assistant (ChatGPT, Claude gibi modellerle) ve predictive code completion var. Şu an senin Xcode'unda ChatGPT entegrasyonu açık.

**Mentor önerisi:**
- **Drill'lerde kapalı tut.** Drill'lerin amacı kası çalıştırmak; AI satırı tamamlarsa öğrenme kaybolur. Mülakatta canlı kodlamada AI olmayacak.
- **Build ve capstone'larda açabilirsin**, ama yazdığı her satırı açıklayabilmelisin. PR review'da "bunu neden böyle yaptın?" sorusu gelecek.

## Gizli ayarlar (Terminal)
Arayüzde olmayan ama işe yarayan ayarlar. Xcode kapalıyken çalıştır:

```bash
# Build süresini activity bar'da göster ("Build Succeeded | 12.3s")
defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES
```

## Simulator
| Ayar | Nerede | Neden |
|---|---|---|
| Koyu mod | ⌘⇧A veya Features › Toggle Appearance | Her ekranı iki modda test et |
| Dynamic Type | Simülatörde Settings › Accessibility › Display & Text Size › Larger Text | Büyük yazı tipiyle layout bozuluyor mu? |
| Yavaş animasyon | Debug › Slow Animations | Animasyon ve geçişleri incelemek için |
| Konum | Features › Location | MapKit ve CoreLocation testleri (10. modül) |

## Proje düzeyindeki ayarlar (ileride)
Bunlar global değil, her projenin **Build Settings**'inde yapılır. İlgili modülde anlatılacak:
- Swift Language Version: **6** (02)
- Default Actor Isolation ve strict concurrency (02, 03)
- Treat Warnings as Errors: CI'da açık (12)
