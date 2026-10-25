# 03 · SwiftUI

> ⏱ ~20 saat · 📅 Due: **15 Ocak 2027** · Hafta 9–14

Daha önce SwiftUI ile birkaç tutorial projesi yaptın. Bu modülde "nasıl"ın ötesine, "neden"e geçiyoruz: view identity, state'in nerede yaşadığı, Observation framework'ü, layout sistemi. Flutter'daki widget ağacı bilgin burada çok işe yarar ([toolbox/flutter-to-ios.md](../toolbox/flutter-to-ios.md)).

Modülün ilk drill'inde bir **`SwiftUIDrills`** Xcode projesi oluşturursun. Her drill bu projede bir klasör ve kendi `#Preview`'ı olur, ana ekran da drill kataloğudur.

## Bu modülün sonunda
- View'ın kimliği (identity) ve yaşam döngüsünü açıklayabiliyorsun
- State'i doğru yere koyuyorsun: `@State`, `@Binding`, `@Observable`, `@Environment`
- NavigationStack ile programatik navigasyon kuruyorsun
- Custom layout, animasyon ve yeniden kullanılabilir component yazıyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 03-01 | Proje kurulumu, views & modifiers (modifier sırası neden önemli) | 1.5 | kolay | ⬜ |
| 03-02 | `@State` ve `@Binding` | 1 | kolay | ⬜ |
| 03-03 | Observation: `@Observable`, `@Bindable`, `@Environment` (+ `ObservableObject` kıyası) | 1.5 | orta | ⬜ |
| 03-04 | List, ForEach, `Identifiable`, swipe actions, `.searchable` | 1 | kolay | ⬜ |
| 03-05 | NavigationStack, NavigationPath, sheet, TabView | 1.5 | orta | ⬜ |
| 03-06 | Form, TextField, Picker, `@FocusState`, doğrulama | 1 | kolay | ⬜ |
| 03-07 | Layout: Grid, ViewThatFits, GeometryReader, custom `Layout` | 1.5 | orta | ⬜ |
| 03-08 | Animasyon ve transition | 1 | orta | ⬜ |
| 03-09 | Custom component: ViewModifier, ButtonStyle, `@ViewBuilder` | 1 | orta | ⬜ |
| 03-10 | Custom EnvironmentValues (`@Entry`) ve PreferenceKey | 1 | zor | ⬜ |

## 🧱 Build: Habitly (~8 saat)
> **Ticket:** Bir wellness startup'ı, kullanıcıların günlük alışkanlıklarını takip edeceği sade bir uygulama istiyor: alışkanlık ekle, bugün yapıldı olarak işaretle, seriyi (streak) gör, haftalık özet grafiği. Veriler şimdilik cihazda (`@AppStorage` / JSON) kalsın.

Kullanılanlar: tüm 03 drill'leri, Swift Charts, MVVM. Bu modülde MVVM için file template'ini de kuracaksın ([toolbox/snippets.md](../toolbox/snippets.md)).

## Kurulacaklar
- ✅ SF Symbols (zaten yüklü)
- 💡 InjectionIII / Inject (hot reload, isteğe bağlı), RocketSim (isteğe bağlı)

## Kaynaklar
- [SwiftUI Tutorials](https://developer.apple.com/tutorials/swiftui) (Apple)
- [Stanford CS193p](https://cs193p.sites.stanford.edu)
- [Swift with Majid](https://swiftwithmajid.com), [Fatbobman](https://fatbobman.com/en/)
- WWDC: *Demystify SwiftUI* (2021), *Discover Observation in SwiftUI* (2023), *The SwiftUI cookbook for navigation* (2022), *Compose custom layouts with SwiftUI* (2022), *Explore SwiftUI animation* (2023), *Demystify SwiftUI performance* (2023)

## Mülakatta bu modülden
View identity (structural vs explicit) · `@State` neden `private` · `@Observable` ile `ObservableObject` farkı · view neden struct · `body` ne zaman yeniden hesaplanır · `.task` ile `.onAppear` farkı

## 📝 Medium yazısı adayı (Ocak 2027)
*Flutter developer için SwiftUI state yönetimi: setState/Provider/Riverpod ↔ @State/@Environment/@Observable*
