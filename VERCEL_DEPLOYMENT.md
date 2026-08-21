# Vercel Deployment Handoff

The RVCE DebSoc website is now a **static Vite application** that does not rely on Manus storage, runtime plugins, analytics variables, debug collectors, or storage proxy middleware.

## Vercel configuration

`vercel.json` configures Vercel to run `pnpm run build`, publish `dist/public`, and rewrite all requests to `index.html`. This preserves Wouter client-side routes on direct navigation and refreshes, including `/society`, `/members`, `/formats/bp`, and `/formats/ap`.

## Localised assets

| Local file | Replaces |
| --- | --- |
| `client/public/assets/official-emblem-clean.webp` | Official crest served from `/manus-storage/` |
| `client/public/assets/dialogue-mark.webp` | Dialogue mark served from `/manus-storage/` |
| `client/public/assets/forest-archive.webp` | Society archive image served from `/manus-storage/` |
| `client/public/assets/paper-texture.webp` | Paper texture served from `/manus-storage/` |

All source references now point to `/assets/...`, which Vite copies unchanged into the build output.

## Files created

| File | Change |
| --- | --- |
| `client/public/assets/official-emblem-clean.webp` | Compressed local copy of the official crest. |
| `client/public/assets/dialogue-mark.webp` | Compressed local copy of the dialogue mark. |
| `client/public/assets/forest-archive.webp` | Compressed local copy of the Society archive background. |
| `client/public/assets/paper-texture.webp` | Compressed local copy of the paper texture. |
| `vercel.json` | Static build settings and SPA rewrites for Vercel. |
| `VERCEL_DEPLOYMENT.md` | This deployment handoff. |

## Files modified

| File | Change |
| --- | --- |
| `client/index.html` | Removed the Manus analytics script. |
| `client/src/components/PageChrome.tsx` | Points the header crest to the local asset. |
| `client/src/index.css` | Points background texture and watermark imagery to local assets. |
| `client/src/pages/Home.tsx` | Points crest and dialogue mark references to local assets. |
| `client/src/pages/SIP.tsx` | Points the SIP crest reference to the local asset. |
| `client/src/pages/Society.tsx` | Points the archive background to the local asset. |
| `package.json` | Uses a pure Vite build and preview command; removes the Manus runtime package. |
| `pnpm-lock.yaml` | Refreshed after the Manus runtime removal. |
| `vite.config.ts` | Rewritten without Manus runtime, debug collector, storage proxy, Forge variables, or Manus host configuration. |
| `todo.md` | Records the completed Vercel-compatibility work. |

## Files deleted

| File or directory | Reason |
| --- | --- |
| `client/public/__manus__/debug-collector.js` | Manus-only debug collector removed. |
| Original local PNG and JPG copies in `client/public/assets/` | Replaced with compressed WebP assets below the 1 MB checkpoint limit. |

## Validation completed

`pnpm check` and `pnpm run build` both complete successfully. A local production-preview check returned HTTP 200 for `/`, `/society`, `/members`, `/formats/bp`, and `/formats/ap`.
