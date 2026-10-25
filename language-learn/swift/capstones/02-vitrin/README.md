# C2 · Vitrin: E-ticaret

> ⏱ ~40.5 saat (28 geliştirme + 12.5 test/CI) · Modüller: 06–09 · Repo: `ahmetkadircicek/vitrin-ios` (private → public)
> 📅 Due: **13 Ağustos 2027**

## 🏢 Senaryo
**Şirket:** Vitrin, Türkiye'de büyüyen bir online marketplace. Web sitesi var, iOS uygulamasını sıfırdan yazacak bir ekip kuruyorlar.
**Rolün:** iOS ekibine katılan developer. Ekibin standartları belli: **UIKit**, MVVM-C, feature bazlı SPM modülleri, her PR'da test ve CI.
**Problem:** Mobil trafiğin büyük kısmı web üzerinden geliyor; dönüşüm oranı düşük, sepete ekleme süreci yavaş. Hızlı açılan, aramanın anında sonuç verdiği, sepetin kaybolmadığı native bir uygulama isteniyor.
**MVP hedefi:** Keşfet → ara → ürün detay → sepete ekle → giriş yap akışının sorunsuz çalışması.

## 👤 Persona
**Mert, 34, satış müdürü.** Alışverişini akşam işten dönerken telefondan yapıyor. Kampanyaları görmek, aradığını iki harfte bulmak ve sepetinin uygulamayı kapatınca kaybolmamasını istiyor. Yavaş açılan ekranlara sabrı yok.

## User story'ler

| Öncelik | Story | Kabul kriteri |
|---|---|---|
| P0 | Mert olarak ana sayfada kampanyaları, kategorileri ve önerilen ürünleri görmek istiyorum | Compositional layout: banner carousel + yatay kategori listesi + ürün grid'i; görseller önbellekli |
| P0 | Bir kategorinin ürünlerini kaydırarak gezmek istiyorum | Sayfalama (sonsuz kaydırma), yükleniyor/boş/hata durumları |
| P0 | Ürün aramak istiyorum ve sonuçlar yazarken gelsin | Combine ile 300 ms debounce, boş sorgu ve sonuç yok durumları, son aramalar |
| P0 | Ürün detayını görmek istiyorum | Görsel galerisi, fiyat, indirim, puan, stok, "Sepete ekle" |
| P0 | Sepetimi yönetmek istiyorum | Adet artır/azalt, sil, toplam; sepet cihazda kalıcı |
| P0 | Giriş yapmak istiyorum ve oturumum kendiliğinden yenilensin | Login; token'lar Keychain'de; access token süresi dolunca interceptor refresh eder, eşzamanlı isteklerde tek bir refresh yapılır |
| P1 | Ürünleri favorilere eklemek istiyorum | Favoriler listesi, kalıcı |
| P1 | Listeyi aşağı çekerek yenilemek istiyorum | Pull-to-refresh |
| P1 | Yüklenirken iskelet (skeleton) görmek istiyorum | Shimmer'lı placeholder hücreler |
| P1 | Bir linkten doğrudan ürüne gitmek istiyorum | `vitrin://product/12` deep link'i Coordinator ile açılır |
| P2 | Sahte ödeme akışı ve sipariş geçmişi | Adres → özet → "sipariş verildi" |
| P2 | iPad'de uygun layout | Size class'a göre grid sütun sayısı |

## Teknik gereksinimler
- **API:** [DummyJSON](https://dummyjson.com/docs) (key gerektirmez): `/products`, `/products/search`, `/products/categories`, `/products/category/{slug}`, `/auth/login`, `/auth/me`, `/auth/refresh`, `/carts`. Sprint başında güncel dokümanı kontrol et.
- **UI:** UIKit, programatik layout + SnapKit, compositional layout + diffable data source, Kingfisher.
- **Mimari:** MVVM-C. ViewModel'ler Combine ile bağlanır, navigasyon Coordinator'larda.
- **Modüller (local SPM paketleri):**
  ```
  App (composition root, DI)
  ├── Features/Home, Search, ProductDetail, Cart, Auth
  ├── DesignSystem (renkler, tipografi, ortak component'ler)
  ├── Networking (Alamofire client, Endpoint, RequestInterceptor)
  ├── Persistence (sepet, favoriler, Keychain)
  └── Core (modeller, yardımcılar)
  ```
  Feature modülleri birbirini import etmez; iletişim Coordinator ve protokoller üzerinden.
- **DI:** Factory veya initializer injection (kararı ADR'ye yaz).
- **Token refresh:** Refresh sırasında gelen istekler bekletilir ve tek bir refresh yapılır (actor ile).
- **Test (S6–S8):** ViewModel unit testleri (Swift Testing), `URLProtocol` ile network stub, DesignSystem ve kritik ekranlar için snapshot testleri, "ara → detay → sepete ekle" XCUITest akışı. Hedef **%70+** coverage.
- **CI:** GitHub Actions, PR'da build + test. Private repoda macOS dakikaları sınırlı olduğu için sadece PR'larda çalışır.

## Definition of Done
- [ ] Tüm P0'lar ve en az 3 P1 tamam
- [ ] Coverage %70+, CI yeşil, badge'ler README'de
- [ ] Modül bağımlılık grafiği README'de
- [ ] Koyu mod ve Dynamic Type sorunsuz
- [ ] En az 3 ADR yazıldı

## Sprint planı

| Sprint | Kapsam | ⏱ | Hedef hafta |
|---|---|---|---|
| S1 | Modüler iskelet, DesignSystem, Coordinator altyapısı, DI | 5 | 34–35 (31 May – 11 Haz) |
| S2 | Networking modülü, Endpoint'ler, login, Keychain, token refresh interceptor | 6 | 35–36 (7–18 Haz) |
| S3 | Ana sayfa: compositional layout, banner, kategoriler, ürün grid'i | 6 | 36–38 (14 Haz – 2 Tem) |
| S4 | Arama (Combine debounce) ve ürün detay | 5 | 38–39 (28 Haz – 9 Tem) |
| S5 | Sepet ve favoriler (kalıcı), deep link | 6 | 39–40 (5–16 Tem) |
| S6 | ViewModel unit testleri | 4 | 41–43 (19 Tem – 6 Ağu) |
| S7 | Network stub ve snapshot testleri | 4 | 43–44 (2–13 Ağu) |
| S8 | XCUITest akışı ve GitHub Actions CI | 4.5 | 44 (9–13 Ağu) |

## 🎯 İşe alımcıya dönük teslimatlar
- [ ] README: hero GIF (ana sayfa → arama → detay → sepet), ekran görüntüleri, modül grafiği, teknoloji listesi, nasıl çalıştırılır
- [ ] `docs/adr/`: (1) Neden UIKit? (2) Modül sınırları ve bağımlılık kuralları (3) Token refresh eşzamanlılık stratejisi
- [ ] CI, coverage ve Swift sürümü badge'leri
- [ ] 90 saniyelik demo videosu
- [ ] Medium yazısı (Temmuz–Ağustos 2027): *SPM + MVVM-C ile modüler iOS mimarisi*

## 💼 CV ve mülakat
**CV bullet:** Developed a modular UIKit e-commerce app (MVVM-C, N SPM modules, DI) with token-refresh networking via Alamofire, compositional layouts and Combine-driven search; reached X% test coverage with unit, snapshot and UI tests in GitHub Actions CI.

**STAR hikayeleri:**
1. *En zor teknik problem:* (ör. eşzamanlı isteklerde token refresh yarışını çözmek)
2. *Trade-off kararı:* (ör. modül sayısı ile build süresi/karmaşıklık dengesi)

**Bu projeden gelebilecek sorular:**
- Feature modülleri birbirine nasıl bağlanıyor?
- Aynı anda 5 istek 401 dönerse ne oluyor?
- Diffable data source'u neden seçtin, hücrelerde görsel karışmasını nasıl önledin?
- Snapshot testleri hangi durumlarda kırılıyor, nasıl yönetiyorsun?
