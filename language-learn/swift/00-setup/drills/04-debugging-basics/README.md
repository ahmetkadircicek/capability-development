# 00-04 · Debugging temelleri

> ⏱ ~1.5 saat · 🎚️ orta · ⬅️ [00-03](../03-shortcuts-and-snippets/) · ➡️ [00-05](../05-git-and-github-flow/)
> Branch: yok (değişiklikler 00-05'teki ilk PR'a girer)

## Neden önemli?
`print` eklemek, derlemek, çalıştırmak, bakmak, silmek... Her döngü dakikalar alır. Debugger ile kodu durdurur, o anki durumu görür, hatta çalışırken değiştirirsin. Mülakatlarda "Production'da bir crash'i nasıl araştırırsın?" sorusu gelir; cevabın bu araçlarla başlar.

## Kavram
| Araç | Ne zaman |
|---|---|
| **Breakpoint** | "Buraya gelince dur" |
| **Koşullu breakpoint** | "Sadece `index == 42` olduğunda dur" |
| **Log breakpoint** | "Durma, sadece şunu yazdır" (kodu değiştirmeden `print`) |
| **LLDB** (`v`, `p`, `po`, `bt`) | Durduğunda değişkenlere bakmak ve ifadeleri denemek |
| **View Debugger** | Ekranda görünmeyen ya da üst üste binen view'ları bulmak |
| **Memory Graph** | Kimin kimi bellekte tuttuğunu görmek (01-10'da derinlemesine) |

Tüm komutlar: [toolbox/debugging.md](../../../toolbox/debugging.md)

Örnek bir LLDB oturumu (bu drill'den bağımsız bir kod üzerinde):
```
(lldb) v cart.items.count
(Int) 3
(lldb) p cart.total * 1.2
(Double) 360
(lldb) bt
* frame #0: CartViewModel.checkout() at CartViewModel.swift:42
  frame #1: closure #1 in CartView.body.getter at CartView.swift:18
```

## Adım adım

1. **Hatalı kodu ekle.** `HelloXcode` projesine `ScoreAnalyzer.swift` dosyası oluştur ve aşağıdaki kodu **aynen** yaz. Bu kod bilerek hatalı.
   ```swift
   struct ScoreAnalyzer {
       func average(of scores: [Int]) -> Double {
           var total = 0
           for index in 0...scores.count {
               total += scores[index]
           }
           return Double(total / scores.count)
       }

       func highest(in scores: [Int]) -> Int? {
           var best = scores.first
           for score in scores where score < (best ?? 0) {
               best = score
           }
           return best
       }
   }
   ```
2. **Çağır.** `ContentView`'a "Analiz et" butonu ekle. Butona basınca `[90, 85, 78]` için ortalamayı ve en yüksek puanı hesaplayıp bir `Text`'te göstersin (bir `@State` değişkenine yazman yeterli).
3. **Crash'i incele.** ⌘R ile çalıştır ve butona bas. Uygulama çökecek ve Xcode hatanın olduğu satırda duracak.
   - Debug area'daki konsolda (⌘⇧Y) `v index` ve `v scores.count` yaz. Sorun ne?
   - `bt` yaz. Bu satıra hangi çağrı zinciriyle gelindiğini oku.
4. **Breakpoint ile ara değerleri gör.** İlk hatayı düzelt ve `return` satırına breakpoint koy (⌘\). Tekrar çalıştır. Durduğunda:
   - `p total`, `p scores.count`, `p total / scores.count` yaz. Beklediğin sonuç mu?
   - Doğru sonucu verecek ifadeyi önce **LLDB'de** dene, çalıştığını gördükten sonra koda yaz.
5. **Log breakpoint.** `highest` fonksiyonundaki `best = score` satırına breakpoint koy › sağ tık › Edit Breakpoint › Action: **Log Message**, mesaj: `score=@score@ best=@best@` › **Automatically continue after evaluating actions** kutusunu işaretle. Çalıştır ve konsolu oku. Döngü ne yapıyor?
6. **Koşullu breakpoint.** Aynı breakpoint'e Condition olarak `score == 78` yaz, log action'ını kapat. Sadece o adımda durduğunu gör.
7. **View Debugger.** `ContentView`'a şunu ekle:
   ```swift
   ZStack {
       Text("Gizli mesaj: debugger'ı seviyorum")
       Rectangle().fill(.background)
   }
   .frame(height: 44)
   ```
   Çalıştır. Metin görünmüyor. Debug bar'daki **Debug View Hierarchy** düğmesine bas, 3B görünümde katmanları çevir ve gizli metni bul.
8. **Environment Overrides.** Uygulama çalışırken debug bar'daki **Environment Overrides** düğmesinden koyu modu ve yazı boyutunu değiştir.

## Alıştırma
**Görev:** `ScoreAnalyzer`'daki **tüm** hataları sadece debugger kullanarak bul ve düzelt (`print` yasak). Boş dizi için ortalama `nil` dönsün (fonksiyonun dönüş tipini buna göre değiştir) ve ekranda "Puan yok" yazsın.

**Beklenen davranış:**
| Çağrı | Beklenen |
|---|---|
| `average(of: [90, 85, 78])` | `84.33...` (tam sayı değil!) |
| `average(of: [100])` | `100.0` |
| `average(of: [])` | `nil`, ekranda "Puan yok" |
| `highest(in: [90, 85, 78])` | `90` |
| `highest(in: [-5, -2, -9])` | `-2` |
| `highest(in: [])` | `nil` |

PR açıklamasına (00-05'te) bulduğun her hata için tek satır yaz: **ne**ydi ve **hangi araçla** buldun.

## Bonus
- Breakpoint navigator'da (⌘8) **+** › **Swift Error Breakpoint** ekle. `throws` kullanan bir kodda (01-09) ne işe yarayacağını tahmin et.
- Debug bar'daki **Memory Graph** düğmesine bas ve uygulamandaki nesneleri gez. 01-10'da retain cycle avı için bunu kullanacağız.

## Mülakat köşesi
<details>
<summary>LLDB'de <code>v</code>, <code>p</code> ve <code>po</code> arasındaki fark nedir?</summary>

`v` (frame variable) değişkeni kod çalıştırmadan, doğrudan bellekten okur; en hızlı ve en güvenli olanıdır ama ifade değerlendiremez. `p` bir ifadeyi derleyip çalıştırır ve sonucu tipiyle gösterir. `po` ifadeyi çalıştırır ve nesnenin `description`/`debugDescription` çıktısını yazdırır. Basit değişken için `v`, hesaplama için `p`, nesnenin okunabilir açıklaması için `po`.
</details>

<details>
<summary>Uygulama çöktüğünde ilk neye bakarsın?</summary>

Önce backtrace'e (`bt` veya Debug navigator): hangi thread'de, hangi fonksiyon zinciriyle çöktüğüne. Sonra crash nedenine: index out of range, nil force unwrap, division by zero veya bir Objective-C exception. Exception ise bir Exception Breakpoint ekleyip tekrar çalıştırırım ki fırlatıldığı yerde dursun. Production crash'lerinde aynı bilgi Crashlytics/Xcode Organizer raporlarından ve dSYM ile sembolleştirilmiş stack trace'ten gelir.
</details>

<details>
<summary>Main Thread Checker neyi yakalar?</summary>

UIKit/AppKit API'lerinin ana thread dışından çağrılmasını. UI güncellemeleri ana thread'de yapılmazsa rastgele görsel hatalar ve çökmeler olur. Debug build'lerde varsayılan olarak açıktır (Scheme › Diagnostics).
</details>

## Kaynaklar
- [toolbox/debugging.md](../../../toolbox/debugging.md)
- [Diagnosing and resolving bugs in your running app](https://developer.apple.com/documentation/xcode/diagnosing-and-resolving-bugs-in-your-running-app) (Apple)
- [SwiftLee: Debugging articles](https://www.avanderlee.com/category/debugging/)

## ✅ Bitirme listesi
- [ ] 4 hatanın hepsi düzeltildi, beklenen davranış tablosu sağlanıyor
- [ ] `print` kullanmadım
- [ ] Gizli metni View Debugger ile buldum
- [ ] `v`, `p`, `po`, `bt` komutlarını kullanabiliyorum
