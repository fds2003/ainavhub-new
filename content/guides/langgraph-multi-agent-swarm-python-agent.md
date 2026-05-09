---
title: "LangGraph Multi-Agent Swarm LangGraph Multi-Agent Swarm LangGraph Multi-Agent"
date: "2024-01-01 00:00:00+08:00"
description: "LangGraph Multi-Agent Swarm LangGraph Multi-Agent Swarm LangGraph "
slug: "langgraph-multi-agent-swarm-python-agent"
draft: false
---

## LangGraph Multi-Agent Swarm

**LangGraph Multi-Agent Swarm** 是一个基于 LangGraph 的 Python 库，用于创建群集式多代理系统。

**核心概念:**

* **群集 (Swarm):** 一种多代理架构，其中代理根据其专业领域动态地将控制权相互传递。
* **动态控制权传递:** 允许具备不同专业技能的Agent协同工作，并将上下文信息传递给适合处理下一步任务的Agent。
* **记忆功能:** 系统会记住上次活跃的代理，确保后续交互能从该代理继续。


**主要特点:**

* **多代理协作:** 使专业代理能够协同工作，并相互传递上下文。
* **可定制的传递工具:** 内置用于代理之间通信的工具，可以进行自定义修改以满足不同需求。
* **基于LangGraph:** 基于 LangGraph 构建，支持流式传输、短期和长期记忆以及人机交互。


**使用场景:**

* **需要多个专业知识协同完成的复杂任务:** 例如，一个Agent负责收集信息，另一个Agent负责数据分析，第三个Agent负责撰写报告。
* **需要上下文传递的多轮对话:** 系统记住上次活跃的Agent，用户可以继续与该Agent进行对话。
* **工作流程中需要不同类型Agent的场景:** 例如，一个Agent处理用户输入，另一个Agent调用外部API，第三个Agent生成最终输出。
* **需要记忆功能的对话系统:** 利用LangGraph的记忆功能，Agent可以记住之前的对话内容，实现更自然的对话体验。
* **需要定制Agent交互方式的场景:** 允许开发者自定义 Agent 之间的通信方式和数据传递。


**简而言之，LangGraph Multi-Agent Swarm 适用于构建需要多个专业Agent协同完成复杂任务，并能够记住上下文的多轮对话系统。**
