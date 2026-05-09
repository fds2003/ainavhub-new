---
title: "TurboSeek"
date: "2024-01-01 00:00:00+08:00"
description: 'TurboSeek TurboSeek  Together.ai '
slug: turboseek-together.ai-mixtral-x7b-llama-3
tags:
- together
- css
- bing
- x7b
- turboseek
draft: false
related_tools:
- together open deep research
- together open data scientist
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- binglish
- linly-dubbing
---

## TurboSeek

TurboSeek 是一个开源的人工智能搜索引擎，由 Together.ai 提供技术支持。它采用多种先进的技术，结合了多个大语言模型（如 Mixtral 8x7B 和 Llama-3），以及 Bing 搜索API来实现智能问答和信息检索。

##### 使用场景

1. **智能问答** ：用户可以提出问题，TurboSeek 通过 Bing 搜索API查找相关的页面，并从中提取有价值的信息，最终生成详细的答案。
2. **建议问题** ：在回答用户问题的同时，TurboSeek 还会使用 Llama-3-8B 模型生成三个相关的后续问题，帮助用户深入探索。
3. **信息检索与分析** ：可以帮助用户快速找到最相关的信息，并对多个信息源进行聚合和分析。
4. **开发和定制** ：开发者可以克隆和运行项目，通过整合多个API实现个性化的搜索和问答服务。


##### 技术栈

* **Next.js** ：使用Next.js构建的Web应用，结合 Tailwind CSS 进行样式设计。
* **Together AI** ：用于大语言模型的推理。
* **Bing 搜索 API** ：用于进行网页搜索。
* **Helicone** ：用于可观测性。
* **Plausible** ：用于网站分析。


##### 如何运行

1. 克隆项目仓库。
2. 在 Together AI 注册账号。
3. 在 Azure 获取 Bing 搜索 API 密钥。
4. 在 Helicone 注册账号。
5. 创建 `.env` 文件并替换其中的 API 密钥。
6. 运行 `npm install` 和 `npm run dev` 安装依赖并本地运行。


##### 未来任务

* 解析资源效率的优化。
* 忽略视频链接优化。
* 确保答案正确引用所有资源并在UI中编号。
* 增加分享功能。
* 实现移动端自动滚动。
* 通过迁移答案到新页面，修复页头和页脚的刷新问题。
* 添加 Upstash Redis 用于缓存结果和用户限流。
* 引入更先进的 RAG 技术，如关键词搜索和问题重述。
* 添加认证功能（如 Clerk）及保存用户会话（如 Postgres/Prisma）。


##### 灵感来源

TurboSeek 的开发灵感来源于类似的智能搜索引擎，如 Perplexity、You.com 和 Lepton search。

这样，TurboSeek 既能为普通用户提供便捷的智能问答服务，也为开发者提供了一个强大的平台进行二次开发和定制。