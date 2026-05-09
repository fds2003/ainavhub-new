---
title: "AgentScript framework AgentScript framework AgentScript Framework"
date: "2024-01-01 00:00:00+08:00"
description: AgentScript framework AgentScript Framework AgentScript
slug: agentscript-framework-re-act-agents-llm
tags:
- ast
- agentscript
- llm
- javascript
- re-act
draft: false
related_tools:
- recammaster
- fastvlm
- ai podcast transcriber
- fast rag
- aimangastudio
---

## AgentScript framework

##### AgentScript Framework简介

AgentScript是一个独特的开源框架，旨在构建再行动的人工智能代理（Re-act AI agents）。该框架通过提示大型语言模型（LLM）生成JavaScript代码，并在专用的运行时环境中执行这些代码，实现了任务的更高效处理。

###### 工作流程

AgentScript的工作流程如下：

1. 定义一个包含工具的运行时环境（可以选择输入和输出变量）。
2. 定义要执行的任务（即提示）。
3. Agentscript提示LLM生成相应的JavaScript代码。
4. 生成的代码被解析为抽象语法树（AST），在专门的、安全的运行时中执行，而不是直接在Node.js中运行。
5. 执行过程可以被暂停、序列化存储到数据库中，并可以在之后恢复，便于在需要人类干预时处理相关操作。


##### 使用场景

AgentScript框架适用于多种场景，主要包括：

* **复杂任务自动化** ：当任务流程不明确或动态时，AgentScript可以通过生成代码来简化工作。例如，生成和分析任务状态的更新。
* **人机协作** ：在人类需要参与决策或提供输入的任务中，能够灵活暂停执行并等待人类输入。
* **灵活的工具和组件集成** ：可以将各种工具与LLM结合，来实现对不同行为的动态响应与处理。
* **可扩展的功能开发** ：支持更多JavaScript特性，通过添加新功能和特性的插件式架构，可以帮助开发者扩展AgentScript的能力。


##### 总结

总之，AgentScript框架通过将LLM的能力与代码生成结合，为复杂且动态的任务提供了灵活有效的解决方案，适应了当前智能代理需求多样化的趋势。