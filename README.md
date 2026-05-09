# AINavHub - AI Tools Directory for Developers

A modern, SEO-optimized AI tools navigation site built with Hugo.

## Features

- 📱 Dark/light responsive design
- 🔍 Built-in search (1,900+ tools)
- 🏷️ Categorized tool listings
- 📚 3,600+ guides and tutorials
- 📊 JSON-LD structured data (SoftwareApplication, HowTo, Article)
- 🤖 AI crawler friendly (llms.txt)
- 🔗 Cross-reference between tools and guides

## Quick Start

### Prerequisites

- Hugo Extended 0.80+
- Python 3.8+

### Local Development

```bash
git clone https://github.com/ainavhub/ainavhub.top.git
cd ainavhub-new

# Start development server
hugo server -D
```

### Build for Production

```bash
hugo
```

Output will be in `public/` directory.

## Project Structure

```
ainavhub-new/
├── content/           # Markdown content
│   ├── tools/       # 1,915+ Tool pages
│   ├── guides/      # 3,665+ Guide pages
│   └── insights/    # Article pages (coming soon)
├── layouts/          # Hugo templates (PaperMod overrides)
│   ├── _default/    # Default templates
│   ├── partials/    # Reusable components
│   ├── tools/       # Tool-specific templates
│   └── guides/      # Guide-specific templates
├── static/          # Static files
│   ├── robots.txt
│   ├── llms.txt
│   └── images/      # Screenshots
├── hugo.toml         # Hugo configuration
└── doc/             # Documentation
```

## Deployment

### Cloudflare Pages (推荐)

1. 创建 GitHub 仓库并推送:
   ```bash
   git remote add origin https://github.com/YOUR_USER/ainavhub.top.git
   git push -u origin main
   ```

2. Cloudflare Dashboard → Workers & Pages → Create → Connect to Git
3. 选择仓库 `ainavhub/ainavhub.top`
4. 构建配置:
   - **Build command:** `hugo --gc`
   - **Output directory:** `public`
5. 部署后在 Pages 设置中添加自定义域名 `ainavhub.top`
6. SSL/TLS 自动配置

### Vercel / Netlify

- Build command: `hugo`
- Output directory: `public`

## SEO

- JSON-LD Schema (SoftwareApplication, HowTo, Article)
- Open Graph tags
- Twitter Card meta
- Canonical URLs
- 10,000+ URL sitemap
- robots.txt with AI crawler permissions
- llms.txt for AI assistants

## License

MIT
