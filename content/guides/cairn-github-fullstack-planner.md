---
title: "Cairn"
date: "2024-01-01 00:00:00+08:00"
description: Cairn Cairn、GitHub，。：Fullstack Planner，（）；Project Manag...
slug: cairn-github-fullstack-planner
tags:
- project
- const
- gitalk
- manager
- engineer
draft: false
related_tools:
- pocket flow project template
- adobe project music genai control
- graph-constrained reasoning
- llmanager
- mcp manager for claude desktop
---

## Cairn

Cairn是一个开源的、与GitHub深度集成的后台代理系统，旨在自动化端到端软件开发流程。其核心功能在于通过一个分层且协作的智能代理架构来执行任务：Fullstack Planner代理负责将复杂的开发任务分解为可并行执行的子任务，并协调不同模块（如前端与后端）之间的沟通；Project Manager代理负责将特定指令委派给Software Engineer代理、审查其代码变更、追踪任务依赖并生成最终的拉取请求；而Software Engineer代理则专注于实际的代码修改和实现。该项目支持广泛的大型语言模型（包括OpenAI、Anthropic和Gemini），允许用户在本地环境中连接到自己的GitHub仓库，并以100%后台运行的方式自动完成全栈开发任务。Cairn还提供可选的仓库分析功能，能够深入洞察贡献者活动、编程语言分布和代码所有权。此外，项目具备持久化记忆和可定制规则的能力，通过本地的`.cairn`目录存储代理学习到的仓库结构记忆和用户定义的编码规范，以提高自动化效率和代码一致性。