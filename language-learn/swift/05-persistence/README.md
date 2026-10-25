# 05 · Persistence

> ⏱ ~10 saat (drill'ler) · 📅 Due: **26 Şubat 2027** · Hafta 18–20 · ardından 🏆 [C1 Kumbara](../capstones/01-kumbara/)

Veriyi nerede saklayacağına karar vermek bir mimari karardır. Bu modülde küçük ayarlardan (UserDefaults) hassas veriye (Keychain), oradan ilişkisel veriye (Core Data, SwiftData) kadar her katmanı öğreniyoruz. Core Data'ya ağırlık veriyoruz çünkü iş ilanlarında ve mevcut kodbaşlarında hâlâ en yaygın olan o.

Modülün sonunda build yerine doğrudan **Capstone 1: Kumbara** başlar.

## Bu modülün sonunda
- Hangi verinin nerede saklanacağına gerekçeli karar veriyorsun
- Keychain'e token yazıp okuyor, Face ID ile kilit koyuyorsun
- Core Data stack'ini kuruyor, fetch, ilişki, migration ve background context kullanıyorsun
- SwiftData ile Core Data'yı kıyaslayıp ne zaman hangisini seçeceğini biliyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 05-01 | UserDefaults ve `@AppStorage` | 1 | kolay | ⬜ |
| 05-02 | FileManager: Documents, Caches, JSON ve görsel kaydetme | 1 | kolay | ⬜ |
| 05-03 | Keychain (Security framework) ve Face ID (LocalAuthentication) | 1.5 | orta | ⬜ |
| 05-04 | Core Data stack: model editörü, `NSPersistentContainer`, context | 1.5 | orta | ⬜ |
| 05-05 | Core Data fetching: predicate, sort, `@FetchRequest`, `NSFetchedResultsController` | 1.5 | orta | ⬜ |
| 05-06 | İlişkiler, lightweight migration, background context | 2 | zor | ⬜ |
| 05-07 | SwiftData: `@Model`, `@Query`, Core Data ile kıyas | 1.5 | orta | ⬜ |

## 🏆 Capstone 1: Kumbara
Fintech / kişisel finans uygulaması. Brief: [capstones/01-kumbara/](../capstones/01-kumbara/)

## Paketler
- [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess): native Security API'sini öğrendikten sonra (05-03 bonus)

## Kaynaklar
- [Core Data dokümantasyonu](https://developer.apple.com/documentation/coredata)
- [SwiftData by Example](https://www.hackingwithswift.com/quick-start/swiftdata)
- [Donny Wals](https://www.donnywals.com): *Practical Core Data* kitabı
- WWDC: *Meet SwiftData* (2023), *Model your schema with SwiftData* (2023)

## Mülakatta bu modülden
UserDefaults'a token koymak neden yanlış · Core Data context'leri ve thread kuralı · `NSManagedObject`'i thread'ler arası taşımak · migration türleri · SwiftData mı Core Data mı
