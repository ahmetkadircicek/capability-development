# 10 · Platform Features

> ⏱ ~14 saat (drill'ler) · 📅 Due: **24 Eylül 2027** · Hafta 46–50 · birlikte 🏆 [C3 Pulse](../capstones/03-pulse/)

Bir uygulamayı "iOS uygulaması" yapan şeyler: bildirimler, widget'lar, Siri/Shortcuts, harita, kamera, sağlık verisi, uygulama içi satın alma. Bu modül başvuru kapısından sonra, başvurularla paralel ilerler. Drill'ler kısa ve odaklı; asıl uygulama C3'te.

## Bu modülün sonunda
- Yerel ve push bildirimlerinin akışını biliyor, simülatörde push test ediyorsun
- HealthKit'ten izinli veri okuyup yazıyorsun
- Widget, App Intent ve deep link ile uygulamanın dışından erişim sağlıyorsun
- StoreKit 2 ile abonelik/satın alma akışı kuruyorsun
- Uygulamayı TR/EN yerelleştiriyor ve erişilebilirlik denetiminden geçiriyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 10-01 | Local notifications (UserNotifications) | 1 | kolay | ⬜ |
| 10-02 | Push notifications: APNs akışı, simülatöre push | 1 | orta | ⬜ |
| 10-03 | MapKit ve CoreLocation | 1.5 | orta | ⬜ |
| 10-04 | PhotosPicker ve kamera | 1 | kolay | ⬜ |
| 10-05 | HealthKit: izinler, okuma, yazma, sorgular | 1.5 | orta | ⬜ |
| 10-06 | WidgetKit | 1.5 | orta | ⬜ |
| 10-07 | App Intents ve Shortcuts | 1 | orta | ⬜ |
| 10-08 | StoreKit 2: ürünler, satın alma, abonelik durumu | 1.5 | zor | ⬜ |
| 10-09 | Lokalizasyon: String Catalog | 1 | kolay | ⬜ |
| 10-10 | Accessibility: VoiceOver, Dynamic Type | 1 | orta | ⬜ |
| 10-11 | Deep link ve universal link | 1 | orta | ⬜ |
| 10-12 | Background tasks (`BGTaskScheduler`) | 1 | orta | ⬜ |

## 🏆 Capstone 3: Pulse
Sağlık / fitness uygulaması. Brief: [capstones/03-pulse/](../capstones/03-pulse/)

## Kaynaklar
- [HealthKit dokümantasyonu](https://developer.apple.com/documentation/healthkit)
- [WidgetKit dokümantasyonu](https://developer.apple.com/documentation/widgetkit)
- [App Intents dokümantasyonu](https://developer.apple.com/documentation/appintents)
- [StoreKit dokümantasyonu](https://developer.apple.com/documentation/storekit)
- WWDC: *Meet StoreKit 2* (2021), *Discover String Catalogs* (2023), *Meet MapKit for SwiftUI* (2023), *Bring widgets to life* (2023), *Bring your app's core features to users with App Intents* (2024)

## Mülakatta bu modülden
Push notification akışı uçtan uca · widget timeline nasıl çalışır · background modları ve sınırları · HealthKit gizlilik modeli · StoreKit 2 transaction doğrulama · universal link nasıl kurulur
