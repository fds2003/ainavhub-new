---
title: "LangDiff"
date: "2024-01-01 00:00:00+08:00"
description: 'LangDiff LangDiff  Python '
slug: langdiff-python-llm-pydantic-json
tags:
- id
- clientsecret
- patch
- clientid
- langdiff
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## LangDiff

LangDiff 是一个 Python 库，旨在解决将结构化大型语言模型（LLM）输出流式传输到前端的复杂问题。它通过智能流式解析，允许用户定义 Pydantic 风格的模式，并提供粒度化的、类型安全的事件回调来处理不完整的令牌流；同时，它还通过变化跟踪机制，自动生成 JSON Patch 差异，高效地同步前端和后端的状态。该项目解决了传统流式传输中用户体验不佳、缺乏类型安全以及前端与 LLM 输出模式紧密耦合导致的版本兼容性和实现细节泄露等核心痛点，从而实现后端提示工程与前端用户界面的独立演进，确保构建出响应迅速且易于维护的 AI 应用。