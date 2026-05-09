---
title: "EXO Private Search EXO Private Search EXO Private Search"
date: "2024-01-01 00:00:00+08:00"
description: EXO Private Search EXO Private Search  MIT
slug: exo-private-search-mit-tiptoe
tags:
- simplepir
- exo
- rest
- fastapi
- knows
draft: false
related_tools:
- pi
- exo private search
- restorephotos
- kokoro-fastapi
- comfyui supir
---

## EXO Private Search

EXO Private Search 是一款基于麻省理工学院（MIT）Tiptoe 论文的隐私保护搜索系统。该系统允许用户在搜索数据时保持查询隐私，即服务器 never knows 用户正在搜索的内容。其主要特性包括使用私密信息检索（Private Information Retrieval, PIR）技术的隐私保护搜索、本地嵌入生成、基于聚类的优化以加速搜索、基于 FastAPI 的 REST API 以及交互式 API 文档。

##### 工作原理

1. 文档被转换为嵌入向量并进行聚类，以提高搜索效率。
2. 客户端下载聚类中心的摘要（对于 1GB 数据库仅约 32 kB）。
3. 客户端将查询向量与聚类中心进行本地比较，以找到相关的聚类。
4. 使用 SimplePIR，客户端私密地检索匹配的文档。
5. 所有查询信息保持私密，服务器无法看到用户的搜索内容。


##### 使用场景

EXO Private Search 特别适用于需要保护用户查询隐私的场景，例如：

* 医疗、法律等涉及敏感信息的领域，用户在查询时希望确保隐私不被泄露。
* 企业内部搜索系统，允许员工私密检索文档而不让服务器监控其查询内容。
* 任何需要保护用户搜索习惯的在线平台，确保用户的数据不被利用或出售。


这种系统的构建和部署非常简单，可以通过 Docker 部署，并可使用自然语言进行搜索，为用户提供快速而安全的信息检索体验。