# Mülakat hazırlığı

Her drill'in "Mülakat köşesi" bölümündeki sorular burada toplanır. Tampon haftalarında bu sayfadan rastgele 5 soru seçip cevabı **sesli** anlat: yazmak yetmez, mülakatta konuşacaksın.

## iOS mülakatının yapısı

| Aşama | Ne sorulur | Hazırlık |
|---|---|---|
| İK ön görüşme | Motivasyon, maaş beklentisi, neden iOS? | [career.md](career.md) dosyasındaki hikaye |
| Teknik sohbet | Swift dili, iOS framework'leri, mimari, geçmiş projeler | Bu sayfa + capstone'ların |
| Canlı kodlama | Küçük bir algoritma ya da bir ekranı sıfırdan kurmak | Drill'ler + [leetcode](https://github.com/ahmetkadircicek/leetcode) pratiği |
| Take-home case | 4–8 saatte küçük bir uygulama (genelde liste + detay + API) | 13-04 provası |
| Mobile system design | "Instagram feed'ini tasarla" gibi açık uçlu soru | Aşağıdaki bölüm |
| Davranışsal | "Zor bir bug'ı nasıl çözdün?" | STAR formatı, capstone hikayeleri |

## Konu kontrol listesi

Her birini 2 dakikada anlatabiliyorsan ✅ koy.

**Swift dili**
- [ ] Value type ve reference type farkı; copy-on-write
- [ ] Optional nedir, nasıl açılır, `!` neden tehlikeli
- [ ] `struct` mı `class` mı: karar kriterleri
- [ ] Protocol-oriented programming; protocol extension'lar
- [ ] Generics; `some` ve `any` farkı
- [ ] ARC, retain cycle, `weak` ve `unowned`
- [ ] Closure'lar, `@escaping`, capture list
- [ ] Error handling: `throws`, `Result`, typed throws
- [ ] `Codable` ve özel decoding

**Concurrency**
- [ ] GCD: main queue, global queue, serial ve concurrent
- [ ] `async/await` nasıl çalışır; suspension point
- [ ] `Task`, cancellation, structured concurrency
- [ ] Actor nedir, data race'i nasıl önler; `@MainActor`
- [ ] `Sendable` ve Swift 6 strict concurrency

**UI**
- [ ] SwiftUI'da view yaşam döngüsü ve identity
- [ ] `@State`, `@Binding`, `@Observable`, `@Environment` ne zaman
- [ ] UIViewController yaşam döngüsü (`viewDidLoad` → `viewDidAppear` …)
- [ ] Auto Layout: constraint, intrinsic content size, hugging/compression
- [ ] `UITableView` cell reuse; diffable data source
- [ ] SwiftUI ↔ UIKit birlikte kullanımı

**Veri ve ağ**
- [ ] URLSession ile istek, hata yönetimi, retry
- [ ] Görsel önbellekleme stratejisi
- [ ] Core Data: context, thread kuralları, migration
- [ ] Keychain ve UserDefaults farkı; hassas veri nerede saklanır

**Mimari ve kalite**
- [ ] MVC, MVVM, MVVM-C, VIPER, TCA: farklar ve trade-off'lar
- [ ] Dependency injection türleri
- [ ] Test piramidi; mock, stub, fake farkı
- [ ] Modülerleştirme neden ve nasıl

**Platform ve yayın**
- [ ] App lifecycle, scene'ler, background modları
- [ ] Push notification akışı (APNs)
- [ ] Code signing: sertifika, provisioning profile
- [ ] Instruments ile memory leak ve performans analizi

## Mobile system design

Çerçeve (her soruda bu sırayla ilerle):
1. **Gereksinimler:** fonksiyonel (ne yapacak) ve fonksiyonel olmayan (offline, performans, güvenlik) gereksinimleri sor.
2. **API sözleşmesi:** endpoint'ler, sayfalama (cursor ya da offset), hata modeli.
3. **Mimari:** katmanlar (UI → ViewModel → Repository → Network/Cache), modüller.
4. **Veri akışı:** cache stratejisi, offline-first, senkronizasyon, conflict çözümü.
5. **Kenar durumları:** zayıf ağ, büyük listeler, görsel belleği, arka plan, erişilebilirlik.
6. **Ölçüm:** analytics, crash reporting, feature flag.

Pratik soruları:
- [ ] Sonsuz kaydırılan bir haber feed'i (sayfalama, görsel cache, prefetch)
- [ ] Offline çalışan bir not/finans uygulaması (C1 ile bağlantılı)
- [ ] E-ticaret sepeti: misafir sepeti, login sonrası birleştirme (C2 ile bağlantılı)
- [ ] Chat uygulaması: WebSocket, mesaj sırası, okundu bilgisi
- [ ] Görsel yükleme kütüphanesi tasarla (Kingfisher'ın içi)

## Davranışsal sorular: STAR

**S**ituation (durum) → **T**ask (görev) → **A**ction (ne yaptın) → **R**esult (sonuç, mümkünse sayıyla).

Her capstone için 2 hikaye hazırla: "en zor teknik problem" ve "verdiğin bir trade-off kararı". Şablon: [career.md](career.md)

## Sorular (modül modül)

Drill'ler yazıldıkça burası dolar.

Cevaplar ilgili drill'in "Mülakat köşesi" bölümünde.

### 00 · Setup
| Soru | Drill |
|---|---|
| Project, target ve scheme arasındaki fark nedir? | [00-01](../00-setup/drills/01-xcode-tour/#mülakat-köşesi) |
| Bundle identifier nedir, neden önemlidir? | [00-01](../00-setup/drills/01-xcode-tour/#mülakat-köşesi) |
| Debug ve Release configuration farkı nedir? | [00-01](../00-setup/drills/01-xcode-tour/#mülakat-köşesi) |
| Provisioning profile nedir, içinde neler vardır? | [00-02](../00-setup/drills/02-xcode-settings-and-signing/#mülakat-köşesi) |
| Development ve distribution sertifikası farkı nedir? | [00-02](../00-setup/drills/02-xcode-settings-and-signing/#mülakat-köşesi) |
| Sertifikanın private key'i kaybolursa ne olur? | [00-02](../00-setup/drills/02-xcode-settings-and-signing/#mülakat-köşesi) |
| Bir sembolü tüm projede güvenle nasıl yeniden adlandırırsın? | [00-03](../00-setup/drills/03-shortcuts-and-snippets/#mülakat-köşesi) |
| LLDB'de `v`, `p` ve `po` farkı nedir? | [00-04](../00-setup/drills/04-debugging-basics/#mülakat-köşesi) |
| Uygulama çöktüğünde ilk neye bakarsın? | [00-04](../00-setup/drills/04-debugging-basics/#mülakat-köşesi) |
| Main Thread Checker neyi yakalar? | [00-04](../00-setup/drills/04-debugging-basics/#mülakat-köşesi) |
| Merge, rebase ve squash farkı nedir? | [00-05](../00-setup/drills/05-git-and-github-flow/#mülakat-köşesi) |
| İyi bir PR nasıl olur? | [00-05](../00-setup/drills/05-git-and-github-flow/#mülakat-köşesi) |
| `git reset` ve `git revert` farkı nedir? | [00-05](../00-setup/drills/05-git-and-github-flow/#mülakat-köşesi) |
| SPM, CocoaPods ve Carthage farkı nedir? | [00-06](../00-setup/drills/06-swift-package-and-linting/#mülakat-köşesi) |
| `Package.resolved` commit'lenmeli mi? | [00-06](../00-setup/drills/06-swift-package-and-linting/#mülakat-köşesi) |
| Build tool plugin ile command plugin farkı nedir? | [00-06](../00-setup/drills/06-swift-package-and-linting/#mülakat-köşesi) |

### 01 · Swift Fundamentals
| Soru | Drill |
|---|---|
| `let` ile tanımlanmış bir class örneğinin property'sini değiştirebilir misin? | [01-01](../01-swift-fundamentals/drills/01-values-and-types/#mülakat-köşesi) |
| Swift neden `Int` ve `Double`'ı otomatik dönüştürmez? | [01-01](../01-swift-fundamentals/drills/01-values-and-types/#mülakat-köşesi) |
| `"👨‍👩‍👧".count` neden 1 döner? | [01-01](../01-swift-fundamentals/drills/01-values-and-types/#mülakat-köşesi) |
| Array value type olduğu halde büyük bir diziyi geçirmek neden pahalı değil? | [01-02](../01-swift-fundamentals/drills/02-collections/#mülakat-köşesi) |
| `map`, `compactMap` ve `flatMap` farkı nedir? | [01-02](../01-swift-fundamentals/drills/02-collections/#mülakat-köşesi) |
| Array'de mi Set'te mi `contains` daha hızlıdır? | [01-02](../01-swift-fundamentals/drills/02-collections/#mülakat-köşesi) |
| Optional perde arkasında nedir? | [01-03](../01-swift-fundamentals/drills/03-optionals/#mülakat-köşesi) |
| `if let` ile `guard let` farkı nedir? | [01-03](../01-swift-fundamentals/drills/03-optionals/#mülakat-köşesi) |
| Force unwrap hiç kabul edilebilir mi? | [01-03](../01-swift-fundamentals/drills/03-optionals/#mülakat-köşesi) |
| `user?.address?.city?.count` ifadesinin tipi nedir? | [01-03](../01-swift-fundamentals/drills/03-optionals/#mülakat-köşesi) |
