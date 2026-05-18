#!/usr/bin/env node
/**
 * Post-build script: Split Hugo's generated sitemap into smaller per-section files.
 * Creates a sitemap index at sitemap.xml referencing individual sub-sitemaps.
 *
 * Usage (after `hugo`): node split-sitemap.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(ROOT, 'public');
const SITEMAP_PATH = join(PUBLIC, 'sitemap.xml');

const SITE_URL = 'https://ainavhub.top';
const SUB_SITEMAPS = ['sitemap-tools.xml', 'sitemap-guides.xml', 'sitemap-other.xml'];
const VERIFY_ONLY = process.argv.includes('--verify-only');

function verifySitemaps() {
  const required = ['sitemap.xml', ...SUB_SITEMAPS];
  for (const name of required) {
    const path = join(PUBLIC, name);
    if (!existsSync(path)) {
      console.error(`Missing ${name} in public/`);
      process.exit(1);
    }
    const size = readFileSync(path).length;
    if (size < 50) {
      console.error(`${name} is too small (${size} bytes)`);
      process.exit(1);
    }
  }

  const index = readFileSync(SITEMAP_PATH, 'utf-8');
  if (!index.includes('<sitemapindex')) {
    console.error('sitemap.xml must be a sitemap index after split');
    process.exit(1);
  }
  for (const name of SUB_SITEMAPS) {
    if (!index.includes(`${SITE_URL}/${name}`)) {
      console.error(`sitemap.xml index missing reference to ${name}`);
      process.exit(1);
    }
  }

  for (const name of SUB_SITEMAPS) {
    const xml = readFileSync(join(PUBLIC, name), 'utf-8');
    const count = (xml.match(/<loc>/g) || []).length;
    if (count === 0) {
      console.error(`${name} has no URLs`);
      process.exit(1);
    }
    console.log(`  verified ${name} → ${count} URLs`);
  }
}

if (VERIFY_ONLY) {
  verifySitemaps();
  console.log('Sitemap verification passed.');
  process.exit(0);
}

if (!existsSync(SITEMAP_PATH)) {
  console.error('No sitemap.xml found at', SITEMAP_PATH);
  console.error('Run `hugo` first');
  process.exit(1);
}

const raw = readFileSync(SITEMAP_PATH, 'utf-8');

// Parse URLs from the sitemap
const urlRegex = /<loc>([^<]+)<\/loc>/g;
const fullRegex = /<url>[\s\S]*?<\/url>/g;

const groups = { tools: [], guides: [], other: [] };

let match;
while ((match = fullRegex.exec(raw)) !== null) {
  const block = match[0];
  const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) continue;
  const url = locMatch[1];

  if (url.includes('/tools/')) {
    groups.tools.push(block);
  } else if (url.includes('/guides/')) {
    groups.guides.push(block);
  } else {
    groups.other.push(block);
  }
}

function writeSubSitemap(name, urls, changefreq, priority) {
  const path = join(PUBLIC, name);
  const xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => {
    // Override changefreq and priority from the original block
    return u.replace(/<changefreq>[^<]+<\/changefreq>/, `<changefreq>${changefreq}</changefreq>`)
            .replace(/<priority>[^<]+<\/priority>/, `<priority>${priority}</priority>`);
}).join('\n')}
</urlset>`;
  writeFileSync(path, xml, 'utf-8');
  return urls.length;
}

// Write sub-sitemaps with appropriate metadata
const toolCount = writeSubSitemap('sitemap-tools.xml', groups.tools, 'weekly', '0.7');
const guideCount = writeSubSitemap('sitemap-guides.xml', groups.guides, 'monthly', '0.6');

// Group other URLs (home, categories, openclaw, insights, search)
// Use daily for these since they change more often
const otherCount = writeSubSitemap('sitemap-other.xml', groups.other, 'daily', '0.8');

// Write sitemap index (overwrites the original sitemap.xml)
const indexPath = SITEMAP_PATH;
const lastmod = new Date().toISOString().slice(0, 10);
const indexXml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-tools.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-guides.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-other.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
writeFileSync(indexPath, indexXml, 'utf-8');

verifySitemaps();

console.log('Sitemap split complete:');
console.log(`  sitemap-tools.xml  → ${toolCount} URLs (~${Math.round(groups.tools.join('').length / 1024)}KB)`);
console.log(`  sitemap-guides.xml → ${guideCount} URLs (~${Math.round(groups.guides.join('').length / 1024)}KB)`);
console.log(`  sitemap-other.xml  → ${otherCount} URLs`);
console.log(`  sitemap.xml        → index (${3} sub-sitemaps)`);
