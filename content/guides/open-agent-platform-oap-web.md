---
title: "Open Agent Platform Open Agent Platform Open Agent Platform"
date: "2024-01-01 00:00:00+08:00"
description: 'Open Agent Platform Open Agent Platform (OAP)  Open Agent Platform (OAP) '
slug: open-agent-platform-oap-web
tags:
- open
- supervisor
- agents
- agent
- oap
draft: false
related_tools:
- openchat
- openmanus
- openai agents sdk
- opendeepsearch
- openmanus-rl
---

## Open Agent Platform

## Open Agent Platform (OAP) 总结

Open Agent Platform (OAP) 是一个无需编写代码的 Agent 构建平台，它提供了一个现代化的 Web 界面，用于创建、管理和与 LangGraph Agents 交互。OAP 旨在降低技术门槛，让非专业人士也能轻松使用，同时为开发者提供高级功能。

**核心功能：**

* **Agent 管理:** 通过直观的界面构建、配置和交互 Agents。
* **RAG 集成:** 对检索增强生成 (RAG) 提供一流的支持，通过 LangConnect 实现。
* **MCP 工具:** 通过 MCP 服务器将 Agents 连接到外部工具。
* **Agent 监督:** 协调多个 Agents 通过 Agent Supervisor 协同工作。
* **身份验证:** 内置身份验证和访问控制。
* **可配置 Agents:** 通过丰富的 UI 轻松定义用户如何配置 Agents。


**关键概念：**

* **Agents:** 基于现有 LangGraph 图形的自定义配置，与 LangGraph API 中的 `assistant` 概念相同。所有Agents必须是LangGraph agent，并部署在LangGraph Platform上。
* **LangConnect:** 独立的RAG服务器，需要单独运行以支持OAP中的RAG功能。


## Open Agent Platform 使用场景

OAP 的应用场景非常广泛，可以用于构建各种类型的智能 Agent，例如：

* **客户服务 Agent:** 自动回复客户问题，提供产品信息，处理投诉等。
* **知识问答 Agent:** 基于知识库回答用户问题，提供专业领域的知识咨询。
* **任务执行 Agent:** 自动化执行特定任务，例如数据分析、内容生成、报告撰写等。
* **智能助手:** 帮助用户管理日程、安排会议、提醒事项等。
* **Agent 协作平台:** 构建多个 agent协同完成复杂任务的平台，比如一个Agent负责收集信息，另一个Agent负责分析数据，还有一个Agent负责撰写报告。


**总结来说，只要需要构建智能 Agent 并希望降低开发难度，提高开发效率的场景，都可以考虑使用 Open Agent Platform。**

**重要说明:** 使用 OAP 必须基于 LangGraph Agents，并且如果需要使用 RAG 功能，则需要单独运行 LangConnect 服务器。