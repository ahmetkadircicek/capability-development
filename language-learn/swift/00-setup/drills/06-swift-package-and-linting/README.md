# 00-06 · Swift paketi, SwiftLint ve swift format

> ⏱ ~1 saat · 🎚️ kolay · ⬅️ [00-05](../05-git-and-github-flow/) · ➡️ [01-01](../../../01-swift-fundamentals/drills/01-values-and-types/)
> Branch: `drill/00-06-swift-package`

## Neden önemli?
01 modülündeki tüm drill'ler tek bir Swift paketinde çalışacak; bu drill'de o paketi sen kuruyorsun. Swift Package Manager (SPM) Flutter'daki `pubspec.yaml` + `pub`'ın karşılığı ve artık iOS'ta standart bağımlılık yöneticisi. Linter ve formatter ise ekiplerde "stil tartışmalarını" bitiren araçlar: kodu insanlar değil, araçlar düzenler.

## Kavram

### Package.swift
```swift
// swift-tools-version: 6.0          ← manifest'i okuyacak minimum SPM sürümü
import PackageDescription

let package = Package(
    name: "Weather",                  // paketin adı
    platforms: [.iOS(.v17)],          // minimum platformlar
    products: [                       // dışarıya sunulanlar (başka paketler kullanacaksa)
        .library(name: "Weather", targets: ["Weather"])
    ],
    dependencies: [                   // dış paketler (pubspec'teki dependencies)
        .package(url: "https://github.com/Alamofire/Alamofire", from: "5.10.0")
    ],
    targets: [                        // derlenen birimler
        .target(name: "Weather", dependencies: ["Alamofire"]),
        .testTarget(name: "WeatherTests", dependencies: ["Weather"])
    ]
)
```
| Target türü | Ne üretir |
|---|---|
| `.executableTarget` | Çalıştırılabilir program (`swift run`) |
| `.target` | Kütüphane modülü |
| `.testTarget` | Test paketi |
| `.plugin` | Build/command plugin'i |

### Linter ve formatter farkı
| | SwiftLint (linter) | swift format (formatter) |
|---|---|---|
| Ne yapar | Hata riski ve stil kurallarını **denetler**, uyarı verir | Kodun **görünümünü** otomatik düzeltir |
| Örnek | Force unwrap, çok uzun fonksiyon, kısa değişken adı | Girinti, boşluklar, satır kırılımı |
| Nasıl çalışır | Build sırasında (build tool plugin) veya elle | Elle veya editör kaydederken |

**Kural:** Görünüm işini formatter'a, kalite işini linter'a bırak. İkisi aynı konuda (ör. sondaki virgül) çakışırsa linter'daki kuralı kapat.

### Plugin türleri
- **Build tool plugin:** Her build'de otomatik çalışır. SwiftLint'i böyle ekleyeceğiz; uyarılar Xcode'da satırın yanında görünür.
- **Command plugin:** Elle çalıştırılır: `swift package <komut>`.

## Adım adım

1. **Branch aç.**
   ```bash
   cd ~/Projects/iOS/swift-learn
   git switch main && git pull
   git switch -c drill/00-06-swift-package
   ```

2. **SPM'i tanı (repo dışında).** Geçici bir klasörde hazır şablonu incele, sonra sil:
   ```bash
   cd "$(mktemp -d)"
   swift package init --type executable --name Playground
   ls -R
   swift run
   ```
   `Package.swift` ve `Sources/` yapısına bak.

3. **01 modülünün paketini oluştur.** `01-swift-fundamentals/Package.swift` dosyasını **elle** yaz. İçinde şunlar olsun:
   - `swift-tools-version: 6.0`, paket adı `SwiftFundamentals`, platform `.macOS(.v15)`
   - Bağımlılık: `https://github.com/SimplyDanny/SwiftLintPlugins`, `from: "0.65.1"` (SwiftLint'in önerdiği, önceden derlenmiş binary kullanan plugin paketi)
   - Tek target: `ValuesAndTypesDrill` adında bir `.executableTarget`, `path: "drills/01-values-and-types/Sources"`
   - Target'a plugin: `plugins: [.plugin(name: "SwiftLintBuildToolPlugin", package: "SwiftLintPlugins")]`

   İpucu: Her yeni drill'de bir target ekleyeceğin için plugin tanımını bir sabite almak işini kolaylaştırır (`let swiftLint: Target.PluginUsage = ...`).

4. **İlk kaynak dosyası.** `01-swift-fundamentals/drills/01-values-and-types/Sources/main.swift` dosyasını oluştur ve içine `print("Hello, Swift!")` yaz.
   ```bash
   cd 01-swift-fundamentals
   swift run ValuesAndTypesDrill
   ```
   İlk build SwiftLint binary'sini indirir (~75 MB), biraz sürer.

5. **SwiftLint yapılandırması.** `01-swift-fundamentals/.swiftlint.yml` oluştur:
   ```yaml
   excluded:
     - .build
   disabled_rules:
     - trailing_comma        # formatter ekliyor, linter'la çakışmasın
   opt_in_rules:
     - force_unwrapping
     - empty_count
     - closure_spacing
   line_length:
     warning: 120
   ```
   `excluded: .build` önemli: yoksa SwiftLint indirilen paketlerin kodunu da denetler.

6. **swift format yapılandırması.** `01-swift-fundamentals/.swift-format` oluştur:
   ```json
   {
     "version": 1,
     "lineLength": 120,
     "indentation": { "spaces": 4 }
   }
   ```
   Apple'ın formatter'ı varsayılan olarak **2 boşluk** kullanır; bu dosya olmadan Xcode'un 4 boşluğuyla kavga eder.

7. **Xcode'da aç.**
   ```bash
   xed .
   ```
   Xcode paketi açınca SwiftLint plugin'ine güvenmeni isteyecek: **Trust & Enable**. Scheme olarak `ValuesAndTypesDrill`, hedef olarak **My Mac** seç, ⌘R.

## Alıştırma
**Görev:** `main.swift`'in içeriğini aşağıdaki **bilerek dağınık ve kurallara aykırı** kodla değiştir, araçların neyi yakaladığını gör, sonra kodu temizle.
```swift
struct Course { let title:String
  let hours :Int }
let course = Course(title:"Swift Fundamentals",hours:20)
let parsedHours = Int("20")!
let thisIsAVeryLongDescriptionLineThatKeepsGoing = "Bu satır bilerek 120 karakterden uzun tutuldu, böylece line_length kuralını görebileceksin."
print("\(course.title) \(parsedHours) \(thisIsAVeryLongDescriptionLineThatKeepsGoing)")
```

**Adımlar ve beklenen davranış:**
| Adım | Komut / eylem | Beklenen |
|---|---|---|
| 1 | Xcode'da ⌘B | Satırların yanında SwiftLint uyarıları: `force_unwrapping`, `line_length`, `identifier_name` |
| 2 | `swift package --allow-writing-to-package-directory swiftlint` | Aynı uyarılar terminalde |
| 3 | `swift format lint --recursive drills` | Girinti ve boşluk uyarıları |
| 4 | `swift format --in-place --recursive drills` | Girinti ve boşluklar düzeldi |
| 5 | Kalan SwiftLint uyarılarını **elle** düzelt (`!` yerine güvenli açma, isimler, satır uzunluğu) | Xcode'da 0 uyarı, program çalışıyor |

> Not: Terminaldeki `swift build` komutu build tool plugin uyarılarını göstermeyebilir. Terminalde denetim için 2. adımdaki command plugin'i kullan; Xcode'da uyarılar otomatik görünür.

Son olarak `main.swift`'i tekrar `print("Hello, Swift!")` haline getir; 01-01'de bu dosyayı dolduracaksın.

**Commit'lenecekler:** `Package.swift`, `Package.resolved`, `.swiftlint.yml`, `.swift-format`, `main.swift`. `.build/` ve `.swiftpm/` `.gitignore` sayesinde girmez (`git status` ile kontrol et).

## Bonus
- `swift package plugin --list` çıktısını oku. Hangi command plugin'ler var?
- Xcode › Settings › Key Bindings'te "Format File" ya da benzeri bir komut arayarak formatlamayı bir kısayola bağla.

## Mülakat köşesi
<details>
<summary>SPM, CocoaPods ve Carthage arasındaki fark nedir?</summary>

SPM Apple'ın resmi, Xcode'a gömülü paket yöneticisidir; ek araç ve workspace gerektirmez, `Package.swift` ile Swift'te tanımlanır. CocoaPods Ruby tabanlıdır, `Podfile` kullanır ve projeyi bir `.xcworkspace` ile sarar; eski projelerde hâlâ yaygın. Carthage framework'leri derleyip projeye elle eklemeni bekler; artık nadir. Yeni projelerde SPM standarttır.
</details>

<details>
<summary><code>Package.resolved</code> repoya commit'lenmeli mi?</summary>

Uygulama projelerinde **evet**: herkesin ve CI'ın aynı bağımlılık sürümlerini kullanmasını garanti eder (Flutter'daki `pubspec.lock` gibi). Başkalarının kullandığı kütüphane paketlerinde ise genelde commit'lenmez, çünkü kütüphaneyi kullanan uygulama kendi sürümlerini çözer.
</details>

<details>
<summary>Build tool plugin ile command plugin farkı nedir?</summary>

Build tool plugin build sürecinin parçasıdır ve her build'de otomatik çalışır (lint, kod üretimi). Command plugin kullanıcı tarafından elle çağrılır (`swift package <komut>`) ve izin verilirse kaynak dosyaları değiştirebilir (format, `--fix`).
</details>

## Kaynaklar
- [Swift Package Manager dokümantasyonu](https://www.swift.org/documentation/package-manager/)
- [SwiftLint](https://github.com/realm/SwiftLint) ve [SwiftLintPlugins](https://github.com/SimplyDanny/SwiftLintPlugins)
- [swift-format](https://github.com/swiftlang/swift-format)
- [toolbox/packages.md](../../../toolbox/packages.md#plugin-ne-demek)

## ✅ Bitirme listesi
- [ ] `swift run ValuesAndTypesDrill` "Hello, Swift!" yazdırıyor
- [ ] Xcode'da SwiftLint uyarılarını gördüm ve temizledim
- [ ] `swift format` ile dağınık kodu düzelttim
- [ ] PR açıldı, check'ler yeşil, review sonrası merge edildi
