---
title: "SWE Agent with LangGraph SWE Agent with LangGraph"
date: "2024-01-01 00:00:00+08:00"
description: 'SWE Agent with LangGraph  LangGraph '
slug: swe-agent-langgraph
tags:
- const
- swe
- tree-sitter
- gitalk
- agent
draft: false
related_tools:
- graph-constrained reasoning
- swe agent with langgraph
- swe-agent
- lingma swe-gpt
- oliva multi-agent assistant
---

## SWE Agent with LangGraph

该项目是一个使用 LangGraph 构建的、由 AI 驱动的软件工程代理，旨在通过智能的计划和执行来自动化代码实现。它利用多代理工作流、代码库理解和增量式开发，实现更可靠、更易于管理的变更。

以下是该项目的主要功能、核心要点和关键特性：

1. **智能代码计划：** AI 架构师分析需求并创建详细的实施计划。
2. **自动化代码生成：** 开发代理精确地执行计划，进行文件修改。
3. **多代理工作流：** 将计划和实施阶段分离，以提高可靠性。
4. **代码库理解：** 使用 tree-sitter 和语义搜索进行高级代码分析。
5. **增量式开发：** 将任务分解为原子任务，以实现更安全、更易于管理的更改。
6. **状态管理：** 使用 Pydantic 模型在代理之间进行结构化数据流管理。
7. **工具集成：** 集成了文件系统操作、代码搜索和结构分析等工具。
8. **研究流程：** 通过假设驱动来探索代码库。
9. **原子执行：** 细粒度的任务分解可实现可靠的实施。