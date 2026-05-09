---
title: "Agent Tools Agent Tools Agent Tools"
date: "2024-01-01 00:00:00+08:00"
description: Agent Tools Agent Tools Python
slug: agent-tools-python-api-deepseek
tags:
- const
- thought
- cot
- execute
- chain
draft: false
related_tools:
- graph-constrained reasoning
- skythought
- picotron
- thinkchain
- langchain-searxng
---

## Agent Tools

Agent Tools是一个Python框架，旨在构建能够与多种系统和API交互的AI代理工具，其核心优势在于利用Deepseek Reasoner模型，通过提示工程实现工具控制，并在执行动作前提供清晰的思维链（Chain of Thought）推理。该框架通过`DeepseekToolWrapper`自动化工具兼容性，负责将工具模式转换为Deepseek所需格式、管理CoT推理、解析工具调用及处理错误。开发者需要遵循特定的工具输出格式（字典类型，包含状态和消息）和严格的输入模式定义（清晰描述、显式参数类型、必填参数），并实现基础的`Tool`接口来注册自定义工具。在使用中，通过包装器的`execute`方法传入自然语言指令，即可获取包含Deepseek推理、具体工具调用详情和工具执行结果的全面响应。项目未来计划支持动态网络搜索、数据聚合，允许集成更多LLM，并致力于实现完全自主、具备持久记忆和目标追求能力的LLM，甚至在运行时自我构建和注册工具。