---
title: "Haiku SQLite RAG Haiku SQLite RAG Haiku SQLite RAG"
date: "2024-01-01 00:00:00+08:00"
description: Haiku SQLite RAG Haiku SQLite RAG SQLite
slug: haiku-sqlite-rag-ollama-voyageai
tags:
- pdf
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- markdown
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Haiku SQLite RAG

Haiku SQLite RAG是一个基于SQLite的检索增强生成（RAG）库，其核心优势在于无需额外服务器即可在本地环境中高效运行。该项目的主要功能和关键特性包括：支持多种嵌入提供商（如Ollama、VoyageAI、OpenAI等），能够解析和索引超过40种文件格式（包括PDF、DOCX、HTML、Markdown及音频等）以及URLs。它采用独特的混合搜索机制，结合了基于`sqlite-vec`的向量搜索和基于`FTS5`的全文本搜索，并通过Reciprocal Rank Fusion算法提供高度相关的搜索结果。该项目还提供命令行界面和Python客户端库，方便用户进行文档管理和搜索操作，同时可作为服务器自动监控指定目录的文件变化并更新索引，并内建一个MCP服务器，将RAG功能作为工具暴露给AI助手。