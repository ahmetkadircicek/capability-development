# Workflow: issue → branch → PR → review → merge

Bu repoda bir iş ortamındaki gibi çalışıyoruz. `main` korumalı: kimse (sen de, ben de) doğrudan `main`'e push yapamaz. Her değişiklik bir Pull Request ile gelir.

Bu akışı [00-05 · Git & GitHub akışı](../00-setup/drills/05-git-and-github-flow/) drill'inde adım adım, ilk PR'ını açarak öğreneceksin. Bu sayfa sonrası için kopya kağıdı.

## Kavramlar

| Kavram | Ne? | Benzetme |
|---|---|---|
| **Repository (repo)** | Proje klasörü ve tüm geçmişi. Bir kopyası bilgisayarında (local), bir kopyası GitHub'da (remote/origin) | Ortak yazılan kitap |
| **Commit** | Değişikliklerin kaydedildiği nokta: ne değişti, kim, ne zaman, neden | Oyundaki "save" |
| **Branch** | Ana hattan ayrılmış çalışma kolu. `main` = temiz ve onaylı hal | Kitabın taslak kopyası |
| **Push / Pull** | Local commit'leri GitHub'a göndermek / GitHub'dakileri locale çekmek | Buluta yükle / buluttan indir |
| **Pull Request (PR)** | "Bu branch'teki değişiklikleri main'e almak istiyorum, bakar mısınız?" talebi. GitLab'da adı Merge Request (MR) | Editöre teslim edilen taslak |
| **Review** | PR'daki değişikliklerin incelenip yorumlanması | Editörün kırmızı kalemi |
| **Merge** | Onaylanan branch'i main'e birleştirmek | Taslağın kitaba girmesi |
| **Issue** | Yapılacak bir iş kartı | Jira ticket'ı |
| **Milestone** | Issue'ları gruplayan ve due date'i olan hedef. Bizde her modül bir milestone | Sprint / sürüm hedefi |
| **Check (CI)** | PR açıldığında otomatik çalışan kontroller | Otomatik ön kontrol |

## Döngü

```
  Issue #12 "01-03 · Optionals"
        │
        ▼
  git switch -c drill/01-03-optionals      ← main'den yeni branch
        │
        ▼
  kodu yaz → git add → git commit          ← istediğin kadar commit
        │
        ▼
  git push -u origin drill/01-03-optionals
  gh pr create                             ← PR açılır, check'ler çalışır
        │
        ▼
  "PR'ı review et" → mentor yorumları      ← ✅ ⚠️ 💡
        │
        ▼
  düzelt → commit → push                   ← PR kendiliğinden güncellenir
        │
        ▼
  LGTM ✅ → gh pr merge --squash           ← issue #12 otomatik kapanır
        │
        ▼
  git switch main && git pull              ← bir sonraki işe hazırsın
```

## Komut kopya kağıdı

```bash
# Güne başlarken: main'i güncelle
git switch main
git pull

# Yeni işe başla
git switch -c drill/01-03-optionals

# Durumu gör
git status
git diff

# Kaydet
git add .
git commit -m "feat(01-03): add optional binding exercise"

# GitHub'a gönder (ilk seferde -u ile)
git push -u origin drill/01-03-optionals
git push            # sonraki seferlerde

# PR aç: başlığı sorar, açıklama için PR şablonuyla editör açar
gh pr create
gh pr create --web  # alternatif: tarayıcıda şablonlu form açar

# PR durumunu ve check'leri gör
gh pr status
gh pr checks

# Merge (LGTM sonrası)
gh pr merge --squash --delete-branch

# Temizlik
git switch main
git pull
```

## İsimlendirme

**Branch:** `<tip>/<id>-<konu>`, küçük harf, tire ile ayrılmış

| Tip | Ne zaman | Örnek |
|---|---|---|
| `drill/` | Drill çözümü | `drill/01-03-optionals` |
| `build/` | Build'in bir alt milestone'u | `build/b01-bookshelf-m1-models` |
| `capstone/` | Capstone sprinti (capstone reposunda) | `capstone/s2-transactions` |
| `docs/` | Doküman değişikliği (çoğunlukla mentor) | `docs/drill-01-04` |
| `article/` | Medium taslağı | `article/swiftui-state-for-flutter-devs` |
| `fix/`, `chore/` | Düzeltme, bakım | `chore/update-swiftlint` |

**Commit ve PR başlığı:** [Conventional Commits](https://www.conventionalcommits.org/)

```
<tip>(<kapsam>): <kısa açıklama, emir kipi, İngilizce>

feat(01-03): add optional chaining exercise
fix(01-03): handle empty input in parser
docs(00-05): clarify rebase section
refactor(b01): extract BookStore protocol
test(c2): add CartViewModel tests
chore: bump swiftlint to 0.x
```

`pr-checks` bunları otomatik kontrol eder. Uymazsa PR merge edilemez; başlığı düzeltip (`gh pr edit --title "..."`) tekrar dene.

## main'in korumaları

| Kural | Anlamı |
|---|---|
| PR zorunlu | `main`'e direkt push reddedilir |
| Check'ler geçmeli | `branch-name` ve `pr-title` yeşil olmadan merge yok |
| Yorumlar çözülmeli | PR'da açık review yorumu varsa merge yok |
| Sadece squash merge | Branch'teki tüm commit'ler main'de tek, temiz bir commit olur |
| Force push ve silme yasak | `main`'in geçmişi yeniden yazılamaz |
| Bypass yok | Repo sahibi (sen) dahil kimse bu kuralları atlayamaz |

> Approval kuralı yok, çünkü GitHub kendi PR'ını onaylamana izin vermiyor. Onay, mentorun sohbetteki `LGTM ✅` mesajıdır.

## Sık karşılaşılan durumlar

| Durum | Çözüm |
|---|---|
| Yanlışlıkla main'de commit attım | `git switch -c drill/...` ile branch aç (commit'ler gelir), sonra `git switch main && git reset --hard origin/main` |
| Push reddedildi: "protected branch" | Doğru! main'e push yapılamaz. Branch açıp PR ile gel |
| PR'da conflict var | `git switch main && git pull`, sonra `git switch <branch> && git merge main`, çakışmaları çöz, commit + push |
| Son commit mesajını düzeltmek istiyorum | Henüz push'lamadıysan `git commit --amend` |
| Değişikliği geçici olarak kenara koymak | `git stash`, sonra `git stash pop` |
| Neyi değiştirdiğimi unuttum | `git log --oneline -10` ve `git diff main...HEAD` |
