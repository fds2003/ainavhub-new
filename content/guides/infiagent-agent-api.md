---
title: "InfiAgent"
date: "2024-01-01 00:00:00+08:00"
description: InfiAgent InfiAgent agent)
slug: infiagent-agent-api
tags:
- gpu
- streamlit
- infiagent
- python
- agent
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- chat with the streamlit docs
- agent
- python a2a
---

## InfiAgent

InfiAgent是一个开源框架，旨在帮助开发者从零开始搭建自己的代理(agent)，支持代码执行、API调用、批量推理和沙箱管理等功能。这意味着你可以在这个框架的帮助下，轻松构建起属于自己的代理，例如基于特定API的代理服务或是本地模型推理的智能代理。

##### InfiAgent的核心功能包括：

* **API调用** ：开发者只需要提供API密钥（如GPT-3.5, GPT-4, Claud等的API密钥），便可通过InfiAgent调用相应的模型进行操作，无需复杂的配置。

* **本地模型推理** ：对于需要在本地运行模型的开发者，InfiAgent提供了在Nvidia GPU上进行本地推理的功能，依托于vLLM框架以优化本地机器上的性能表现。

* **Python代码沙箱** ：InfiAgent支持在一个隔离的Docker环境中执行Python代码，从而避免大量的安全问题，同时也支持更简单的subprocess方法运行环境，以满足不同开发者的需求。

* **基于Streamlit的前端界面** ：以Streamlit为基础提供了一套前端界面，使得与代理的交互变得更为直观与简单。


##### 使用场景：

InfiAgent可以在以下几种场合下得到应用：

* **数据处理与分析** ：通过构建基于特定LLM接口的数据分析代理，利用API调用或本地模型推理来处理和分析数据。

* **自动化脚本执行** ：利用代码沙箱功能，可以安全地运行由LLM生成的Python代码，实现自动化任务的执行，如自动化测试、数据抓取等。

* **教育与研究** ：对于教育和研究人员，可以利用InfiAgent建立一个沙盒环境，用于教学或研究项目，以探索不同模型的潜能和应用前景。

* **原型开发和测试** ：快速搭建和测试新的模型和算法原型，通过Streamlit前端界面和Docker沙箱环境，简化开发和测试流程。


InfiAgent是一个功能强大的代理(agents)构建框架，它适合希望探索和利用最新人工智能技术的开发者、研究人员或教育工作者，尤其是对于那些希望通过自己编写或调用现成模型来实现自动化处理、数据分析、交互演示等任务的用户来说，InfiAgent提供了一系列便捷的工具和接口。