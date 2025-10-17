# coherenceism.info

Static site for Coherenceism philosophy, generated from CORA's harvest.

## Quick Start

```bash
# Install dependencies
npm install

# Sync content from CORA
npm run sync

# Build the site
npm run build

# Or run in development mode (with watch)
npm run dev

# Preview the built site
npm run preview
```

## How It Works

1. **Content lives in CORA** - The upstream CORA repository contains all source content
2. **Sync pulls from harvest/** - Content is copied from CORA's harvest and coherenceism directories
3. **Generator builds static HTML** - Simple markdown-to-HTML conversion with templates
4. **Deploy anywhere** - Output is plain HTML/CSS, works on any static host

## Philosophy

This site follows coherentist principles:
- **Minimal dependencies** - Only what's necessary
- **Clear structure** - Content organized by type
- **No noise** - No tracking, analytics, or unnecessary features
- **Source of truth** - CORA is canonical, this just renders it

## Deployment

The `public/` directory contains the built site. Deploy it to:
- Netlify (auto-build from repo)
- Vercel (auto-build from repo)
- GitHub Pages (push to gh-pages branch)
- Any static file host

## License

Content from CORA is MIT licensed. See CORA repository for details.