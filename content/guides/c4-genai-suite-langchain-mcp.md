---
title: "c4 GenAI Suite c4 GenAI Suite c4 GenAI Suite"
date: "2024-01-01 00:00:00+08:00"
description: c4 GenAI Suite c4 GenAI Suite AI
slug: c4-genai-suite-langchain-mcp
tags:
- pdf
- clientid
- whisper
- pgvector
- azure
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## c4 GenAI Suite

c4 GenAI Suite是一个高度可配置且可扩展的AI聊天机器人应用，其核心优势在于通过Langchain深度整合模型上下文协议（MCP），并广泛支持OpenAI、Azure OpenAI、Bedrock、Google GenAI、Ollama等主流大语言模型及嵌入模型。该平台允许管理员创建并定制化AI助手，通过集成RAG（检索增强生成）服务或各类扩展来赋予助手多样化能力。尤其值得关注的是，项目内置了强大的REI-S（检索、提取、摄取服务器）模块，该模块能够处理各种文件格式（包括PDF、Office文档及通过Whisper进行语音转录的音频），实现高效的文件内容提取、索引和基于pgvector或Azure AI Search等向量存储的检索增强功能，从而使助手能针对领域特定问题提供精确的上下文感知回答。整个系统以React前端、NestJS后端和Python FastAPI的REI-S服务构建，强调模块化设计，确保了用户交互的流畅性、助手功能的丰富性及平台整体的灵活性。