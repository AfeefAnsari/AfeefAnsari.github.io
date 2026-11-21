# Afeef Ansari, personal site

Plain HTML and CSS. No JavaScript, no build step, no dependencies.

## Files
- `index.html`, `projects.html`, `about.html`, `journal.html`
- `project-thermosim.html`, `project-orbital-mechanics.html`, `project-anduril-ai-grand-prix.html`, `project-fusor.html`
- `style.css` (shared by every page)

## Deploying
1. Unzip.
2. Copy these files into the repository root (there are no subfolders), replacing files with the same names.
3. Commit and push. GitHub Pages updates in a minute or two.

Files already in the repo that are not in this ZIP (images, etc.) are untouched. The old `script.js` is no longer used. You can delete it, or leave it.

## Editing
- Navigation and footer are repeated in each HTML file. Change them in all nine pages.
- Add images with `<img src="images/name.jpg" alt="Describe it" width="..." height="...">` inside a project page.
- Add a journal post by creating a new HTML file and listing it in `journal.html`.
- No email or social links are included because none were provided. Add them in the footer when ready.
- The fusor page is a non-operational retrospective. Keep construction and operating details off it.

## Images
Squares and banners look for these files in the repository root. If a file is missing, the square shows a plain tint and the banner is hidden.
- `img-thermosim.jpg`, `img-orbital-mechanics.jpg`, `img-anduril-ai-grand-prix.jpg`, `img-fusor.jpg`
Use landscape photos about 1600 px wide. The squares crop to the center.

## Notes preview block (Google Doc)
A commented-out block is not included by default. To add a preview box that opens a Google Doc:
1. Make a copy of the doc that has only what you want public (no gas, chemical, or electrical procedures).
2. In Google Docs: File, Share, Publish to web, then Publish.
3. Put this where you want it, replacing YOUR_DOC_ID with the ID from the doc URL:
```
<section><h2>Notes</h2><div class="notes"><iframe src="https://docs.google.com/document/d/YOUR_DOC_ID/pub?embedded=true" title="Preview of my notes" loading="lazy" tabindex="-1"></iframe><a class="notes-open" href="https://docs.google.com/document/d/YOUR_DOC_ID/pub">Open the full notes</a></div></section>
```
