# 00-05 · Git & GitHub akışı: ilk PR'ın

> ⏱ ~2 saat · 🎚️ orta · ⬅️ [00-04](../04-debugging-basics/) · ➡️ [00-06](../06-swift-package-and-linting/)
> Branch: `drill/00-05-first-pr`

## Neden önemli?
İşe başladığın ilk gün bir ticket alacak, branch açacak, PR gönderecek ve review alacaksın. Bu döngüyü rahat yapamayan biri, kodu ne kadar iyi olursa olsun ekipte yavaş kalır. Bu repoda her drill bu döngüyle biteceği için bir yıl boyunca 80'den fazla PR açacaksın; ilk günden doğru öğrenelim.

## Kavram
Önce [docs/workflow.md](../../../docs/workflow.md) dosyasındaki **Kavramlar** tablosunu ve **Döngü** diyagramını oku. Kısaca:

```
main ────────────●─────────────────────●────   (korumalı, sadece PR ile değişir)
                  \                   /
drill/00-05-...    ●───●───●───(PR)──●          (senin çalışma alanın)
```

| Komut | Anlamı |
|---|---|
| `git status` | Ne değişti, ne commit'lenmeye hazır? |
| `git switch -c <ad>` | Yeni branch aç ve ona geç |
| `git add <yol>` | Değişikliği commit'e hazırla (staging) |
| `git commit -m "..."` | Kayıt noktası oluştur |
| `git push -u origin <ad>` | Branch'i GitHub'a gönder |
| `gh pr create` | PR aç |
| `gh pr merge --squash` | PR'ı main'e tek commit olarak birleştir |

## Adım adım

### 1 · Hazırlık
```bash
cd ~/Projects/iOS/swift-learn
git config --global user.name    # "Ahmet K." görünmeli
git config --global user.email
git switch main
git pull
git status
```
`git status` çıktısında 00-01…00-04'te oluşturduğun dosyaları **untracked** olarak göreceksin: `HelloXcode` projesi ve `toolbox/xcode/CodeSnippets`.

### 2 · Neyin commit'leneceğini kontrol et
```bash
git status --ignored
```
`xcuserdata/` gibi kişisel Xcode dosyalarının **ignored** altında olduğunu gör. Bunu [`.gitignore`](../../../.gitignore) sağlıyor. Kişisel ayarlar ve build çıktıları repoya girmez.

### 3 · Branch aç
```bash
git switch -c drill/00-05-first-pr
```
Untracked dosyalar seninle birlikte yeni branch'e gelir.

### 4 · Mantıklı parçalar halinde commit at
Bir PR'ın içinde bile commit'ler hikaye anlatmalı. Her drill'i ayrı bir commit yap:
```bash
git add 00-setup/drills/01-xcode-tour
git commit -m "feat(00-01): add HelloXcode profile card"

git add toolbox/xcode
git commit -m "chore(00-03): add Xcode code snippets"
```
00-04'ün değişiklikleri de `HelloXcode` projesinde. Eğer 00-01 commit'ine girdilerse sorun değil; girmediyse ayrı bir commit at. Sonra geçmişe bak:
```bash
git log --oneline
```

### 5 · Push ve PR
```bash
git push -u origin drill/00-05-first-pr
gh pr create
```
`gh` sana başlık soracak. **Bilerek hatalı bir başlık yaz:** `first pr`. Açıklama için editör açılacak; PR şablonunu doldur:
- "Ne yaptım?" bölümüne 00-01…00-04 özetini, 00-04'te bulduğun hataları ve nasıl bulduğunu yaz.
- `Closes #` satırına bu milestone'daki issue numaralarını yaz (`gh issue list` ile bul). Birden fazlaysa: `Closes #1, closes #2, closes #3, closes #4, closes #5`.
- Harcanan süreyi yaz.

### 6 · Check'leri izle
```bash
gh pr checks --watch
```
`pr-title` check'i **kırmızı** olacak, çünkü başlık conventional commit formatında değil. Düzelt:
```bash
gh pr edit --title "feat(00-05): complete setup drills 00-01 to 00-04"
gh pr checks --watch
```
İki check de yeşil olmalı.

### 7 · Korumayı test et
Önce korumanın aktif olduğundan emin ol (GitHub Pro alındıktan sonra kurulur):
```bash
gh api repos/ahmetkadircicek/swift-learn/rules/branches/main --jq 'map(.type)'
```
Çıktıda `pull_request`, `non_fast_forward`, `deletion` görmüyorsan bu adımı **atla** ve mentora söyle. Görüyorsan main'in gerçekten korunduğunu test et:
```bash
git switch main
git commit --allow-empty -m "test: direct push to main"
git push origin main
```
Push **reddedilecek** ("protected branch" / ruleset hatası). Güzel, olması gereken bu. Şimdi bu boş commit'i geri al:
```bash
git reset --hard origin/main
git switch drill/00-05-first-pr
```

### 8 · Review iste
Bana "PR'ı review et" de. Yorumlarım ✅ / ⚠️ / 💡 formatında gelecek. Bir düzeltme istersem:
```bash
# düzelt, sonra
git add .
git commit -m "fix(00-01): ..."
git push
```
PR kendiliğinden güncellenir. "Tekrar bak" de.

### 9 · Merge ve temizlik
`LGTM ✅` aldıktan sonra:
```bash
gh pr merge --squash --delete-branch
git switch main
git pull
git log --oneline -3
gh issue list --milestone "00 · Setup" --state all
```
main'de PR başlığını taşıyan **tek bir** commit göreceksin (squash). Issue'lar kapanmış olmalı.

## Alıştırma
Adım adım bölümünün kendisi alıştırma. Ek olarak, mentora sözlü olarak (sohbette yazarak) şunları açıkla:
1. Squash merge sonrası branch'teki 3 commit'e ne oldu?
2. `git pull` ne yaptı?
3. main'e push neden reddedildi ve bu bir ekipte neden önemli?

**Beklenen durum:**
| Kontrol | Beklenen |
|---|---|
| `gh pr list --state merged` | İlk PR'ın merged |
| `git log --oneline main` | En üstte `feat(00-05): complete setup drills 00-01 to 00-04 (#N)` |
| `gh issue list --milestone "00 · Setup" --state closed` | 00-01…00-05 issue'ları kapalı |
| `git branch` | Sadece `main` (local branch silindi) |

## Bonus
- `git log --graph --oneline --all` çıktısını oku.
- [Oh My Git!](https://ohmygit.org) veya [Learn Git Branching](https://learngitbranching.js.org) ile 15 dakika branch ve rebase pratiği yap.

## Mülakat köşesi
<details>
<summary>Merge, rebase ve squash arasındaki fark nedir?</summary>

**Merge** iki geçmişi birleştiren bir merge commit'i oluşturur; tüm commit'ler korunur. **Rebase** branch'teki commit'leri hedefin ucuna yeniden yazar; geçmiş düz olur ama commit hash'leri değişir, bu yüzden paylaşılan branch'lerde dikkatli kullanılır. **Squash** branch'teki tüm commit'leri tek bir commit'e indirger; main temiz kalır ama ara adımlar kaybolur. Bu repoda squash kullanıyoruz: her PR = main'de bir commit.
</details>

<details>
<summary>İyi bir PR nasıl olur?</summary>

Küçük ve tek bir amaca odaklıdır (review süresi PR boyutuyla katlanarak artar). Açıklaması "ne" ve "neden"i anlatır, nasıl test edildiğini söyler, gerekiyorsa ekran görüntüsü içerir. Check'leri yeşildir. Yazar, review istemeden önce kendi diff'ini bir kez okumuştur.
</details>

<details>
<summary><code>git reset</code> ve <code>git revert</code> farkı nedir?</summary>

`reset` branch'in ucunu geri taşır, yani geçmişi yeniden yazar; sadece henüz paylaşılmamış (push'lanmamış) commit'lerde güvenlidir. `revert`, bir commit'in etkisini geri alan **yeni** bir commit oluşturur; geçmiş korunur, paylaşılan branch'lerde doğru yol budur.
</details>

## Kaynaklar
- [docs/workflow.md](../../../docs/workflow.md)
- [Pro Git kitabı](https://git-scm.com/book/tr/v2) (Türkçe çevirisi var)
- [GitHub CLI manual](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/tr/v1.0.0/)

## ✅ Bitirme listesi
- [ ] İlk PR açıldı, check'ler yeşil, review alındı, squash merge edildi
- [ ] main'e direkt push'un reddedildiğini gördüm
- [ ] Merge, rebase, squash farkını anlatabiliyorum
