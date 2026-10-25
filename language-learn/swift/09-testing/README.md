# 09 · Testing

> ⏱ ~8.5 saat (drill'ler) + C2 test sprintleri + C1-S7 · 📅 Due: **20 Ağustos 2027** · Hafta 40–45

Test yazmayı bilerek bu kadar geç bıraktık: önce test edilmesi gereken bir mimari (C2) olsun, sonra testin değerini bizzat yaşa. Bu modülün drill'leri C2'nin sprintleriyle iç içe ilerler. Modülün sonunda C2 yüksek test kapsamına ve CI'a sahip olur, C1'e de geriye dönük testler eklenir.

## Bu modülün sonunda
- XCTest ve Swift Testing ile unit test yazıyorsun; parametrik testleri kullanıyorsun
- Mock, stub ve fake farkını biliyor, protocol tabanlı test double'lar yazıyorsun
- Ağ katmanını `URLProtocol` ile gerçek ağa çıkmadan test ediyorsun
- Async kodu, UI akışlarını ve ekranları (snapshot) test ediyorsun
- Coverage raporunu okuyup anlamlı hedef koyuyorsun; TDD döngüsünü deniyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 09-01 | XCTest basics: assertion'lar, setUp/tearDown, test planı | 1 | kolay | ⬜ |
| 09-02 | Swift Testing: `@Test`, `#expect`, parametrik testler, trait'ler | 1 | kolay | ⬜ |
| 09-03 | Test double'lar ve `URLProtocol` ile ağ stub'ı | 1.5 | orta | ⬜ |
| 09-04 | Async kodu ve ViewModel'leri test etmek | 1.5 | orta | ⬜ |
| 09-05 | XCUITest: accessibility identifier, kritik akış testi | 1.5 | orta | ⬜ |
| 09-06 | Snapshot testing | 1 | orta | ⬜ |
| 09-07 | Coverage ve TDD | 1 | orta | ⬜ |

## Capstone sprintleri
| Sprint | Kapsam | ⏱ |
|---|---|---|
| C2-S6 | Vitrin: ViewModel unit testleri | 4 |
| C2-S7 | Vitrin: network stub + snapshot testleri | 4 |
| C2-S8 | Vitrin: UI testleri + GitHub Actions CI | 4.5 |
| C1-S7 | Kumbara: iş mantığı testleri (bütçe, döviz çevirme) | 4 |

## Paketler
- [swift-snapshot-testing](https://github.com/pointfreeco/swift-snapshot-testing)

## Kaynaklar
- [Swift Testing dokümantasyonu](https://developer.apple.com/documentation/testing)
- [XCTest dokümantasyonu](https://developer.apple.com/documentation/xctest)
- WWDC: *Meet Swift Testing* (2024), *Go further with Swift Testing* (2024)

## Mülakatta bu modülden
Test piramidi · mock/stub/fake/spy · singleton'lar neden test edilemez · `URLProtocol` nasıl çalışır · flaky test nedenleri · coverage %100 olmalı mı · TDD'nin artıları ve eksileri
