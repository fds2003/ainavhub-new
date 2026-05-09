---
title: "Agent-Wiz"
date: "2024-01-01 00:00:00+08:00"
description: Agent-Wiz Agent-Wiz Python
slug: agent-wiz-python-llm-autogen-langgraph
tags:
- python
- maestro
- crew
- agent-wiz
- llm
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## Agent-Wiz

Agent-Wiz是一个Python命令行工具，旨在帮助开发者、研究人员和安全团队理解和评估基于大型语言模型(LLM)的智能体工作流的安全性。它通过以下方式实现：

* **提取工作流：** 通过静态代码分析，从流行的AI框架（如Autogen, LangGraph, CrewAI等）中提取智能体的工作流程。
* **可视化：** 将提取的工作流以交互式图表的形式呈现，清晰地展示智能体、工具和数据流之间的关系。
* **威胁评估：** 利用既定的威胁建模方法（如MAESTRO），自动生成全面的安全报告，识别潜在的漏洞。


**Agent-Wiz的核心优势：**

* **可视化：** 无需手动跟踪，清晰地呈现复杂的智能体图。
* **结构化：** 绘制智能体、工具和数据流之间的关系图。
* **安全性：** 应用威胁建模框架识别潜在漏洞。


**使用场景：**

* **分析代码以了解智能体如何交互：**帮助开发者理解大型项目中，各个智能体如何协同工作，调用哪些工具，以及数据如何在它们之间流动。
* **识别智能体系统的潜在安全风险：** 通过威胁建模功能，自动生成安全报告，帮助安全团队发现智能体系统可能存在的漏洞。
* **进行安全审计和合规检查：** 通过Agent-Wiz生成的报告，可以作为智能体系统安全审计和合规性检查的重要依据。


**简而言之，Agent-Wiz是一个用于理解、可视化和评估AI智能体安全性的强大工具，适用于所有需要处理复杂智能体系统的团队。**