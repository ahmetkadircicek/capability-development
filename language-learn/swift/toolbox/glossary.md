# Sözlük: kısaltmalar ve jargon

Mülakatta ve iş ilanlarında geçen terimler. Bir terimi drill'de öğrendikçe yanına ✅ koy.

## Dil ve runtime
| Terim | Açılım | Kısaca |
|---|---|---|
| ARC | Automatic Reference Counting | Swift'in bellek yönetimi: referans sayısı sıfıra inince nesne serbest bırakılır |
| COW | Copy-on-Write | Değer tipleri kopyalanınca gerçek kopya ancak değişiklik anında yapılır |
| POP | Protocol-Oriented Programming | Kalıtım yerine protocol + extension ile tasarım |
| PAT | Protocol with Associated Type | `associatedtype` içeren protocol |
| ABI | Application Binary Interface | Derlenmiş kodun ikili uyumluluğu (Swift 5'ten beri kararlı) |
| SE-NNNN | Swift Evolution proposal | Dil değişikliği teklifi (ör. SE-0296 async/await) |
| DSL | Domain-Specific Language | SwiftUI'ın `body` söz dizimi gibi alana özel dil (result builder ile) |

## Concurrency
| Terim | Açılım | Kısaca |
|---|---|---|
| GCD | Grand Central Dispatch | Kuyruk tabanlı eski concurrency API'si (`DispatchQueue`) |
| Data race | — | İki thread'in aynı veriye eşzamanlı erişmesi, biri yazarken |
| Actor | — | Kendi durumuna erişimi seri hale getiren referans tipi |
| `@MainActor` | — | Kodun ana thread'de çalışmasını garanti eden global actor |
| `Sendable` | — | Concurrency sınırlarını güvenle geçebilen tip |

## UI
| Terim | Açılım | Kısaca |
|---|---|---|
| VC | View Controller | UIKit'te bir ekranı yöneten sınıf |
| IB | Interface Builder | Storyboard/XIB görsel editörü |
| XIB / NIB | XML Interface Builder / NeXT Interface Builder | Tek bir view'ın görsel tasarım dosyası |
| HIG | Human Interface Guidelines | Apple'ın tasarım kuralları |
| Safe area | — | Çentik, home indicator gibi alanların dışındaki güvenli bölge |
| Size class | — | Ekranın compact/regular sınıflandırması (iPhone dikey, iPad…) |
| Dynamic Type | — | Kullanıcının seçtiği yazı boyutuna uyum |

## Mimari
| Terim | Açılım | Kısaca |
|---|---|---|
| MVC | Model-View-Controller | Apple'ın klasik kalıbı; "Massive View Controller" şakası buradan gelir |
| MVVM | Model-View-ViewModel | Sunum mantığı ViewModel'de, view sadece gösterir |
| MVVM-C | MVVM + Coordinator | Navigasyon ayrı bir Coordinator nesnesinde |
| VIPER | View-Interactor-Presenter-Entity-Router | Çok katmanlı, eski kurumsal projelerde yaygın |
| TCA | The Composable Architecture | Point-Free'nin unidirectional mimarisi |
| DI | Dependency Injection | Bağımlılıkları dışarıdan verme |
| SOLID | — | 5 nesne yönelimli tasarım ilkesi |
| ADR | Architecture Decision Record | Bir mimari kararın neden alındığının kısa kaydı |

## Platform ve servisler
| Terim | Açılım | Kısaca |
|---|---|---|
| APNs | Apple Push Notification service | Push bildirimlerini cihaza ileten Apple servisi |
| ATS | App Transport Security | Varsayılan olarak sadece HTTPS'e izin veren güvenlik katmanı |
| IAP | In-App Purchase | Uygulama içi satın alma (StoreKit) |
| UDID | Unique Device Identifier | Cihazın benzersiz kimliği (geliştirme profile'larında) |
| KVO | Key-Value Observing | Objective-C kökenli property gözlemleme |
| UD | UserDefaults | Küçük ayarlar için anahtar-değer deposu |
| BG task | Background task | Uygulama arka plandayken çalışan iş (`BGTaskScheduler`) |
| Deep link / Universal link | — | URL ile uygulamada belirli bir ekranı açmak |

## Araçlar ve süreç
| Terim | Açılım | Kısaca |
|---|---|---|
| SPM / SwiftPM | Swift Package Manager | Apple'ın paket yöneticisi |
| CI / CD | Continuous Integration / Delivery | Her PR'da otomatik build/test / otomatik dağıtım |
| PR / MR | Pull Request / Merge Request | Değişikliği ana branch'e alma talebi (GitHub / GitLab) |
| LGTM | Looks Good To Me | Review'da onay |
| WIP | Work In Progress | Henüz bitmemiş iş |
| NIT | Nitpick | Önemsiz, küçük review yorumu |
| TDD | Test-Driven Development | Önce test, sonra kod |
| DoD | Definition of Done | Bir işin "bitti" sayılma kriterleri |
| MVP | Minimum Viable Product | En küçük kullanılabilir ürün (mimari kalıpla karıştırma) |
| dSYM | Debug Symbols | Crash raporlarını okunur hale getiren sembol dosyası |
| IPA | iOS App Store Package | Dağıtılabilir uygulama paketi |
