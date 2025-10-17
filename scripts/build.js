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
        <a href="/philosophy">Philosophy</a>
        <a href="/essays">Essays</a>
        <a href="/tree">Knowledge Tree</a>
        <a href="/about">About</a>
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
      <a href="/roots" class="tree-link">Explore Roots →</a>
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
      <h1>Coherenceism</h1>
      <p class="tagline">Truth emerges from resonance, not dominance</p>
    </div>

    <section class="intro">
      <p>Coherenceism views reality as an interconnected field where systems align when their parts reduce distortion for the whole. This site explores the philosophy and its applications.</p>
    </section>

    <section class="features">
      <div class="feature">
        <h3>Philosophy</h3>
        <p>Core principles and practices of coherent thinking</p>
        <a href="/philosophy/coherenceism.html">Explore →</a>
      </div>
      <div class="feature">
        <h3>Essays</h3>
        <p>Deep dives into coherentist perspectives</p>
        <a href="/essays">Read →</a>
      </div>
      <div class="feature">
        <h3>Knowledge Tree</h3>
        <p>Living structure of coherentist knowledge</p>
        <a href="/tree.html">Browse →</a>
      </div>
    </section>
  `;

  const indexPage = buildPage(indexContent, 'Coherenceism - Home', 'home');
  fs.writeFileSync(path.join(publicPath, 'index.html'), indexPage);

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

      const listHtml = `
        <h1>${categoryTitle}</h1>
        <ul class="content-list">
          ${pages.map(p => `
            <li>
              <a href="${p.url}">${p.title}</a>
              ${p.frontmatter.intent ? `<p class="meta">${p.frontmatter.intent}</p>` : ''}
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