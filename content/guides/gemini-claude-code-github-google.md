---
title: "Gemini for Claude Code Gemini for Claude Code"
date: "2024-01-01 00:00:00+08:00"
description: Gemini for Claude Code  GitHub
slug: gemini-claude-code-github-google
tags:
- claude
- haiku
- github
- opus
- code
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Gemini for Claude Code

好的，我来帮你总结这个GitHub仓库的主要功能、核心要点和关键特性，以下列清晰的项目符号形式呈现：

* **核心功能：**该项目作为一个桥梁，使您能够将Google的Gemini模型与Claude Code结合使用。它在Anthropic格式（由Claude Code使用）和Gemini格式（通过LiteLLM）之间转换API请求和响应，从而实现无缝集成。
* **模型映射：**项目能够智能地将Claude Code模型请求（例如，“haiku”，“sonnet”，“opus”别名）映射到您选择的Gemini模型。
* **LiteLLM集成：**项目利用LiteLLM与Gemini API进行稳健而灵活的交互。
* **增强的流式传输支持：**项目能够处理来自Gemini的流式传输响应，并具有强大的错误恢复功能，可处理格式错误的块和API错误。
* **完整的Claude Code工具使用：**项目在Gemini格式和Claude Code工具使用之间进行转换（功能调用），并能可靠地处理工具结果。
* **高级错误处理：**针对常见的Gemini API问题，项目提供了具体且可操作的错误消息，并具有自动回退策略。
* **弹性架构：**通过智能重试逻辑和回退到非流式传输模式，项目可以优雅地处理Gemini API的不稳定性。
* **诊断端点：**项目包括`/health`和`/test-connection`，便于排除故障。
* **Token计数：**项目提供与Claude Code兼容的`/v1/messages/count_tokens`端点。
* **错误恢复：**项目自动检测并处理来自Gemini流的格式错误的JSON块。
* **智能重试逻辑：**项目采用指数退避和可配置的重试限制，用于处理流式传输错误。
* **优雅的回退：**当流式传输失败时，项目无缝切换到非流式传输模式。
* **`CLAUDE.MD`文件：**项目包含的`CLAUDE.MD`文件对于确保Gemini有效地理解和响应Claude Code的独特命令结构、工具使用模式和所需的输出格式至关重要。必须将其复制到您的项目目录中。


该项目旨在解决Claude Code与Gemini模型之间的兼容性问题，通过转换API请求和响应，提供无缝的集成体验。它还具有强大的错误处理和弹性架构，可以处理Gemini API的不稳定性。`CLAUDE.MD`文件的使用是确保Gemini能正确理解和响应Claude Code的关键。