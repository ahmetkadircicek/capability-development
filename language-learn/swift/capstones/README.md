# Capstone'lar

CV'ye yazılacak, gerçek şirket senaryosuna dayanan üç ürün. Her biri ayrı bir repoda geliştirilir: önce private, cilalanınca public. Bu klasörde yalnızca brief'ler ve sprint planları durur.

| | Ürün | Domain | Modüller | Repo | Due |
|---|---|---|---|---|---|
| 🐷 | [Kumbara](01-kumbara/) | Fintech / kişisel finans | 03–05 (+09 testleri) | `ahmetkadircicek/kumbara-ios` | 9 Nis 2027 (testler 20 Ağu) |
| 🛍️ | [Vitrin](02-vitrin/) | E-ticaret | 06–09 | `ahmetkadircicek/vitrin-ios` | 13 Ağu 2027 |
| 💓 | [Pulse](03-pulse/) | Sağlık / fitness | 10–12 | `ahmetkadircicek/pulse-ios` | 3 Ara 2027 |

## Neden bu üç domain?
- **Fintech:** Türkiye'de iOS ilanlarının önemli bir kısmı banka ve fintech şirketlerinden geliyor. Güvenlik (Keychain, Face ID), para hesaplama doğruluğu ve offline çalışma bu sektörün temel beklentileri.
- **E-ticaret:** En büyük iOS ekipleri burada. UIKit, modüler mimari, yüksek test kapsamı ve CI bu ekiplerin günlük işi.
- **Sağlık:** Senin farkın. Huawei Health Kit deneyimini iOS'ta HealthKit ile birleştirerek "iki platformda sağlık entegrasyonu" hikayesi kuruyorsun. Bunu anlatabilecek aday sayısı çok az.

## Capstone repolarında çalışma düzeni
- Repo private olarak açılır. GitHub Pro sayesinde swift-learn ile aynı `main` ruleset'i ilk günden kurulur.
- Her sprint için bir issue açılır. Sprint bir branch (`capstone/s2-transactions`) ve bir PR ile tamamlanır, mentor review'ından sonra squash merge edilir.
- Private repolarda GitHub Actions dakikaları sınırlıdır ve macOS dakikası 10 kat sayılır. Bu yüzden CI yalnızca PR'larda çalışır.
- Public'e alma adımları: [docs/career.md](../docs/career.md#capstoneları-publice-alma-kontrol-listesi)
