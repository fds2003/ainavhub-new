---
title: "Meeting Prep Agent Meeting Prep Agent Meeting Prep Agent"
date: "2024-01-01 00:00:00+08:00"
description: 'Meeting Prep Agent Meeting Prep Agent  Meeting Prep Agent '
slug: meeting-prep-agent-tavily-google
tags:
- agent
- calendar
- fastapi
- meeting
- llm
draft: false
related_tools:
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
- theoremexplainagent
---

## Meeting Prep Agent

## Meeting Prep Agent 总结性介绍

Meeting Prep Agent 是一个利用 Tavily 的高级搜索功能，并结合 Google Calendar（通过 MCP）的会议信息，为用户准备会议的智能代理。它能实时访问网络，搜索会议参与者的个人资料以及相关公司的信息，帮助用户更好地了解会议背景和与会者，从而更有效地参与会议。这个项目旨在易于定制和扩展，方便用户集成内部数据源、修改代理架构或更换 LLM。

**核心功能：**

* **实时网络搜索:** 使用 Tavily API 获取最新信息。
* **智能推理:** 结合 MCP 和 ReAct 代理流程，提供上下文相关的智能响应。
* **流式子步骤:** 以流的形式展示代理的推理过程和子步骤，提高透明度。
* **引用:** 所有网络搜索结果都会被引用，方便验证。
* **Google Calendar 集成:** 通过 MCP 访问和分析会议数据。
* **异步 FastAPI 后端:** 高性能、异步的后端，提供快速响应。
* **现代 React 前端:** 交互式的 UI，提供动态的用户交互体验。


## Meeting Prep Agent 使用场景

Meeting Prep Agent 主要用于以下场景：

* **会前准备:** 用户在参加重要会议前，利用该代理快速了解与会者背景、公司信息、以及会议主题相关的最新动态。
* **销售/商务拓展:** 销售人员或商务拓展人员可以使用该代理来研究潜在客户，了解客户公司的最新情况，以及相关负责人的信息，从而在会议中更有针对性地沟通。
* **投资/尽职调查:** 投资机构在进行投资前，可以使用该代理快速了解目标公司的信息，以及相关负责人的背景，辅助尽职调查。
* **新闻采访:** 记者在进行采访前，可以使用该代理快速了解采访对象及其相关背景信息。
* **提高会议效率:** 通过提前了解会议相关信息，可以帮助用户在会议中更有效率地参与讨论，做出更明智的决策。