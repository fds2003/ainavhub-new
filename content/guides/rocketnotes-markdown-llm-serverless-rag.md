---
title: "Rocketnotes"
date: "2024-01-01 00:00:00+08:00"
description: Rocketnotes Rocketnotes Markdown
slug: rocketnotes-markdown-llm-serverless-rag
tags:
- serverless
- retrieval-augmented
- markdown
- ge
- generation
draft: false
related_tools:
- gemma-3
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
---

## Rocketnotes

Rocketnotes是一款基于网络的Markdown笔记应用，它支持LLM（大型语言模型）驱动的文本完成、聊天和语义搜索等功能。这个应用通过使用100%无服务器(serverless)的RAG（Retrieval-Augmented Generation）流水线构建，涵盖了langchain、sentence-transformers、faiss、Ollama和OpenAI或Anthropic API等技术。RAG流水线的工作原理可以在[Fynn Flügge的Medium文章](<https://medium.com/@fynnfluegge/serverless-rag-on-aws-bf8029f8bffd>)中找到更多信息。

##### Rocketnotes的功能特点

1. **代码语法高亮** ：允许用户创建包含代码的笔记，支持多种编程语言的语法高亮。
2. **分层文档树与可拖动节点** ：用户可以创建一个有层次的文档结构，在这个结构中可以很容易地通过拖放进行文档重组。
3. **文档分享** ：可以与外部用户分享文档。
4. **内容搜索** ：允许用户通过关键词搜索文档内容。
5. **语义搜索** ：利用向量嵌入和LLM技术，进行更深层次的搜索，以理解和寻找文档的语义内容。
6. **文本自动完成** ：提供类似Copilot的文本自动完成建议，使写作更加流畅。
7. **与文档聊天** ：结合faiss、OpenAI/Anthropic等技术，用户可以与他们的笔记进行交互式聊天，查询信息。
8. **本地模式与Docker** ：提供使用Docker在本地运行的选项，这使得用户可以在不依赖外部API的情况下，本地使用Ollama和/或Sentence Transformers进行RAG操作。


##### 使用场景

Rocketnotes非常适合需要整理大量笔记、要求组织结构化信息、进行技术写作（特别是需要代码片段的）、或进行复杂查询（如语义搜索与与笔记内容对话）的用户。无论是学生、研究人员、软件开发人员还是任何需要高效笔记管理与创作的个人，都可以从Rocketnotes的功能中受益。例如：

* 一个软件开发人员可以用它存储和整理代码片段库。
* 一个研究学者可能利用其语义搜索功能来组织和寻找研究材料或笔记。
* 写作爱好者或作家可以用它来记录灵感、草案，并利用其文本自动完成功能来提高写作效率。