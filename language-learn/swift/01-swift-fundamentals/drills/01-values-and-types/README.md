# 01-01 · Values & types

> ⏱ ~0.5 saat · 🎚️ kolay · ➡️ [Sonraki: 01-02](../02-collections/)
> Branch: `drill/01-01-values-and-types` · Target: `ValuesAndTypesDrill` (00-06'da oluşturdun)

## Neden önemli?
Hızlı bir tekrar, ama iki noktası mülakatlarda sık soruluyor: Swift **tip güvenliği** konusunda çok katıdır (Dart'tan bile katı; `int` ile `double` kendiliğinden toplanmaz) ve `String` bir karakter dizisi değil, **Unicode-doğru** bir koleksiyondur. Bu ikisini bilmemek, ilerideki birçok "neden derlenmiyor?" sorusunun kaynağı.

## Kavram

| Dart | Swift | Not |
|---|---|---|
| `final name = 'Ada';` | `let name = "Ada"` | Değişmez. Swift'te **varsayılan** budur |
| `var count = 0;` | `var count = 0` | Değişebilir |
| `int`, `double`, `bool`, `String` | `Int`, `Double`, `Bool`, `String` | |
| `dynamic` | yok (`Any` var ama kaçınılır) | Swift'te tip her zaman derleme anında bilinir |
| `'Toplam: $total'` | `"Toplam: \(total)"` | String interpolation |
| `(a, b)` record | `(a, b)` tuple | `let p: (x: Int, y: Int) = (1, 2)`, `p.x` |

Örnek (alıştırmadan farklı bir problem üzerinde):
```swift
let espressoPrice = 95               // Int (tip çıkarımı)
let size = "Büyük"                   // String
let extraShot = true                 // Bool

// let total = espressoPrice * 1.2   // ❌ Derlenmez: Int * Double
let total = Double(espressoPrice) * 1.2 + (extraShot ? 25 : 0)   // ✅ açık dönüşüm
print("\(size) espresso: \(total) TL")                          // Büyük espresso: 139.0 TL
```

Unicode-doğru String:
```swift
let family = "👨‍👩‍👧"
family.count                  // 1 (kullanıcının gördüğü karakter sayısı)
family.unicodeScalars.count   // 5
family.utf8.count             // 18 (byte)
```

## Adım adım
1. `drill/01-01-values-and-types` branch'ini aç.
2. `drills/01-values-and-types/Sources/main.swift` dosyasını aç (00-06'dan "Hello, Swift!" duruyor).
3. Bir `let` sabitini değiştirmeye çalış ve derleyici hatasını oku. Sonra bir `Int` ile bir `Double`'ı toplamaya çalış ve hatayı oku. Bu hataları tanımak önemli.
4. `Int.max + 1` yazmayı dene (derleme anında yakalanır). Çalışma anında taşma olursa program çöker; Swift sessizce taşmaz. `&+` operatörünün ne yaptığına [dokümandan](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/#Overflow-Operators) bak.
5. Alıştırmayı yaz, `swift run ValuesAndTypesDrill` ile çalıştır.

## Alıştırma
**Görev:** Bir seyahat bütçesi hesaplayıcı yaz. Şu değerleri sabit olarak tanımla:
- Rota: şehir `"Lizbon"`, gün sayısı `5`. Bunları **isimli bir tuple**'da tut.
- Günlük bütçe: `85.5` EUR
- Kur: 1 EUR = `38.25` TL
- Uçuş: `7_450` TL (`Int`)

Konaklama maliyetini EUR ve TL olarak, toplamı da TL olarak hesapla. Toplamı **2 ondalık basamağa yuvarla** (Foundation kullanmadan, sadece `Double`'ın kendi metodlarıyla).

**Beklenen çıktı (birebir):**
```
Rota: Lizbon (5 gün)
Konaklama: 427.5 EUR
Konaklama (TL): 16351.875
Uçuş (TL): 7450
Toplam (TL): 23801.88
Şehir adı 6 karakter: LIZBON
```

Kurallar: Her şey `let` olsun (`var` gerekmez), Foundation `import` etme, SwiftLint uyarısı olmasın.

## Bonus
- Şehir adını Türkçe kurallarıyla büyük harfe çevir: `"Lizbon"` → `"LİZBON"`. İpucu: `import Foundation`, `uppercased(with:)` ve `Locale`. Bu farkın gerçek uygulamalarda neden önemli olduğunu düşün.
- Toplamı `formatted(.currency(code: "TRY"))` ile biçimlendir. Para birimleriyle C1'de çok uğraşacağız.

## Mülakat köşesi
<details>
<summary><code>let</code> ile tanımlanmış bir sınıf (class) örneğinin property'sini değiştirebilir misin?</summary>

Evet. `let` referansın kendisini sabitler, yani değişken başka bir nesneyi gösteremez. Ama class bir reference type olduğu için nesnenin `var` property'leri değiştirilebilir. Struct'ta ise `let` tüm değeri sabitler; hiçbir property değişemez. Bu fark 01-05'te ayrıntılı işlenecek.
</details>

<details>
<summary>Swift neden <code>Int</code> ve <code>Double</code>'ı otomatik dönüştürmez?</summary>

Tip güvenliği ve açıklık için. Örtük dönüşümler hassasiyet kaybını (Double → Int) ve taşmaları gizler. Swift dönüşümü açıkça yazmanı ister (`Double(x)`), böylece kayıp olabilecek her yer kodda görünür.
</details>

<details>
<summary><code>"👨‍👩‍👧".count</code> neden 1 döner?</summary>

Swift'te `String`, kullanıcının gördüğü karakterlerden (extended grapheme cluster) oluşan bir koleksiyondur. Aile emojisi birden fazla Unicode scalar'ın birleşimidir ama tek karakter olarak görünür. Bu yüzden `String` index'leri `Int` değildir ve `count` O(n) maliyetindedir.
</details>

## Kaynaklar
- [The Basics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/) (Swift Book)
- [Strings and Characters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/) (Swift Book)

## ✅ Bitirme listesi
- [ ] Çıktı birebir aynı
- [ ] `var` ve Foundation kullanmadım, SwiftLint temiz
- [ ] Mülakat sorularını sesli cevaplayabiliyorum
- [ ] PR açıldı, "⏱ Harcanan süre" yazıldı
