---
title: "Promptulate"
date: "2024-01-01 00:00:00+08:00"
description: 'Promptulate Promptulate  Cogit Lab '
slug: promptulate-cogit-lab-agent-pythonic
tags:
- codeagent
- langchain
- promptulate
- agent
- pythonic
draft: false
related_tools:
- agent
- langchain-searxng
- langchain swift
- langchain
- oliva multi-agent assistant
---

## Promptulate

**Promptulate** 是一个由 **Cogit Lab** 打造的 AI Agent 应用开发框架，旨在通过 Pythonic 编程范式，为开发者提供一个极度简洁高效的方式来构建 Agent 应用。Promptulate 的核心理念是借鉴和整合开源社区的智慧，融合多种开发框架的亮点，降低入门门槛，并统一开发者的共识。利用 Promptulate，你可以使用简洁的代码来操作如 LLM、Agent、Tool、RAG 等组件，大多数任务都能通过几行代码轻松完成。

##### 主要特性

* **Pythonic 代码风格** ：提供符合 Python 开发者习惯的 SDK 调用方式，仅用一个 `pne.chat` 函数即可封装所有核心功能。
* **模型兼容性** ：支持几乎所有市场上的大模型，并允许根据具体需求进行定制。
* **多样化 Agent** ：提供 WebAgent、ToolAgent、CodeAgent 等多种类型的 Agent，具备规划、推理和行动能力，能处理复杂问题。
* **低成本集成** ：简单整合 LangChain 等框架的工具，显著降低集成成本。
* **函数即工具** ：可以直接将任何 Python 函数转换为 Agent 可用的工具，简化工具创建和使用过程。
* **生命周期和挂钩** ：提供丰富的挂钩和完整的生命周期管理，允许在 Agent、工具和 LLM 的多个阶段插入自定义代码。
* **终端集成** ：轻松集成应用终端，内置客户端支持，为 prompts 提供快速调试能力。
* **Prompt 缓存** ：提供 LLM Prompts 缓存机制，以减少重复劳动，提高开发效率。
* **强大的 OpenAI 包装器** ：无需使用 OpenAI SDK，只需使用 `pne.chat()` 函数，简化开发。


##### 使用场景

1. **聊天机器人和客户支持** ：利用 `pne.chat` 可以轻松创建类似于 OpenAI 的聊天机器人，支持复杂对话和情感检测。

2. **多模态应用** ：支持处理文本、图像等多模态数据，适用于多模态问答和描述生成。

3. **自动化任务和工具集成** ：通过将 Python 函数转换为工具和 Agent 的功能，适用于自动化工作流和任务调度的开发。

4. **数据分析与报告生成** ：利用模型兼容性和强大的输出格式功能，可以用于生成结构化数据报告和分析结果。

5. **复杂问题求解** ：通过 Agent 的规划和推理能力，应对复杂的研究问题和任务管理。


##### 示例

创建一个简单的聊天机器人：


import promptulate as pne

messages = [
{"role": "system", "content": "你是一个有帮助的助手。"},
{"role": "user", "content": "你是谁？"}
]
response: str = pne.chat(messages=messages, model="gpt-4-turbo")
print(response)


利用 Tavily 搜索引擎和 LangChain 工具解决复杂问题：


from langchain_community.tools.tavily_search import TavilySearchResults
import promptulate as pne

os.environ["TAVILY_API_KEY"] = "your_tavily_api_key"
os.environ["OPENAI_API_KEY"] = "your_openai_api_key"

tools = [TavilySearchResults(max_results=5)]
pne.chat("什么是2024澳大利亚网球公开赛的获胜者的家乡？", model="gpt-4-1106-preview", enable_plan=True)


通过上述示例代码，可以快速体验 Promptulate 的强大功能和灵活性，如需更多信息或示例，请参考 [官方文档](<https://undertone0809.github.io/promptulate/#/>) 和 [PyPI 仓库](<https://pypi.org/project/promptulate/>)。