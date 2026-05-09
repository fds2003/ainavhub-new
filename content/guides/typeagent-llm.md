---
title: "TypeAgent"
date: "2024-01-01 00:00:00+08:00"
description: 'TypeAgent TypeAgent  TypeAgent '
slug: typeagent-llm
tags:
- structured
- amp
- we
- memories
- llm
draft: false
related_tools:
- structured outputs sample apps
- structured outputs in the api
- computer using agent sample app
- gemini spatial example
- mlx examples
---

## TypeAgent

**TypeAgent 总结：**

TypeAgent 是一个**示例代码** ，旨在探索如何利用当前大型语言模型 (LLM) 技术的进步，构建具有**自然语言交互界面** 的**单个个人助理** 的架构。它的核心目标是将LLM等随机系统与传统软件组件安全有效地结合起来，完成各种任务。 TypeAgent强调三个原则：

1. **将模型提炼成逻辑结构** ：通过模式匹配减少模型调用，构建知识本体，并使用“思维树”进行协作规划。
2. **利用结构控制信息密度** ：应用定义离散的行动类别，紧凑的语义结构适应注意力预算，每个搜索树节点聚焦于子问题。
3. **利用结构实现协作** ：人机协同消除行动歧义，简单模型从文本中提取逻辑结构，多个模型和人类协作扩展搜索树节点。


TypeAgent 通过 **Structured RAG** 技术改进了传统 RAG 方法，实现了更精确的对话记忆，能更好地回答关于过去对话的问题。 并且，它旨在创建一个可以应用于任何应用程序的通用个人助理，通过将用户请求映射到具体操作来实现。通过 **AMP 架构** (集成 actions, memories, plans)，实现了动作、记忆和计划之间的自然信息流动，并尝试将 AMP 应用于 Web，允许网站通过 JavaScript 接口注册动作。

TypeAgent 提供了一个名为 **TypeAgent Shell** 的 Electron 应用示例，作为探索个人助理的起点。它具有统一的用户界面，支持语音交互、基于 Structured RAG 的会话记忆以及与 TypeAgent Cache 的集成，以降低成本和延迟。

**TypeAgent 的使用场景：**

* **构建个人助理：** 用于探索和实验构建具有自然语言界面的个人助理架构，允许用户通过自然语言指令完成各种任务。
* **集成现有应用：** 可以集成到现有的应用程序中，通过自然语言接口控制应用程序的功能，例如音乐播放器、浏览器、代码编辑器、日历、邮件等。
* **构建对话记忆：** 通过 Structured RAG 技术，可以构建更准确和有效的对话记忆，从而提高助手的智能水平。
* **LLM 实验与研究：** 可以作为研究 LLM 应用的平台，探索如何将 LLM 与传统软件系统结合，并实现人机协同。
* **行动调度：** 开发者可以创建自定义代理，将其插入到 TypeAgent Shell 示例中，以探索使用调度程序将行动路由到其自定义代理。


**简而言之，TypeAgent 主要应用于自然语言智能体开发，旨在将 LLM 的自然语言理解能力与各种软件应用程序的功能相结合，创建更智能、更人性化的交互体验。**