---
title: "LangGraph Multi-Agent Supervisor LangGraph Multi-Agent Supervisor LangGraph"
date: "2024-01-01 00:00:00+08:00"
description: "LangGraph Multi-Agent Supervisor LangGraph Multi-Agent Supervisor Python "
slug: "langgraph-multi-agent-supervisor-python"
draft: false
---

## LangGraph Multi-Agent Supervisor

**LangGraph Multi-Agent Supervisor** 是一个用于创建层次多代理系统的 Python 库，基于 [LangGraph](<https://github.com/langchain-ai/langgraph>) 框架。该库允许用户创建一个中央**监督者** 代理，该代理协调多个专业化代理的工作，控制通信流和任务委派，并根据当前上下文和任务需求决定调用哪个代理。

##### 主要功能

* 🤖 **创建监督者代理** ，来调度多个专业化代理。
* 🛠️ **基于工具的代理交接机制** ，实现代理间的沟通。
* 📝 **灵活的消息历史管理** ，用于控制对话。


这个库支持 [流媒体](<https://langchain-ai.github.io/langgraph/how-tos/#streaming>)、[短期和长期记忆](<https://langchain-ai.github.io/langgraph/concepts/memory/>) 和 [人机协作](<https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/>) 等功能。

##### 使用场景

1. **自动化客服** ：可以设计一个多代理系统，包含一个监督者代理和多个专门处理不同问题类型的客户服务代理，例如技术支持、财务咨询等，监督者可以根据客户提出的问题选择合适的代理来提供帮助。

2. **任务分配与项目管理** ：在项目管理中，可以利用监督者代理协调多个团队（如研发、设计、市场等），根据项目需求自动将任务分配给最适合的团队。

3. **知识检索与处理** ：监督者代理可以管理多个研究代理，处理来自用户的查询请求，将合适的请求分派给拥有相关知识或工具的研究代理，处理复杂的知识检索与分析任务。

4. **教育与培训系统** ：在教育科技应用中，监督者代理可以根据学生的查询或问题选择合适的教学代理，以提供个性化的学习资源或答疑。

5. **数据分析与报告生成** ：在数据分析场景中，监督者可以管理多个分析工具代理，根据用户的需求选用数据处理工具进行分析和报告输出。


通过上述场景可以看出，LangGraph Multi-Agent Supervisor 在实现复杂任务和多代理协调工作方面具备灵活性和强大能力，非常适合需要多个专家代理之间协作的应用环境。
