---
title: "codex-as-mcp"
date: "2024-01-01 00:00:00+08:00"
description: codex-as-mcp codex-as-mcp Claude Code
slug: codex-as-mcp-claude-code-cursor-codex
tags:
- codex-as-mcp
- clientsecret
- clientid
- cursor
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- codex-as-mcp
- cursor auto register
- cursor talk to figma mcp
- gemini cursor
- free-cursor
---

## codex-as-mcp

`codex-as-mcp`项目旨在作为一个关键集成工具，使Claude Code、Cursor等主流AI助手能够调用Codex执行任务，并为相关订阅用户提供无需额外费用的GPT-5使用优化。其核心功能包括通过`codex_execute`实现通用Codex任务执行以及`codex_review`进行专业的代码审查。该项目提供了两种操作模式以兼顾功能与安全性：“安全模式”默认为只读，有效保护用户环境；而通过`--yolo`标志启用的“可写模式”则提供完整的Codex功能。此外，项目采用顺序执行机制来防止并行代理操作可能引发的冲突，确保运行的稳定性，并需依赖特定版本的Codex CLI进行配置和使用。