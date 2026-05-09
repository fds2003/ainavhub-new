---
title: "Medical RAG Medical RAG"
date: "2024-01-01 00:00:00+08:00"
description: Medical RAG Milvus LangChain ，RAG（），。，；，，（...
slug: medical-rag-milvus-langchain
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- yaml
- milvus
draft: false
related_tools:
- mcp server for milvus
- graph-constrained reasoning
- langchain-searxng
- langchain swift
- langchain
---

## Medical RAG

这是一个基于 Milvus 和 LangChain 构建的医疗问答智能体，核心在于利用RAG（检索增强生成）技术，旨在提供精准安全的医疗建议。其主要功能涵盖自动化高质量数据构建，包括智能化的数据标注流程和专门针对医疗领域优化的词表管理；同时，它采用混合检索架构，结合了密集向量检索（支持多种嵌入模型）和稀疏向量检索（基于医疗领域分词优化的BM25算法），并通过RRF或加权融合进行结果重排。该项目还针对医疗领域进行了深度优化，如专业分类体系、多LLM后端智能标注和医疗专属分词，并以Milvus v2.6+为基础设计了高性能向量数据库，支持并发处理、灵活的YAML配置和高效的接口封装，以实现快速、准确的查询检索。