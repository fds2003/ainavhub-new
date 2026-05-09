---
title: "EXO Private Search EXO Private Search EXO Private Search"
date: "2024-01-01 00:00:00+08:00"
description: 'EXO Private Search EXO Private Search  MIT '
slug: exo-private-search-mit-tiptoe-1
tags:
- simplepir
- exo
- k-means
- pir
- mit
draft: false
related_tools:
- pi
- exo private search
- comfyui supir
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- langsmith-llm应用开发者平台
---

## EXO Private Search

**EXO Private Search 是一个基于 MIT 的 Tiptoe 论文实现的隐私保护搜索系统。** 它允许用户在不向服务器透露搜索内容的情况下进行数据搜索，从而保护用户查询的隐私。

**核心特点：**

* **隐私保护：** 基于 PIR (Private Information Retrieval，私有信息检索) 技术，服务器无法得知用户的搜索内容。
* **本地处理：** 客户端在本地进行嵌入向量生成和查询相关性判断等敏感计算，进一步增强隐私。
* **高效搜索：** 利用 K-means 聚类算法优化搜索过程，提高大型数据集的搜索效率。
* **结构化实现:** 包含 SimplePIR 和 Tiptoe 两个核心模块，前者是 SimplePIR 的 Rust 实现，后者实现了 Tiptoe 并可以从 Yahoo Finance API 查询实时的股票/加密货币价格。


**使用场景：**

EXO Private Search 适用于任何需要保护用户搜索隐私的场景，例如：

* **金融信息查询：** 查询股票、加密货币等金融信息，避免暴露用户的投资兴趣。
* **敏感文档搜索：** 在包含敏感信息的文档库中搜索，例如医疗记录、法律文件等。
* **威胁情报分析：** 在威胁情报数据库中搜索，同时保护分析师的搜索行为。
* **个人数据搜索：** 在用户自己的数据（例如邮件、笔记）中搜索，确保第三方服务提供商无法访问搜索内容。
* **其他需要隐私保护的搜索场景:** 凡是用户不想将搜索内容暴露给服务器的情况，都可以使用 EXO Private Search。


简而言之，EXO Private Search 提供了一种在不牺牲用户隐私的情况下，安全高效地搜索数据的方法。