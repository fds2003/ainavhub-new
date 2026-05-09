---
title: "ChinarXiv"
date: "2024-01-01 00:00:00+08:00"
description: 'ChinarXiv ChinarXiv  GPT Academic '
slug: chinarxiv-gpt-academic-arxiv-pdf
tags:
- academic
- pdf
- const
- gitalk
- clientsecret
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## ChinarXiv

ChinarXiv 是一个将 GPT Academic 项目中的 Arxiv 论文翻译功能独立出来的工具，致力于提供更便捷的 Arxiv 论文翻译部署和集成服务。该项目实现了从 Arxiv 链接获取论文到生成翻译后 PDF 的完整流程，其核心特点包括基于 LaTeX 结构的智能内容切分以保持文档完整性，支持多线程并行翻译以提高效率，并利用缓存机制避免重复工作。此外，它内置了强大的 LaTeX 编译服务，可处理依赖文件并支持中文排版，同时允许用户通过自定义术语词典和翻译要求来确保译文的学术一致性和专业性，并通过智能错误处理与恢复机制保障翻译的稳定性。用户可以灵活配置 API 接口、LLM 模型及并发参数，以适应不同的翻译需求，并且可以方便地通过 Docker 部署 LaTeX 编译服务。