# Kariyer

Başvuru kapısına (**27 Ağustos 2027**) kadar hazır olacak şeyler. 13-career modülünde işlenir, ama capstone'lar ilerledikçe burası da dolar.

## Hikayen (elevator pitch)

İK görüşmesinin ilk sorusu genelde "Kendinden bahset" olur. 60 saniyelik taslak, capstone'lar bittikçe güncellenecek:

> Mobil geliştiriciyim. Flutter ve HarmonyOS üzerinde çalıştım, özellikle sağlık ve giyilebilir cihaz entegrasyonlarında (Huawei Health Kit) derinleştim. Son bir yılda native iOS'a geçiş yaptım: Swift 6 ve SwiftUI ile offline-first bir finans uygulaması, UIKit ve modüler mimariyle test kapsamı yüksek bir e-ticaret uygulaması ve HealthKit tabanlı bir sağlık uygulaması geliştirdim. Platformlar arası deneyimim sayesinde bir problemi farklı ekosistemlerin çözümleriyle kıyaslayarak düşünebiliyorum.

## CV bullet'ları

Formül: **eylem fiili + ne + nasıl (teknoloji) + ölçülebilir sonuç**. Capstone bitince gerçek sayılarla güncellenir.

| Proje | Bullet taslağı |
|---|---|
| Kumbara | Built an offline-first personal finance app in SwiftUI with Core Data, Face ID/Keychain security, live currency rates and Swift Charts reporting; covered business logic with X% unit tests. |
| Vitrin | Developed a modular UIKit e-commerce app (MVVM-C, N SPM modules, DI) with token-refresh networking via Alamofire, compositional layouts and Combine-driven search; reached X% test coverage with unit, snapshot and UI tests in GitHub Actions CI. |
| Pulse | Shipped a HealthKit-based fitness app to TestFlight with WidgetKit, App Intents and Swift Charts; bridged prior Huawei Health Kit experience to deliver cross-platform health integrations. |
| swift-learn (private) | Completed a 280-hour structured iOS curriculum with 80+ reviewed pull requests under a protected-branch workflow. Repo private; mülakatta istenirse ekran paylaşımıyla gösterilir. |
| Medium | Published N technical articles on iOS development (link). |

## Portfolyo

- [ ] GitHub profil README'si: pinned repolar = 3 capstone (swift-learn private olduğu için pinlenmez)
- [ ] Her capstone README'si: hero GIF, özellik listesi, mimari diyagram, teknoloji listesi, "nasıl çalıştırılır", test/CI badge'leri, ADR linkleri
- [ ] [ahmetkadircicek.com.tr](https://ahmetkadircicek.com.tr) portfolyo sitesine iOS projeleri bölümü
- [ ] Medium yazıları profil ve CV'de linkli
- [ ] LinkedIn başlığı: "iOS Developer · Swift · SwiftUI · UIKit"; "Featured" bölümüne capstone'lar

## Capstone'ları public'e alma kontrol listesi

- [ ] Gizli bilgi yok: API key, token, `.env`, `GoogleService-Info.plist` (`git log -p` ile geçmişi de tara)
- [ ] README tamam, ekran görüntüleri ve GIF var
- [ ] Lisans dosyası (MIT)
- [ ] CI yeşil, badge README'de
- [ ] Repo açıklaması ve topic'ler (`ios`, `swift`, `swiftui`, `uikit` …)
- [ ] `gh repo edit --visibility public`
- [ ] main ruleset'i baştan kurulu (GitHub Pro); public'e geçince de aynen geçerli kalır, kontrol et

## STAR hikaye şablonu

Her capstone için iki hikaye: **en zor teknik problem** ve **verilen bir trade-off kararı**.

```
Proje:
Situation: (bağlam, 1–2 cümle)
Task:      (çözmen gereken şey)
Action:    (ne yaptın: araştırma, denemeler, seçtiğin çözüm ve neden)
Result:    (sonuç, mümkünse sayı: süre, coverage, crash oranı, performans)
Öğrendiğim:
```

## Take-home case stratejisi

1. İlk 15 dakika: gereksinimleri oku, belirsizlikleri yaz, varsayımlarını README'de belirt.
2. Önce çalışan dikey dilim: bir ekran, gerçek veri, hata durumu.
3. Mimariyi abartma; ama katmanları ayır ve en az bir test yaz.
4. Son 30 dakika: README (nasıl çalıştırılır, kararlar, "daha fazla zamanım olsaydı").
5. Teslimden önce: temiz clone'dan derle ve çalıştır.
