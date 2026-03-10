# AFFiNE Edgeless Canvas

A standalone infinite whiteboard / canvas editor built on top of [BlockSuite](https://blocksuite.io/) — the same engine that powers [AFFiNE](https://affine.pro/).

---

## What It Does

Renders a full-screen edgeless (whiteboard) canvas with:
- Freehand drawing (pen/brush)
- Shapes (rectangle, ellipse, triangle, etc.)
- Text elements
- Connectors / arrows
- Sticky notes
- Frames
- Pan & zoom (infinite canvas)
- Undo / redo

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Components | [Lit](https://lit.dev/) (Web Components) |
| Canvas Rendering | HTML5 Canvas API + [RoughJS](https://roughjs.com/) |
| Data / State | [Yjs](https://yjs.dev/) (CRDT) |
| Editor Engine | [BlockSuite](https://blocksuite.io/) `@blocksuite/presets` |
| Build Tool | [Vite](https://vitejs.dev/) |
| Language | TypeScript |

---

## Project Structure

```
AFFiNE-Edgeless/
├── src/
│   ├── main.ts        # Entry point — initializes doc collection and mounts the editor
│   └── style.css      # Minimal full-screen layout styles
├── index.html         # HTML shell with #app mount point
├── vite.config.ts     # Vite config with WASM and top-level-await plugins
├── tsconfig.json      # TypeScript config
└── package.json       # Dependencies
```

---

## Dependencies

```json
"@blocksuite/blocks":  "0.15.0-canary-202406291027-8aed732"
"@blocksuite/presets": "0.15.0-canary-202406291027-8aed732"
"@blocksuite/store":   "0.15.0-canary-202406291027-8aed732"
```

- **`@blocksuite/presets`** — provides the ready-to-use `EdgelessEditor` web component
- **`@blocksuite/blocks`** — provides `AffineSchemas` (all block type definitions)
- **`@blocksuite/store`** — provides `DocCollection`, `Schema`, `Text` (the data layer)

---

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

---

## How to Run

```bash
# 1. Go into the project folder
cd AFFiNE-Edgeless

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser at the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## How It Works (main.ts)

```
1. Register AffineSchemas     → defines all block types (page, surface, note, paragraph...)
2. Create DocCollection       → the Yjs-backed document store
3. Create a Doc               → one document inside the collection
4. Mount EdgelessEditor       → attach the Web Component to #app div
5. Load the Doc               → add the required block tree:
                                  affine:page
                                  └── affine:surface   (the canvas layer)
                                  └── affine:note
                                      └── affine:paragraph
```

The `affine:surface` block is what drives the infinite canvas rendering.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

---

## Related Links

- [BlockSuite Docs](https://blocksuite.io/guide/overview.html)
- [BlockSuite GitHub](https://github.com/toeverything/blocksuite)
- [AFFiNE](https://affine.pro/)
- [Edgeless Editor API](https://blocksuite.io/components/editors/edgeless-editor.html)
