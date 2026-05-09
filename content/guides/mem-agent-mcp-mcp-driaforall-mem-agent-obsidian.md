---
title: "mem-agent-mcp"
date: "2024-01-01 00:00:00+08:00"
description: mem-agent-mcp mem-agent-mcp MCP
slug: mem-agent-mcp-mcp-driaforall-mem-agent-obsidian
tags:
- macos
- github
- clientid
- ba3af7dcb9cbfcf08
- markdown
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- claude github webhook
---

## mem-agent-mcp

`mem-agent-mcp`项目是一个模型上下文协议（MCP）服务器，旨在为`driaforall/mem-agent`模型提供一个类似Obsidian的本地化记忆系统，从而提升诸如Claude Desktop、LM Studio乃至ChatGPT等大型语言模型应用的上下文理解能力。其核心要点在于，它允许用户通过Markdown文件构建和管理个人及实体记忆，并支持在macOS和Linux环境下部署。该项目关键特性包括多源记忆数据摄取能力，通过一系列连接器可导入来自ChatGPT、Notion、Nuclino的历史数据，以及实时集成GitHub和Google Docs内容，并能自动将这些信息组织成主题、用户档案和实体链接。此外，它还提供强大的过滤机制，允许用户以自然语言查询并控制信息的检索与隐私，且所有操作（如修改记忆或添加过滤器）无需重启服务器。底层的Dria记忆代理LLM针对记忆管理和检索进行了优化，实现了本地、私密且高效的运行。