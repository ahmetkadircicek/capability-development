# 00-03 · Kısayollar, snippet'ler, file template'leri

> ⏱ ~1 saat · 🎚️ kolay · ⬅️ [00-02](../02-xcode-settings-and-signing/) · ➡️ [00-04](../04-debugging-basics/)
> Branch: yok (snippet dosyaları 00-05'teki ilk PR'a girer)

## Neden önemli?
Mouse'a her uzanış birkaç saniye; günde yüzlerce kez. Kısayollar hem hız kazandırır hem de "akışta kalmanı" sağlar. Flutter'da `stless` yazıp Tab'a basmaya alıştıysan, Xcode'daki karşılığı **code snippet**'lerdir; onları kendin oluşturacaksın.

## Kavram
- Tüm kısayollar: [toolbox/xcode-shortcuts.md](../../../toolbox/xcode-shortcuts.md). Bu drill'de sadece ⭐ işaretlileri çalışıyoruz.
- Unuttuğun bir komut için tek kısayol: **⌘⇧A (Quick Actions)**. Açılan kutuya "rename", "canvas", "clean" gibi yaz.
- Snippet = kısaltma + kod parçası + placeholder'lar (`<#isim#>`). Ayrıntılar: [toolbox/snippets.md](../../../toolbox/snippets.md)

## Adım adım

### A · Kısayol avı
`HelloXcode` projesinde, **mouse'a dokunmadan** sırayla şunları yap:

| # | Görev | Kısayol |
|---|---|---|
| 1 | `ContentView.swift`'i aç | ⌘⇧O, "contv" yaz, ↩ |
| 2 | Navigator'da dosyanın yerini göster | ⌘⇧J |
| 3 | Canvas'ı aç/kapa | ⌥⌘↩ |
| 4 | Dosyadaki öğelerin listesine bak | ⌃6 |
| 5 | Bir `Text`'in dokümantasyonunu oku | ⌥-tık (burada mouse serbest) |
| 6 | `VStack`'in tanımına git, sonra geri dön | ⌃⌘J, sonra ⌃⌘← |
| 7 | Bir satırı iki satır yukarı taşı, sonra geri al | ⌥⌘[ ×2, ⌘Z |
| 8 | Bir satırı yorum yap, sonra geri al | ⌘/ |
| 9 | Girintiyi boz, sonra tüm dosyayı düzelt | ⌘A, ⌃I |
| 10 | Build et, çalıştır, durdur | ⌘B, ⌘R, ⌘. |
| 11 | "Clean Build Folder" komutunu Quick Actions ile bul | ⌘⇧A |

### B · İlk snippet'ini oluştur
1. `ContentView.swift`'in en altına geçici olarak şunu yaz:
   ```swift
   // MARK: - <#Section#>
   ```
2. Satırı seç › sağ tık › **Create Code Snippet**.
3. Title: `MARK`, Language: Swift, Platform: All, **Completion: `mark`**, Availability: All.
4. Geçici satırı sil. Boş bir satıra `mark` yaz: otomatik tamamlamada snippet'ini gör, ↩ ile ekle, Tab ile placeholder'a geç.

### C · Snippet setini tamamla
[toolbox/snippets.md](../../../toolbox/snippets.md) dosyasındaki tablodan en az şu dördünü oluştur: `mark`, `swiftuiview`, `weakself`, `task`. İçeriklerini kendi tarzına göre değiştirebilirsin.

### D · Snippet'leri repoya bağla
Xcode'u kapat ve [toolbox/snippets.md](../../../toolbox/snippets.md#snippetleri-repoda-versiyonlamak) dosyasındaki 3 komutu çalıştır. Sonra Xcode'u aç, ⌘⇧L › `{}` sekmesinde snippet'lerinin hâlâ durduğunu kontrol et.

## Alıştırma
**Görev:** `swiftuiview` snippet'ini kullanarak `HelloXcode`'a `AboutView` adında yeni bir dosya ekle (File › New › File › Swift File, sonra snippet). İçine kısa bir "hakkımda" metni koy ve preview'da gör. Sonra **kısayol meydan okumasını** dene: Adım A'daki 11 görevi 2 dakikanın altında bitir.

**Beklenen davranış:**
| Durum | Beklenen |
|---|---|
| `ls toolbox/xcode/CodeSnippets` | En az 4 `.codesnippet` dosyası |
| `ls -l ~/Library/Developer/Xcode/UserData/CodeSnippets` | Repodaki klasöre işaret eden bir symlink (`->`) |
| Boş satırda `swiftuiview` | View + `#Preview` iskeleti, ad placeholder'ı seçili |
| Kısayol meydan okuması | 11 görev < 2 dakika |

## Bonus
- Xcode › Settings › **Key Bindings**: sık kullandığın ama kısayolu olmayan bir komuta kısayol ata ve [toolbox/xcode-shortcuts.md](../../../toolbox/xcode-shortcuts.md) dosyasının en altındaki "Kendi kısayolların" tablosuna ekle.
- MVVM file template'i 03 modülünde kurulacak. Merak edersen [toolbox/snippets.md](../../../toolbox/snippets.md#file-templateleri-bonus) bölümünü oku.

## Mülakat köşesi
<details>
<summary>Bir sembolü tüm projede güvenle nasıl yeniden adlandırırsın?</summary>

Sağ tık › Refactor › Rename. Xcode derleyici bilgisini kullanarak sadece o sembole yapılan referansları değiştirir; aynı isimli farklı sembollere ve string'lere dokunmaz. Bul-değiştir ise metin bazlıdır ve yanlış yerleri de değiştirebilir. Kapsam sadece bir fonksiyonun içiyse ⌃⌘E (Edit All in Scope) daha hızlıdır.
</details>

## ✅ Bitirme listesi
- [ ] ⭐ kısayolları mouse'suz kullanabiliyorum
- [ ] En az 4 snippet oluşturdum, repoya symlink'lendi
- [ ] `AboutView` snippet ile oluşturuldu
