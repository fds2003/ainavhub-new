---
title: "Orchestra"
date: "2024-01-01 00:00:00+08:00"
description: Orchestra Orchestra  Orchestra
slug: orchestra-llm
tags:
- llm
- exa
- orchestra
- json
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## Orchestra

##### Orchestra 简介

Orchestra（主框架序列）是一个轻量级的开源代理框架，旨在构建基于大型语言模型（LLM）的工作流和多代理团队。它实现了一种独特的代理编排方法，不仅限于简单的数据路由，而是能够支持复杂的工作流管理。Orchestra 提供模块化的架构，便于扩展和集成，支持动态任务分解与代理协作，显著减少 LLM 的认知负担，同时具有直观的工具定义和可配置的故障保护机制。

##### Orchestra 的关键特性

* **模块化设计** ：便于构建、扩展和集成。
* **代理编排** ：代理可以作为任务执行者和协调者，有助于实现动态协调。
* **分阶段任务执行** ：通过结构化思维模式降低 LLM 的认知负荷。
* **工具集成** ：支持简化的文档字符串工具定义，避免复杂的 JSON 架构。
* **流式支持** ：实时输出流，支持同步和异步操作。
* **内置故障恢复** ：优雅处理 LLM 失败，提供可配置的回退链。


##### 使用场景

Orchestra 的使用场景非常广泛，包括但不限于以下几种：

1. **研究助手** ：可通过集成搜索工具（如 Exa）实现对特定主题的调查与说明，例如量子计算的简明解释。

2. **金融分析** ：构建多代理团队分析股票，包含市场微观结构分析、基本面分析、技术分析和情绪分析等角色，每个角色使用特定的工具和知识进行精准分析。

3. **自动化工作流** ：支持构建从简单任务到复杂多代理系统的完整工作流，方便交互和数据操作。

4. **信息检索和处理** ：整合 web 搜索、文件读取等工具，实现信息的获取与处理。


##### 示例代码

以下是一个简单的示例，演示如何使用 Orchestra 创建研究助手：


from mainframe_orchestra import Agent, Task, OpenaiModels, WebTools, set_verbosity

set_verbosity(1)

research_agent = Agent(
role="research assistant",
goal="answer user queries",
llm=OpenaiModels.gpt_4o,
tools={WebTools.exa_search}
)

def research_task(topic):
return Task.create(
agent=research_agent,
instruction=f"Use your exa search tool to research {topic} and explain it in a way that is easy to understand.",
)

result = research_task("quantum computing")
print(result)


##### 结论

Orchestra 为开发者提供了强大的工具和灵活性，用于构建多样的智能代理工作流，适用于各种场景。通过其模块化的设计和可扩展的架构，用户能够轻松创建自己的多代理系统，从而高效应对复杂任务的需求。如果您对 Orchestra 感兴趣，可以在其[文档](<https://docs.orchestra.org>)中找到更多的信息和教程。