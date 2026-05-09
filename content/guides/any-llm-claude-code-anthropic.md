---
title: "Any LLM in Claude Code Any LLM in Claude Code"
date: "2024-01-01 00:00:00+08:00"
description: Any LLM in Claude Code  Any LLM in Claude Code
slug: any-llm-claude-code-anthropic
tags:
- any
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- in
draft: false
related_tools:
- any-agent
- describe anything
- xianyu autoagent
- draganything
- matanyone
---

## Any LLM in Claude Code

“Any LLM in Claude Code” 项目是一个Anthropic API代理，其核心功能在于允许用户在不购买Claude Pro订阅的前提下，通过将Claude Code对大型模型（`sonnet`）和小型模型（`haiku`）的内部API请求透明地重定向并翻译，使其能够使用任何由LiteLLM支持的第三方大语言模型后端。该项目的主要特点是提供了高度灵活的模型路由配置，用户可以指定具体的API提供商、模型名称、API密钥及自定义的基础URL，从而将默认的Claude模型替换为更具成本效益或拥有更大上下文窗口的模型（如OpenAI的GPT系列、Vertex AI的Gemini系列或本地部署模型）。此外，它还提供了详细的请求和响应体日志功能，对于需要进行提示工程分析的用户提供了极大的便利，实现了对Claude Code后端模型选择的完全自定义。