# 07 · UIKit

> ⏱ ~24 saat · 📅 Due: **28 Mayıs 2027** · Hafta 26–33

Türkiye'deki iOS ilanlarının çoğu UIKit istiyor: büyük bankacılık ve e-ticaret uygulamaları yıllar içinde UIKit ile yazıldı ve hâlâ öyle büyüyor. Bu modül senin için en yeni ve en zor alanlardan biri, o yüzden süreler cömert tutuldu. Sonunda C2'yi tamamen UIKit ile yapabilecek seviyeye geleceksin.

Modülün başında bir **`UIKitDrills`** Xcode projesi oluşturursun (programatik UI, storyboard'suz başlangıç).

## Bu modülün sonunda
- App ve view controller yaşam döngüsünü, scene'leri açıklayabiliyorsun
- Auto Layout'u koddan kuruyor, hugging/compression kavramlarını biliyorsun
- Modern `UICollectionView` (compositional layout + diffable data source) ile karmaşık ekranlar yapıyorsun
- Navigasyonu Coordinator ile view controller'lardan ayırıyorsun
- Eski kodu okuyabiliyorsun: storyboard, XIB, delegate, KVO, Objective-C bridging header

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 07-01 | App lifecycle (AppDelegate, SceneDelegate) ve VC yaşam döngüsü | 1.5 | orta | ⬜ |
| 07-02 | Programatik Auto Layout: anchor, `UIStackView`, safe area, hugging/compression | 2 | zor | ⬜ |
| 07-03 | Storyboard ve XIB (okuma ve bakım düzeyinde), `IBOutlet`/`IBAction` | 1 | kolay | ⬜ |
| 07-04 | `UITableView`: data source, delegate, cell reuse, custom cell | 1.5 | orta | ⬜ |
| 07-05 | Modern `UICollectionView`: compositional layout, diffable data source, cell registration | 2 | zor | ⬜ |
| 07-06 | `UINavigationController`, modal sunum ve Coordinator kalıbı | 1.5 | orta | ⬜ |
| 07-07 | İletişim kalıpları: delegate, closure, NotificationCenter, KVO | 1.5 | orta | ⬜ |
| 07-08 | SnapKit | 0.5 | kolay | ⬜ |
| 07-09 | SwiftUI ↔ UIKit: `UIHostingController`, `UIViewRepresentable`; Objective-C bridging | 1 | orta | ⬜ |

## 🧱 Build: HNReader (~11.5 saat)
> **Ticket:** Bir medya şirketi teknoloji haberleri için hafif bir okuyucu istiyor. [Hacker News API](https://github.com/HackerNews/API) (key gerektirmez) ile top/new/best sekmeleri, pull-to-refresh, sonsuz kaydırma, makaleyi uygulama içinde açma (`SFSafariViewController`) ve yer imleri. Tamamen UIKit, MVVM + Coordinator, binding Combine ile.

## Paketler
- SnapKit (07-08)

## Kaynaklar
- [UIKit dokümantasyonu](https://developer.apple.com/documentation/uikit)
- [Implementing Modern Collection Views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views) (Apple örnek projesi)
- WWDC: *Lists in UICollectionView* (2020), *Modern cell configuration* (2020), *Advances in UICollectionView* (2020), *Use SwiftUI with UIKit* (2022)

## Mülakatta bu modülden
VC yaşam döngüsü sırası · `viewDidLayoutSubviews` ne zaman · cell reuse ve görsel karışması · diffable data source neden · frame vs bounds · delegate neden `weak` · Coordinator'ın faydası · `layoutIfNeeded` vs `setNeedsLayout`

## 📝 Medium yazısı adayı (Haziran 2027)
*SwiftUI çağında neden hâlâ UIKit? Compositional layout + diffable*
