---
title: "agentic"
date: "2024-01-01 00:00:00+08:00"
description: 'agentic patterns Agentic Patterns '
slug: agentic-patterns-andrew-ng-llm
tags:
- planning
- pattern
- agentic
- tool
- patterns
draft: false
related_tools:
- agentic design patterns
- agentic memory
- agentic radar
- agentic rag
- magentic-ui
---

## agentic_patterns

##### Agentic Patterns 简介

Agentic Patterns是由Andrew Ng提出的一组用于增强大型语言模型（LLM）性能的四种模式。这些模式旨在通过提高LLM在任务执行过程中的反应能力、使用外部工具、规划过程以及多代理协作，来实现更高效的结果。实现这些模式的工具是Groq，这是一种简单的API调用方式，避免了使用复杂的框架。

###### 四种核心模式

1. **反思模式 (Reflection Pattern)** ：

* 该模式允许LLM对其生成的结果进行反思和修正，从而提高内容质量。通过分析自我输出，LLM可以提出改进建议。
2. **工具模式 (Tool Pattern)** ：

* LLM通常无法单独生成准确的答案，因此需要借助外部工具。这些工具可以是调用API以访问外部数据源（如Wikipedia、YouTube等），从而增强信息的获取能力。
3. **规划模式 (Planning Pattern)** ：

* 该模式帮助LLM将复杂任务分解为更小的子任务，并有效规划执行顺序。最典型的例子包括ReAct技术，使模型能够更聪明地安排任务。
4. **多代理模式 (Multiagent Pattern)** ：

* 允许多个代理分担任务，每个代理负责不同的角色和职责。通过这种方式，可以提高多任务处理的效率。


##### 使用场景

1. **内容创作与编辑** ：

* 通过反思模式，帮助生成高质量的文本内容，并及时提出修正建议，从而提升写作风格。
2. **信息检索与处理** ：

* 利用工具模式，结合外部数据源，通过API调用进行信息检索，提升信息准确性和全面性。
3. **复杂任务管理** ：

* 在需要进行多步推理或规划的大型项目中，使用规划模式将任务合理拆分。
4. **团队协作与项目管理** ：

* 多代理模式适用于项目管理，允许不同角色（如产品经理、开发人员等）共同协作，完成复杂任务。


这些模式使得开发者可以更灵活地构建智能应用，提升LLM的实用性和适应性。在教育、市场分析、软件开发等领域，均可以找到Agentic Patterns的应用潜力。