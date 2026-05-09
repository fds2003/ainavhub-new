---
title: "DiscovAI"
date: "2024-01-01 00:00:00+08:00"
description: 'DiscovAI DiscovAI  AI '
slug: discovai-redis
tags:
- css
- redis
- upstash
- tailwind
- radix
draft: false
related_tools:
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## DiscovAI

DiscovAI 是一个 AI 驱动的搜索引擎，可以用于查找 AI 工具或你自己的数据。它的主要功能包括：

* **向量搜索** ：将用户查询转换为向量，以在 AI 产品数据库中进行精确的相似性匹配。
* **Redis 缓存** ：使用 Redis 缓存搜索结果和输出，大大提高了重复查询的响应时间。
* **综合 AI 数据库** ：维护涵盖各类行业和类别的最新 AI 产品集合。
* **LLM（大型语言模型）响应** ：利用大型语言模型提供基于搜索结果的详细、上下文相关的回答。
* **用户友好界面** ：提供直观的设计，便于导航和高效发现 AI 产品。


##### 技术栈

DiscovAI 的技术栈包括：

* 应用框架：Next.js
* 文本流处理：Vercel AI SDK
* 大型语言模型：gpt-4o-mini
* 数据库：Supabase
* 向量搜索：Pgvector
* 嵌入模型：Jina AI
* Redis 缓存：Upstash
* 组件库：shadcn/ui
* 无头组件基元：Radix UI
* 样式：Tailwind CSS


##### 使用场景

1. **AI 工具搜索** ：用户可以利用它来查找最新和最相关的 AI 工具，根据具体需求进行比较和选择。
2. **数据搜索** ：适用于需要在自己的数据集中进行高效搜索和匹配的场景，如企业数据管理、学术研究等。
3. **快速问题解答** ：用户可以输入问题，系统将利用大型语言模型提供详细的回答，还可以根据上下文进行深入分析。
4. **开发和测试** ：开发人员可以快速部署和测试自己的搜索应用，利用 DiscovAI 的高效搜索引擎和缓存机制提升开发效率。


##### 快速开始

要快速开始使用 DiscovAI，可以按以下步骤操作：

1. 克隆代码库：`git clone https://github.com/DiscovAI/DiscovAI-search`
2. 安装依赖：`cd discovai-search` 然后执行 `pnpm i`
3. 设置 Supabase 和 Upstash：按指导创建项目并配置相应的数据库和 Redis。
4. 填写必要的环境变量：配置 `.env.local` 文件以包含 API 密钥和数据库信息。
5. 本地运行应用：执行 `pnpm dev`，然后访问 http://localhost:3000。


DiscovAI 也支持在如 Vercel、Zeabur、Cloudflare Pages 等平台上部署。