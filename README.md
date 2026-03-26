# InterU — Angular migration

This workspace contains a migrated Angular app (scaffold) using Angular Material.

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Install Angular Material (recommended):

```powershell
npx ng add @angular/material
```

3. Run the dev server:

```powershell
npm start
```

Notes

- The original static pages are under `subjects/`. The Angular components are in `src/app/subjects/` and use the original content as placeholders.
- If you don't have the Angular CLI installed globally, use `npx ng` as shown above.
# InterU

Repository scaffold for the InterU project.

## Quick start

- This repo was created locally and (optionally) pushed to GitHub.
- Add your project files and then open a PR or push changes as needed.

## Notes

- License: none selected. Add a `LICENSE` file if desired.

## GitHub Pages (Preview site)

This repository now includes a simple static GitHub Pages site for interview
preparation across multiple subjects. Files for the site live at the repository
root and in `subjects/`.

To publish the site on GitHub Pages from the `master` branch (your plan):

1. Commit and push the repo to GitHub on the `master` branch.
2. On GitHub, go to the repository Settings → Pages.
3. Under "Source", choose the `master` branch and `/ (root)` (or `docs/` if you prefer).
4. Save — the site will be available at `https://<your-username>.github.io/<repo-name>/`.

Next steps:

- Create a `dev` branch and make feature changes there.
- Replace the placeholder subject pages in `subjects/` with content and examples.
- Optionally add a GitHub Action to validate or build the site if you introduce a static site generator.

Automatic deployment

This repository includes a GitHub Actions workflow that automatically deploys the
site to GitHub Pages whenever you push to the `master` branch. The workflow is
located at `.github/workflows/deploy-pages.yml` and packages the `index.html`,
`assets/`, and `subjects/` directories into a Pages artifact which GitHub then
publishes.

If you prefer to publish from `docs/` instead, let me know and I can move the
site files and update the workflow accordingly.

