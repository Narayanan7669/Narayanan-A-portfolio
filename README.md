# Narayanan A – Personal Portfolio (static website)

Plain HTML + CSS + JavaScript. No backend, no database, no admin page, no login, no installs. Free to host.

## Files
- `data/portfolio.js` – **ALL your content and design settings (edit this)**
- `index.html` – page skeleton and SEO tags
- `css/style.css`, `js/script.js` – styling and logic (normally untouched)
- `assets/images/` – favicon and project images · `assets/` – resume PDF
- `robots.txt`, `sitemap.xml` – for search engines · `404.html` – missing-page screen

## 1. Open and preview in VS Code
1. Install VS Code (code.visualstudio.com). File → Open Folder → choose this folder.
2. Easiest preview: install the extension **Live Server** (Extensions icon → search "Live Server"). Right-click `index.html` → **Open with Live Server**. The page refreshes each time you save.
   (Or just double-click `index.html` to open it in your browser, then press F5 after saving.)

## 2. Edit your content (`data/portfolio.js`)
Keep quote marks `"..."` and commas. Save with Ctrl+S.
- **Name / intro / education:** change `name`, `intro`, `education`, `status`, `graduation`.
- **Skills:** edit the `skills` list. Add `{ name: "Git", level: "Learning" }` only when true. Delete a line to remove a skill. `level: ""` shows no label.
- **Add a project:** copy one `{ title: ... }` block (from `{` to `},`), paste after it, change the fields. **Remove:** delete the block. **Update:** change `status` ("Planned", "In Progress", "Completed"), `technologies: ["Python", "Pandas"]`, `github: "https://github.com/you/repo"`, `demo: "https://..."`. Leave links `""` until real; a disabled button shows.
- **Project images:** save your screenshot (PNG/JPG/WebP) into `assets/images/` and set `image: "assets/images/my-shot.png"` and a description in `imageAlt`.
- **Resume:** replace `assets/Narayanan_tech_resume.pdf` with your PDF using the same file name (or use another name and update `resume.file`). The included file is only a placeholder.
- **Email / LinkedIn / GitHub:** edit `contact`. Empty LinkedIn/GitHub are hidden.
- **Section order and menu names:** edit `order` and `sections`.

## 3. Change colors, fonts, spacing (`theme` in the same file)
`colors.dark` / `colors.light` (bg, surface, text, muted, border, primary, secondary), `fontFamily`, `baseFontSize`, `headingScale`, `cardRadius`, `buttonRadius` (`"999px"` = pill), `sectionSpacing`, `default` ("dark" or "light"). Layout details live in `css/style.css`, which uses these as CSS variables.

## 4. Publish free (GitHub Pages)
1. Create a free account at github.com. New repository, e.g. `portfolio` (Public).
2. Upload all files (Add file → Upload files; drag this folder's *contents*). Commit.
3. Settings → Pages → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. After ~1–2 minutes your real address appears (for example `https://github.com/Narayanan7669`). `localhost` addresses are only on your computer and are not public.
5. To update later: edit, then upload the changed files again (or use VS Code Source Control: Commit and Sync).
Alternatives: Netlify, Cloudflare Pages (drag-and-drop the folder). Custom domain later: buy one, then add it under Settings → Pages (GitHub) and follow the DNS steps shown.

## 5. Set your real URL (do this once, after step 4)
Replace `https://github.com/Narayanan7669` with your real address in: `index.html` (canonical link and `og:url`), `sitemap.xml`, and `robots.txt`. Re-upload.

## 6. Google Search Console
1. Go to search.google.com/search-console → Add property → **URL prefix** → paste your public URL.
2. Verify: choose *HTML tag*, copy the `<meta name="google-site-verification" ...>` line into `<head>` of `index.html`, publish, click Verify.
3. Sitemaps → enter `sitemap.xml` → Submit.
4. URL Inspection → paste your URL → **Request indexing**.

**Honest note:** SEO does not guarantee first-page ranking for "Narayanan portfolio" or fast indexing; it can take days to weeks, and a common name has competition. Helpful: link the site from your LinkedIn/GitHub profiles, and use your full name consistently. Optional: add an `og:image` (a 1200×630 PNG at an absolute URL) for nicer link previews.

## Contact form
There is intentionally none (it would need a backend). Visitors use your email and profile links. If you later want one, use a free form service (e.g. Formspree) and configure it yourself.
