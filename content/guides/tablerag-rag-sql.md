---
title: "TableRAG"
date: "2024-01-01 00:00:00+08:00"
description: TableRAG TableRAG RAG
slug: tablerag-rag-sql
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- tablerag
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## TableRAG

TableRAG是一个专注于异构文档推理的检索增强生成（RAG）框架，旨在解决现有RAG方法在混合文本与表格数据处理中存在的结构信息丢失和全局视图缺失问题。其核心功能在于融合SQL执行和文本检索的混合机制，从而实现对文本内容的理解以及对表格数据的复杂操作。该项目包含两个主要阶段：离线数据管理，负责将异构数据（如Excel文件）摄取到MySQL数据库中并提供数据查询服务；以及一个在线迭代推理过程，利用大型语言模型（LLM）进行推理并与结构化数据进行交互。TableRAG通过这种独特的设计显著增强了多跳异构推理能力，并在相关基准测试中超越了传统RAG和程序化方法，确立了领先地位。