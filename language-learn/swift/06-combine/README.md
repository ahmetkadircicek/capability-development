# 06 · Combine

> ⏱ ~5 saat · 📅 Due: **9 Nisan 2027** · Hafta 26

Yeni kodda `async/await` ve `AsyncSequence` öne geçti, ama Combine iki yerde hâlâ çok önemli: UIKit + MVVM binding'i ve mevcut kurumsal kodbaşları. Bu kısa modül, 07'deki UIKit ve C2'deki arama ekranı için temel hazırlar. Dart'taki `Stream` bilgin burada işe yarar.

## Bu modülün sonunda
- Publisher, subscriber ve `AnyCancellable` yaşam döngüsünü açıklayabiliyorsun
- `map`, `filter`, `flatMap`, `combineLatest`, `debounce`, `removeDuplicates` kullanıyorsun
- `@Published` ile bir ViewModel'i UIKit view'ına bağlıyorsun
- Aynı problemi Combine ve AsyncSequence ile çözüp kıyaslıyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 06-01 | Publishers & subscribers: `Just`, `PassthroughSubject`, `CurrentValueSubject`, `sink` | 1.25 | orta | ⬜ |
| 06-02 | Operatörler ve hata yönetimi | 1.5 | orta | ⬜ |
| 06-03 | `@Published` + ViewModel binding, debounce'lu arama | 1.25 | orta | ⬜ |
| 06-04 | Combine vs AsyncSequence: aynı problemi iki yolla çözmek | 1 | orta | ⬜ |

## Kaynaklar
- [Combine dokümantasyonu](https://developer.apple.com/documentation/combine)
- [Using Combine](https://heckj.github.io/swiftui-notes/) (Joseph Heck, ücretsiz kitap)
- WWDC: *Introducing Combine* (2019), *Combine in Practice* (2019)

## Mülakatta bu modülden
Hot vs cold publisher · `AnyCancellable` saklanmazsa ne olur · `flatMap` ile `switchToLatest` farkı · `[weak self]` sink içinde neden · Combine mı async/await mı
