# C3 · Pulse: Sağlık / fitness

> ⏱ ~34.5 saat · Modüller: 10–12 · Repo: `ahmetkadircicek/pulse-ios` (private → public)
> 📅 Due: **3 Aralık 2027**

## 🏢 Senaryo
**Şirket:** Pulse Health, kurumsal çalışanlara yönelik dijital sağlık programları yapan bir şirket. Şirketlerin İK departmanlarıyla çalışıyorlar; çalışanların daha hareketli olmasını hedefliyorlar.
**Rolün:** iOS geliştiricisi. Daha önce başka bir platformda (HarmonyOS, Huawei Health Kit) sağlık entegrasyonu yaptığın için bu projeye seçildin.
**Problem:** Kullanıcıların telefonunda ve saatinde zaten sağlık verisi var, ama ham sayılar motive etmiyor. Hedef, kişisel hedef, seri (streak) ve sade içgörülerle davranış değişikliği yaratmak.
**MVP hedefi:** HealthKit verisini güvenle okuyup anlamlı bir günlük/haftalık panoya dönüştürmek ve uygulama dışından (widget, Siri) erişilebilir kılmak. TestFlight ile pilot şirkete dağıtım.

## 👤 Persona
**Can, 31, yazılım geliştirici.** Günün çoğu masa başında geçiyor, Apple Watch'u var ama Health uygulamasındaki grafikler ona bir şey ifade etmiyor. Basit bir hedef ve "bugün ne durumdayım?" sorusunun tek bakışta cevabını istiyor.

## User story'ler

| Öncelik | Story | Kabul kriteri |
|---|---|---|
| P0 | Can olarak hangi veriye neden erişildiğini anlamak ve izin vermek istiyorum | Onboarding ekranı her veri türünü açıklar; izin reddedilirse uygulama çökmez, ne yapması gerektiğini gösterir |
| P0 | Bugünkü durumumu tek ekranda görmek istiyorum | Adım, aktif enerji, dinlenme nabzı, dün geceki uyku; veri yoksa açıklayıcı boş durum |
| P0 | Haftalık ve aylık trendleri görmek istiyorum | Swift Charts; gün/hafta/ay geçişi; grafikler VoiceOver ile okunabilir |
| P0 | Günlük adım hedefi koymak ve serimi görmek istiyorum | Hedef ve geçmiş SwiftData'da; streak hesabı |
| P1 | Ana ekranda bugünkü adımlarımı görmek istiyorum | Widget (küçük ve orta boy), App Group ile veri paylaşımı |
| P1 | Siri'ye "Bugün kaç adım attım?" diye sormak istiyorum | App Intent + Shortcuts |
| P1 | Hedefime ulaşınca bildirim almak istiyorum | Yerel bildirim; background delivery ile güncelleme |
| P1 | Uygulamayı Türkçe ve İngilizce kullanmak istiyorum | String Catalog, tarih/sayı biçimleri yerel ayara uygun |
| P2 | Antrenmanlarımı ve rotalarımı görmek istiyorum | Workout listesi, detayda MapKit rota |
| P2 | Apple Watch'ta özet | watchOS companion (bonus) |
| P2 | Premium içgörüler | StoreKit 2 abonelik (sandbox) |

## Teknik gereksinimler
- **UI:** SwiftUI, MVVM (istersen TCA; kararı ADR'ye yaz).
- **HealthKit:** Tüm erişim bir `HealthDataProvider` protokolü arkasında; testlerde ve simülatörde sahte veri sağlayıcısı kullanılır. Simülatörde Health uygulamasına elle veri girilebilir; ayrıca DEBUG menüsünde örnek veri yazan bir araç olsun.
- **Veri:** SwiftData (hedefler, günlük özet snapshot'ları).
- **Uzantılar:** WidgetKit, App Intents, App Groups.
- **Servisler:** Firebase Crashlytics ve Analytics (S5); event isimlendirme planı README'de.
- **Gizlilik:** Sağlık verisi cihazdan çıkmaz; analytics'e sağlık değeri gönderilmez; privacy manifest eksiksiz.
- **Dağıtım:** fastlane ile TestFlight (S6). **Apple Developer Program ($99/yıl) gerekir**; karar 12. modülde verilir. Üyelik alınmazsa S6 "TestFlight'a hazır build + fastlane yapılandırması" olarak kapanır.
- **Kalite:** SwiftLint, Swift 6, ViewModel ve streak hesabı için testler, CI.

## Definition of Done
- [ ] Tüm P0'lar ve en az 3 P1 tamam
- [ ] İzin reddi, veri yok ve kısmi izin durumları ele alınmış
- [ ] TR/EN tam, VoiceOver ile tüm akışlar kullanılabilir
- [ ] TestFlight build'i (veya hazır fastlane lane'i)
- [ ] En az 3 ADR yazıldı

## Sprint planı

| Sprint | Kapsam | ⏱ | Hedef hafta |
|---|---|---|---|
| S1 | Proje, `HealthDataProvider`, onboarding ve izinler, bugün paneli | 6 | 50–51 (20 Eyl – 1 Eki) |
| S2 | Trend grafikleri (Swift Charts), erişilebilir grafikler | 6 | 51–53 (27 Eyl – 15 Eki) |
| S3 | Hedef ve streak (SwiftData), hedef bildirimleri | 6 | 53–54 (11–22 Eki) |
| S4 | Widget ve App Intents | 6 | 54–55 (18–29 Eki) |
| S5 | Firebase, lokalizasyon, erişilebilirlik cilası | 5 | 56–58 (1–19 Kas) |
| S6 | fastlane, privacy manifest, TestFlight | 5.5 | 59–60 (22 Kas – 3 Ara) |

## 🎯 İşe alımcıya dönük teslimatlar
- [ ] README: hero GIF, widget ve Siri ekran görüntüleri, mimari diyagram, gizlilik yaklaşımı, nasıl çalıştırılır (simülatörde örnek veri dahil)
- [ ] `docs/adr/`: (1) HealthKit erişim katmanı ve test stratejisi (2) SwiftData seçimi (3) Analytics'te gizlilik sınırları
- [ ] `docs/huawei-vs-apple.md`: Huawei Health Kit ile HealthKit kıyas notları (izin modeli, veri türleri, background güncelleme)
- [ ] CI badge'i, TestFlight bağlantısı (varsa)
- [ ] Medium yazısı (Aralık 2027): *Huawei Health Kit vs Apple HealthKit: iki platformda sağlık entegrasyonu*

## 💼 CV ve mülakat
**CV bullet:** Shipped a HealthKit-based fitness app to TestFlight with WidgetKit, App Intents and Swift Charts; bridged prior Huawei Health Kit experience to deliver cross-platform health integrations.

**STAR hikayeleri:**
1. *En zor teknik problem:* (ör. HealthKit background delivery ile widget'ı güncel tutmak)
2. *Trade-off kararı:* (ör. hangi verinin cihazda kalıp hangisinin analytics'e gideceği)

**Bu projeden gelebilecek sorular:**
- HealthKit'te okuma izninin verilip verilmediğini neden bilemezsin?
- Widget'ın verisini nasıl güncel tutuyorsun?
- HealthKit kodunu nasıl test ettin?
- Huawei Health Kit ile en büyük farklar neler?
