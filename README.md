
TulipFlowerLike — Static Website (updated)
=========================================

Files included:
- index.html, schedule.html, about.html, store.html
- styles.css, site.js, schedule.json
- assets/ (placeholder images)

All social handles and usernames have been updated to **TulipFlowerLike**.

Hosting — step-by-step (Windows)
--------------------------------

Option A — GitHub Pages (simple, free for static sites)
1. Create a GitHub account at https://github.com (if you don't have one).
2. Install Git for Windows (https://git-scm.com) or use GitHub Desktop.
3. Create a new repository on GitHub (e.g. `tulipflowerlike-site`) — do NOT initialize with a README if you plan to push from local.
4. From Windows PowerShell or Git Bash:
   - unzip the site folder and navigate to it:
     ```powershell
     cd C:\path\to\BeigeSite_Tulip
     git init
     git add .
     git commit -m "Initial site upload"
     git remote add origin https://github.com/YOURUSERNAME/tulipflowerlike-site.git
     git branch -M main
     git push -u origin main
     ```
5. On GitHub, open the repository → Settings → Pages → Source: select branch `main` and folder `/ (root)` → Save.
6. After a minute, your site will be available at `https://YOURUSERNAME.github.io/tulipflowerlike-site/`.

Option B — Netlify (drag & drop, or link your Git repo)
1. Create an account at https://app.netlify.com/.
2. Drag & drop the unzipped folder into the Netlify dashboard (Sites → New site from Git or drag & drop site folder) — Netlify will publish it and provide a URL.
3. Or connect your GitHub repo to Netlify for automatic deploys on push (choose the repo and branch).

Option C — Vercel (automatic for Git repos)
1. Create an account at https://vercel.com/ and connect your GitHub account.
2. Import the repository and use the default static settings. Vercel will deploy and give a URL.

Notes:
- For custom domains, both Netlify and Vercel provide easy DNS instructions.
- If you want a contact form, payment integration, or server-side features, ask me and I can scaffold those integrations (Stripe, Shopify, Netlify Functions).

Editing the site:
- Replace placeholder images in /assets with your own.
- Update your bio in about.html and prices in store.html.
- To change schedule times, edit schedule.json or edit schedule.html script (the rules are clear at the top of that file).

