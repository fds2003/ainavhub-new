---
title: "Meta Expert Meta Expert Meta Expert"
date: "2024-01-01 00:00:00+08:00"
description: Meta Expert Meta Expert AI
slug: meta-expert-agent-jar3d-promo
tags:
- opena
- agent
- serper
- meta
- expert
draft: false
related_tools:
- openai agents sdk
- claude code but with openai models
- openai.fm
- openai codex cli
- openalpha_evolve
---

## Meta Expert

Meta Expert是一个用于多功能AI代理项目，它可以运行专有模型或完全开源的模型。Meta Expert包括两个代理：基础的Meta Agent和一个更复杂、更多功能的代理Jar3d。

##### 核心概念

Meta Expert项目利用了三个核心概念：

1. **Meta Promoting** ：更多信息参见Meta Promoting相关论文和概要介绍。
2. **推理链** : Jar3d使用了一种推理链的方法。
3. **检索增强生成（RAG）** ：Jar3d采用了RAG策略，而基础Meta Agent未使用。


##### 使用场景

* **基础Meta Agent** ：作为项目的早期迭代，主要用于展示Meta Promoting的概念。其通过抓取整个网页，并将内容输入到Meta Agent的上下文中，完成任务或给出最终答案。
* **Jar3d** ：一个更高级的代理，适用于执行长期研究任务。具体使用场景包括撰写新闻通讯、文献综述以及节假日助手等。Jar3d能运行在本地，需要设置文档解析后端服务器和应用。


##### 环境和库的设置

1. 安装Anaconda，创建并激活虚拟环境。
2. 克隆代码仓库并安装所需依赖。
3. 配置API密钥，包括Serper、OpenAI、Gemini、Claude和Groq等。


##### 运行基础Meta Agent

1. 在命令行中执行以下命令启动基础Meta Agent并输入查询：

python -m agents.meta_agent


##### 运行Jar3d

1. 配置nlm-ingestor服务器，用于文档解析。
2. 运行应用：

python -m agents.jar3d


3. Jar3d处于积极开发中，未来将增强反馈机制、长时间记忆、前端集成以及更智能的文档处理和更快的RAG。


##### 其他注意事项

* **与Ollama合作** ：下载Ollama及其模型来进行更详细的工作。
* **未来开发路线图** ：包括反馈功能、长期记忆、前端开发和更快的RAG平台集成。


总的来说，Meta Expert是一个功能强大的AI代理项目，适用于从基本任务自动化到复杂的长期研究任务。