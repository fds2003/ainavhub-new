---
title: "Peekaboo MCP Peekaboo MCP Peekaboo MCP"
date: "2024-01-01 00:00:00+08:00"
description: 'Peekaboo MCP Peekaboo MCP  macOS '
slug: peekaboo-mcp-macos-ui
tags:
- png
- jpg
- macos
- base64
- peekaboo
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- peekaboo mcp
---

## Peekaboo MCP

Peekaboo MCP 是一个 macOS 实用工具，它利用 AI 技术来捕获屏幕截图并分析窗口内容。它的核心功能在于使 AI 助手能够“看见”用户界面，从而更好地理解和解决问题，例如 UI 错误、设计审查和数据分析。

**主要功能和特点：**

* **屏幕截图捕获：** 提供多种捕获模式，包括整个屏幕、特定窗口、应用程序的所有窗口等。支持多种图像格式，如 PNG 和 JPG，并可以返回 Base64 编码的图像数据。
* **AI 分析：** 能够使用配置的 AI 模型分析捕获的图像，并根据用户提出的问题返回分析结果。支持 Ollama 和 OpenAI 等 AI 提供商，并可通过环境变量进行配置。
* **应用程序和窗口列表：** 可以列出当前正在运行的应用程序以及特定应用程序的窗口信息。
* **MCP（代理通信协议）服务器：** 作为一个 MCP 服务器运行，允许 AI 助手通过 JSON-RPC 协议调用其功能。
* **配置灵活性：** 允许用户通过环境变量自定义日志级别、AI 提供商、图像保存路径等。


总而言之，Peekaboo MCP 的目标是为 AI 助手提供视觉能力，以便它们能够更好地理解屏幕内容并协助用户完成各种任务。它集成了屏幕截图、AI 分析和 MCP 服务器功能，并通过灵活的配置选项满足不同用户的需求。