# josiahhester.com

Personal site for Josiah Hester (Georgia Tech). Static HTML/CSS/JS, no build step.

## Structure

- `index.html` — About
- `news.html` — News and Updates
- `research.html` — Research
- `writing.html` — Writing, Art, and Provocation
- `teaching.html` — Teaching
- `publications.html` — Publications
- `css/style.css` — shared styles
- `js/main.js` — dark mode + mobile nav toggle
- `img/` — images
- `files/CV.pdf` — current CV

## Preview locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying

This repo is served via GitHub Pages with a custom domain (see `CNAME`). Pushing to `main` updates the live site.

## Updating content

Each page is a standalone HTML file sharing `css/style.css`. Edit the relevant page directly — there's no templating or generator.
