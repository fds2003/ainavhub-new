---
title: "ControlFlow"
date: "2024-01-01 00:00:00+08:00"
description: ControlFlow ControlFlow ControlFlow
slug: controlflow-python-llm
tags:
- agents
- python
- key
- tasks
- install
draft: false
related_tools:
- openai agents sdk
- cloudflare agents
- agents tools
- news agents
- control plane for your ai agents
---

## ControlFlow

# ControlFlow概述

**ControlFlow是一个用于构建智能代理AI工作流的Python框架。**

ControlFlow为定义工作流和委派任务给大型语言模型（LLM）提供了一个结构化、以开发者为中心的框架，而不会牺牲控制权或透明度：

* 创建离散、可观察的[任务（tasks）](<https://controlflow.ai/concepts/tasks>)供AI解决。
* 为每个任务分配一个或多个专门的AI[代理（agents）](<https://controlflow.ai/concepts/agents>)。
* 将任务组合成一个[流(flow)](<https://controlflow.ai/concepts/flows>)以协调更复杂的行为。


这种以任务为中心的方法使你可以将AI的强大功能应用于复杂的工作流，同时保持细粒度的控制。通过为每个任务定义明确的目标和约束，可以平衡AI自主性与精准监管，让你有信心构建复杂的AI应用。

## 使用场景

##### 安装

你可以使用以下命令安装ControlFlow：


pip install controlflow


同时，需要配置LLM提供商，例如使用OpenAI，需要通过`OPENAI_API_KEY`环境变量配置API密钥：


export OPENAI_API_KEY=your-api-key


更多配置可以参考[不同的LLM提供商](<https://controlflow.ai/guides/llms>)。

##### 示例

下面是一个简单的示例，展示了如何创建一个AI代理来写研究报告：


import controlflow as cf
from pydantic import BaseModel

# 创建一个编写研究报告的代理
author = cf.Agent(
name="Deep Thought",
instructions="Use a formal tone and clear language",
)

class ResearchTopic(BaseModel):
title: "str"
keywords: list[str]

@cf.flow
def research_workflow() -> str:
# 任务1: 默认代理将与用户一起选择一个主题
topic = cf.Task(
"Work with the user to come up with a research topic",
result_type=ResearchTopic,
user_access=True,
)

# 任务2: 默认代理将根据主题创建提纲
outline = cf.Task("Create an outline", context=dict(topic=topic))

# 任务3: 作者代理将编写草稿
draft = cf.Task(
"Write a first draft",
context=dict(outline=outline),
agents=[author]
)

return draft

# 运行工作流
result = research_workflow()
print(result)


##### 为什么选择ControlFlow？

ControlFlow旨在解决构建强大且可预测的AI应用中的各种挑战：

###### 任务驱动架构

将复杂的AI工作流拆分为可管理和可观察的步骤，确保AI代理在明确的边界内操作，便于管理和推理。

###### 结构化结果

通过使用Pydantic模型确保AI生成的内容符合应用需求，实现AI与传统软件的无缝衔接。

###### 专门化代理

部署专门为特定任务设计的AI代理，以提高问题解决的效率，每个代理可以有自己的指令、工具，甚至可以基于不同的LLM模型。

###### 生态系统集成

ControlFlow支持广泛的LangChain模型和工具，轻松融入现有代码和工具中。

###### 灵活的控制

在工作流中随时调整任务的控制和自主性。

###### 多代理协调

在单个工作流内协调多个AI代理，或者在一个任务中协调多个代理，充分发挥不同模型和方法的优势。

###### 本地可观察性和调试

基于Prefect 3.0，你可以在一个地方监控所有的代理和传统工作流，便于调试和优化性能。

通过ControlFlow，你可以构建透明、可维护、符合软件工程最佳实践的AI工作流。