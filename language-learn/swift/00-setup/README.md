# 00 · Setup

> ⏱ ~8 saat · 📅 Due: **23 Ekim 2026** · Hafta 1–2

Kodlamaya başlamadan önce atölyeyi kuruyoruz: Xcode'u tanı, ayarla, kısayollarını öğren, debug etmeyi ve bu repodaki PR akışını öğren. Bu modülün sonunda ilk PR'ını açmış ve merge etmiş olacaksın.

## Bu modülün sonunda
- Xcode'un ana bölümlerini ve simülatörü rahatça kullanıyorsun
- Xcode ayarların yapılmış, kişisel Apple ID'n ve geliştirme sertifikan hazır
- En sık kullanılan 20 kısayolu biliyor, kendi snippet'lerini oluşturmuş oluyorsun
- Breakpoint ve LLDB ile bir hatayı `print` kullanmadan buluyorsun
- Branch açıp commit atıyor, PR açıp merge ediyorsun
- 01 modülünde kullanacağın Swift paketini SwiftLint ile birlikte kurmuş oluyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 00-01 | [Xcode turu ve ilk proje](drills/01-xcode-tour/) | 1.5 | kolay | ⬜ |
| 00-02 | [Xcode ayarları, Apple ID ve imza](drills/02-xcode-settings-and-signing/) | 1 | kolay | ⬜ |
| 00-03 | [Kısayollar, snippet'ler, file template'leri](drills/03-shortcuts-and-snippets/) | 1 | kolay | ⬜ |
| 00-04 | [Debugging temelleri](drills/04-debugging-basics/) | 1.5 | orta | ⬜ |
| 00-05 | [Git & GitHub akışı: ilk PR'ın](drills/05-git-and-github-flow/) | 2 | orta | ⬜ |
| 00-06 | [Swift paketi, SwiftLint ve swift format](drills/06-swift-package-and-linting/) | 1 | kolay | ⬜ |

> **Sıra hakkında:** PR akışını 00-05'te öğreneceğiz. O yüzden 00-01 ile 00-04 arasında yaptığın her şey (ilk Xcode projen, snippet'lerin, debugging alıştırman) commit'lenmeden bekler ve 00-05'te açacağın **ilk PR**'a girer. 00-06'dan itibaren her drill kendi PR'ıyla biter.

## Kurulacaklar
- SwiftLint (00-06'da, SPM plugin olarak)
- Başka bir şey yok: araçlar ihtiyaç duyuldukları modülde kurulur ([toolbox/apps.md](../toolbox/apps.md))

## Kaynaklar
- [Xcode dokümantasyonu](https://developer.apple.com/documentation/xcode)
- [toolbox/xcode-shortcuts.md](../toolbox/xcode-shortcuts.md), [toolbox/xcode-settings.md](../toolbox/xcode-settings.md), [toolbox/debugging.md](../toolbox/debugging.md)
- [docs/workflow.md](../docs/workflow.md)
