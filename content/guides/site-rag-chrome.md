---
title: "Site RAG Site RAG Site RAG"
date: "2024-01-01 00:00:00+08:00"
description: Site RAG Site RAG Chrome
slug: site-rag-chrome
tags:
- const
- gitalk
- site
- llm
- gita
draft: false
related_tools:
- graph-constrained reasoning
- ai website builder
- add human-like narration to your blog or news site
- ai site search
- rllm
---

## Site RAG

Site RAG是一个Chrome扩展工具，旨在让用户能够在访问网站时进行提问。其核心功能包括：

1. 对当前页面执行一次性查询。
2. 索引当前页面并将文档持久化存储到向量数据库中，以便在生成响应时采用检索增强生成（RAG）的方法。
3. 索引整个网站，并同样持久化存储文档，通过RAG生成响应。


Site RAG 的优势在于其完全在用户浏览器中运行，所有的敏感信息存储在浏览器存储中，这保证了数据的安全性。此外，用户还可以将本地运行的 Ollama 实例连接到 Site RAG，以实现本地的 LLM 推理。

##### 使用场景

* **网页信息查询** ：用户可以在浏览特定网页时提问，获取该页面的相关信息或上下文解答。
* **网站内容检索** ：索引整个网站后，用户可以针对该网站的所有内容进行提问，获取更全面的答案。
* **数据持久化** ：通过集成向量存储，用户能够持久保存索引文档，以便未来的查询和使用。
* **开发和学习** ：开发者和数据科学家可以利用此扩展来构建和测试自己的自然语言处理模型或应用。


Site RAG 的设计使其成为许多场景中强大而灵活的工具，尤其是在需要实时获取网页信息时。