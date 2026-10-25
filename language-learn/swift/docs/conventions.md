# Conventions

## Klasör düzeni

```
NN-modul-adi/
├── README.md                    # Modül özeti, drill listesi, build tanımı
├── Package.swift                # (Swift-only modüllerde: 01, 02, 06) senin oluşturduğun paket
├── <Modul>Drills.xcodeproj      # (UI modüllerinde: 03, 07) senin oluşturduğun app projesi
├── drills/
│   └── NN-konu/
│       ├── README.md            # Mentorun yazdığı drill
│       └── ...                  # Senin kodun
└── build-<ad>/                  # Build uygulaması
    └── README.md                # Build ticket'ı
```

- Drill ID'si `<modül>-<sıra>` şeklinde: `01-03`. Klasör adında da sıra var: `drills/03-optionals/`.
- Build ID'si `B<modül>`: `B01`, `B07`.
- Capstone sprintleri `C<n>-S<n>`: `C1-S2`.

## Swift paketlerinde drill yapısı (01, 02, 06)

Her drill bir **target** olur ve kendi klasörüne `path:` ile bağlanır. Böylece drill'ler birbirinden bağımsız derlenir:

```swift
// Package.swift'te örnek bir target tanımı
.executableTarget(
    name: "OptionalsDrill",
    path: "drills/03-optionals/Sources"
)
```

Çalıştırma: `swift run OptionalsDrill`. Kurulumunu [00-06](../00-setup/drills/06-swift-package-and-linting/) drill'inde yapacaksın.

## UI projelerinde drill yapısı (03, 07)

Modülde tek bir Xcode app projesi olur (`SwiftUIDrills`, `UIKitDrills`). Her drill projede bir klasördür ve kendi `#Preview`'ı ile çalışır. Uygulamanın ana ekranı drill'lerin listelendiği bir katalogdur. Xcode 16 ve sonrasındaki **folder-synchronized groups** sayesinde yeni klasörler projeye otomatik eklenir.

## Swift stili

[Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) temel alınır, SwiftLint varsayılan kurallarıyla kontrol edilir. Özet:

| Konu | Kural | Örnek |
|---|---|---|
| Tipler | UpperCamelCase | `BookStore`, `LoadingState` |
| Değişken, fonksiyon | lowerCamelCase | `fetchBooks()`, `isLoading` |
| Bool | `is/has/can/should` ile başlar | `isEmpty`, `hasAccess` |
| Fonksiyon adı | Çağrı yerinde İngilizce cümle gibi okunur | `books.remove(at: 2)`, `view.insert(child, at: 0)` |
| Kısaltma | Tamamı büyük ya da tamamı küçük | `userID`, `urlString`, `HTTPClient` |
| Erişim | En dar olanla başla | `private` → `fileprivate` → `internal` → `public` |
| `let` / `var` | Varsayılan `let`, gerekirse `var` | |
| Force unwrap (`!`) | Yasak; sadece test ve `IBOutlet` istisna | `guard let` kullan |
| Bölümler | `// MARK: - Bölüm adı` | `// MARK: - Private helpers` |
| Satır uzunluğu | 120 karakter | Xcode page guide 120'ye ayarlı |

## Dokümantasyon

- Public API'lere `///` ile doc comment yaz (Xcode'da ⌥⌘/ ile şablon oluşturur).
- "Ne" yerine "neden"i yorumla. Kodun ne yaptığı zaten okunuyor.
- Her build ve capstone'un kendi `README.md` dosyası olur: ne, nasıl çalıştırılır, ekran görüntüsü, mimari, kararlar.

## Commit, branch, PR

[workflow.md](workflow.md) dosyasına bak.
