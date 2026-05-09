---
title: "openAgent"
date: "2024-01-01 00:00:00+08:00"
description: openAgent openAgent AI
slug: openagent-deepseek
tags:
- ba3
- const
- gitalk
- sql
- clientid
draft: false
related_tools:
- graph-constrained reasoning
- opensearch-sql
- mcp server for postgresql
- haiku sqlite rag
- sql chat
---

## openAgent

openAgent项目是一个完全开源的企业级大模型应用平台，其核心在于整合了智能问答、智能问数、知识库管理、工作流和智能体编排等多元能力，旨在为企业提供一套灵活、可扩展且支持私有化部署的AI解决方案。它支持DeepSeek、智谱AI、豆包等主流AI服务，提供自由对话、RAG对话和多智能体协作三种问答模式，并能进行多轮对话与历史管理。在数据分析方面，该平台具备Excel智能问数和数据库智能问数双引擎，能将自然语言问题转化为Pandas代码或优化SQL查询，并支持多表关联和可视化思维链。其知识库管理功能支持多种文档格式，采用PostgreSQL+pgvector进行向量存储，并通过大模型语义分割和双重召回机制（向量相似度与BM25）提升检索效率和准确性。此外，项目还提供了可视化的拖拽式工作流编排器以及基于LangGraph的智能体编排系统，允许自定义智能体角色并实现复杂任务的自主规划、动态工具调用和多步任务分解，确保用户数据隔离，并采用MIT许可证，可免费用于商业用途和二次开发。