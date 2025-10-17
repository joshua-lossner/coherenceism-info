#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import matter from 'gray-matter';
import chokidar from 'chokidar';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Paths
const contentPath = path.join(projectRoot, 'src', 'content');
const templatesPath = path.join(projectRoot, 'src', 'templates');
const publicPath = path.join(projectRoot, 'public');

// Watch mode
const isWatchMode = process.argv.includes('--watch');

// Ensure public directory exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Load templates
function loadTemplate(name) {
  const templatePath = path.join(templatesPath, `${name}.html`);
  if (!fs.existsSync(templatePath)) {
    return null;
  }
  return fs.readFileSync(templatePath, 'utf-8');
}

// Process markdown file
function processMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: body } = matter(content);

  const html = marked(body);

  return {
    frontmatter,
    html,
    raw: body
  };
}

// Generate navigation
function generateNav() {
  return `
    <nav class="site-nav">
      <a href="/" class="nav-logo">Coherenceism</a>
      <div class="nav-links">
        <a href="/roots.html">Roots</a>
        <a href="/branches.html">Branches</a>
        <a href="/about.html">About</a>
      </div>
    </nav>
  `;
}

// Build page
function buildPage(content, title, template = 'default') {
  const pageTemplate = loadTemplate(template) || loadTemplate('default');
  if (!pageTemplate) {
    console.error('No template found!');
    return '';
  }

  return pageTemplate
    .replace('{{title}}', title)
    .replace('{{nav}}', generateNav())
    .replace('{{content}}', content)
    .replace('{{year}}', new Date().getFullYear());
}

// Walk content directory
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.md')) {
      callback(filePath);
    }
  }
}

// Build site
function build() {
  console.log('🔨 Building site...\n');

  // Copy static assets
  const cssSourcePath = path.join(templatesPath, 'styles.css');
  const cssDestPath = path.join(publicPath, 'styles.css');
  if (fs.existsSync(cssSourcePath)) {
    const css = fs.readFileSync(cssSourcePath, 'utf-8');
    fs.writeFileSync(cssDestPath, css);
  }

  // Copy SVG assets
  const svgSourcePath = path.join(templatesPath, 'tree.svg');
  const svgDestPath = path.join(publicPath, 'tree.svg');
  if (fs.existsSync(svgSourcePath)) {
    const svg = fs.readFileSync(svgSourcePath, 'utf-8');
    fs.writeFileSync(svgDestPath, svg);
  }

  // Build about page
  const aboutPath = path.join(templatesPath, 'about.md');
  if (fs.existsSync(aboutPath)) {
    const { html } = processMarkdown(aboutPath);
    const aboutPage = buildPage(html, 'About - Coherenceism');
    fs.writeFileSync(path.join(publicPath, 'about.html'), aboutPage);
  }

  // Build tree page (knowledge tree navigation)
  const treeContent = `
    <h1>Knowledge Tree</h1>
    <p>The living structure of Coherenceism knowledge, organized as a tree with roots, branches, and leaves.</p>

    <section class="tree-section">
      <h2>Roots</h2>
      <p>The foundation and anchors of Coherenceism</p>
      <a href="/roots/coherenceism-root.html" class="tree-link">Explore Roots →</a>
    </section>

    <section class="tree-section">
      <h2>Branches</h2>
      <p>Major themes and areas of exploration</p>
      <a href="/branches" class="tree-link">Explore Branches →</a>
    </section>

    <section class="tree-section">
      <h2>Leaves</h2>
      <p>Atomic knowledge units - claims, patterns, questions</p>
      <a href="/leaves" class="tree-link">Explore Leaves →</a>
    </section>
  `;

  const treePage = buildPage(treeContent, 'Knowledge Tree - Coherenceism');
  fs.writeFileSync(path.join(publicPath, 'tree.html'), treePage);

  // Build index page
  const indexContent = `
    <div class="hero">
      <img src="/tree.svg" alt="Coherenceism Tree" class="hero-tree" />
      <h1>Coherenceism</h1>
      <p class="tagline">Truth emerges from resonance, not dominance</p>
    </div>

    <section class="features">
      <div class="feature">
        <h3>Roots</h3>
        <p>Foundation and anchors of the coherentist lens</p>
        <a href="/roots.html">Explore →</a>
      </div>
      <div class="feature">
        <h3>Branches</h3>
        <p>Major themes and areas of exploration</p>
        <a href="/branches.html">Explore →</a>
      </div>
    </section>
  `;

  const indexPage = buildPage(indexContent, 'Coherenceism - Home', 'home');
  fs.writeFileSync(path.join(publicPath, 'index.html'), indexPage);

  // Copy key content to root level for Vercel
  // Copy the main root document to /roots.html
  const rootPath = path.join(publicPath, 'roots', 'coherenceism-root.html');
  if (fs.existsSync(rootPath)) {
    const rootContent = fs.readFileSync(rootPath, 'utf-8');
    fs.writeFileSync(path.join(publicPath, 'roots.html'), rootContent);
    console.log('✅ Created /roots.html');
  } else {
    console.log('❌ Source file missing:', rootPath);
  }

  // Copy branches index to /branches.html
  const branchesPath = path.join(publicPath, 'branches', 'index.html');
  if (fs.existsSync(branchesPath)) {
    const branchesContent = fs.readFileSync(branchesPath, 'utf-8');
    fs.writeFileSync(path.join(publicPath, 'branches.html'), branchesContent);
    console.log('✅ Created /branches.html');
  } else {
    console.log('❌ Source file missing:', branchesPath);
  }

  // Build content pages
  if (fs.existsSync(contentPath)) {
    const contentMap = {};

    walkDir(contentPath, (filePath) => {
      const relativePath = path.relative(contentPath, filePath);
      const urlPath = relativePath.replace('.md', '').replace(/\\/g, '/');
      const { frontmatter, html } = processMarkdown(filePath);

      const title = frontmatter.title || path.basename(filePath, '.md');
      const page = buildPage(html, `${title} - Coherenceism`);

      const outputPath = path.join(publicPath, urlPath + '.html');
      const outputDir = path.dirname(outputPath);

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputPath, page);
      console.log(`Built: ${urlPath}`);

      // Track for index pages
      const category = relativePath.split(path.sep)[0];
      if (!contentMap[category]) contentMap[category] = [];
      contentMap[category].push({ title, url: '/' + urlPath, frontmatter });
    });

    // Build category index pages
    for (const [category, pages] of Object.entries(contentMap)) {
      const indexPath = path.join(publicPath, category, 'index.html');
      const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

      // Sort pages by order property if it exists, otherwise by title
      const sortedPages = pages.sort((a, b) => {
        const orderA = a.frontmatter.order || 999;
        const orderB = b.frontmatter.order || 999;

        if (orderA !== orderB) {
          return orderA - orderB;
        }

        // If same order (or no order), sort by title
        return a.title.localeCompare(b.title);
      });

      const listHtml = `
        <h1>${categoryTitle}</h1>
        <ul class="content-list">
          ${sortedPages.map(p => `
            <li>
              <a href="${p.url}">${p.title}</a>
              ${p.frontmatter.summary || p.frontmatter.intent ? `<p class="meta">${p.frontmatter.summary || p.frontmatter.intent}</p>` : ''}
            </li>
          `).join('')}
        </ul>
      `;

      const page = buildPage(listHtml, `${categoryTitle} - Coherenceism`);
      fs.writeFileSync(indexPath, page);
    }
  }

  console.log('\n✅ Build complete!');
}

// Watch mode
if (isWatchMode) {
  console.log('👁️  Watching for changes...\n');

  build();

  const watcher = chokidar.watch([contentPath, templatesPath], {
    ignored: /^\./,
    persistent: true
  });

  watcher
    .on('change', () => {
      console.log('\n🔄 Rebuilding...\n');
      build();
    })
    .on('add', () => build())
    .on('unlink', () => build());
} else {
  build();
}