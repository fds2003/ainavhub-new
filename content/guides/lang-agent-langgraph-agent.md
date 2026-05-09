---
title: "Lang-Agent"
date: "2024-01-01 00:00:00+08:00"
description: Lang-Agent Lang-Agent LangGraph
slug: lang-agent-langgraph-agent
tags:
- supervisoragent
- const
- gitalk
- clientsecret
- agent
draft: false
related_tools:
- sora
- agent
- graph-constrained reasoning
- oliva multi-agent assistant
- openai agents sdk
---

## Lang-Agent

Lang-Agent是一个基于LangGraph的可编程AI Agent配置平台，其核心优势在于引入了高度灵活的“状态变量”机制，突破了传统工作流仅顺序传递输出的限制，允许状态变量作为任意节点和条件边的输入输出，从而实现对Agent执行逻辑的精确控制。该平台提供直观的可视化拖拽界面，使用户能够轻松构建复杂的AI Agent，并支持大语言模型与嵌入模型配置，以及通过MCP实现对外部工具的调用。项目内置了丰富多样的节点类型，包括处理用户输入的节点、核心LLM节点、逻辑控制（如计数器、转换器）、数据处理（如文档加载、向量存储与召回），并支持将自定义的Agent作为可复用模块进行嵌套调用，以及ReactAgent和SupervisorAgent等高级AI编排模式。用户可以通过可视化界面管理Agent配置的创建、保存、运行、导入和导出，并且该平台具备出色的可扩展性，允许轻松添加自定义节点来满足特定的业务需求。