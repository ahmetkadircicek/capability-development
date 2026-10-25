# 01 · Swift Fundamentals

> ⏱ ~20 saat · 📅 Due: **20 Kasım 2026** · Hafta 2–6

Dili hızlıca tekrar edip asıl zamanı derinliğe ayırıyoruz: value/reference semantiği, protocol'ler, generics, bellek yönetimi. SwiftUI'daki `some View`, `@Observable` ve `@State` gibi her şey bu temelin üstüne kurulu.

Tüm drill'ler tek bir Swift paketinde çalışır (`Package.swift` bu klasörün kökünde, 00-06'da sen oluşturuyorsun). Her drill bir executable target: `swift run OptionalsDrill`.

## Bu modülün sonunda
- Value type ile reference type farkını ve bunun sonuçlarını açıklayabiliyorsun
- Optional'ları `!` kullanmadan güvenle açıyorsun
- Protocol + extension + generics ile yeniden kullanılabilir kod yazıyorsun; `some` ile `any` farkını biliyorsun
- Retain cycle'ı fark edip `weak`/`unowned` ile çözüyorsun
- JSON'u `Codable` ile modele çeviriyorsun, özel durumları ele alıyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 01-01 | [Values & types](drills/01-values-and-types/) | 0.5 | kolay | ⬜ |
| 01-02 | [Collections](drills/02-collections/) | 1 | kolay | ⬜ |
| 01-03 | [Optionals](drills/03-optionals/) | 1 | kolay | ⬜ |
| 01-04 | Functions & closures (`@escaping`, capture list, trailing closure) | 1.5 | orta | ⬜ |
| 01-05 | Structs vs classes (value semantics, `mutating`, copy-on-write) | 1 | orta | ⬜ |
| 01-06 | Enums & pattern matching (associated value, `switch`, `if case`) | 1 | orta | ⬜ |
| 01-07 | Protocols (default implementation, associated type, POP) | 1.5 | orta | ⬜ |
| 01-08 | Generics (constraint, `where`, `some` vs `any`) | 1.5 | zor | ⬜ |
| 01-09 | Error handling (`throws`, `Result`, typed throws) | 1 | orta | ⬜ |
| 01-10 | Memory & ARC (retain cycle, `weak`/`unowned`, Memory Graph) | 1.5 | zor | ⬜ |
| 01-11 | Codable (`CodingKeys`, custom decoding, date strategy) | 1 | orta | ⬜ |
| 01-12 | Property wrappers & macros | 1 | zor | ⬜ |

Henüz linki olmayan drill'ler sırası gelince yazılacak.

## 🧱 Build: Bookshelf CLI (~6.5 saat)
> **Ticket:** Mahalledeki küçük bir sahaf, kitap stoğunu ve ödünç verdiği kitapları defterde tutuyor. Terminalden çalışan bir araç istiyorlar: kitap ekle, listele, ara, ödünç ver/iade al, geciken kitapları göster. Veriler bir JSON dosyasında saklansın.

Kullanılanlar: struct/class, enum, protocol, generics, error handling, Codable, [swift-argument-parser](https://github.com/apple/swift-argument-parser). Ayrıntılı ticket modülün sonunda `build-bookshelf-cli/README.md` olarak yazılacak.

## Paketler
- 01-02: [swift-collections](https://github.com/apple/swift-collections), [swift-algorithms](https://github.com/apple/swift-algorithms) (bonus)
- Build: [swift-argument-parser](https://github.com/apple/swift-argument-parser)

## Kaynaklar
- [The Swift Programming Language](https://docs.swift.org/swift-book/): modülün ana referansı
- [Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/)
- WWDC: *Embrace Swift generics* (2022), *Design protocol interfaces in Swift* (2022), *ARC in Swift: Basics and beyond* (2021), *Write Swift macros* (2023)
- Kitap (isteğe bağlı): *Advanced Swift* (objc.io)

## Mülakatta bu modülden
Value vs reference type · optional açma yolları · `struct` mı `class` mı · POP · `some` vs `any` · retain cycle · `@escaping` · Codable özel decoding
