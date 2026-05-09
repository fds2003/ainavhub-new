---
title: "nanoDeepResearch"
date: "2024-01-01 00:00:00+08:00"
description: 'nanoDeepResearch nanoDeepResearch  DeerFlow '
slug: nanodeepresearch-deerflow-openai-deep-research
tags:
- python
- agent
- nanodeepresearch
- deep
- langgraph
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## nanoDeepResearch

nanoDeepResearch 是一个受字节跳动开源项目 DeerFlow 启发的项目，旨在重现 OpenAI 的 Deep Research 功能。它是一个从零开始构建的后端系统，**不依赖于任何现有的代理框架** （例如 LangGraph）。

**主要特点：**

* **完全可控：** 方便理解Deep Research Agent底层工作原理，可以清晰地看到工作流程中每个步骤的输出，例如 LLM 的搜索建议、生成的代码、研究计划等。
* **ReAct Agent：** 使用 ReAct 循环进行推理和行动，无需人工干预。
* **状态机（图）：** 将Deep Research流程分解为多个状态，包括规划器、研究团队、研究员（使用网络搜索和爬虫）、程序员（使用Python）和报告生成器。


**使用场景：**

nanoDeepResearch **不是为生产环境设计的** ，因为它缺少很多生产特性（例如 Web UI，流式 token 输出，异步执行等）。

**主要用途是：**

* **学习和研究：** 深入理解 Deep Research Agent 的工作原理，学习如何构建一个复杂的代理系统。
* **调试和分析：** 方便调试和分析流程中的各个环节，例如 LLM 的推理过程、工具的使用效果等。


**如何使用：**

1. 准备 OpenAI、Claude、Tavily 和 Jina 的 API 密钥，并将其设置为环境变量。
2. 运行 `python3 -m nanoDeepResearch.main --query "你的问题"` 命令，例如：`python3 -m nanoDeepResearch.main --query "what is the area(land+water) ratio between the largest and smallest states in the US"`。
3. 查看生成的报告（例如 `example_reports/area_ratio_largest_smallest_state_in_us.md`）。


总而言之，nanoDeepResearch 是一个用于学习和实验的工具，旨在帮助用户深入了解 Deep Research 的内部机制，并提供了一个从零开始构建代理系统的示例。