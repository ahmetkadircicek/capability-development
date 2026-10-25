# Takvim

> Plan ancak takvime yazıldığında gerçek olur. Bu sayfa hangi hafta ne yapılacağını, tamponları ve deadline'ların nasıl kaydırılacağını tanımlar.

## Kurallar

| Kural | Değer |
|---|---|
| Kapasite | **6 saat/hafta**, sadece hafta içi akşamlar (ör. 3 akşam × 2 saat) |
| Hafta sonları | Plana **dahil değil**. Geride kalırsan telafi için kullanılır |
| Ritim | **4 çalışma haftası + 1 tampon haftası** |
| Tampon haftası | Yeni konu yok: telafi, tekrar, mülakat soruları, check-in. İş kalmadıysa Medium yazısı |
| Bayram / yılbaşı | O hafta boş bırakılır (tampon sayılır) |
| Tek günlük resmi tatil | O haftanın kapasitesi 4.5 saat |
| Deadline kayması | Sadece tampon haftasındaki check-in'de, gerekçesi aşağıdaki günlüğe yazılarak |

Saat tahminleri seviyene göre yapıldı: Swift temelleri hızlı geçer (0.5–1 saat/drill). Senin için yeni olan UIKit, concurrency, Core Data ve mimari 1.5–2 saat/drill. Capstone'lar sprint bazında tahmin edildi.

## Milestone'lar

| Milestone | Saat | Due date (Cuma) |
|---|---|---|
| 00 · Setup | 8 | 23 Ekim 2026 |
| 01 · Swift Fundamentals | 20 | 20 Kasım 2026 |
| 02 · Swift Concurrency | 15 | 11 Aralık 2026 |
| 03 · SwiftUI | 20 | 15 Ocak 2027 |
| 04 · Networking | 16 | 12 Şubat 2027 |
| 05 · Persistence | 10 | 26 Şubat 2027 |
| 🏆 C1 · Kumbara (S1–S6) | 30 | 9 Nisan 2027 |
| 06 · Combine | 5 | 9 Nisan 2027 |
| 07 · UIKit | 24 | 28 Mayıs 2027 |
| 08 · Architecture | 8 | 4 Haziran 2027 |
| 🏆 C2 · Vitrin (S1–S8) | 40.5 | 13 Ağustos 2027 |
| 09 · Testing (+ C1-S7) | 12.5 | 20 Ağustos 2027 |
| 🚪 **Başvuru kapısı** (13-01…13-03) | 8 | **27 Ağustos 2027** |
| 10 · Platform Features | 14 | 24 Eylül 2027 |
| 11 · Ecosystem | 7 | 5 Kasım 2027 |
| 12 · Shipping | 8.5 | 26 Kasım 2027 |
| 🏆 C3 · Pulse | 34.5 | 3 Aralık 2027 |
| 13 · Career (13-04) | 2 | 10 Aralık 2027 |

Toplam yaklaşık **283 saat**, bunun ~217 saati başvuru kapısına kadar.

## Hızlandırma kaldıraçları

Plan bilerek temkinli tutuldu. Daha hızlı gitmek istersen:

1. **Hafta sonu bonusu:** Ayda 2 hafta sonu 3'er saat çalışırsan (ayda +6 saat) başvuru kapısı yaklaşık **2 ay** öne gelir (~Haziran sonu 2027).
2. **Hızlı şerit:** Şu drill'ler başvuru sonrasına atılabilir: 02-01 GCD/OperationQueue, 07-03 Storyboard/XIB, 08-05 TCA, 05-07 SwiftData, 01-12 macros derinliği. Toplam ~7 saat drill kazancı sağlar. Build'ler küçültülerek (sadece must-have'ler) ~18 saat daha kazanılır. Toplam **5–6 hafta** erken bitiş.
3. **Erken kapı:** C1 ve 07 bitince (~Mayıs 2027) SwiftUI ağırlıklı junior/startup ilanlarına başvurmaya başlanabilir. C2 paralel devam eder.

## Haftalık plan

Bir öğe birden fazla haftaya yayılıyorsa her iki haftada da görünür.

| Hafta | Tarih | Tür | Saat | Plan |
|---|---|---|---|---|
| 1 | 12–16 Eki 26 |  | 6 | 00-01 Xcode turu + ilk proje · 00-02 Xcode ayarları + Apple ID/imza · 00-03 Kısayollar, snippet'ler, file template'leri · 00-04 Debugging temelleri · 00-05 Git & GitHub akışı, ilk PR |
| 2 | 19–23 Eki 26 |  | 6 | 00-05 Git & GitHub akışı, ilk PR · 00-06 SPM paketi + SwiftLint/swift-format · 01-01 Values & types · 01-02 Collections · 01-03 Optionals · 01-04 Functions & closures |
| 3 | 26–30 Eki 26 | (29 Ekim) | 4.5 | 01-05 Structs vs classes · 01-06 Enums & pattern matching · 01-07 Protocols · 01-08 Generics |
| 4 | 2–6 Kas 26 |  | 6 | 01-08 Generics · 01-09 Error handling · 01-10 Memory & ARC · 01-11 Codable · 01-12 Property wrappers & macros · B01 Build: Bookshelf CLI |
| 5 | 9–13 Kas 26 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 6 | 16–20 Kas 26 |  | 6 | B01 Build: Bookshelf CLI · 02-01 GCD & OperationQueue |
| 7 | 23–27 Kas 26 |  | 6 | 02-01 GCD & OperationQueue · 02-02 async/await · 02-03 Tasks & cancellation · 02-04 Structured concurrency · 02-05 Actors & Sendable |
| 8 | 30 Kas – 4 Ara 26 |  | 6 | 02-05 Actors & Sendable · 02-06 AsyncSequence · B02 Build: Concurrent Downloader CLI |
| 9 | 7–11 Ara 26 |  | 6 | B02 Build: Concurrent Downloader CLI · 03-01 Proje kurulumu + views & modifiers · 03-02 State & Binding · 03-03 Observation |
| 10 | 14–18 Ara 26 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 11 | 21–25 Ara 26 |  | 6 | 03-03 Observation · 03-04 Lists & search · 03-05 Navigation · 03-06 Forms & focus · 03-07 Layout deep dive · 03-08 Animations |
| 12 | 28 Ara – 1 Oca 27 | 🏖️ Yılbaşı | — | Dinlen |
| 13 | 4–8 Oca 27 |  | 6 | 03-08 Animations · 03-09 Custom components · 03-10 Environment & preferences · B03 Build: Habitly |
| 14 | 11–15 Oca 27 |  | 6 | B03 Build: Habitly · 04-01 URLSession basics · 04-02 API client design |
| 15 | 18–22 Oca 27 |  | 6 | 04-02 API client design · 04-03 Alamofire · 04-04 Image loading · 04-05 Loading states & pagination · B04 Build: Pokedex |
| 16 | 25–29 Oca 27 |  | 6 | B04 Build: Pokedex |
| 17 | 1–5 Şub 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 18 | 8–12 Şub 27 |  | 6 | B04 Build: Pokedex · 05-01 UserDefaults & AppStorage · 05-02 FileManager · 05-03 Keychain & Face ID |
| 19 | 15–19 Şub 27 |  | 6 | 05-04 Core Data stack · 05-05 Core Data fetching · 05-06 Relationships & migration · 05-07 SwiftData |
| 20 | 22–26 Şub 27 |  | 6 | 05-07 SwiftData · C1-S1 Kumbara S1: proje + veri modeli |
| 21 | 1–5 Mar 27 |  | 6 | C1-S1 Kumbara S1: proje + veri modeli · C1-S2 Kumbara S2: işlemler & kategoriler |
| 22 | 8–12 Mar 27 | 🏖️ Ramazan Bayramı | — | Dinlen |
| 23 | 15–19 Mar 27 |  | 6 | C1-S2 Kumbara S2: işlemler & kategoriler · C1-S3 Kumbara S3: bütçeler & bildirimler |
| 24 | 22–26 Mar 27 |  | 6 | C1-S3 Kumbara S3: bütçeler & bildirimler · C1-S4 Kumbara S4: döviz API · C1-S5 Kumbara S5: raporlar & CSV |
| 25 | 29 Mar – 2 Nis 27 |  | 6 | C1-S5 Kumbara S5: raporlar & CSV · C1-S6 Kumbara S6: Face ID, widget, cila |
| 26 | 5–9 Nis 27 |  | 6 | C1-S6 Kumbara S6: Face ID, widget, cila · 06-01 Publishers & subscribers · 06-02 Operators · 06-03 Combine + ViewModel · 06-04 Combine vs AsyncSequence · 07-01 App lifecycle & view controllers |
| 27 | 12–16 Nis 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 28 | 19–23 Nis 27 | (23 Nisan) | 4.5 | 07-01 App lifecycle & view controllers · 07-02 Programatik Auto Layout · 07-03 Storyboard & XIB · 07-04 UITableView |
| 29 | 26–30 Nis 27 |  | 6 | 07-04 UITableView · 07-05 Modern UICollectionView · 07-06 Navigation & Coordinator · 07-07 İletişim kalıpları |
| 30 | 3–7 May 27 |  | 6 | 07-08 SnapKit · 07-09 SwiftUI ↔ UIKit interop · B07 Build: HNReader |
| 31 | 10–14 May 27 |  | 6 | B07 Build: HNReader |
| 32 | 17–21 May 27 | 🏖️ Kurban Bayramı + 19 Mayıs | — | Dinlen |
| 33 | 24–28 May 27 |  | 6 | B07 Build: HNReader · 08-01 MVC → MVVM · 08-02 Dependency injection · 08-03 Clean katmanlar & repository · 08-04 SPM ile modülerleştirme |
| 34 | 31 May – 4 Haz 27 |  | 6 | 08-04 SPM ile modülerleştirme · 08-05 TCA giriş · C2-S1 Vitrin S1: modüler iskelet + DesignSystem |
| 35 | 7–11 Haz 27 |  | 6 | C2-S1 Vitrin S1: modüler iskelet + DesignSystem · C2-S2 Vitrin S2: networking + auth/refresh |
| 36 | 14–18 Haz 27 |  | 6 | C2-S2 Vitrin S2: networking + auth/refresh · C2-S3 Vitrin S3: ana sayfa (compositional) |
| 37 | 21–25 Haz 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 38 | 28 Haz – 2 Tem 27 |  | 6 | C2-S3 Vitrin S3: ana sayfa (compositional) · C2-S4 Vitrin S4: arama + ürün detay |
| 39 | 5–9 Tem 27 |  | 6 | C2-S4 Vitrin S4: arama + ürün detay · C2-S5 Vitrin S5: sepet + favoriler |
| 40 | 12–16 Tem 27 | (15 Temmuz) | 4.5 | C2-S5 Vitrin S5: sepet + favoriler · 09-01 XCTest basics · 09-02 Swift Testing · 09-03 Test doubles & URLProtocol |
| 41 | 19–23 Tem 27 |  | 6 | 09-04 Async kod testi · 09-05 UI testleri · 09-06 Snapshot testing · 09-07 Coverage & TDD · C2-S6 Vitrin S6: ViewModel unit testleri |
| 42 | 26–30 Tem 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 43 | 2–6 Ağu 27 |  | 6 | C2-S6 Vitrin S6: ViewModel unit testleri · C2-S7 Vitrin S7: network stub + snapshot |
| 44 | 9–13 Ağu 27 |  | 6 | C2-S7 Vitrin S7: network stub + snapshot · C2-S8 Vitrin S8: UI test + CI · C1-S7 Kumbara S7: iş mantığı testleri |
| 45 | 16–20 Ağu 27 |  | 6 | C1-S7 Kumbara S7: iş mantığı testleri · 13-01 CV & LinkedIn · 13-02 Capstone'ları public'e hazırlama |
| 46 | 23–27 Ağu 27 |  | 6 | 13-02 Capstone'ları public'e hazırlama · 13-03 Interview-prep tekrar · 10-xx Platform özellikleri drill'leri (12 drill) |
| 47 | 30 Ağu – 3 Eyl 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 48 | 6–10 Eyl 27 |  | 6 | 10-xx Platform özellikleri drill'leri (12 drill) |
| 49 | 13–17 Eyl 27 |  | 6 | 10-xx Platform özellikleri drill'leri (12 drill) |
| 50 | 20–24 Eyl 27 |  | 6 | 10-xx Platform özellikleri drill'leri (12 drill) · C3-core Pulse: çekirdek sprintler |
| 51 | 27 Eyl – 1 Eki 27 |  | 6 | C3-core Pulse: çekirdek sprintler |
| 52 | 4–8 Eki 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 53 | 11–15 Eki 27 |  | 6 | C3-core Pulse: çekirdek sprintler |
| 54 | 18–22 Eki 27 |  | 6 | C3-core Pulse: çekirdek sprintler |
| 55 | 25–29 Eki 27 | (29 Ekim) | 4.5 | C3-core Pulse: çekirdek sprintler · 11-xx Ekosistem drill'leri (8 drill) |
| 56 | 1–5 Kas 27 |  | 6 | 11-xx Ekosistem drill'leri (8 drill) · C3-int Pulse: Firebase & ekosistem entegrasyonu |
| 57 | 8–12 Kas 27 | 🛟 tampon | — | Telafi, tekrar, check-in |
| 58 | 15–19 Kas 27 |  | 6 | C3-int Pulse: Firebase & ekosistem entegrasyonu · 12-xx Shipping drill'leri (6 drill) |
| 59 | 22–26 Kas 27 |  | 6 | 12-xx Shipping drill'leri (6 drill) · C3-ship Pulse: TestFlight |
| 60 | 29 Kas – 3 Ara 27 |  | 6 | C3-ship Pulse: TestFlight · 13-04 Mülakat simülasyonu & take-home provası |
| 61 | 6–10 Ara 27 |  | 6 | 13-04 Mülakat simülasyonu & take-home provası |

## Medium yazıları (esnek hedefler)

Haftalık 6 saate dahil değil. Boş geçen tampon haftalarında veya hafta sonlarında yazılır, hiçbir milestone'u bloklamaz. Ayrıntılar: [articles/](../articles/)

| Hedef ay | Yazı |
|---|---|
| Aralık 2026 | Swift 6 strict concurrency, Dart isolates/async gözüyle |
| Ocak 2027 | Flutter developer için SwiftUI state yönetimi |
| Nisan 2027 | Offline-first SwiftUI finans uygulaması (C1) |
| Haziran 2027 | SwiftUI çağında neden hâlâ UIKit? |
| Temmuz–Ağustos 2027 | SPM + MVVM-C ile modüler iOS mimarisi (C2) |
| Aralık 2027 | Huawei Health Kit vs Apple HealthKit (C3) |

## Velocity

Her PR'daki "⏱ Harcanan süre" buraya işlenir. Oran = gerçek / tahmin. Oran sürekli 1.2'nin üstündeyse tahminler büyütülür ya da kapsam kırpılır.

| Öğe | Tahmin (saat) | Gerçek (saat) | Oran | Not |
|---|---|---|---|---|
| | | | | |

## Değişiklik günlüğü

| Tarih | Değişiklik | Gerekçe |
|---|---|---|
| 10 Eki 2026 | İlk plan oluşturuldu | — |
