---
title: "Agentic RAG Agentic RAG Agentic RAG"
date: "2024-01-01 00:00:00+08:00"
description: Agentic RAG Agentic RAG RAG
slug: agentic-rag-gemini-cli
tags:
- pdf
- claude
- office
- const
- gitalk
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Agentic RAG

Agentic RAG项目是一个集成了检索增强生成（RAG）能力的智能代理框架，它通过一个基于Gemini CLI架构的通用代理引擎，实现自主决策、工作流编排、工具调度和上下文感知对话，并结合专业的RAG工具链来处理多格式文档、执行语义搜索及结果重排序。该项目支持PDF、Office、Markdown、代码甚至带OCR的图像处理，拥有可配置的切块策略、带元数据过滤的语义搜索以及用于提高精度的跨编码器重排序功能，同时兼容Gemini、Claude、OpenAI等多种大型语言模型。作为一个生产就绪的架构参考，它采用了异步并发设计并集成了OpenTelemetry进行全面的监控与优雅的错误处理，但其部署需要包括本地向量数据库和大型语言模型托管在内的显著基础设施支持，主要面向学习高级RAG实现模式、理解代理驱动架构设计或作为定制RAG解决方案组件的研发人员。