# Debugging

`print` ile debug etmek başlangıçtır. Bu sayfa bir sonraki seviye. Temel kullanımı [00-04](../00-setup/drills/04-debugging-basics/) drill'inde öğreneceksin.

## Breakpoint türleri

| Tür | Nasıl | Ne zaman |
|---|---|---|
| Satır | Satır numarasına tıkla veya ⌘\ | Akışı durdurup değişkenlere bakmak |
| Koşullu | Breakpoint'e sağ tık › Edit › Condition: `index == 42` | Döngünün sadece belli bir adımında durmak |
| Log (durmadan) | Edit › Action: Log Message + "Automatically continue" | `print` eklemeden, kodu değiştirmeden loglamak |
| Swift Error | Breakpoint navigator (⌘8) › + › Swift Error Breakpoint | Bir hata fırlatıldığı anda durmak |
| Exception | + › Exception Breakpoint | Objective-C exception'larında (UIKit çökmeleri) |
| Symbolic | + › Symbolic Breakpoint: `UIViewController.viewDidLoad` | Kaynağını görmediğin bir fonksiyon çağrıldığında durmak |

## LLDB komutları (debug konsolunda)

| Komut | Ne yapar |
|---|---|
| `v isim` | Değişkeni hızlıca göster (frame variable). En hızlı ve güvenli olanı |
| `p ifade` | İfadeyi değerlendir ve sonucu göster |
| `po nesne` | Nesnenin açıklamasını (`description`) yazdır |
| `e isim = 5` | Çalışırken değişkenin değerini değiştir |
| `bt` | Backtrace: buraya hangi çağrılarla gelindi |
| `c` / `n` / `s` / `finish` | Devam et / sonraki satır / içine gir / fonksiyondan çık |
| `br list` | Breakpoint listesi |
| `watchpoint set variable self.count` | Değişken değiştiği anda dur |

## Görsel araçlar

| Araç | Nerede | Ne için |
|---|---|---|
| **View Debugger** | Debug bar'daki katman ikonu ("Debug View Hierarchy") | Görünmeyen, üst üste binen view'lar, constraint hataları. 3B katman görünümü |
| **Memory Graph** | Debug bar'daki üç daire ikonu | Retain cycle ve memory leak avı (01-10, 07) |
| **Environment Overrides** | Debug bar'daki ayar ikonu | Çalışırken koyu mod, Dynamic Type, accessibility ayarlarını değiştirmek |

## Scheme diagnostics
Edit Scheme (⌘<) › Run › Diagnostics:

| Seçenek | Ne yakalar | Ne zaman aç |
|---|---|---|
| Main Thread Checker | UI'ın arka plan thread'inden güncellenmesi | Her zaman açık (varsayılan) |
| Thread Sanitizer | Data race'ler | 02-concurrency drill'lerinde |
| Address Sanitizer | Bellek bozulması | Nadiren, şüpheli çökmelerde |
| Zombie Objects | Serbest bırakılmış nesneye mesaj gönderme | UIKit'te açıklanamayan çökmelerde |

## Loglama

```swift
import OSLog

let logger = Logger(subsystem: "com.ahmet.kumbara", category: "network")
logger.info("Fetched \(items.count) items")
logger.error("Request failed: \(error.localizedDescription)")
```

`print` yerine `Logger` kullan: seviyeleri var (debug, info, error), Console.app'te filtrelenebilir ve release build'de performansı etkilemez.

## Instruments (12. modülde derinlemesine)

| Şablon | Ne için |
|---|---|
| Time Profiler | Uygulama nerede yavaşlıyor? |
| Allocations | Bellek nerede büyüyor? |
| Leaks | Sızan bellek var mı? |
| SwiftUI | Hangi view ne sıklıkla yeniden çiziliyor? |
| Network | İstekler, süreleri, boyutları |
| Hangs | Ana thread'in donduğu anlar |

Açmak için: ⌘I (Profile).
