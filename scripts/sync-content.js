#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Paths
const coraPath = path.join(projectRoot, 'cora');
const contentPath = path.join(projectRoot, 'src', 'content');

// Content sources from CORA
const contentSources = {
  philosophy: {
    source: 'context/philosophy/coherenceism.md',
    dest: 'philosophy/'
  },
  essays: {
    source: 'harvest/essays/out/',
    dest: 'essays/'
  },
  roots: {
    source: 'coherenceism/roots/',
    dest: 'roots/'
  },
  branches: {
    source: 'coherenceism/branches/',
    dest: 'branches/'
  },
  leaves: {
    source: 'coherenceism/leaves/',
    dest: 'leaves/'
  }
};

// Ensure content directory exists
if (!fs.existsSync(contentPath)) {
  fs.mkdirSync(contentPath, { recursive: true });
}

// Copy files recursively
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Source not found: ${src}`);
    return;
  }

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      // Skip hidden files and COHERENCE.md (indexes)
      if (entry.startsWith('.') || entry === 'COHERENCE.md') continue;

      const srcPath = path.join(src, entry);
      const destPath = path.join(dest, entry);
      copyRecursive(srcPath, destPath);
    }
  } else if (stats.isFile() && src.endsWith('.md')) {
    // Handle single file copy
    const destDir = dest.endsWith('/') ? dest : path.dirname(dest);
    const destFile = dest.endsWith('/') ? path.join(dest, path.basename(src)) : dest;

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.copyFileSync(src, destFile);
    console.log(`Synced: ${path.relative(coraPath, src)}`);
  }
}

console.log('🔄 Syncing content from CORA...\n');

// Sync each content source
for (const [key, config] of Object.entries(contentSources)) {
  console.log(`📁 Syncing ${key}...`);

  const sourcePath = path.join(coraPath, config.source);
  const destPath = path.join(contentPath, config.dest);

  // Ensure dest path ends with / for single file sources
  const finalDestPath = config.source.endsWith('.md') ? destPath : destPath;

  copyRecursive(sourcePath, finalDestPath);
}

// Create manifest file for the generator
const manifest = {
  updated: new Date().toISOString(),
  sources: Object.keys(contentSources),
  philosophy: 'coherenceism'
};

fs.writeFileSync(
  path.join(contentPath, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('\n✅ Content sync complete!');