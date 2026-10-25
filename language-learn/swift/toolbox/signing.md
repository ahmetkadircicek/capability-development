# Code signing (imzalama)

iOS'ta Apple'ın onaylamadığı hiçbir kod cihazda çalışmaz. İmzalama, "bu uygulamayı kim yaptı ve hangi cihazda ne yapmasına izin var?" sorularının cevabıdır. İlk kurulum [00-02](../00-setup/drills/02-xcode-settings-and-signing/) drill'inde yapılıyor. Konunun derinlemesine anlatımı 12-shipping modülünde.

## Parçalar

```
Apple ID ──► Developer hesabı ──► Team (Team ID: ABCDE12345)
                                    │
           ┌────────────────────────┼────────────────────────┐
           ▼                        ▼                        ▼
     Certificate              App ID / Bundle ID         Devices
  (sen kimsin?)            (hangi uygulama?)        (hangi cihazlar?)
  + private key            com.ahmet.kumbara           (UDID listesi)
  (Keychain'de)            + capabilities
           │                        │                        │
           └────────────────────────┼────────────────────────┘
                                    ▼
                          Provisioning Profile
                (hepsini birleştiren, süreli izin belgesi)
                                    │
                                    ▼
                         İmzalanmış .app / .ipa
```

| Kavram | Ne? | Nerede durur |
|---|---|---|
| **Apple ID** | Kişisel Apple hesabın | — |
| **Apple Developer Program** | Yıllık $99'lık ücretli üyelik. App Store, TestFlight ve push için gerekli | developer.apple.com |
| **Team** | İmzalamanın sahibi: kişisel ("Personal Team") veya kurum. Her takımın 10 karakterlik bir **Team ID**'si var | Xcode › Settings › Accounts |
| **Certificate** | "Bu kodu bu kişi/takım imzaladı" diyen kimlik. İki türü var: **Development** (kendi cihazında test) ve **Distribution** (TestFlight/App Store) | Keychain Access › My Certificates |
| **Private key** | Sertifikanın gizli yarısı. **Asıl değerli olan budur**: elinde olan, o takım adına imza atabilir. Kaybolursa sertifika işe yaramaz, yenisi oluşturulur | Keychain (sadece senin Mac'inde) |
| **Bundle ID** | Uygulamanın evrensel kimliği, ters domain formatında: `com.ahmet.kumbara` | Target › General |
| **App ID** | Bundle ID'nin Apple tarafındaki kaydı + açık olan capability'ler | developer.apple.com |
| **Capability / Entitlement** | Uygulamanın özel izinleri: HealthKit, Push, iCloud, App Groups… | Target › Signing & Capabilities |
| **Provisioning profile** | Sertifika + App ID + cihaz listesi + entitlement'ları birleştiren, süresi olan belge | `~/Library/Developer/Xcode/UserData/Provisioning Profiles` |

## Automatic ve manual signing
- **Automatically manage signing** (Target › Signing & Capabilities): Xcode sertifika ve profile'ları senin yerine oluşturur ve yeniler. Öğrenirken ve küçük ekiplerde bunu kullan.
- **Manual signing:** Büyük ekiplerde ve CI'da profile'lar elle (veya fastlane `match` ile) yönetilir. 12. modülde.

## Ücretsiz Personal Team'in sınırları
| Konu | Personal Team (ücretsiz) | Developer Program ($99/yıl) |
|---|---|---|
| Simülatörde çalıştırma | ✅ | ✅ |
| Kendi iPhone'unda çalıştırma | ✅ (profile 7 günde bir yenilenir) | ✅ (1 yıl) |
| Cihazda aynı anda uygulama sayısı | 3 | Sınırsız |
| Push notification (cihazda) | ❌ | ✅ |
| TestFlight / App Store | ❌ | ✅ |
| Bazı capability'ler (iCloud, Apple Pay…) | ❌ | ✅ |

**Karar:** Şimdilik ücretsiz Personal Team yeterli. Ücretli üyelik kararı 12. modülde (~Kasım 2027), C3'ü TestFlight'a çıkarırken verilecek.

## Sık karşılaşılan hatalar
| Hata | Anlamı | Çözüm |
|---|---|---|
| "No signing certificate found" | Keychain'de geçerli sertifika yok | Settings › Accounts › Manage Certificates › + |
| "Failed to register bundle identifier" | Bundle ID başka biri tarafından alınmış | Bundle ID'yi benzersiz yap (`com.ahmetkadircicek.xxx`) |
| "Provisioning profile has expired" | Personal Team profile'ı 7 gün doldu | Cihazda tekrar ⌘R (Xcode yeniler) |
| "Untrusted Developer" (cihazda) | Cihaz senin sertifikana henüz güvenmiyor | iPhone › Ayarlar › Genel › VPN ve Aygıt Yönetimi › güven |

## Güvenlik hijyeni
- Kurumdan ayrıldığında o kurumun sertifikalarını ve private key'lerini sil.
- Private key'i asla repoya, Slack'e, e-postaya koyma (`.p12` dosyaları `.gitignore`'da).
- Kontrol komutu (sadece okur): `security find-identity -v -p codesigning`
