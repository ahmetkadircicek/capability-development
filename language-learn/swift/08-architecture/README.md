# 08 · Architecture

> ⏱ ~8 saat (drill'ler) · 📅 Due: **4 Haziran 2027** · Hafta 33–34 · ardından 🏆 [C2 Vitrin](../capstones/02-vitrin/)

Buraya kadar "çalışan kod" yazdık. Bu modülde "büyüyebilen, test edilebilen, ekipçe geliştirilebilen kod"a geçiyoruz. Mülakatlarda en çok derinleşilen konu mimaridir: "Neden MVVM?", "DI'ı nasıl yaptın?", "Modülleri nasıl ayırdın?".

Modülün sonunda doğrudan **Capstone 2: Vitrin** başlar; drill'lerde öğrendiğin her şey orada gerçek ölçekte uygulanır.

## Bu modülün sonunda
- MVC'nin sorunlarını ve MVVM'in çözdüğü şeyi somut olarak gösterebiliyorsun
- Initializer injection, protocol-based DI ve bir DI container kullanıyorsun
- Katmanları ayırıyorsun: UI → ViewModel → UseCase/Repository → Data
- Local SPM paketleriyle bir uygulamayı modüllere bölüyorsun
- TCA'nın temel fikrini ve ne zaman tercih edildiğini anlatabiliyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 08-01 | MVC → MVVM: aynı ekranı iki mimariyle yazmak | 1.5 | orta | ⬜ |
| 08-02 | Dependency injection: initializer, protocol, Factory, Swinject kıyası | 1.5 | orta | ⬜ |
| 08-03 | Clean katmanlar ve repository kalıbı | 1.5 | zor | ⬜ |
| 08-04 | SPM ile modülerleştirme: local package'lar, feature modülleri; Tuist/XcodeGen farkındalığı | 2 | zor | ⬜ |
| 08-05 | TCA'ya giriş: state, action, reducer, store | 1.5 | zor | ⬜ |

## 🏆 Capstone 2: Vitrin
E-ticaret uygulaması. Brief: [capstones/02-vitrin/](../capstones/02-vitrin/)

## Paketler
- [Factory](https://github.com/hmlongco/Factory), [swift-dependencies](https://github.com/pointfreeco/swift-dependencies), [TCA](https://github.com/pointfreeco/swift-composable-architecture)

## Kaynaklar
- [Essential Developer](https://www.essentialdeveloper.com): modüler tasarım ve test edilebilirlik
- [Point-Free](https://www.pointfree.co): TCA ve dependency yönetimi
- [Swift by Sundell: Architecture](https://www.swiftbysundell.com/articles/) (ilgili makaleler)
- WWDC: *Meet Swift Package plugins* (2022)

## Mülakatta bu modülden
MVC/MVVM/VIPER/TCA trade-off'ları · DI türleri ve service locator farkı · SOLID'in iOS'taki karşılıkları · modülerleştirmenin build süresine etkisi · feature modülleri birbirine nasıl bağlanır

## 📝 Medium yazısı adayı (Temmuz–Ağustos 2027)
*SPM + MVVM-C ile modüler iOS mimarisi: bir e-ticaret case study'si*
