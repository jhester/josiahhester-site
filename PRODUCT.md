# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences, confirmed by the owner (in no strict order):

- **Academic peers and collaborators** — other researchers, conference organizers, program committees, and award/fellowship reviewers checking credibility, the publication record, and current roles.
- **Press and journalists** — reporters researching Josiah for a story on sustainable computing, battery-free devices, AI and data centers, or Indigenous technology; they need a quotable bio, press history, and primary sources fast.
- **General public and policy audience** — people who encountered the data-center op-eds, the Eahou Fest keynote, or the Indigenous-tech advocacy and want to go deeper.

Explicitly **not** the design priority: prospective students and postdocs. The site keeps a single "join my lab" line pointing to the lab site (kamoamoa.com), but recruitment is handled there, not here.

## Product Purpose

The personal academic website of Josiah Hester: Associate Professor in the College of Computing at Georgia Tech (Interactive Computing and Computer Science; ECE courtesy); Director of the Center for Advancing Responsible Computing; Director of the Ka Moamoa lab; Associate Director for Civic Innovation and AI at the Brook Byers Institute for Sustainable Systems; Executive Director of the Ulu Lāhui Foundation.

It is the authoritative public record of his research, publications, honors, public writing, keynotes, teaching, and news. Success means a peer, journalist, or policy reader can get an accurate, current, credible picture in one visit and reach primary sources (papers, op-eds, the CV) without friction.

## Positioning

Research that treats Indigenous — especially Native Hawaiian (Kānaka Maoli) — knowledge systems as a legitimate **design paradigm** for computing and AI, not merely an application domain, paired with rigorous embedded-systems, intermittent/battery-free computing, and HCI research. Confirmed by the owner as the site's core distinctive angle.

A consequence of this position: provocation is first-class. Op-eds, art/technology collaborations (Rhizome 7x7 at the New Museum), and keynotes such as "AI is the Next Plantation" sit alongside the formal publication record rather than beneath it.

## Operating Context

- **Content sources:** the owner's CV (`files/CV.pdf`, dated Jul 7 2026), Google Scholar, press coverage, and direct edits by the owner. New items are added by hand, usually in conversation with Claude.
- **Pages:** About (`index.html`), News (`news.html`), Research (`research.html`, four curated projects), Writing, Art, and Provocation (`writing.html`), Teaching (`teaching.html`), Publications (`publications.html`, the full CV list: 55 conference, 23 journal, 20 workshop papers). Standalone: `georgia-data-center-flier.html` (a BBISS policy-brief flier), `cv.html` (redirect to the About page, for inbound links such as csrankings.org).
- **Hosting:** GitHub Pages from `jhester/josiahhester-site`, custom domain `josiahhester.com`, HTTPS enforced. Pushing to `main` deploys.
- **Working copy:** the owner also keeps a mirror at `NURepos/cv-my-site/v2/`; edits are synced to this repo before pushing.
- **Related sites:** kamoamoa.com (lab), the Google Scholar profile, ka-moamoa.github.io/terracell, responsible.computing.gatech.edu.
- **Planned automation:** a monthly cloud routine to surface new papers, press, and talks for the owner to approve (blocked pending a GitHub connection for routines).

## Capabilities and Constraints

- **Static site only, no backend or CMS** (confirmed constraint). Plain HTML/CSS/JS, no framework, no build step, no database.
- Shared tokens and components live in `css/style.css`; light and dark themes via a manual toggle plus `prefers-color-scheme`; responsive nav for narrow viewports (`js/main.js`).
- Third-party embeds in use: YouTube iframes and Instagram's official oEmbed blockquote. Avoid hotlinked assets whose URLs expire (a hand-rolled Instagram card broke this way once).
- Images are self-hosted in `img/` (JPG and AVIF). Documents live in `files/`. Favicons live in `favicon/`.
- **Terminology:** Hawaiian words carry correct orthography — ʻokina (ʻ) and kahakō (ā, ē, ī, ō, ū). Examples in use: Hawaiʻi, Kānaka Maoli, Mālama ʻĀina, Ahupuaʻa, Ka Moamoa, Ulu Lāhui, Purple Maiʻa, Kāneʻohe.
- **Undecided / pending:** the "Internet of Batteryless Things" research card uses a stand-in image (`img/hero-bfree.jpg`) until the owner supplies a real one; the Teaching page's philosophy paragraph is a placeholder awaiting the owner's write-up; the Teaching course cards are real (two Georgia Tech, three Northwestern) but link nowhere by choice.

## Brand Commitments

- The name is **Josiah Hester**; institutional roles must stay exactly as listed under Product Purpose and be updated, not embellished.
- Voice is first person and direct ("I direct…", "Iʻm motivated by…"); the owner writes and edits copy in this voice.
- Identity assets on hand: the headshot (`img/headshot4-short.jpg`) and the favicon set (`favicon/`). These are the owner's choices and are binding until replaced by the owner.

## Evidence on Hand

Real, owner-supplied material with paths:

- `files/CV.pdf` — full CV, the source of truth for publications, awards, talks, and roles.
- `files/malama-aina.pdf` — the Hello World Magazine (Raspberry Pi Foundation) essay.
- `img/headshot4-short.jpg`, `img/project-collage.jpg`, `img/eahou-keynote.jpg`, `img/rhizome-panel.jpg`, `img/gameboy-wsj.avif`, and the research hero images (`hero-gameboy.jpg`, `hero-smfc.jpg`, `kc-hero.jpg`, `hero-bfree.jpg`).
- `georgia-data-center-flier.html` — BBISS policy brief flier (Saeed & Hester, TPRC 2026).
- Press history with links in `index.html` (WSJ, BBC, Scientific American, Popular Science, CNET, and others); awards list in `index.html` (PECASE 2025, Sloan Fellowship, NSF CAREER, and others); full publication list in `publications.html`.

Absences future work must not fill in: there are no testimonials, no invented metrics or benchmarks, and no stock photography. Every photo, quote, and press mention on the site is real and came from the owner.

## Product Principles

1. **Accuracy over embellishment.** Every claim traces to the CV, a paper, or a press piece. The site is a citable record; when in doubt, ask the owner rather than infer.
2. **Provocation is first-class.** Public writing, art collaborations, and keynotes are part of the work, presented alongside the publication record rather than as an afterthought.
3. **Indigenous knowledge as design paradigm, in the owner's words.** Keep this framing specific and substantive; never flatten it into generic diversity language.
4. **Maintainable by hand.** Plain files the owner can edit directly; no services or expiring assets that quietly break.
5. **Serve peers, press, and the public first.** Credibility and findability of primary sources outrank recruitment marketing.

## Accessibility & Inclusion

- Correct Hawaiian orthography (ʻokina and kahakō) is a standing requirement, not a stylistic preference.
- Light and dark themes are both supported; the most recent polish pass targeted WCAG AA contrast (4.5:1) for text on accent fills. No formal conformance level has been set by the owner.
