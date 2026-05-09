---
title: "OpenBB LLM Agents OpenBB LLM Agents OpenBB LLM Agents"
date: "2024-01-01 00:00:00+08:00"
description: OpenBB LLM Agents OpenBB LLM Agents LLM
slug: openbb-llm-agents
tags:
- tsla
- agents
- python
- pat
- install
draft: false
related_tools:
- openai agents sdk
- cloudflare agents
- agents tools
- news agents
- control plane for your ai agents
---

## OpenBB LLM Agents

OpenBB LLM Agents是一个正在开发中的项目，利用大语言模型（LLM）和OpenBB平台创建能自主进行金融研究的金融分析机器人。这些代理通过函数调用与OpenBB平台交互，使用最新数据回答问题。以下是OpenBB LLM Agents的概述和使用场景：

##### 概述

1. **项目目标** ：创建能够自主进行金融研究和回答问题的金融分析代理。
2. **功能实现** ：代理通过调用OpenBB平台的功能来获取和处理金融数据。
3. **支持语言** ：目前支持Python 3.10及以上版本。


##### 安装与设置

1. **安装** ：

pip install openbb-agents --upgrade


2. **设置步骤** ：
1. 获取OpenAI API密钥并设置为环境变量。
2. 配置OpenBB平台数据提供者凭证，可以是本地配置文件或者OpenBB Hub的个人访问令牌（PAT）。


##### 使用场景

1. **获取金融数据** ：代理可以自主获取最新的市场数据，比如“TSLA的当前市值是多少？”。
2. **深入分析** ：能够进行复杂的金融分析，如对某公司进行基本面分析或者比较多家公司市值。
3. **连续查询** ：能够处理需要多个步骤回答的问题，如“谁是TSLA的同行？这些公司的市值是多少？按市值降序排序”。


##### 示例

* 获取TSLA的当前市值：

from openbb_agents.agent import openbb_agent
result = openbb_agent("What is the current market cap of TSLA?")
print(result)


* 使用存储在OpenBB Hub的凭证：

openbb_agent("What is the stock price of AAPL?", openbb_pat="<openbb-hub-pat>")


* 进行基本面财务分析：

openbb_agent("Perform a fundamentals financial analysis of AMZN using the most recently available data. What do you find that's interesting?")


* 处理有时间依赖的问题：

openbb_agent("Who are TSLA's peers? What is their respective market cap? Return the results in _descending_ order of market cap.")


* 异步查询：

from openbb_agents.agent import aopenbb_agent
await aopenbb_agent("What is the current market cap of TSLA?")


OpenBB LLM Agents通过结合大语言模型和强大的数据平台，为金融分析提供了一个自动化、高效且智能的解决方案，在金融研究、投资决策支持等场景具有广泛的应用前景。