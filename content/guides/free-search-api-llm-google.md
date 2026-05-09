---
title: "Free-Search API"
date: "2024-01-01 00:00:00+08:00"
description: Free-Search Free-Search API  LLM
slug: free-search-api-llm-google
tags:
- results
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- go2cod
draft: false
related_tools:
- graph-constrained reasoning
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## Free-Search

Free-Search API 是一个用于为人工智能代理和大型语言模型（LLM）提供实时 Google 搜索结果的工具，旨在提升互联网的可访问性。它通过自定义搜索引擎执行搜索查询，检索指定数量的最佳结果，抓取每个结果页面以提取内容，并返回包含来源、链接和上下文信息的结构化数据。

要使用它，你需要安装 Python 3.7+、Playwright、Beautiful Soup 4、FastAPI 和 Uvicorn。安装完成后，可以通过 `GET /search` 端点进行查询，并可以设置返回结果的数量（`max_results`）和每个结果的最大内容长度（`max_content`）。

此外，还提供了一个公开可访问的演示实例，方便用户体验该API的功能。