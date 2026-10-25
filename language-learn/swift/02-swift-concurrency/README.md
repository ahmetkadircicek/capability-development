# 02 · Swift Concurrency

> ⏱ ~15 saat · 📅 Due: **11 Aralık 2026** · Hafta 6–9

Swift 6 ile strict concurrency varsayılan oldu: derleyici data race'leri derleme anında yakalıyor. Bu modül hem eski dünyayı (GCD, mülakatlarda hâlâ soruluyor) hem de yeni dünyayı (async/await, actor, `Sendable`) kapsıyor. Dart'taki `async/await` bilgin burada avantaj, ama Swift'in **structured concurrency** ve **actor** modeli Dart'ın isolate'lerinden farklı.

01 gibi tek bir Swift paketi içinde çalışılır.

## Bu modülün sonunda
- GCD ile ana/arka plan kuyruklarını ve race condition'ı açıklayabiliyorsun
- `async/await`, `Task`, cancellation ve `TaskGroup` ile paralel iş yazıyorsun
- Actor ile paylaşılan durumu koruyor, `@MainActor` ve `Sendable` hatalarını anlayıp çözüyorsun
- `AsyncSequence`/`AsyncStream` üretip tüketiyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 02-01 | GCD & OperationQueue (legacy ama mülakatta var) | 1.5 | orta | ⬜ |
| 02-02 | async/await ve suspension point | 1.5 | orta | ⬜ |
| 02-03 | Task, cancellation, priority | 1.5 | orta | ⬜ |
| 02-04 | Structured concurrency: `async let`, `TaskGroup` | 1.5 | zor | ⬜ |
| 02-05 | Actors, `@MainActor`, `Sendable`, Swift 6 strict mode | 2 | zor | ⬜ |
| 02-06 | AsyncSequence, AsyncStream ve swift-async-algorithms | 1.5 | orta | ⬜ |

## 🧱 Build: Concurrent Downloader CLI (~5.5 saat)
> **Ticket:** İçerik ekibi her sabah yüzlerce görsel URL'sini tek tek indiriyor. Bir URL listesini paralel indiren (aynı anda en fazla N indirme), ilerlemeyi gösteren, Ctrl+C ile temiz şekilde iptal olan ve hataları raporlayan bir komut satırı aracı istiyorlar.

Kullanılanlar: `TaskGroup`, actor ile ilerleme sayacı, cancellation, `AsyncStream`.

## Paketler
- [swift-async-algorithms](https://github.com/apple/swift-async-algorithms) (02-06)

## Kaynaklar
- [Swift Book: Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/)
- [Swift 6 migration guide](https://www.swift.org/migration/documentation/migrationguide/)
- [Swift Concurrency by Example](https://www.hackingwithswift.com/quick-start/concurrency) (Hacking with Swift)
- WWDC: *Meet async/await in Swift* (2021), *Explore structured concurrency in Swift* (2021), *Protect mutable state with Swift actors* (2021), *Eliminate data races using Swift Concurrency* (2022), *Migrate your app to Swift 6* (2024)

## Mülakatta bu modülden
GCD serial/concurrent · deadlock · async/await nasıl çalışır · structured vs unstructured task · actor reentrancy · `@MainActor` · `Sendable` · Task cancellation cooperative mı?

## 📝 Medium yazısı adayı (Aralık 2026)
*Swift 6 strict concurrency, Dart isolates/async gözüyle*
