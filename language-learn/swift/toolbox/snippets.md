# Code snippet'leri ve file template'leri

Flutter'da `stless` yazıp Tab'a basınca hazır bir widget gelir. Xcode'da bunun karşılığı **code snippet**'lerdir: bir kısaltma (completion shortcut) yazarsın, otomatik tamamlamada snippet çıkar, ↩ ile eklersin. `<#isim#>` şeklindeki placeholder'lar arasında Tab ile gezinirsin.

Snippet'leri [00-03](../00-setup/drills/03-shortcuts-and-snippets/) drill'inde **sen oluşturacaksın**. Aşağıdaki liste öneridir; içeriklerini kendi tarzına göre değiştir.

## Snippet nasıl oluşturulur?
1. Editörde snippet olacak kodu yaz ve seç.
2. Sağ tık › **Create Code Snippet** (veya Editor menüsü › Create Code Snippet).
3. Açılan pencerede:
   - **Title:** okunur bir ad (ör. "SwiftUI View")
   - **Language:** Swift
   - **Platform:** All
   - **Completion:** kısaltma (ör. `swiftuiview`)
   - **Availability:** snippet'in nerede önerileceği (ör. Top Level, Function or Method)
4. Placeholder için kodda `<#Name#>` yaz.
5. Tüm snippet'leri görmek için: ⌘⇧L (Library) › `{}` sekmesi.

Snippet'ler `~/Library/Developer/Xcode/UserData/CodeSnippets/` klasöründe `.codesnippet` dosyaları olarak saklanır.

## Önerilen snippet'ler

| Kısaltma | Ne üretir | Flutter karşılığı | Ne zaman lazım olur |
|---|---|---|---|
| `swiftuiview` | SwiftUI View + `#Preview` | `stless` | 03 |
| `obsvm` | `@Observable` ViewModel sınıfı | `ChangeNotifier` sınıfı | 03 |
| `mark` | `// MARK: - <#Section#>` | — | Her zaman |
| `weakself` | `[weak self]` closure + `guard let self` | — | 01-10, 07 |
| `task` | `.task { await <#load#>() }` modifier'ı | `initState` + `Future` | 03, 04 |
| `stest` | Swift Testing `@Test` fonksiyonu | `test('...', () {})` | 09 |
| `uivc` | UIViewController iskeleti | — | 07 |
| `coderinit` | `required init?(coder:)` boilerplate'i | — | 07 |

Örnek (`swiftuiview`): kendi snippet'ini bundan yola çıkarak oluştur.

```swift
import SwiftUI

struct <#Name#>View: View {
    var body: some View {
        <#Text("Hello")#>
    }
}

#Preview {
    <#Name#>View()
}
```

Örnek (`weakself`):

```swift
{ [weak self] <#parameters#> in
    guard let self else { return }
    <#code#>
}
```

## Snippet'leri repoda versiyonlamak
Bilgisayar değişse de snippet'lerin kaybolmasın diye klasörü repoya taşıyıp eski yerine symlink bırakıyoruz. **Xcode kapalıyken** çalıştır:

```bash
cd ~/Projects/iOS/swift-learn
mkdir -p toolbox/xcode
mv ~/Library/Developer/Xcode/UserData/CodeSnippets toolbox/xcode/CodeSnippets
ln -s "$PWD/toolbox/xcode/CodeSnippets" ~/Library/Developer/Xcode/UserData/CodeSnippets
```

Artık Xcode'da oluşturduğun her snippet `toolbox/xcode/CodeSnippets/` klasörüne yazılır ve PR ile repoya girer.

## File template'leri (bonus)
Snippet tek bir kod parçasıdır. **File template** ise File › New › File… menüsünde çıkan, birden fazla dosyayı birlikte oluşturan şablondur. Örnek: "MVVM Screen" seçince `ProfileView.swift` ve `ProfileViewModel.swift` birlikte oluşur.

Yapısı:

```
~/Library/Developer/Xcode/Templates/File Templates/Custom/MVVM Screen.xctemplate/
├── TemplateInfo.plist                    # Şablonun adı, açıklaması, sorulacak alanlar
├── ___FILEBASENAME___View.swift          # ___FILEBASENAME___ = kullanıcının girdiği ad
└── ___FILEBASENAME___ViewModel.swift
```

Bunu 03-swiftui modülünün başında, MVVM'e ihtiyaç duyduğunda kuracağız.
