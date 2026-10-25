# 01-03 · Optionals

> ⏱ ~1 saat · 🎚️ kolay · ⬅️ [01-02](../02-collections/) · ➡️ 01-04 Functions & closures (yakında)
> Branch: `drill/01-03-optionals` · Target: `OptionalsDrill` (Package.swift'e sen ekle, `path: "drills/03-optionals/Sources"`)

## Neden önemli?
iOS uygulamalarındaki çökmelerin klasik nedeni: `nil` olabilecek bir değeri `!` ile zorla açmak. Swift'in optional sistemi bu hatayı derleme anında yakalamak için var, ama ancak doğru kullanırsan işe yarar. İyi haber: Dart'ın null safety'si neredeyse aynı söz dizimine sahip, bu drill senin için hızlı geçecek. Asıl hedef, `!` kullanmadan akıcı kod yazmak.

## Kavram

| Dart | Swift | Anlamı |
|---|---|---|
| `String?` | `String?` | Değer ya da `nil` |
| `name!` | `name!` | Zorla aç; `nil` ise **çöker** |
| `name ?? 'Misafir'` | `name ?? "Misafir"` | Varsayılan değer |
| `user?.address?.city` | `user?.address?.city` | Optional chaining; sonuç yine optional |
| `if (name != null) { ... }` | `if let name { ... }` | Güvenli açma (optional binding) |
| — | `guard let name else { return }` | Erken çıkış; açılan değer fonksiyonun geri kalanında kullanılır |

Perde arkası: `Optional` sıradan bir enum'dur:
```swift
enum Optional<Wrapped> {
    case none
    case some(Wrapped)
}
```
Bu yüzden `map` ve `flatMap` metodları vardır: "değer varsa dönüştür, yoksa `nil` kal".

Örnek (alıştırmadan farklı bir problem üzerinde):
```swift
let response: [String: String] = ["id": "42", "stock": "17", "discount": "abc"]

// Sözlükten okuma Optional, Int(...) dönüşümü de Optional → flatMap ile zincirle
let stock = response["stock"].flatMap { Int($0) } ?? 0      // 17
let discount = response["discount"].flatMap(Int.init)       // nil ("abc" sayı değil)

if let discount {                                           // Swift 5.7+ kısa yazım
    print("İndirim: %\(discount)")
} else {
    print("İndirim yok")
}

func shippingLabel(for code: String?) -> String {
    guard let code, code.count == 5 else { return "Posta kodu eksik" }
    return "Gönderim: \(code)"                              // code burada String, optional değil
}

struct Address { let city: String? }
struct Customer { let address: Address? }
let customer: Customer? = Customer(address: Address(city: "Bursa"))
customer?.address?.city?.count                              // Optional(5)
```

## Adım adım
1. Branch aç, `OptionalsDrill` target'ını ekle.
2. `Int("42")` ve `Int("kırk iki")` sonuçlarını yazdır. Tipleri ne? (⌥-tık ile bak.)
3. `.swiftlint.yml`'de `force_unwrapping` açık (00-06). Bilerek bir `!` yaz ve Xcode'daki uyarıyı gör, sonra sil.
4. `if let`, `guard let`, `??` ve optional chaining'i Kavram'daki örnek üzerinde dene. `guard let` ile açılan değişkenin kapsamının `if let`'ten farkını gözlemle.
5. Alıştırmaya geç.

## Alıştırma
**Görev:** Bir kayıt formundan gelen ham veriyi (`[String: String]`) doğrulanmış bir profile dönüştür.

```swift
struct Profile {
    let name: String
    let age: Int?
    let email: String?
    let city: String
}
```
Yazacağın fonksiyonlar:
- `makeProfile(from form: [String: String]) -> Profile?`
- `describe(_ profile: Profile) -> String`
- `emailDomain(of profile: Profile?) -> String?`

**Kurallar:**
| Alan | Kural | Geçersiz / eksikse |
|---|---|---|
| `name` | Zorunlu. Baştaki ve sondaki boşluklar kırpılır | Yoksa ya da kırpınca boşsa → profil `nil` |
| `age` | Sayı olmalı ve 13...120 aralığında | `nil` (profil yine oluşur) |
| `email` | `@` içermeli | `nil` |
| `city` | Boş olmamalı | `"Bilinmiyor"` |

`describe` formatı: `<isim> · <yaş> yaş · <e-posta> · <şehir>`. Yaş yoksa `yaş belirtilmemiş`, e-posta yoksa `e-posta yok` yazılır.

Test verisi (aynen kopyala):
```swift
let forms: [[String: String]] = [
    ["name": "Ahmet", "age": "29", "email": "ahmet@example.com", "city": "İstanbul"],
    ["name": "Elif"],
    ["age": "30", "city": "Ankara"],
    ["name": "   "],
    ["name": "Can", "age": "otuz"],
    ["name": "Deniz", "age": "150", "email": "deniz.com", "city": ""],
    ["name": "  Zeynep ", "age": "13", "email": "z@ornek.org", "city": "İzmir"],
]
```
Her form için profil oluşturup yazdır; oluşmuyorsa `Geçersiz profil` yaz. Sonra ilk üç formun e-posta alan adını `emailDomain` ile yazdır.

**Beklenen çıktı (birebir):**
```
1. Ahmet · 29 yaş · ahmet@example.com · İstanbul
2. Elif · yaş belirtilmemiş · e-posta yok · Bilinmiyor
3. Geçersiz profil
4. Geçersiz profil
5. Can · yaş belirtilmemiş · e-posta yok · Bilinmiyor
6. Deniz · yaş belirtilmemiş · e-posta yok · Bilinmiyor
7. Zeynep · 13 yaş · z@ornek.org · İzmir
Alan adı: example.com
Alan adı: yok
Alan adı: yok
```

**Teknik şartlar:**
- Hiç `!` yok (SwiftLint `force_unwrapping` uyarısı 0).
- En az bir kez `guard let`, bir kez `if let`, bir kez `??`, bir kez optional chaining ve bir kez `Optional.map` ya da `flatMap` kullan.
- Kırpma için `import Foundation` ile `trimmingCharacters(in: .whitespaces)` kullanabilirsin.

## Bonus
- `emailDomain`'i **tek bir ifade** olarak yaz (optional chaining + `map`).
- `switch` ile bir optional'ı `case .some(let value)` / `case .none` şeklinde aç. Optional'ın enum olduğunu bizzat gör.
- Implicitly unwrapped optional (`String!`) nedir, UIKit'te neden `@IBOutlet`'lerde kullanılır? (07'de göreceğiz.)

## Mülakat köşesi
<details>
<summary>Optional perde arkasında nedir?</summary>

`none` ve `some(Wrapped)` case'lerine sahip generic bir enum'dur. `nil` aslında `.none`'ın kısaltmasıdır; `?` söz dizimi, `if let`, `??` ve optional chaining bu enum üzerine derleyicinin sağladığı kolaylıklardır.
</details>

<details>
<summary><code>if let</code> ile <code>guard let</code> farkı nedir, hangisini ne zaman kullanırsın?</summary>

`if let`'te açılan değer sadece `if` bloğunun içinde geçerlidir. `guard let`'te açılan değer guard'dan **sonraki** kodun tamamında geçerlidir ve `else` bloğu kapsamdan çıkmak zorundadır (`return`, `throw`, `break`). Ön koşul kontrolü ve erken çıkış için `guard`, değer varken ek bir iş yapmak için `if let` kullanılır. `guard` "mutlu yol"u girintisiz tutar.
</details>

<details>
<summary>Force unwrap (<code>!</code>) hiç kabul edilebilir mi?</summary>

Programcı hatası olmadıkça `nil` olamayacağı **kanıtlanabilir** durumlarda: ör. derleme anında sabit bir URL (`URL(string: "https://apple.com")!`), test kodu veya storyboard'a bağlı `@IBOutlet`. Kullanıcı girdisi, ağ verisi veya dosya içeriği gibi dış dünyadan gelen hiçbir şeyde kabul edilmez. Ekiplerde genelde SwiftLint ile yasaklanır ve istisnalar açıkça işaretlenir.
</details>

<details>
<summary><code>user?.address?.city?.count</code> ifadesinin tipi nedir?</summary>

`Int?`. Optional chaining zincirdeki herhangi bir halka `nil` ise tüm ifadeyi `nil` yapar; zincir ne kadar uzun olursa olsun sonuç tek katmanlı bir optional'dır (`Int??` değil).
</details>

## Kaynaklar
- [Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals) (Swift Book)
- [Optional Chaining](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining/) (Swift Book)
- [SE-0345: if let shorthand](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0345-if-let-shorthand.md)

## ✅ Bitirme listesi
- [ ] Çıktı birebir aynı
- [ ] Hiç `!` yok, SwiftLint temiz
- [ ] `guard let`, `if let`, `??`, optional chaining ve `map`/`flatMap`'in hepsini kullandım
- [ ] Mülakat sorularını sesli cevaplayabiliyorum
- [ ] PR açıldı, "⏱ Harcanan süre" yazıldı
