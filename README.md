# Manu’s personal desktop

An Ubuntu-inspired portfolio built with Next.js, React, and Motion. Every page visit begins with a reference-shaped 3D metal spinning top, followed by the retro update screen and modern desktop. The intro can be skipped or replayed. The Three.js scene uses local environment lights, a reflective tabletop, and an analytic precession/nutation approximation around a fixed contact point. It is not a rigid-body physics simulation. The supplied GIF is a local fallback for unavailable WebGL; reduced-motion visitors use a still image and a shortened transition.

## Run locally

```sh
npm ci
npm run dev
```

Production check: `npm run build`, then `npm start`.

## Content

Edit `src/data/portfolio.js` to update featured projects and profile destinations. The SLO app links to the supplied reliability lab demo and explains its recorded-data status. LeetCode links to ManuVashisth’s profile; personal practice is separately linked through public NeetCode submissions. Replace `public/Manu_Vashisth_CV.pdf` to update the résumé.

Project summaries are based on public RedHolger repository READMEs and local source READMEs in `~/Developer/Manu-Vashisth-Personal` and `/Volumes/MANU_DISK/google/sre-portfolio-corrected/source`. Featured additions include SLO Reliability Lab, EvidenceRAG, FlowLedger, and SiliconCheck. Experience and education retain the previous portfolio’s content. Core Knowledge lists technical areas, not verified course transcripts.

## Interaction

- Dock and desktop shortcuts open portfolio apps; external profiles open new tabs.
- Applications includes search, keyboard focus containment, and Escape to dismiss.
- Windows support minimize, close, maximize, and reopening from the dock.
- Project categories filter the selected work.
- Change atmosphere switches between aubergine and teal wallpapers.
- Mobile layouts use the dock and launcher for navigation and scrollable app content.
- Reduced-motion preferences disable decorative animations and shorten the boot transition.

Pushes to `main` publish through the GitHub Pages workflow. It builds with `GITHUB_PAGES=true`, enabling static export and the `/manu-vashisth.github.io` base path, including résumé and intro assets. To check the deployment build locally, run `GITHUB_PAGES=true npm run build` and serve `out/` under that path.
