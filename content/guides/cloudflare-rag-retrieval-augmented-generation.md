---
title: "Cloudflare RAG Cloudflare RAG Cloudflare RAG"
date: "2024-01-01 00:00:00+08:00"
description: Cloudflare RAG Cloudflare RAG  Cloudflare RAG
slug: cloudflare-rag-retrieval-augmented-generation
tags:
- augmented
- ocr
- cloudflare
- generation
- unpdf
draft: false
related_tools:
- pdf-ocr-obsidian
- uniocr
- olmocr
- monkeyocr
- magi-为漫画自动生成文本记录：检测漫画角色、文本块和面板，对面板进行排序，聚类角色，匹配文本与其说话者，并执行光学字符识别（ocr）
---

## Cloudflare RAG

##### Cloudflare RAG 概述

Cloudflare RAG（Retrieval Augmented Generation）是一个全栈示例，展示如何使用 Cloudflare 构建 RAG 应用程序。该项目结合了 Cloudflare Workers、Pages、D1、KV、R2、AI Gateway 和 Workers AI 等技术，以实现强大的检索增强生成能力。

###### 主要特点：

* **流式交互：** 使用服务器推送事件（Server-Sent Events）实时更新用户界面。
* **混合检索：** 结合 D1 的全文搜索和 Vectorize 的向量检索，提供最佳检索结果。
* **多供应商切换：** 通过 AI Gateway 在 OpenAI、Groq 和 Anthropic 等不同提供商之间切换，并提供后备支持。
* **IP 限速：** 利用 Cloudflare 的 KV 实现按 IP 限速。
* **OCR 功能：** 使用 unpdf 库在 Cloudflare Worker 中实现光学字符识别。
* **智能负载均衡：** 自动优化工作负载的放置，以减少延迟并加速应用程序。


##### 使用场景

Cloudflare RAG 适用于多种场景，特别是需要智能响应生成和检索增强的应用。例如：

1. **客服系统：** 在客户与客服代表之间，提供自动化的响应生成，利用混合检索以提取相关信息。
2. **知识库查询：** 用户输入查询后，系统可以从数据库中检索信息并生成综合性回答。
3. **文档处理：** 对于文档的自动分析和信息提取，结合OCR技术可以处理扫描文档的内容。
4. **个性化推荐：** 结合用户行为数据生成个性化的信息和内容推荐。


通过利用 Cloudflare 的基础设施和 RAG 方法，开发者能够构建高效、响应迅速且智能的应用程序，满足多种商业需求。