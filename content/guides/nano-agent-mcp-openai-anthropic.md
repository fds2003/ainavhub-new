---
title: "Nano Agent Nano Agent"
date: "2024-01-01 00:00:00+08:00"
description: Nano Agent  Nano Agent
slug: nano-agent-mcp-openai-anthropic
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- lop
- gpt-oss
draft: false
related_tools:
- claude code spec-driven development
- gpt-oss
- openai gpt-oss recipes
- graph-constrained reasoning
- codemcp
---

## Nano Agent

“Nano Agent”是一个实验性MCP服务器项目，旨在通过支持OpenAI、Anthropic和Ollama等多种LLM提供商，用于小型工程代理的开发与评估。其核心目标是对比不同云端及本地LLM在性能、速度和成本方面的代理能力，强调代理如何通过工具链实现实际工程任务。该项目提供自主的文件系统操作工具（如读写、编辑、列举、获取文件信息）和一套统一的OpenAI SDK接口，简化多模型集成。其关键特性在于独特的嵌套代理架构和高级的多模型评估系统，该系统采用HOP/LOP（Higher Order Prompt / Lower Order Prompt）模式，能够并行执行测试、收集指标并生成详细的性能、速度和成本对比报告，从而揭示如小型GPT-5模型或本地GPT-OSS模型在效率上可能超越更昂贵模型的发现。用户可以通过命令行、Claude Code或HOP/LOP评估系统与代理进行交互。