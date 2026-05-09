---
title: "CircuitManus CircuitManus"
date: "2024-01-01 00:00:00+08:00"
description: CircuitManus GitHub，CircuitManus，、： CircuitManusPython，（LLM），，...
slug: circuitmanus-github-python-llm
tags:
- agent
- python
- github
- fastapi
- llm
draft: false
related_tools:
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
- theoremexplainagent
---

## CircuitManus

作为一名专业的GitHub仓库分析师，我对名为CircuitManus的仓库进行了分析，并总结出以下主要功能、核心要点和关键特性：

CircuitManus是一个基于Python构建的通用型高级异步智能体平台，通过集成大型语言模型（LLM）和可扩展的工具集，赋能自动化各类复杂任务，当前版本专注于电路设计领域，但具备轻松扩展至其他领域的能力。它集成了FastAPI WebSocket服务器和现代Web UI，提供完整的智能交互体验。核心框架遵循经典的感知-规划-行动-观察-响应智能体循环模型，并具备强大的容错和自我修正能力。平台通过WebSocket实现后端Agent核心与前端Web界面的无缝实时交互，专为Windows环境优化和测试。

**主要功能、核心要点和关键特性如下：**

1. **现代化的Web用户界面：** 提供基于FastAPI和WebSocket的实时交互，精美、清晰、响应式的用户界面，支持浅色/深色/自动主题切换，以及便捷的会话管理和动态状态展示。
2. **智能规划与重规划(Agent核心)：** 利用LLM（默认glm-z1-flash）理解复杂指令，生成包含工具调用或直接回复的结构化JSON计划；支持失败后自动重规划，以及LLM规划调用重试机制。
3. **精确工具执行与容错(Agent核心)：** 提供模块化工具定义，按功能领域分离，易于扩展；通过装饰器动态注册工具，并使用ToolExecutor智能处理同步和异步工具；支持工具级重试和失败中止。
4. **通用Agent架构：** 核心流程不与特定工具领域强耦合，易于通过添加新工具模块来扩展Agent的能力范围。
5. **状态与记忆管理(Agent核心)：** 包含可插拔领域模型，并使用分层记忆系统管理短期对话历史、长期知识片段和特定领域的状态对象。
6. **工程实践：** 后端和Agent核心充分利用异步特性；`circuitmanus`包结构清晰，提升代码可维护性和可扩展性；提供详细分级日志，以及清晰的Prompt工程。
7. **可用的工具集：** 包含电路操作工具（如添加、连接、描述、清除、移除、断开组件，更新组件值，按ID查找组件，按类型列出组件，获取组件连接数等10种）和网络搜索工具（使用DuckDuckGo搜索）。


总结：这个项目是一个模块化、可扩展的智能代理平台，主要用于电路设计领域，但设计目标是通用性。它提供了现代化的Web界面，集成了LLM进行任务规划和工具调用，并具有强大的错误处理和自修复能力。