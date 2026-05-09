---
title: "AgentOps"
date: "2024-01-01 00:00:00+08:00"
description: 'AgentOps AgentOps  AgentOps '
slug: agentops-agents-llm
tags:
- agentops
- langchain
- llm
- crewai
- agents
draft: false
related_tools:
- agent
- langchain-searxng
- langchain swift
- langchain
- rllm
---

## AgentOps

##### AgentOps 功能概述

AgentOps 是一个帮助开发者构建、评估和监控人工智能代理（AI agents）的工具集。它的主要功能包括：

* **回放分析和调试** ：提供逐步的代理执行图。
* **费用管理** ：追踪与大语言模型（LLM）基础模型提供商相关的费用。
* **代理基准测试** ：针对超过1000种评估方式测试你的代理。
* **合规和安全** ：检测常见的提示注入和数据外泄攻击。
* **框架集成** ：轻松集成像 CrewAI 和 LangChain 等框架。


##### 使用场景

你会在以下情况下使用AgentOps：

1. **代理开发阶段** ：从最初的原型开发到最终的生产部署，你都需要一套完善的工具来监控代理的表现。
2. **调试和回放分析** ：你需要了解代理在每一步的决策点，并希望可以回放这些步骤以找到问题所在。
3. **成本管理** ：需要追踪和管理因调用语言模型而产生的费用。
4. **安全防护** ：希望检测并防止潜在的安全威胁，如提示注入和数据泄露。
5. **基准测试** ：测试代理的性能，确保它在不同情境下都能正常工作。
6. **与现有框架集成** ：你已经在使用或计划使用像 CrewAI 和 LangChain 这样的框架，需要一个能与这些框架无缝集成的监控工具。


##### 使用方法

1. **安装软件包** ：首先，通过运行以下命令来安装 AgentOps 软件包：

pip install agentops


2. **初始化 AgentOps** ：在你的程序代码开头处初始化 AgentOps 客户端，并插入你的 API 密钥。

import agentops

# 程序开始部分 (比如 main.py, __init__.py)
agentops.init('<INSERT YOUR API KEY HERE>')


3. **记录特定功能（可选）** ：你可以通过装饰器方式记录特定的函数。

@agentops.record_function('sample function being recorded')
def sample_function(...):
...


4. **结束会话** ：在程序结束时调用结束会话的方法。

agentops.end_session('Success')


经过上述步骤，所有的会话数据都可以在 [AgentOps 仪表盘](<https://app.agentops.ai?ref=gh>) 上查看。详细的使用说明可以参考 [API 文档](<http://docs.agentops.ai>)。

##### 集成示例

###### CrewAI 集成

安装 CrewAI 并设置环境变量 `AGENTOPS_API_KEY` 后，你的 Crew 代理将自动在 AgentOps 仪表盘上进行监控。


pip install git+https://github.com/AgentOps-AI/crewAI.git@main


参考示例代码：


import os
from crewai import CrewAgent
import agentops

# 初始化 AgentOps
agentops.init(os.environ['AGENTOPS_API_KEY'])

# 创建一个 CrewAgent 实例
agent = CrewAgent(...)

# 当代理执行完毕时，结束会话
agentops.end_session('Success')


###### Langchain 集成

首先安装必要的依赖：


pip install agentops[langchain]


然后在你的代码中集成 AgentOps 和 Langchain 的处理器：


import os
from langchain.chat_models import ChatOpenAI
from langchain.agents import initialize_agent, AgentType
from agentops.langchain_callback_handler import LangchainCallbackHandler

AGENTOPS_API_KEY = os.environ['AGENTOPS_API_KEY']
handler = LangchainCallbackHandler(api_key=AGENTOPS_API_KEY, tags=['Langchain Example'])

llm = ChatOpenAI(openai_api_key=OPENAI_API_KEY,
callbacks=[handler],
model='gpt-3.5-turbo')

agent = initialize_agent(tools,
llm,
agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION,
verbose=True,
callbacks=[handler])


##### 总结

AgentOps 是一个全面的工具，旨在提升 AI 代理的开发和运营质量。它适用于多种开发和调试环境，提供从费用管理到安全防护的多种功能，并且能够与常用的 AI 框架进行无缝集成。通过上述步骤，你可以轻松地在开发流程中引入 AgentOps，提高代理的性能和安全性。