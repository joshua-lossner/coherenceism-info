# Deployment Guide

## Local Development
```bash
npm run dev      # Build with watch mode
npm run preview  # Serve at http://localhost:3000
```

## Netlify Deployment

1. Push to GitHub:
```bash
git add .
git commit -m "Initial coherenceism.info site"
git remote add origin https://github.com/joshua-lossner/coherenceism-info.git
git push -u origin main
```

2. In Netlify:
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `public`
- Environment variables: None needed

## Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```
- Framework: Other
- Build command: `npm run build`
- Output directory: `public`

## GitHub Pages

1. Build and deploy:
```bash
npm run build
npx gh-pages -d public
```

## Manual Deployment

The `public/` folder contains static HTML/CSS. Upload it to any web server:
- AWS S3 + CloudFront
- Google Cloud Storage
- Any FTP host

## Domain Setup

Point your domain's DNS to your deployment:
- Netlify: Follow their custom domain guide
- Vercel: Add domain in project settings
- GitHub Pages: Create CNAME file

## Content Updates

When CORA's harvest/ updates:
1. Pull latest from CORA
2. Run `npm run build`
3. Deploy (automatic if using Netlify/Vercel with git)

## Performance

The site is static HTML/CSS with:
- No JavaScript required
- No tracking or analytics
- Minimal dependencies
- Fast load times
- Works without JS