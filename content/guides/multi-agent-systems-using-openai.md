---
title: "Multi AI Agent Systems using OpenAI"
date: "2024-01-01 00:00:00+08:00"
description: 'Multi AI Agent Systems using OpenAI s Assistants API '
slug: multi-agent-systems-using-openai
tags:
- systems
- multi
- assistants
- agent
- store
draft: false
related_tools:
- multi ai agent systems with crewai
- automated design of agentic systems
- oliva multi-agent assistant
- langgraph multi-agent swarm
- hospital_multiagent_system
---

## Multi AI Agent Systems using OpenAI’s Assistants API

##### 简单总结 Multi AI Agent Systems 使用 OpenAI 的 Assistants API 的功能及使用场景

###### 功能概述

Experts.js 使得使用 OpenAI 的 Assistants API 和工具来创建多 AI 代理系统变得非常简单。这些系统具备扩展的记忆功能和细节关注度。具体功能包括：

1. **创建和部署多 AI 代理系统** ：

* 使用 OpenAI 的新 Assistants API，将多个 AI 助手连接在一起作为工具使用。
* 每个工具是一个由大型语言模型（LLM）支持的助手，可以完成专门的任务。
2. **参考附件文件和图片** ：

* Assistants 可以参考附带的文件和图片作为知识来源。
3. **扩展功能** ：

* 支持长达 256,000 个字符的指令。
* 可以集成多达 128 种工具。
* 使用创新的向量存储（Vector Store）API 在每个助手上有效地搜索多达 10,000 个文件。
4. **易于集成和管理** ：

* 通过简单的接口函数如`ask()`，可以轻松向助手发送指令而无需管理复杂的对象或运行步骤。
5. **支持流媒体和事件** ：

* 提供了流媒体支持，允许应用程序通过事件接收文本、图片和工具输出。


###### 适用场景

在以下情况下，您可能会考虑使用 Multi AI Agent Systems using OpenAI’s Assistants API：

1. **复杂任务的自动化** ：

* 当您需要一个系统来处理一系列复杂或相互依赖的任务时，可以通过多个专门的AI助手来分解和管理任务。
2. **大型知识库的查询和管理** ：

* 如果需要处理大型文件和图片库，助手们可以参考这些资源进行查询和回答问题。
3. **企业内部不同部门的协作** ：

* 比如在公司内部，可以创建一个包含不同领域专家（法律、营销、研发等）的系统来处理各类问题和任务。
4. **需要高度自定义和扩展的服务** ：

* 对于需要特定功能或定制化服务的应用场景，使用多个可扩展的AI助手和工具会非常有帮助。
5. **增强用户体验的应用程序** ：

* 如聊天机器人、虚拟助手等，利用多个AI助手能够提供更有深度和个性化的回答和服务。


###### 代码示例

以下是如何使用 Experts.js 框架创建一个简单的助手并发送问题的示例：


const thread = Thread.create();
const assistant = await MyAssistant.create();
const output = await assistant.ask("Say hello.", thread.id);
console.log(output) // Hello


更具体的例子展示了如何创建一个包含产品目录工具的公司助手：


class MainAssistant extends Assistant {
constructor() {
const name = "Company Assistant";
const description = "...";
const instructions = "...";
super(name, description, instructions);
this.addAssistantTool(ProductsTools);
}
}


通过使用这些工具和助手，您可以组建一个复杂、功能强大的多 AI 代理系统，以满足各种应用场景的需求。