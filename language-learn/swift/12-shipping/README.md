# 12 · Shipping

> ⏱ ~8.5 saat (drill'ler) · 📅 Due: **26 Kasım 2027** · Hafta 58–59 · C3 → TestFlight

Kod yazmak işin yarısı; uygulamayı güvenle, tekrarlanabilir şekilde kullanıcıya ulaştırmak diğer yarısı. Bu modülde imzalamayı derinlemesine öğreniyor, ortamları (dev/staging/prod) ayırıyor, performansı ölçüyor, CI/CD kuruyor ve C3'ü TestFlight'a çıkarıyoruz.

> **Karar noktası:** TestFlight ve App Store için Apple Developer Program ($99/yıl) gerekli. Bu modüle gelince birlikte karar vereceğiz ([toolbox/signing.md](../toolbox/signing.md)).

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 12-01 | Signing derinlemesine: sertifika, profile, capability, manual signing | 1.5 | orta | ⬜ |
| 12-02 | Build configuration, scheme, `.xcconfig`, dev/staging/prod ortamları | 1.5 | orta | ⬜ |
| 12-03 | Instruments: Time Profiler, Allocations, Leaks, Hangs | 1.5 | zor | ⬜ |
| 12-04 | GitHub Actions ile iOS CI | 1.5 | orta | ⬜ |
| 12-05 | fastlane: build, test, TestFlight yükleme | 1.5 | orta | ⬜ |
| 12-06 | TestFlight ve App Store: App Store Connect, privacy manifest, review süreci | 1 | orta | ⬜ |

## Kurulacaklar
- 📦 xcodes, xcbeautify, fastlane ([toolbox/apps.md](../toolbox/apps.md))

## Kaynaklar
- [App Store Connect yardım](https://developer.apple.com/help/app-store-connect/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [fastlane dokümantasyonu](https://docs.fastlane.tools)
- WWDC: *Analyze hangs with Instruments* (2023), *Get started with privacy manifests* (2023)

## Mülakatta bu modülden
Development ve distribution sertifikası farkı · uygulama neden review'dan reddedilir · ortam yönetimi nasıl yapılır · CI'da imzalama nasıl çözülür · memory leak'i nasıl bulursun · app launch süresi nasıl ölçülür
