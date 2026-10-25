# C1 · Kumbara: Fintech / kişisel finans

> ⏱ ~34 saat (30 + 4 test) · Modüller: 03–05, testler 09 · Repo: `ahmetkadircicek/kumbara-ios` (private → public)
> 📅 MVP: **9 Nisan 2027** · Testler (S7): **20 Ağustos 2027**

## 🏢 Senaryo
**Şirket:** Kumbara, İstanbul merkezli yeni bir fintech girişimi. Banka hesabına bağlanmadan çalışan, gizlilik odaklı bir kişisel finans uygulaması yapıyorlar.
**Rolün:** Ekibin ilk iOS geliştiricisisin. MVP'yi App Store'a hazır hale getirmen bekleniyor.
**Problem:** Kullanıcılar maaşını TL alıyor, birikimini döviz ve nakit olarak tutuyor, harcamalarını birkaç kartta yapıyor. Toplam durumu tek bir yerde, tek bir para biriminde göremiyorlar. Bütçe koysalar bile aşıldığını ay sonunda fark ediyorlar.
**MVP hedefi:** İnternet olmadan da çalışan, güvenli, çok para birimli bir harcama ve bütçe takibi.

## 👤 Persona
**Elif, 27, pazarlama uzmanı.** Maaş hesabı, bir kredi kartı, euro birikim hesabı ve cüzdanında nakit var. Telefonuna kimsenin bakmasını istemiyor. Ay sonu "para nereye gitti?" diye soruyor. Uygulamadan beklentisi: 5 saniyede harcama girmek ve ay ortasında bütçesinin ne durumda olduğunu görmek.

## User story'ler

| Öncelik | Story | Kabul kriteri |
|---|---|---|
| P0 | Elif olarak birden fazla **cüzdan** (nakit, banka, kart, döviz) oluşturmak istiyorum, böylece paramın nerede olduğunu ayrı ayrı göreyim | Cüzdanın adı, türü, para birimi (TRY/USD/EUR…) ve başlangıç bakiyesi var; düzenlenebilir ve silinebilir |
| P0 | Bir **gelir veya gider** girmek istiyorum, böylece bakiyem güncel kalsın | Tutar, kategori, cüzdan, tarih, not; 3 dokunuşta kaydedilir; bakiye anında güncellenir |
| P0 | İşlemleri **güne göre gruplanmış** görmek, aramak ve filtrelemek istiyorum | Liste gün başlıklı; kategoriye ve cüzdana göre filtre; metin araması |
| P0 | Kategori bazında **aylık bütçe** koymak istiyorum, böylece ne kadar harcayabileceğimi bileyim | İlerleme çubuğu; %80'de sarı, %100'de kırmızı |
| P0 | Uygulama **Face ID** ile kilitlensin istiyorum | Açılışta ve arka plandan dönüşte kilit; Face ID yoksa cihaz şifresine düşer |
| P0 | İnternetim yokken de her şey çalışsın | Tüm veri cihazda (Core Data); ağ sadece kur için |
| P1 | Tüm varlığımı **tek para biriminde** görmek istiyorum | Ana para birimi seçilir; kurlar API'den gelir, son kurlar önbelleğe alınır, offline'da "son güncelleme: …" gösterilir |
| P1 | Bütçem aşılmak üzereyken **bildirim** almak istiyorum | %80 ve %100'de yerel bildirim; ayarlardan kapatılabilir |
| P1 | Aylık **raporlar** görmek istiyorum | Swift Charts: kategori dağılımı (donut), 6 aylık trend (bar) |
| P1 | Verilerimi **CSV** olarak dışa aktarmak istiyorum | `ShareLink` ile CSV paylaşımı |
| P2 | Ana ekranda bu ayki harcamamı gösteren bir **widget** | Küçük ve orta boy widget |
| P2 | **Tekrarlayan** işlemler (kira, abonelik) | Aylık otomatik oluşturma |
| — | iCloud senkronizasyonu | Kapsam dışı (ücretli üyelik gerekir) |

## Teknik gereksinimler
- **UI:** SwiftUI, MVVM. Her ekranda yükleniyor, boş, hata ve dolu durumları.
- **Veri:** Core Data (`Wallet` 1–N `Transaction` N–1 `Category`, `Budget`). Erişim bir `Repository` protokolü arkasında, böylece S7'de test edilebilir.
- **Para:** Tutarlar **`Decimal`** olarak tutulur, asla `Double` değil. Biçimlendirme `FormatStyle` ile (`.currency(code:)`), Türkçe yerel ayarına uygun.
- **Ağ:** [Frankfurter](https://frankfurter.dev) (ECB kurları, key gerektirmez). `URLSession` + `async/await` + `Codable`. Kurlar önbelleğe alınır. Sprint başında endpoint'i ve TRY desteğini doğrula.
- **Güvenlik:** LocalAuthentication; hassas ayarlar Keychain'de; uygulama arka plana gidince içerik bulanıklaşır.
- **Erişilebilirlik:** Dynamic Type, VoiceOver etiketleri, grafikler için `accessibilityChartDescriptor`.
- **Kalite:** SwiftLint temiz, Swift 6 language mode, S7'de iş mantığı için %70+ test kapsamı.

## Definition of Done
- [ ] Tüm P0'lar ve en az 3 P1 tamam
- [ ] Uçak modunda tüm P0 akışları çalışıyor
- [ ] Koyu mod ve en büyük Dynamic Type'ta layout bozulmuyor
- [ ] README işe alımcıya hazır (aşağıdaki teslimatlar)
- [ ] En az 3 ADR yazıldı
- [ ] (S7 sonrası) iş mantığı testleri ve CI yeşil

## Sprint planı

| Sprint | Kapsam | ⏱ | Hedef hafta |
|---|---|---|---|
| S1 | Proje kurulumu, klasör yapısı, Core Data modeli, Repository, cüzdan CRUD | 6 | 20–21 (22 Şub – 5 Mar) |
| S2 | İşlem girişi, gün gruplu liste, arama/filtre, bakiye hesaplama | 7 | 21–23 (1–19 Mar) |
| S3 | Kategori bütçeleri, ilerleme, yerel bildirimler | 5 | 23–24 (15–26 Mar) |
| S4 | Kur servisi, önbellek, ana para birimine çevirme | 4 | 24 (22–26 Mar) |
| S5 | Swift Charts raporları, CSV export | 4 | 24–25 (22 Mar – 2 Nis) |
| S6 | Face ID kilidi, gizlilik bulanıklığı, widget (P2), cila, README | 4 | 25–26 (29 Mar – 9 Nis) |
| S7 | İş mantığı testleri (bütçe hesabı, kur çevirme, repository), CI | 4 | 44–45 (9–20 Ağu) |

## 🎯 İşe alımcıya dönük teslimatlar
- [ ] README: hero GIF (işlem girme → bütçe güncellenmesi), 4–6 ekran görüntüsü (açık + koyu), özellikler, mimari diyagram, teknoloji listesi, nasıl çalıştırılır
- [ ] `docs/adr/`: (1) Neden Core Data, SwiftData değil? (2) Para neden `Decimal`? (3) Kur önbellekleme stratejisi
- [ ] CI ve coverage badge'i (S7)
- [ ] 60 saniyelik demo videosu
- [ ] Medium yazısı (Nisan 2027): *Offline-first SwiftUI finans uygulaması: Core Data + Keychain'den dersler*

## 💼 CV ve mülakat
**CV bullet:** Built an offline-first personal finance app in SwiftUI with Core Data, Face ID/Keychain security, live currency rates and Swift Charts reporting; covered business logic with X% unit tests.

**STAR hikayeleri:**
1. *En zor teknik problem:* (ör. çok para birimli bakiyeyi offline'da tutarlı hesaplamak)
2. *Trade-off kararı:* (ör. SwiftData yerine Core Data seçmek)

**Bu projeden gelebilecek sorular:**
- Para hesaplamalarında neden `Double` kullanmadın?
- Core Data'yı arka planda nasıl kullandın, thread kuralları ne?
- Face ID başarısız olursa ne oluyor?
- Kur API'si çökerse uygulama ne gösteriyor?
