---
title: "Orchestrator"
date: "2024-01-01 00:00:00+08:00"
description: Orchestrator Orchestrator AI
slug: orchestrator-terminalbench
tags:
- const
- orchestrator
- store
- gi
- terminalbench
draft: false
related_tools:
- graph-constrained reasoning
- orchestrator
- orchestra
- restorephotos
- cursor auto register
---

## Orchestrator

Orchestrator是一个先进的多智能体AI编码系统，旨在高效处理复杂的终端任务，并在斯坦福TerminalBench排行榜上取得第12名的优异成绩。该系统的核心是一个协调者（Orchestrator）智能体，它作为大脑，负责分析用户任务、将其分解为专注的子任务，并战略性地派遣专门的探索者（Explorer）智能体进行系统理解、代码分析和结果验证，以及编码者（Coder）智能体执行具体的代码实现工作，而协调者自身则不直接操作代码，确保了高层级的战略决策和委托。其主要功能和核心亮点在于创新的“上下文存储”（Context Store）机制，这是一个持久化知识层，通过协调者指导、子智能体创建和返回可重用知识工件，实现知识的累积与跨任务共享，从而构建“复合智能”，显著减少了重复工作，优化了上下文窗口负载，并能够解决单个智能体难以应对的复杂多步骤问题。此外，项目还包含全面的任务管理系统，用于跟踪进度和支持故障恢复，并采用“时间感知”的协调策略，通过精确的任务描述、充分的上下文提供和明确的期望来最大限度地提高执行效率，避免因模糊指令造成的资源浪费。