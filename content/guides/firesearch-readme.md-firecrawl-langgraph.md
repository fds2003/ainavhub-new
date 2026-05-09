---
title: "Firesearch Firesearch"
date: "2024-01-01 00:00:00+08:00"
description: 'Firesearch  README.md '
slug: firesearch-readme.md-firecrawl-langgraph
tags:
- lib
- firesearch
- firecrawl
- readme.md
- gpt-4o
draft: false
related_tools:
- autogenlib
- semlib
- libra ai
- facebook ads library mcp server
- anthropic prompt library
---

## Firesearch

好的，我了解了你的要求。根据提供的 `README.md` 内容，我对 Firesearch 项目的主要功能、核心要点和关键特性进行了总结，并以清晰的列表形式呈现如下：

* **AI 驱动的深度研究工具：** Firesearch 是一款基于 Firecrawl 和 LangGraph 的 AI 驱动工具，旨在提供全面的网络研究能力。
* **多源内容提取：** 利用 Firecrawl 进行多源网络内容提取。
* **搜索规划和后续生成：** 使用 OpenAI GPT-4o 进行搜索规划和生成后续问题。
* **智能搜索：** 将复杂的查询分解为多个聚焦的搜索。
* **答案验证：** 验证来源是否包含实际答案，置信度阈值默认为0.7。
* **自动重试：** 对未回答的问题尝试替代搜索词。
* **实时进度：** 在搜索完成时提供实时更新。
* **完整引用：** 每个事实都链接到其来源。
* **上下文记忆：** 后续问题保持对话上下文。
* **可配置性：** 通过修改 `lib/config.ts` 文件可以自定义搜索行为，例如最大搜索查询数量、每个搜索的最大来源数等。
* **Firecrawl API 集成：** 利用 Firecrawl 的 `/search` 端点，通过一次调用找到相关 URL 并提取 Markdown 内容。
* **搜索策略：** 当初始结果不足时，系统会自动尝试多种搜索策略，包括拓宽关键词、缩小焦点、使用同义词、重述、分解、学术和实践等策略。
* **技术栈：** 使用 Firecrawl 进行网络内容提取，OpenAI GPT-4o 用于搜索规划和后续生成，Next.js 15 构建现代 React 框架。