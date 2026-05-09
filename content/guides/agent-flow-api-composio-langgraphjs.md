---
title: "Agent Flow Agent Flow Agent Flow"
date: "2024-01-01 00:00:00+08:00"
description: Agent Flow Agent Flow  AI
slug: agent-flow-api-composio-langgraphjs
tags:
- langgraphjs
- const
- gitalk
- clientsecret
- agent
draft: false
related_tools:
- graph-constrained reasoning
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
---

## Agent Flow

Agent Flow 是一个模块化、可扩展的智能体平台，它主要功能是帮助开发者快速构建、定制和扩展AI驱动的工作流程。该平台利用可视化的节点界面和强大的API，集成了Composio和LanggraphJS，核心在于提供灵活的开发体验和第三方工具的无缝集成。主要功能包括：

1. **可视化工作流构建器** : 提供一个使用ReactFlow的拖放界面，用于创建智能体图（节点和边）。
2. **核心节点类型** : 包含数据入口的输入节点、结果输出的输出节点、使用大型语言模型进行决策的LLM节点、执行外部操作的工具节点，以及组合LLM和工具节点以进行复杂编排的智能体节点。
3. **API优先** : 每个工作流都表示为一个JSON图，可以通过单个API路由执行。
4. **Composio集成** : 使用一个SDK即可访问数百个预构建工具，并自动处理身份验证。
5. **智能体模式** : 支持提示链、并行化、路由、评估器-优化器循环和利用工具调用增强LLM等多种智能体模式。