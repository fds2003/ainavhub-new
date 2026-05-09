---
title: "tinyllm"
date: "2024-01-01 00:00:00+08:00"
description: 'tinyllm tinyllm，、LLM（）。，LLM。 ： (Function)(FunctionStream): ...'
slug: tinyllm-llm-functio
tags:
- toolstore
- function
- functionstream
- litellm
- python
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## tinyllm

tinyllm是一个轻量级框架，专为在规模上开发、调试和监控LLM（大型语言模型）和代理驱动的应用程序而设计。它旨在保持代码尽可能简单易读，同时为用户提供在生产环境中创建复杂代理或LLM工作流的能力。

它的**核心功能** 包括：

* **函数(Function)及其流式等价物(FunctionStream)** : 这是tinyllm的核心类，用于标准化和控制LLM、ToolStore以及任何相关调用，以便在流模式下及其他情况下进行可扩展的生产使用。
* **LiteLLM集成** ：提供20多个模型提供者（如OpenAI, Huggingface等）。
* **Langfuse集成** ：监控跟踪和调试LLMs、代理、工具、RAG管道等，并以结构化运行树的形式展现。
* **代理** ：一个具备记忆、工具箱和示例管理器的LLM。
* **ToolStore和工具箱** ：让你的代理运行python函数。
* **示例管理器** ：使用示例选择器通过相似性搜索，实现常量示例和变量示例的管理。
* **记忆** ：对话历史记录。
* **检索增强生成（RAG）** ：搜索并生成答案的RAG工具。
* **评估** ：定义评估器以实时评估和记录函数输出的质量。


在**生产部署** 方面，tinyllm提供了：

* **分层验证** ：在函数生命周期内的3个验证环节：输入验证、输出验证和输出处理验证。
* **IO标准化** ：保持不同函数实现间一致的响应模式和失败处理方式。
* **可观测性** ：通过Langfuse进行整合。
* **日志记录** ：为了调试和审计目的记录详细日志。
* **有限状态机设计** ：通过定义的状态管理函数的生命周期，确保受控和可预测的执行。


在何种情况下会使用tinyllm：

* 当需要在规模上开发、调试和监控基于LLM和代理的应用时。
* 当寻求简化LLM和代理相关应用开发和维护工作时。
* 当需要在生产环境中部署LLM应用并实现功能链条简化管理时。
* 当需要跟踪、验证和评估LLM应用的输入输出时。
* 当希望将现有的库代理/链（如langchain/llama-index等）无缝导入为tinyllm函数时。


通过上述介绍，tinyllm提供了一个高度结构化、易维护和可伸缩的方式来处理LLM和代理驱动的应用开发，适用于需要高效可靠地部署这类应用的场景。