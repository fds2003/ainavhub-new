---
title: "CAMEL"
date: "2024-01-01 00:00:00+08:00"
description: 'CAMEL CAMEL Communicative Agents for '
slug: camel-communicative-agents-mind-exploration
tags:
- communicative
- role-p
- model
- python
- chatgpt
draft: false
related_tools:
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
- granite code models
---

## CAMEL

CAMEL（Communicative Agents for “Mind” Exploration of Large Language Model Society）是一个旨在研究自动化沟通代理的开源框架，借助大规模语言模型（LLM），探索代理之间的自主合作及其“认知”过程。CAMEL的核心理念是通过角色扮演（Role-Playing）和初始引导（Inception Prompting），指导聊天代理完成任务，同时保持与人类意图的一致性。

##### 使用场景

1. **研究多代理系统的合作行为和能力** ：

* CAMEL框架可以生成对话数据，研究聊天代理的行为和能力，提供一个可扩展的方法来研究多代理系统的合作动态。
2. **自动化任务分配与执行** ：

* 如在股票交易机器人开发过程中，通过两个ChatGPT代理分别扮演Python程序员和股票交易员协同工作，自动化完成复杂的任务。
3. **学术研究与数据集生成** ：

* 为研究人员提供一个开源的平台以支持在自主沟通代理上的学术研究，并生成不同领域的数据集（如AI社会、编码、数学、物理、化学和生物学）。


##### 主要特点

1. **角色扮演框架** ：

* 通过在初始引导中设定明确的角色和任务，模拟现实中的人机交互，以实现更高效的任务管理和执行。
2. **开源且易于扩展** ：

* 提供详细的安装和使用指南，支持从PyPI或源码安装，并通过Hugging Face等开源模型运行。
3. **支持多种代理和任务** ：

* 包括不同类型的代理、任务、初始引导和模型，能够在模拟环境中测试和研究代理之间的交互。
4. **数据集和可视化工具** ：

* 提供多个数据集以及任务和指令的可视化工具，便于研究和分析。
5. **与开源模型集成** ：

* 支持在外部服务器运行的LLM推理服务，具体实现可与FastChat等兼容。


##### 安装和运行

* 使用PyPI安装：

pip install camel-ai


* 源码安装（推荐使用poetry）：

git clone https://github.com/camel-ai/camel.git
cd camel
poetry shell
poetry install


* 设置OpenAI API Key并运行脚本示例：

export OPENAI_API_KEY=<your OpenAI API key>
python examples/ai_society/role_playing.py


##### 数据集

* 提供多个领域的数据集（AI社会、编程、数学、物理、化学和生物学），可以在Hugging Face上获取。


##### 社区和贡献

* CAMEL是开源的，社区成员可以通过[Slack](<https://join.slack.com/t/camel-ai/shared_invite/zt-2g7xc41gy-_7rcrNNAArIP6sLQqldkqQ>)、[Discord](<https://discord.gg/CNcNpquyDc>)和[WeChat](<https://ghli.org/camel/wechat.png>)等加入讨论，并提供贡献。


这种研究和工具将促进自动化沟通代理技术的发展，推动AI在多个领域的应用和创新。