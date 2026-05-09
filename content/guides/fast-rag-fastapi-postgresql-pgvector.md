---
title: "Fast RAG Fast RAG"
date: "2024-01-01 00:00:00+08:00"
description: Fast RAG “Fast RAG”、（RAG），FastAPI，PostgreSQLpgvectorpg_trgm，。DoclingPDF、DOCX、...
slug: fast-rag-fastapi-postgresql-pgvector
tags:
- id
- pdf
- clientsecret
- clientid
- fast
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Fast RAG

“Fast RAG”项目是一个本地、隐私优先的检索增强生成（RAG）解决方案，它通过FastAPI作为后端，利用PostgreSQL结合pgvector实现语义搜索和pg_trgm进行词法检索，从而提供强大的混合检索功能。其核心特点在于支持通过Docling工具处理PDF、DOCX、图片等多种文档格式，并利用LangGraph进行流程管理。该项目还支持通过Ollama加载本地模型或集成OpenAI API，并通过Server-Sent Events (SSE) 流式传输响应，提供一个可选的React前端，旨在构建一个简单、快速且高度可定制的RAG系统。