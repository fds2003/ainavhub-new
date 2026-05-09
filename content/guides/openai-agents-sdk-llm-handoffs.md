---
title: "OpenAI Agents SDK OpenAI Agents SDK OpenAI Agents SDK"
date: "2024-01-01 00:00:00+08:00"
description: 'OpenAI Agents SDK OpenAI Agents SDK  OpenAI Agents SDK '
slug: openai-agents-sdk-llm-handoffs
tags:
- tracing
- sdk
- guardrails
- openai
- llm
draft: false
related_tools:
- aci
- openai agents sdk
- claude code sdk for python
- vercel ai sdk 3.0
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
---

## OpenAI Agents SDK

## OpenAI Agents SDK 总结性介绍

OpenAI Agents SDK 是一个轻量级但功能强大的框架，用于构建多智能体工作流。其核心概念包括：

* **智能体 (Agents)** : 基于大型语言模型 (LLM) 配置的个体，可以指定指令、工具、防护措施和交接规则。
* **交接 (Handoffs)** : 允许智能体将控制权移交给其他智能体，以处理特定任务，实现智能体之间的协作。
* **防护措施 (Guardrails)** : 可配置的安全检查，用于输入和输出的验证，保证智能体的行为符合预期。
* **追踪 (Tracing)** : 内置的智能体运行跟踪功能，方便查看、调试和优化工作流。


该 SDK 兼容任何支持 OpenAI Chat Completions API 格式的模型提供商。

## OpenAI Agents SDK 的使用场景

OpenAI Agents SDK 具有高度的灵活性，可以用于建模各种 LLM 工作流，包括确定性流程、迭代循环等。一些常见的使用场景包括：

* **任务分解和分配** : 将复杂的任务分解成更小的子任务，并分配给不同的智能体来完成，提高效率和准确性。
* **多语言支持** : 使用不同的智能体处理不同语言的输入和输出，实现多语言应用的开发。
* **工具调用和整合** : 将外部工具集成到智能体的工作流中，实现更强大的功能，例如获取天气信息、查询数据库等。
* **复杂对话流程** : 构建复杂的对话流程，实现更智能的对话交互。
* **自动化工作流程** : 自动化重复性的任务，例如文档生成、数据分析等。
* **模拟和研究** : 模拟复杂系统，研究智能体的行为和交互。


简而言之，OpenAI Agents SDK 旨在帮助开发者更轻松地构建复杂的、基于 LLM 的多智能体系统，并提供追踪和调试工具，以确保系统的可靠性和可控性。