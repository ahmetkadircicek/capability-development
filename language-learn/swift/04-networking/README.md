# 04 · Networking

> ⏱ ~16 saat · 📅 Due: **12 Şubat 2027** · Hafta 14–18

Önce `URLSession` ile her şeyi elle yapıyoruz; ardından aynı işi Alamofire ile yapıp farkı görüyoruz. Amaç, tek bir ekrana değil tüm uygulamaya hizmet eden, test edilebilir bir **API client** katmanı kurmak.

## Bu modülün sonunda
- `URLSession` ile async istek atıyor, HTTP durum kodlarını ve hataları anlamlı tiplere çeviriyorsun
- Endpoint'leri tipli tanımlayan, generic bir API client tasarlıyorsun
- Alamofire'da interceptor ile token ekleme ve retry kuruyorsun
- Görselleri önbellekli yüklüyor, sayfalama ve yükleniyor/hata/boş durumlarını yönetiyorsun

## Drill'ler

| # | Drill | ⏱ | 🎚️ | Durum |
|---|---|---|---|---|
| 04-01 | URLSession basics: `data(from:)`, `HTTPURLResponse`, decoding | 1 | kolay | ⬜ |
| 04-02 | API client tasarımı: Endpoint, generic request, hata tipi | 1.5 | orta | ⬜ |
| 04-03 | Alamofire: request, `responseDecodable`, `RequestInterceptor`, retry | 1.5 | orta | ⬜ |
| 04-04 | Görsel yükleme: `AsyncImage`, Kingfisher, cache | 1 | kolay | ⬜ |
| 04-05 | ViewState (idle/loading/loaded/error) ve sayfalama | 1.5 | orta | ⬜ |

## 🧱 Build: Pokedex (~9.5 saat)
> **Ticket:** Bir oyun topluluğu sitesinin mobil ekibi, [PokeAPI](https://pokeapi.co) (key gerektirmez) üzerine bir keşif uygulaması istiyor: sonsuz kaydırmalı liste, arama, detay ekranı (tipler, istatistikler), görsel önbellek, ağ hatasında tekrar dene. Favoriler şimdilik bellekte tutulsun.

## Kurulacaklar
- 📦 [Proxyman](https://proxyman.com): uygulamanın ağ trafiğini görmek için (04-01'de)
- Paketler: Alamofire, Kingfisher

## Kaynaklar
- [URLSession dokümantasyonu](https://developer.apple.com/documentation/foundation/urlsession)
- [Alamofire Usage](https://github.com/Alamofire/Alamofire/blob/master/Documentation/Usage.md)
- WWDC: *Use async/await with URLSession* (2021)

## Mülakatta bu modülden
URLSession yapılandırmaları · HTTP cache · retry ve exponential backoff · token refresh sırasında gelen eşzamanlı istekler · Alamofire ne zaman gerekli, ne zaman değil · ATS · sertifika pinleme
