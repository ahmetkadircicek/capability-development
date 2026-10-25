# 00-01 · Xcode turu ve ilk proje

> ⏱ ~1.5 saat · 🎚️ kolay · ➡️ [Sonraki: 00-02](../02-xcode-settings-and-signing/)
> Branch: yok (değişiklikler 00-05'teki ilk PR'a girer)

## Neden önemli?
Xcode senin atölyen. Android Studio veya VS Code'dan farklı olarak proje dosyası, imzalama, simülatör, profil araçları ve UI önizlemesi tek bir uygulamada. Hangi panelin ne işe yaradığını ve **project / target / scheme** ayrımını bilmezsen ilk build hatasında kaybolursun. Bu drill'in sonunda Xcode'da "nerede neydi?" diye aramayacaksın.

## Kavram

### Pencere anatomisi
```
┌──────────────────────────────────────────────────────────────────────┐
│ Toolbar:  ▶ Run  ■ Stop   [Scheme ▾] › [iPhone 16 ▾]   Activity bar  │
├────────────┬────────────────────────────────┬────────────────────────┤
│ Navigator  │ Editor                         │ Inspector              │
│ (⌘0)       │ (kod)          │ Canvas         │ (⌥⌘0)                  │
│ dosyalar,  │                │ (⌥⌘↩)          │ seçili öğenin          │
│ arama,     │                │ SwiftUI        │ özellikleri            │
│ hatalar…   │                │ preview        │                        │
│            ├────────────────────────────────┤                        │
│            │ Debug area (⌘⇧Y): değişkenler | konsol                  │
└────────────┴────────────────────────────────┴────────────────────────┘
```

### Project, target, scheme, configuration
| Kavram | Ne? | Flutter karşılığı |
|---|---|---|
| **Project** (`.xcodeproj`) | Dosyaların, ayarların ve target'ların kabı | `pubspec.yaml` + proje klasörü |
| **Target** | Üretilen tek bir ürün: uygulama, widget, test paketi, framework | `android/` ve `ios/` alt projeleri gibi ayrı çıktılar |
| **Scheme** | "Hangi target'ı, hangi ayarla build et, çalıştır, test et" tarifi | `flutter run --flavor dev` komutu |
| **Configuration** | Debug ve Release ayar setleri | `--debug` / `--release` |

### Yeni bir SwiftUI projesinin içi
```swift
// HelloXcodeApp.swift: uygulamanın giriş noktası
@main
struct HelloXcodeApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```
`@main`, Dart'taki `main()` fonksiyonunun karşılığı. `WindowGroup` uygulamanın penceresi, `ContentView` ilk ekranı.

## Adım adım

1. **Projeyi oluştur.** File › New › Project… › iOS › **App**:
   | Alan | Değer |
   |---|---|
   | Product Name | `HelloXcode` |
   | Team | None (00-02'de ekleyeceğiz) |
   | Organization Identifier | `com.ahmetkadircicek` |
   | Interface / Language | SwiftUI / Swift |
   | Testing System | None |
   | Storage | None |

   Kaydederken konum: `~/Projects/iOS/swift-learn/00-setup/drills/01-xcode-tour/`
   ⚠️ **"Create Git repository on my Mac" kutusunu kaldır.** Zaten `swift-learn` reposunun içindeyiz; iç içe repo sorun çıkarır.

2. **Bundle identifier'a bak.** Sol üstte projeye (mavi ikon) tıkla › Targets › HelloXcode › General. `com.ahmetkadircicek.HelloXcode` uygulamanın evrensel kimliği; App Store'da benzersiz olmak zorunda.

3. **Panelleri aç/kapa:** ⌘0 (navigator), ⌥⌘0 (inspector), ⌘⇧Y (debug area). Navigator'ın üstündeki sekmelerde gez: Project (⌘1), Find (⌘4), Issue (⌘5).

4. **Çalıştır.** Toolbar'da bir simülatör seç (ör. iPhone 16) ve ⌘R'ye bas. İlk açılış uzun sürebilir.

5. **Preview'ı kullan.** `ContentView.swift`'i aç, ⌥⌘↩ ile canvas'ı aç. `Text("Hello, world!")` metnini değiştir; preview anında güncellenir. Bu, Flutter'daki hot reload'un SwiftUI'daki en yakın karşılığı.

6. **Build Settings'e göz at.** Target › Build Settings › arama kutusuna `Swift Language Version` yaz. Hangi değer seçili? (Not al, 02. modülde konuşacağız.)

7. **Scheme'e bak.** ⌘< (Edit Scheme) › Run › Arguments ve Diagnostics sekmelerini gez. Şimdilik bir şey değiştirme.

8. **Simulator'ı tanı.** Simulator öndeyken: ⌘⇧H (ana ekran), ⌘← (döndür), ⌘⇧A (koyu mod), ⌘S (ekran görüntüsü). Simülatördeki Settings uygulamasından Accessibility › Display & Text Size › Larger Text ile yazı boyutunu büyüt ve uygulamana dön.

## Alıştırma
**Görev:** `ContentView`'ı kendini tanıtan küçük bir **profil kartına** dönüştür. Kartta bir SF Symbol, adın, "iOS Developer in progress" yazısı ve GitHub profiline giden bir link olsun. Ayrıca açık ve koyu mod için **iki ayrı preview** ekle.

İpuçları (kodu sen yaz):
- `VStack`, `Image(systemName:)`, `Text`, `.font(...)`, `.foregroundStyle(...)`, `Link(_:destination:)`
- Uygun bir ikon bulmak için ⌘⇧L (Library) › SF Symbols sekmesi
- Birden fazla preview: `#Preview("Açık") { ... }` ve `#Preview("Koyu") { ... .preferredColorScheme(.dark) }`

**Beklenen davranış:**
| Durum | Beklenen |
|---|---|
| Canvas | İki preview yan yana: "Açık" ve "Koyu" |
| Simülatörde ⌘⇧A | Kart koyu modda da okunur (sabit `.black` renk kullanma) |
| Larger Text en büyük | Metinler kesilmiyor, taşmıyor |
| Linke dokunma | Safari'de GitHub profilin açılıyor |

## Bonus
- Uygulamanın ana ekranda görünen adını "Merhaba" yap (Target › General › Display Name).
- `Assets.xcassets` içindeki `AccentColor`'ı değiştir; linkin rengi değişti mi?

## Mülakat köşesi
<details>
<summary>Project, target ve scheme arasındaki fark nedir?</summary>

Project, dosya ve ayarların kabıdır. Target, üretilen tek bir üründür (uygulama, test paketi, widget extension). Bir projede birden fazla target olabilir. Scheme ise hangi target'ın hangi configuration ile build edileceğini, çalıştırılacağını ve test edileceğini tarif eder.
</details>

<details>
<summary>Bundle identifier nedir, neden önemlidir?</summary>

Uygulamanın ters domain formatındaki evrensel kimliğidir (`com.sirket.uygulama`). App Store'da benzersiz olmalıdır. İmzalama, push bildirimleri, keychain erişimi ve App Group gibi birçok sistem özelliği bu kimliğe bağlıdır. Yayınlandıktan sonra değiştirilemez; değişirse yeni bir uygulama sayılır.
</details>

<details>
<summary>Debug ve Release configuration farkı nedir?</summary>

Debug hızlı derlenir, optimizasyon kapalıdır, debug sembolleri ve `DEBUG` derleme bayrağı açıktır. Release optimize edilir (`-O`); App Store ve TestFlight build'leri Release ile yapılır. Bazı hatalar sadece Release'te görünür, o yüzden yayından önce Release build test edilmelidir.
</details>

## Kaynaklar
- [Creating an Xcode project for an app](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app) (Apple)
- [Running your app in Simulator or on a device](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device) (Apple)
- [toolbox/xcode-shortcuts.md](../../../toolbox/xcode-shortcuts.md)

## ✅ Bitirme listesi
- [ ] `HelloXcode` projesi `00-setup/drills/01-xcode-tour/` altında, içinde ayrı bir `.git` yok
- [ ] Profil kartı simülatörde ve iki preview'da doğru görünüyor
- [ ] Panelleri kısayollarla açıp kapatabiliyorum
- [ ] Project / target / scheme farkını sesli anlatabiliyorum
