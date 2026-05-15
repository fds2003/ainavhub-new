#!/usr/bin/env node
/**
 * ainavhub-new 本地测试套件
 * 不依赖 Hugo，验证源文件完整性和质量
 *
 * Usage: node test.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    failed++;
    console.error(`  ✗ ${name}: ${e.message}`);
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

// ─── Test 1: Directory Structure ───

test('content/tools 目录存在且包含文件', () => {
  const files = readdirSync(join(ROOT, 'content/tools'));
  assert(files.length > 1500, `预期 > 1500, 实际 ${files.length}`);
  console.log(`    工具页数: ${files.length}`);
});

test('content/guides 目录存在且包含文件', () => {
  const files = readdirSync(join(ROOT, 'content/guides'));
  assert(files.length > 3000, `预期 > 3000, 实际 ${files.length}`);
  console.log(`    指南页数: ${files.length}`);
});

test('layouts 所有必需模板文件存在', () => {
  const required = [
    'index.html',
    '_default/baseof.html',
    '_default/list.html',
    '_default/search.html',
    'tools/single.html',
    'guides/list.html',
    'guides/single.html',
    'categories/list.html',
    'partials/head.html',
    'partials/header.html',
    'partials/footer.html',
    'partials/breadcrumb.html',
    'partials/category-icon.html',
    '404.html',
  ];
  for (const f of required) {
    assert(existsSync(join(ROOT, 'layouts', f)), `缺少 ${f}`);
  }
  console.log(`    模板文件: ${required.length} 个`);
});

test('data/category_icons.yaml 存在且有效', () => {
  const content = readFileSync(join(ROOT, 'data/category_icons.yaml'), 'utf-8');
  const lines = content.split('\n').filter(l => l.trim() && !l.startsWith('#'));
  assert(lines.length >= 8, `分类映射条目不足, 实际 ${lines.length}`);
  console.log(`    分类映射: ${lines.length} 条`);
});

test('content/_index.md 存在', () => {
  assert(existsSync(join(ROOT, 'content/_index.md')), '缺少 content/_index.md');
});

test('static/robots.txt 存在', () => {
  assert(existsSync(join(ROOT, 'static/robots.txt')), '缺少 robots.txt');
});

test('static/llms.txt 存在', () => {
  assert(existsSync(join(ROOT, 'static/llms.txt')), '缺少 llms.txt');
});

test('hugo.toml 存在且可读', () => {
  const content = readFileSync(join(ROOT, 'hugo.toml'), 'utf-8');
  assert(content.includes('baseURL'), '缺少 baseURL');
  assert(content.includes('[menu.main]'), '缺少菜单配置');
  assert(content.includes('theme ='), '缺少主题配置');
});

test('themes/PaperMod 已初始化', () => {
  assert(existsSync(join(ROOT, 'themes/PaperMod/layouts')), 'PaperMod submodule 未初始化');
});

// ─── Test 2: Tool Frontmatter ───

const KNOWN_CATEGORIES = [
  'Coding', 'Chat/LLM', 'Video', 'Audio', 'Image Generation',
  'Research', 'Productivity', 'Writing', 'AI Tools', 'AI Agents',
  'Developer Tools',
];

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const fm = {};
  let currentKey = null;
  for (const line of match[1].split('\n')) {
    if (line.startsWith('- ') && currentKey && Array.isArray(fm[currentKey])) {
      fm[currentKey].push(line.slice(2).replace(/^"|"$/g, ''));
    } else {
      const sep = line.indexOf(':');
      if (sep === -1) continue;
      const key = line.slice(0, sep).trim();
      let val = line.slice(sep + 1).trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith('[') && val.endsWith(']')) {
        fm[key] = val.slice(1, -1).split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      } else if (val === 'true' || val === 'false') {
        fm[key] = val === 'true';
      } else {
        currentKey = key;
        fm[key] = val;
      }
    }
  }
  return fm;
}

test('工具 Frontmatter 基本字段', () => {
  const files = readdirSync(join(ROOT, 'content/tools')).filter(f => f.endsWith('.md') && f !== '_index.md');
  const sample = files.slice(0, 100);
  let errors = [];
  for (const f of sample) {
    const content = readFileSync(join(ROOT, 'content/tools', f), 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm) { errors.push(`${f}: 无法解析 frontmatter`); continue; }
    if (!fm.title) errors.push(`${f}: 缺少 title`);
    if (!fm.description) errors.push(`${f}: 缺少 description`);
    if (!fm.slug) errors.push(`${f}: 缺少 slug`);
  }
  assert(errors.length === 0, errors.slice(0, 5).join('; '));
  console.log(`    抽检 100 个工具: ${errors.length} 个问题`);
});

test('分类值在已知列表中', () => {
  const files = readdirSync(join(ROOT, 'content/tools')).filter(f => f.endsWith('.md'));
  const sample = files.slice(0, 200);
  const seen = new Set();
  for (const f of sample) {
    const content = readFileSync(join(ROOT, 'content/tools', f), 'utf-8');
    const fm = parseFrontmatter(content);
    if (fm && fm.category) seen.add(fm.category);
  }
  const unknown = [...seen].filter(c => !KNOWN_CATEGORIES.includes(c));
  assert(unknown.length === 0, `未知分类: ${unknown.join(', ')}`);
  console.log(`    抽检 200 个工具, 发现分类: ${[...seen].join(', ')}`);
});

// ─── Test 3: Template Syntax Checks ───

test('模板 {{ 标签数量平衡', () => {
  const layoutsDir = join(ROOT, 'layouts');
  function walk(dir) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) {
        const content = readFileSync(full, 'utf-8');
        const opens = (content.match(/\{\{/g) || []).length;
        const closes = (content.match(/\}\}/g) || []).length;
        if (opens !== closes) {
          throw new Error(`${full}: {{ 出现 ${opens} 次, }} 出现 ${closes} 次, 不平衡`);
        }
      }
    }
  }
  walk(layoutsDir);
  console.log('    所有模板 {{ }} 标签平衡');
});

test('模板 {{ end }} 数量匹配 block/if/range/with', () => {
  const layoutsDir = join(ROOT, 'layouts');
  function count(str, pattern) {
    return (str.match(pattern) || []).length;
  }
  function walk(dir) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) {
        const content = readFileSync(full, 'utf-8');
        const openers = count(content, /\{\{-?\s*(block|define|if|range|with)\b/g);
        const closers = count(content, /\{\{-?\s*end\s*-?\}\}/g);
        if (openers !== closers) {
          throw new Error(`${full}: block/if/range/with 出现 ${openers} 次, end 出现 ${closers} 次, 不平衡`);
        }
      }
    }
  }
  walk(layoutsDir);
  console.log('    所有模板 block/if/range/with → end 平衡');
});

// ─── Test 4: Config Validation ───

test('hugo.toml 关键配置完整性', () => {
  const content = readFileSync(join(ROOT, 'hugo.toml'), 'utf-8');
  const checks = [
    ['baseURL', 'https://ainavhub.top/'],
    ['locale', 'zh-CN'],
    ['theme', 'PaperMod'],
    ['hasCJKLanguage', 'true'],
    ['[markup.goldmark.renderer]', 'unsafe = true'],
    ['[permalinks]', '/tools/:slug/'],
    ['[menu.main]', 'AI工具'],
    ['[menu.main]', '搜索'],
    ['[params]', 'description'],
    ['[taxonomies]', 'category'],
    ['[sitemap]', 'sitemap.xml'],
  ];
  for (const [section, keyword] of checks) {
    assert(content.includes(keyword), `${section}: 缺少 "${keyword}"`);
  }
  console.log(`    配置检查: ${checks.length} 项`);
});

// ─── Test 5: New files from this session ───

test('category-icon 数据一致性', () => {
  const yamlContent = readFileSync(join(ROOT, 'data/category_icons.yaml'), 'utf-8');
  const iconEntries = yamlContent.split('\n')
    .filter(l => l.trim() && !l.startsWith('#') && l.includes(':'))
    .map(l => {
      const [k] = l.split(':').map(s => s.trim());
      return k;
    });
  const partialContent = readFileSync(join(ROOT, 'layouts/partials/category-icon.html'), 'utf-8');
  assert(partialContent.includes('index'), 'partial 应使用 index 查找');
  assert(partialContent.includes('default'), 'partial 应包含默认值');
  assert(iconEntries.includes('Coding'), '缺少 Coding 映射');
  assert(iconEntries.includes('AI Tools'), '缺少 AI Tools 映射');
  console.log(`    图标映射: ${iconEntries.length} 项, partial 逻辑正确`);
});

// ─── Results ───

const total = passed + failed;
console.log(`\n${'─'.repeat(40)}`);
console.log(`测试结果: ${passed}/${total} 通过`);
if (failed > 0) {
  console.log(`有 ${failed} 项失败，请检查`);
  process.exit(1);
} else {
  console.log('全部通过');
}
