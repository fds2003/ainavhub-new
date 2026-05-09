---
title: "ACP Claude Code Bridge ACP Claude Code Bridge ACP Claude Code Bridge"
date: "2024-01-01 00:00:00+08:00"
description: ACP Claude Code Bridge ACP Claude Code Bridge Claude Code
slug: acp-claude-code-bridge-agent
tags:
- claude
- const
- client
- gitalk
- agent
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## ACP Claude Code Bridge

ACP Claude Code Bridge项目是一个桥接实现，旨在将Claude Code大模型能力与Agent Client Protocol (ACP)相连接，从而使其能与Zed编辑器等兼容ACP的客户端进行无缝集成。该项目的核心要点在于提供会话持久化，能够跨多条消息维护对话上下文；支持流式响应，实现Claude代码的实时输出；以及全面整合Claude的工具调用功能，并能在ACP与Claude SDK消息格式之间进行无缝转换。其关键特性包括完整的ACP协议实现、基于Claude原生会话管理的会话加载与持久化能力、可配置的权限管理模式（如默认询问、自动接受编辑或绕过所有权限）、支持富文本内容显示，甚至允许在对话中通过特殊标记动态切换权限模式。此外，它利用Claude Code内置的认证系统进行身份验证，确保安全便捷的用户体验。