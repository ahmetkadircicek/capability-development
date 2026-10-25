# Flutter → iOS sözlüğü

Flutter'da bildiğin bir kavramın iOS'taki karşılığı. Birebir aynı olmayanlar ⚠️ ile işaretli; farkı not sütununda.

## Uygulama ve UI temeli

| Flutter | SwiftUI | UIKit | Not |
|---|---|---|---|
| `main()` + `runApp()` | `@main struct MyApp: App` | `AppDelegate` + `SceneDelegate` | |
| `MaterialApp` | `WindowGroup` (Scene) | `UIWindow` + root VC | |
| `Widget` | `View` (struct) | `UIView` | SwiftUI view'ları değer tipidir, çok ucuz yaratılır |
| `build()` | `var body: some View` | `viewDidLoad` + layout | |
| `StatelessWidget` | `@State` içermeyen `View` | — | |
| ⚠️ `StatefulWidget` + `State` | `View` + `@State` | VC property'leri | SwiftUI'da ayrı bir State sınıfı yok; state view'ın içinde `@State` ile durur |
| `setState(() {...})` | `@State` değişkenini değiştirmek | Elle `reloadData()` / UI güncelleme | SwiftUI değişikliği otomatik algılar |
| `initState` | `.task { }` veya `.onAppear { }` | `viewDidLoad` | ⚠️ SwiftUI'da `init` bir yaşam döngüsü olayı değildir |
| `dispose` | `.onDisappear { }`; `.task` otomatik iptal olur | `deinit`, `viewDidDisappear` | |
| `Key` / `ValueKey` | `.id()`, `Identifiable` | — | |
| `BuildContext` | `@Environment` | `traitCollection` | |

## Layout

| Flutter | SwiftUI | UIKit |
|---|---|---|
| `Column` / `Row` / `Stack` | `VStack` / `HStack` / `ZStack` | `UIStackView` |
| `Expanded` / `Spacer` | `Spacer()`, `.frame(maxWidth: .infinity)` | Constraint'ler |
| `Padding`, `Container` | `.padding()`, `.background()`, `.frame()` | Constraint + `backgroundColor` |
| `SizedBox` | `.frame(width:height:)`, `Spacer().frame(...)` | Constraint |
| `ListView.builder` | `List`, `LazyVStack` (ScrollView içinde) | `UITableView`, `UICollectionView` |
| `GridView` | `LazyVGrid`, `Grid` | Compositional layout |
| `MediaQuery` | `GeometryReader`, `containerRelativeFrame`, size class | `traitCollection`, `bounds` |
| `LayoutBuilder` | `ViewThatFits`, `Layout` protokolü | `layoutSubviews` |
| `SafeArea` | Varsayılan; dışına taşmak için `.ignoresSafeArea()` | `safeAreaLayoutGuide` |

## Navigasyon ve sunum

| Flutter | SwiftUI | UIKit |
|---|---|---|
| `Navigator.push` | `NavigationStack` + `NavigationLink` / `.navigationDestination` | `navigationController?.pushViewController` |
| go_router / named routes | `NavigationPath`, `.onOpenURL` | Coordinator kalıbı |
| `Scaffold` + `AppBar` | `.navigationTitle`, `.toolbar` | `UINavigationBar` |
| `BottomNavigationBar` | `TabView` | `UITabBarController` |
| `showModalBottomSheet` | `.sheet` + `.presentationDetents` | `UISheetPresentationController` |
| `showDialog` | `.alert`, `.confirmationDialog` | `UIAlertController` |
| `Hero` | `matchedGeometryEffect`, `.navigationTransition(.zoom)` | Custom transition |

## State yönetimi

| Flutter | iOS | Not |
|---|---|---|
| `ChangeNotifier` | `@Observable` sınıf | Eski yöntem: `ObservableObject` + `@Published` |
| `Provider` / `InheritedWidget` | `.environment(obj)` + `@Environment(Type.self)` | |
| Riverpod / Bloc | `@Observable` ViewModel; büyük projelerde TCA | 08. modül |
| `ValueNotifier` | `@State` / `@Observable` property | |
| `TextEditingController` | `TextField(text: $binding)` | `$` = Binding, iki yönlü bağ |
| `shared_preferences` | `UserDefaults`, `@AppStorage` | |

## Asenkron

| Dart | Swift | Not |
|---|---|---|
| `Future<T>` | `async` fonksiyon, `Task<T, Error>` | |
| `async` / `await` | `async` / `await` | Neredeyse aynı söz dizimi |
| `Stream<T>` | `AsyncSequence`, `AsyncStream` | Combine `Publisher` da var (06) |
| `FutureBuilder` | `.task { }` + state enum (idle/loading/loaded/error) | |
| `StreamBuilder` | `.task { for await x in stream { } }` | |
| ⚠️ `Isolate` | `actor`, `Task.detached` | Swift'te paylaşılan hafıza var; güvenliği actor ve `Sendable` sağlar (02) |
| `Future.wait` | `async let`, `TaskGroup` | |

## Veri ve ağ

| Flutter paketi | iOS karşılığı |
|---|---|
| `http` / `dio` | `URLSession` / Alamofire. dio interceptor ≈ Alamofire `RequestInterceptor` |
| `json_serializable`, `freezed` | `Codable` (dilin içinde, kod üretimi yok) |
| `equatable` | `Equatable` (derleyici otomatik üretir) |
| `cached_network_image` | `AsyncImage` / Kingfisher |
| `sqflite`, `drift`, `hive` | Core Data, SwiftData, GRDB |
| `flutter_secure_storage` | Keychain |
| `connectivity_plus` | `NWPathMonitor` (Network framework) |
| `local_auth` | LocalAuthentication (Face ID) |

## Araçlar

| Flutter | iOS |
|---|---|
| `pubspec.yaml` | `Package.swift` veya Xcode › Package Dependencies |
| `flutter pub get` | File › Packages › Resolve Package Versions (genelde otomatik) |
| pub.dev | [Swift Package Index](https://swiftpackageindex.com) |
| `flutter run` | ⌘R |
| ⚠️ Hot reload | SwiftUI `#Preview`; çalışan uygulamada InjectionIII (03) |
| `flutter test` | ⌘U, `swift test` |
| `flutter analyze` | SwiftLint |
| `dart format` | `swift format` |
| Flavors | Scheme + Build Configuration + `.xcconfig` (12) |
| `.arb` lokalizasyon | String Catalog (`.xcstrings`) |
| DevTools | Instruments, View Debugger, Memory Graph |

## Bonus: HarmonyOS ArkUI → SwiftUI

ArkUI ile SwiftUI çok benzer bir felsefeye sahip. ArkTS bilgin burada doğrudan işe yarar.

| ArkTS (V1) | SwiftUI |
|---|---|
| `@Component struct` + `build()` | `struct: View` + `body` |
| `@State` | `@State` |
| `@Prop` (tek yönlü) | Normal `let` property |
| `@Link` (iki yönlü) | `@Binding` |
| `@Provide` / `@Consume` | `.environment` / `@Environment` |
| `@Observed` + `@ObjectLink` | `@Observable` |
| `AppStorage` + `@StorageLink` | `@AppStorage` |
| `Column` / `Row` / `Stack` | `VStack` / `HStack` / `ZStack` |
| `ForEach` / `LazyForEach` | `ForEach` / `LazyVStack` |
| `aboutToAppear` | `.onAppear` / `.task` |
