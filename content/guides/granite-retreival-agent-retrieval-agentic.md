---
title: "Granite Retreival Agent Granite Retreival Agent Granite Retrieval Agent"
date: "2024-01-01 00:00:00+08:00"
description: Granite Retreival Agent Granite Retrieval Agent Agentic RAG
slug: granite-retreival-agent-retrieval-agentic
tags:
- open
- max
- granite
- agent
- agentic
draft: false
related_tools:
- openchat
- openmanus
- openai agents sdk
- opendeepsearch
- openmanus-rl
---

## Granite Retreival Agent

Granite Retrieval Agent（花岗岩检索代理）是一种实现了Agentic RAG（检索增强生成）的方法，能够通过结合本地文档和网络检索来回答查询。它不仅作为个人生产力工具，还展示了如何使用任务规划、自适应逐步执行和工具调用来构建代理，这其中使用了开源的大语言模型Granite 3.1。

该代理被设计为在用户的本地笔记本电脑上运行，前提是拥有足够的处理能力和内存，然而它实际上可以在任何地方运行（最初的测试是在配备M3 Max芯片和64GB内存的MacBook Pro上进行的）。代理的核心代码封装在一个Open WebUI功能中，使用户能够通过易于使用的聊天界面与代理进行交互。

##### 主要组成部分：

1. Open WebUI（支持0.5版）
2. Ollama
3. Searxng
4. 本存储库的Python脚本，实现了Agentic工作流，使用AutoGen框架


##### 使用场景：

* **个人生产力** ：用户可以利用Granite Retrieval Agent进行信息检索及数据处理，例如查询某些技术的采用公司、整理会议记录、查找相似的开源项目等。
* **文档检索** ：用户可以上传多个文本文档，并通过查询从中提取知识，帮助项目进行决策和分析。
* **知识管理** ：代理能够整合网络信息与本地文档，提升信息获取的效率和准确性。


这个工具适合需要频繁信息检索、知识整理和项目分析的用户，尤其是在技术或科研领域。