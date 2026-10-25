# Roadmap

Müfredatın tamamı ve neden bu sırada olduğu. Tarihler için: [schedule.md](schedule.md)

## Sıralama mantığı

```
00 Setup ─► 01 Swift ─► 02 Concurrency ─► 03 SwiftUI ─► 04 Networking ─► 05 Persistence ─► 🏆 C1 Kumbara
                                                                                              │
   🏆 C2 Vitrin ◄─ 09 Testing ◄─ 08 Architecture ◄─ 07 UIKit ◄─ 06 Combine ◄──────────────────┘
        │
        ▼
   🚪 Başvuru kapısı (13A) ─► 10 Platform ─► 11 Ecosystem ─► 12 Shipping ─► 🏆 C3 Pulse ─► 13B
```

- **Önce dil, sonra framework.** SwiftUI'daki `@Observable`, `some View` ve `async` gibi yapılar dil özelliklerinin üzerine kurulu. 01 ve 02 modülleri temel olmadan ezber yapmayı engeller.
- **Concurrency erken geliyor.** Swift 6 ile strict concurrency varsayılan oldu. Networking'e ve UI'a girmeden önce `async/await`, actor ve `Sendable` oturmalı.
- **SwiftUI, UIKit'ten önce.** Daha hızlı sonuç verdiği için motivasyonu yüksek tutar ve C1 için yeterlidir. UIKit ise iş ilanlarında hâlâ zorunlu (büyük kodbaşları UIKit). C2 tamamen UIKit ile yapılır.
- **Combine, UIKit'in hemen önünde.** UIKit + MVVM binding'i genelde Combine ile kurulur.
- **Testing, C2'nin ortasında.** Önce mimari kurulur (08), sonra o mimari test edilir (09). Test edilebilir mimarinin neden önemli olduğu böylece bizzat yaşanır.
- **Başvuru kapısı C2'den sonra.** O noktada 2 CV-grade proje (SwiftUI + UIKit), test ve CI deneyimi hazır olur. C3 başvurularla paralel ilerler.

## Modüller

| # | Modül | Drill'ler | Milestone işi |
|---|---|---|---|
| 00 | [Setup](../00-setup/) | Xcode turu · ayarlar + imza · kısayollar/snippet'ler · debugging · Git/GitHub akışı · SPM + lint | — |
| 01 | [Swift Fundamentals](../01-swift-fundamentals/) | values/types · collections · optionals · closures · struct/class · enums · protocols · generics · errors · ARC · Codable · property wrappers & macros | Build: Bookshelf CLI |
| 02 | [Swift Concurrency](../02-swift-concurrency/) | GCD/OperationQueue · async/await · Task & cancellation · structured concurrency · actors & Sendable · AsyncSequence | Build: Concurrent Downloader CLI |
| 03 | [SwiftUI](../03-swiftui/) | views/modifiers · state/binding · Observation · List · navigation · Form · layout · animasyon · custom component · Environment/Preference | Build: Habitly |
| 04 | [Networking](../04-networking/) | URLSession · API client · Alamofire · image loading · loading states & pagination | Build: Pokedex |
| 05 | [Persistence](../05-persistence/) | AppStorage · FileManager · Keychain + Face ID · Core Data (stack, fetch, relationships/migration) · SwiftData | 🏆 C1 Kumbara |
| 06 | [Combine](../06-combine/) | publishers/subscribers · operators · ViewModel binding · Combine vs AsyncSequence | — |
| 07 | [UIKit](../07-uikit/) | lifecycle & VC · Auto Layout · storyboard/XIB · UITableView · modern UICollectionView · Coordinator · iletişim kalıpları · SnapKit · interop | Build: HNReader |
| 08 | [Architecture](../08-architecture/) | MVVM · DI · clean layers · SPM modülerleştirme · TCA | 🏆 C2 Vitrin (S1–S5) |
| 09 | [Testing](../09-testing/) | XCTest · Swift Testing · test doubles · async test · UI test · snapshot · coverage/TDD | C2 S6–S8, C1 S7 |
| 10 | [Platform Features](../10-platform-features/) | notifications · push · MapKit · Photos · HealthKit · WidgetKit · App Intents · StoreKit 2 · lokalizasyon · a11y · deep link · background tasks | 🏆 C3 Pulse |
| 11 | [Ecosystem](../11-ecosystem/) | Firebase · Lottie · RevenueCat · Pulse · SwiftGen/Sourcery · Periphery · Realm/GRDB · legacy (CocoaPods, RxSwift) | C3 entegrasyon |
| 12 | [Shipping](../12-shipping/) | signing · build config · Instruments · GitHub Actions · fastlane · TestFlight & App Store | C3 → TestFlight |
| 13 | [Career](../13-career/) | CV & LinkedIn · capstone'ları public'e hazırlama · interview-prep · mülakat simülasyonu | 🚪 Başvuru kapısı |

## Kapsam dışı (şimdilik)
- watchOS, macOS, visionOS: C3'te watchOS companion bonus olarak var.
- Objective-C: sadece okuma düzeyinde, 07'de bridging header ile birlikte değinilir.
- Server-side Swift (Vapor): iş hedefi mobil olduğu için yok.
- Metal, ARKit, Core ML: ilgi alanı olursa capstone sonrası.
