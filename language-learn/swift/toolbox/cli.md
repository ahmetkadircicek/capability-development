# Komut satırı

## Swift Package Manager

```bash
swift package init --type executable   # yeni çalıştırılabilir paket
swift package init --type library      # yeni kütüphane paketi
swift build                            # derle
swift run <Target>                     # derle ve çalıştır
swift test                             # testleri çalıştır
swift test --filter <TestAdı>          # tek bir testi çalıştır
swift package resolve                  # bağımlılıkları indir
swift package update                   # bağımlılıkları güncelle
swift package plugin --list            # kullanılabilir plugin'ler
swift format --in-place --recursive Sources   # kodu formatla
```

## Xcode ve toolchain

```bash
xcodebuild -version                    # Xcode sürümü
xcode-select -p                        # aktif Xcode'un yolu
swift --version                        # Swift sürümü
xcodebuild -list                       # projedeki scheme ve target'lar
xcodebuild -scheme MyApp \
  -destination 'platform=iOS Simulator,name=iPhone 16' \
  build                                # terminalden build
xcodebuild test -scheme MyApp \
  -destination 'platform=iOS Simulator,name=iPhone 16'   # terminalden test
```

## Simulator (`xcrun simctl`)

`booted` = çalışan simülatör. Birden fazla simülatör açıksa cihaz UDID'sini ver.

```bash
xcrun simctl list devices available                       # cihaz listesi
xcrun simctl boot "iPhone 16"                              # simülatörü başlat
xcrun simctl openurl booted "myapp://profile/42"           # deep link test et
xcrun simctl push booted com.ornek.app payload.apns        # push bildirimi gönder
xcrun simctl ui booted appearance dark                     # koyu mod
xcrun simctl io booted screenshot ekran.png                # ekran görüntüsü
xcrun simctl io booted recordVideo kayit.mp4               # video (Ctrl+C ile durdur)
xcrun simctl addmedia booted foto.jpg                      # galeriye fotoğraf ekle
xcrun simctl privacy booted grant photos com.ornek.app     # izin ver
xcrun simctl location booted set 41.0082,28.9784           # konum ayarla (İstanbul)
xcrun simctl status_bar booted override --time 9:41 \
  --batteryLevel 100 --cellularBars 4                      # App Store ekran görüntüleri için
xcrun simctl status_bar booted clear                       # status bar'ı sıfırla
xcrun simctl delete unavailable                            # eski, kullanılmayan simülatörleri sil
```

## GitHub CLI (`gh`)

```bash
gh pr create                     # PR aç
gh pr status                     # PR'larının durumu
gh pr checks                     # check'lerin durumu
gh pr view --web                 # PR'ı tarayıcıda aç
gh pr merge --squash --delete-branch
gh issue list --milestone "01 · Swift Fundamentals"
gh issue view 12
gh repo view --web
```

## Bakım

```bash
# DerivedData: Xcode'un build önbelleği. Tuhaf hatalarda veya disk dolunca temizlenir.
# Xcode kapalıyken çalıştır; bir sonraki build uzun sürer.
rm -rf ~/Library/Developer/Xcode/DerivedData

# Disk kullanımına bak
du -sh ~/Library/Developer/Xcode/DerivedData ~/Library/Developer/CoreSimulator
```
