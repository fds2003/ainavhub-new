---
title: "DocPixie"
date: "2024-01-01 00:00:00+08:00"
description: DocPixie DocPixie RAG
slug: docpixie-rag
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- openrouter
- const
draft: false
related_tools:
- openrouter-开源路由器,连接各种ai模型
- graph-constrained reasoning
- pi
- anthropic prompt library
- anthropic courses
---

## DocPixie

DocPixie是一个创新的轻量级多模态RAG（检索增强生成）库，其核心在于采用**视觉AI** 而非传统向量数据库来处理文档，将文档转换为图像并利用视觉语言模型进行深入理解和智能页面选择，从而无需复杂的嵌入和向量存储。它提供一个**自适应RAG代理** ，能动态规划任务并精准识别相关信息，支持**OpenAI GPT-4V、Anthropic Claude和OpenRouter等多种AI提供商** ，并具备保持查询上下文的**会话感知能力** 。项目还通过Textual构建了**现代化的CLI界面** ，实现文档聊天、管理和模型配置，以及支持本地文件系统或内存的**可插拔存储后端** 。该工具特别适用于对学术论文、报告进行研究分析、合同手册的问答、在大量文档中发现特定内容，以及处理包含图表和复杂布局的视觉文档。