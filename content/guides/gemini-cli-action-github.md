---
title: "Gemini CLI Action Gemini CLI Action"
date: "2024-01-01 00:00:00+08:00"
description: Gemini CLI Action  Gemini CLI Action
slug: gemini-cli-action-github
tags:
- clientsecret
- github
- clientid
- ba3af7dcb9cbfcf08
- opentelemetry
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## Gemini CLI Action

“Gemini CLI Action”项目是一个GitHub Action，旨在通过集成Gemini CLI，直接在GitHub仓库中自动化软件开发任务。其核心功能在于支持通过拉取请求和议题评论进行交互，从而实现代码生成、分析和修改等自动化操作。该项目的关键特性包括基于评论的工作流触发、通过内容自动对议题进行分类和标签管理、利用Gemini的工具调用能力与如`gh`等其他命令行工具进行扩展集成，以及通过自定义`GEMINI.md`文件为Gemini提供项目特定的上下文和指令。此外，它需要配置Gemini API密钥和相应的GitHub App权限才能正常运行，并支持OpenTelemetry以提供可观测性，便于监控和调试。