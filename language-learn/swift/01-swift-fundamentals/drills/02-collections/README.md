# 01-02 · Collections

> ⏱ ~1 saat · 🎚️ kolay · ⬅️ [01-01](../01-values-and-types/) · ➡️ [01-03](../03-optionals/)
> Branch: `drill/01-02-collections` · Target: `CollectionsDrill` (Package.swift'e sen ekle, `path: "drills/02-collections/Sources"`)

## Neden önemli?
Uygulamaların büyük kısmı "bir listeyi al, filtrele, grupla, sırala, göster" işidir. `map`/`filter`/`reduce` ile düşünmeyi bilen biri bu işleri döngüsüz, okunur ve hatasız yazar. Dart'taki `where`, `map`, `fold` bilgin doğrudan aktarılıyor; isimler biraz farklı.

## Kavram

| Tip | Ne zaman | Dart karşılığı |
|---|---|---|
| `Array<T>` / `[T]` | Sıralı, tekrar edebilen elemanlar | `List<T>` |
| `Dictionary<K, V>` / `[K: V]` | Anahtarla erişim. **Sırası garanti değildir** | `Map<K, V>` |
| `Set<T>` | Benzersiz elemanlar, hızlı `contains` (O(1)) | `Set<T>` |

Üçü de **value type**: bir diziyi başka bir değişkene atadığında kopyalanır (pratikte copy-on-write sayesinde ancak değiştirildiğinde gerçekten kopyalanır).

| Dart | Swift |
|---|---|
| `where` | `filter` |
| `map` | `map` |
| `fold` / `reduce` | `reduce(_:_:)` / `reduce(into:_:)` |
| `whereType` / null'ları atma | `compactMap` |
| `expand` | `flatMap` |
| `firstWhere` | `first(where:)` |
| `any` / `every` | `contains(where:)` / `allSatisfy` |
| `groupBy` (collection paketi) | `Dictionary(grouping:by:)` |

Örnek (alıştırmadan farklı bir problem üzerinde):
```swift
let grades = [72, 95, 58, 88, 64]

let passed = grades.filter { $0 >= 60 }                               // [72, 95, 88, 64]
let curved = grades.map { min($0 + 5, 100) }                          // [77, 100, 63, 93, 69]
let average = Double(grades.reduce(0, +)) / Double(grades.count)      // 75.4
let highest = grades.max()                                            // Optional(95)

let students = ["Ada": 95, "Can": 58, "Ece": 88]
students["Ada"]                  // Optional(95): sözlükten okuma her zaman Optional döner
students["Zeynep", default: 0]   // 0
```
`\.genre` gibi key path'ler, `{ $0.genre }` closure'ının kısa yazımıdır: `sales.map(\.title)`.

## Adım adım
1. Branch aç, `Package.swift`'e `CollectionsDrill` target'ını ekle (00-06'daki target'ı örnek al) ve `drills/02-collections/Sources/main.swift` dosyasını oluştur.
2. Bir diziyi bir değişkene ata, kopyayı değiştir, orijinali yazdır. Value semantics'i kendi gözünle gör.
3. Bir `Set` ile bir `Array`'de `contains` çağır. Hangisinin neden hızlı olduğunu düşün.
4. Bir `Dictionary`'yi `for (key, value) in` ile birkaç kez yazdır. Sıra her çalıştırmada aynı mı?
5. Alıştırmaya geç.

## Alıştırma
**Görev:** Küçük bir kitapçının günlük satış raporunu üret. Veri (bunu aynen kopyalayabilirsin):
```swift
struct Sale {
    let title: String
    let genre: String
    let price: Double
    let quantity: Int
}

let sales = [
    Sale(title: "Dune", genre: "Bilimkurgu", price: 320, quantity: 3),
    Sale(title: "Vakıf", genre: "Bilimkurgu", price: 280, quantity: 5),
    Sale(title: "Suç ve Ceza", genre: "Klasik", price: 210, quantity: 2),
    Sale(title: "Simyacı", genre: "Roman", price: 150, quantity: 7),
    Sale(title: "1984", genre: "Klasik", price: 180, quantity: 4),
    Sale(title: "Kürk Mantolu Madonna", genre: "Roman", price: 120, quantity: 9),
]
```
> `struct`'ı 01-05'te derinlemesine göreceğiz; şimdilik veri taşıyan bir kutu olarak düşün. Ciroyu (fiyat × adet) hesaplayan bir computed property eklemek serbest.

**Kural:** Hesaplamaların hiçbirinde `for` döngüsü kullanma; sadece higher-order function'larla yap. Sonuçları yazdırmak için `for` serbest.

**Beklenen çıktı (birebir):**
```
Toplam ciro: 5630.0 TL
Satılan kitap: 30 adet
Tür sayısı: 3 → Bilimkurgu, Klasik, Roman
  Bilimkurgu: 2360.0 TL
  Klasik: 1140.0 TL
  Roman: 2130.0 TL
1. Vakıf — 1400.0 TL
2. Kürk Mantolu Madonna — 1080.0 TL
3. Simyacı — 1050.0 TL
5+ adet: Vakıf, Simyacı, Kürk Mantolu Madonna
Ortalama fiyat: 210.0 TL
En ucuz: Kürk Mantolu Madonna
Hepsi 100 TL üstü mü? true
```
İpuçları: tür listesi ve tür cirosu **alfabetik** sıralı olmalı (Dictionary sırası garanti değildi, hatırla). "En ucuz" satırında `min(by:)` bir Optional döndürür; şimdilik `?? "-"` ile aç, 01-03'te nedenini göreceğiz.

## Bonus
- **Paket ekle:** [swift-algorithms](https://github.com/apple/swift-algorithms) paketini `Package.swift`'e bağımlılık olarak ekle ve satışları `chunks(ofCount: 2)` ile ikişerli gruplara bölerek yazdır.
- `reduce(into:)` ile tür bazlı adetleri say ve `reduce(_:_:)`'den farkını açıkla.
- `sales.lazy.filter { ... }.map { ... }.first` ne zaman işe yarar?

## Mülakat köşesi
<details>
<summary>Array value type olduğu halde büyük bir diziyi fonksiyona geçirmek neden pahalı değil?</summary>

Copy-on-write sayesinde. Kopyalama anında veri paylaşılır; kopyalardan biri değiştirilmeye çalışıldığında ve tampon başka bir değişkenle paylaşılıyorsa (`isKnownUniquelyReferenced`) gerçek kopya yapılır. Değiştirilmeyen kopyalar hiçbir maliyet getirmez.
</details>

<details>
<summary><code>map</code>, <code>compactMap</code> ve <code>flatMap</code> farkı nedir?</summary>

`map` her elemanı dönüştürür; eleman sayısı aynı kalır. `compactMap` dönüştürür ve `nil` sonuçları atar (`["1", "a", "3"].compactMap(Int.init)` → `[1, 3]`). `flatMap` her eleman için bir dizi üretir ve bunları tek bir dizide düzleştirir (`[[1, 2], [3]].flatMap { $0 }` → `[1, 2, 3]`).
</details>

<details>
<summary>Array'de mi Set'te mi <code>contains</code> daha hızlıdır, neden?</summary>

Set'te. Set elemanları hash'leyerek saklar, `contains` ortalama O(1)'dir. Array'de eleman tek tek karşılaştırılır, O(n). Bu yüzden Set elemanlarının `Hashable` olması gerekir. Sık "var mı?" sorusu soruluyorsa Set seçilir; sıra ve tekrar önemliyse Array.
</details>

## Kaynaklar
- [Collection Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/) (Swift Book)
- [Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/) (Swift Book): `$0` ve trailing closure söz dizimi
- [swift-algorithms](https://github.com/apple/swift-algorithms), [swift-collections](https://github.com/apple/swift-collections)

## ✅ Bitirme listesi
- [ ] Çıktı birebir aynı
- [ ] Hesaplamalarda `for` döngüsü yok
- [ ] SwiftLint temiz
- [ ] Mülakat sorularını sesli cevaplayabiliyorum
- [ ] PR açıldı, "⏱ Harcanan süre" yazıldı
