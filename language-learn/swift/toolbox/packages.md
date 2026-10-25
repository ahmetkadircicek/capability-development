# De facto paketler

iOS ekosisteminde "herkesin bildiği" paketler. Her biri ihtiyaç duyulduğu modülde, önce **native çözüm** öğrenildikten sonra eklenir.

> **Kural:** Önce Apple'ın çözümünü öğren, sonra paketi. Mülakatta "Alamofire olmadan nasıl yapardın?" sorusu mutlaka gelir. Paket eklemeden önce kendine sor: bakımı devam ediyor mu, kaç kişi kullanıyor, native API artık yeterli mi?

Paket araştırma: [Swift Package Index](https://swiftpackageindex.com)

Durum: 🎯 kullanılacak · 👀 farkındalık (ne olduğunu ve ne zaman tercih edildiğini bil)

## Apple'ın açık kaynak paketleri

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [swift-argument-parser](https://github.com/apple/swift-argument-parser) | Komut satırı uygulaması argümanları | 01 (Bookshelf CLI) |
| 🎯 [swift-collections](https://github.com/apple/swift-collections) | `Deque`, `OrderedSet`, `OrderedDictionary`, `Heap` | 01 |
| 🎯 [swift-algorithms](https://github.com/apple/swift-algorithms) | `chunked`, `windows`, `uniqued` gibi sequence algoritmaları | 01 |
| 🎯 [swift-async-algorithms](https://github.com/apple/swift-async-algorithms) | AsyncSequence için `debounce`, `merge`, `combineLatest` | 02 |
| 👀 [swift-log](https://github.com/apple/swift-log) | Platformdan bağımsız loglama API'si | 11 |
| 👀 [swift-openapi-generator](https://github.com/apple/swift-openapi-generator) | OpenAPI dokümanından tipli API client üretir | 11 |

## Networking ve görsel

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [Alamofire](https://github.com/Alamofire/Alamofire) | HTTP katmanı: interceptor, retry, sertifika pinleme | 04, C2 |
| 🎯 [Kingfisher](https://github.com/onevcat/Kingfisher) | Görsel indirme ve önbellekleme (UIKit ve SwiftUI) | 04, C2 |
| 👀 Moya | Alamofire üzerinde enum tabanlı API katmanı (eski kodbaşlarında yaygın) | 04 |
| 👀 SDWebImage | Kingfisher alternatifi, Objective-C kökenli | 04 |
| 👀 Nuke | Performans odaklı görsel yükleme | 04 |

## UI

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [SnapKit](https://github.com/SnapKit/SnapKit) | Auto Layout için kısa DSL. UIKit projelerinde çok yaygın | 07, C2 |
| 🎯 [Lottie](https://github.com/airbnb/lottie-ios) | After Effects animasyonları | 11 |

## Mimari ve dependency injection

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [The Composable Architecture (TCA)](https://github.com/pointfreeco/swift-composable-architecture) | Unidirectional mimari: state, action, reducer | 08 |
| 🎯 [swift-dependencies](https://github.com/pointfreeco/swift-dependencies) | `@Dependency` ile test edilebilir DI | 08 |
| 🎯 [Factory](https://github.com/hmlongco/Factory) | Hafif, compile-time güvenli DI container | 08 |
| 👀 Swinject | Klasik DI container. Türkiye'deki kurumsal projelerde yaygın | 08 |

## Persistence

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) | Keychain API'sinin sade sarmalayıcısı (önce native Security framework öğrenilir) | 05 |
| 👀 Realm | Nesne veritabanı. Eski projelerde yaygın, yeni projelerde azalıyor | 11 |
| 👀 GRDB | SQLite üzerinde güçlü, tipli katman | 11 |

## Test

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [swift-snapshot-testing](https://github.com/pointfreeco/swift-snapshot-testing) | Ekran görüntüsü karşılaştırmalı test | 09, C2 |
| 👀 Quick / Nimble | BDD tarzı test yazımı (eski kodbaşlarında) | 09 |
| 👀 OHHTTPStubs | Ağ isteklerini taklit etme (native alternatifi: `URLProtocol`) | 09 |

## Kod kalitesi ve kod üretimi

| Araç | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [SwiftLint](https://github.com/realm/SwiftLint) | Stil ve hata kuralları. SPM build tool plugin olarak eklenir | 00-06'dan itibaren her yerde |
| 🎯 `swift format` | Apple'ın formatlayıcısı, Swift 6 toolchain'iyle birlikte gelir | 00-06 |
| 🎯 [SwiftGen](https://github.com/SwiftGen/SwiftGen) | Asset ve string'ler için tipli kod üretimi | 11 |
| 🎯 [Sourcery](https://github.com/krzysztofzablocki/Sourcery) | Şablondan kod üretimi (ör. mock'lar) | 11 |
| 🎯 [Periphery](https://github.com/peripheryapp/periphery) | Kullanılmayan kodu bulur | 11 |

## Servisler

| Paket | Ne işe yarar | Modül |
|---|---|---|
| 🎯 [Firebase iOS SDK](https://github.com/firebase/firebase-ios-sdk) | Auth, Firestore, Crashlytics, Analytics, Remote Config | 11, C3 |
| 🎯 [RevenueCat](https://github.com/RevenueCat/purchases-ios) | Abonelik ve uygulama içi satın alma yönetimi (önce StoreKit 2) | 10–11 |
| 🎯 [Pulse](https://github.com/kean/Pulse) | Uygulama içi network ve log görüntüleyici | 11 |

## Proje ve build

| Araç | Ne işe yarar | Modül |
|---|---|---|
| 👀 Tuist / XcodeGen | Xcode projesini koddan/YAML'dan üretir; büyük ekiplerde merge conflict'leri azaltır | 08 |
| 🎯 fastlane | Build, imzalama, TestFlight yükleme otomasyonu | 12 |
| 🎯 xcbeautify | `xcodebuild` çıktısını okunur hale getirir (CI'da) | 12 |

## Legacy (okuyabilmen yeterli)

| Araç | Neden bilmelisin | Modül |
|---|---|---|
| 👀 CocoaPods | Eski projelerin çoğu hâlâ `Podfile` kullanıyor; yeni projeler SPM'e geçti | 11 |
| 👀 RxSwift | Combine öncesinin reactive kütüphanesi; birçok kurumsal projede hâlâ var | 11 |

## "Plugin" ne demek?
Swift dünyasında "plugin" iki şeye denir:
1. **SPM build tool plugin:** Her build'de otomatik çalışır. Örnek: SwiftLint plugin'i derleme sırasında uyarıları Xcode'a basar.
2. **SPM command plugin:** Elle çalıştırılır. Örnek: `swift package plugin --list`, ardından format plugin'i.

Xcode'un kendisi için eklentiler (Source Editor Extension) çok sınırlıdır; Android Studio'daki gibi zengin bir plugin ekosistemi yoktur.
