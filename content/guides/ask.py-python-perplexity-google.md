---
title: "ask.py"
date: "2024-01-01 00:00:00+08:00"
description: 'ask.py ask.py  ask.py '
slug: ask.py-python-perplexity-google
tags:
- perplexity
- python
- llm
- google
- ask.py
draft: false
related_tools:
- perplexity deep research
- perplexity pages
- nanoperplexityai
- python a2a
- claude code sdk for python
---

## ask.py

##### ask.py 简介

`ask.py` 是一个简单的 Python 程序，用于实现类似于 AI 搜索引擎的搜索-提取-总结流程，类似于 Perplexity 等工具。其主要目标是展示 AI 搜索引擎的基本概念，而不追求性能或可扩展性。

###### 搜索-提取-总结流程

当用户输入查询时，该程序会：

1. 在 Google 上搜索前 10 个网页。
2. 爬取并提取网页的文本内容。
3. 将文本内容分块并保存到向量数据库中。
4. 根据查询进行向量搜索，找到前 10 个匹配的文本块。
5. 使用这前 10 个文本块作为上下文，向大型语言模型（LLM）提问以生成答案。
6. 输出答案并附上参考文献。


虽然这个流程是一个简化版本，但它为理解 AI 搜索引擎的基本概念提供了良好的起点。该程序的一个优点是可以自定义搜索功能和输出格式，例如，只检索最新信息、搜索指定网站、使用特定语言回答等。

##### 使用场景

`ask.py` 可以用于多种场景，包括但不限于：

* 学术研究：快速获取特定主题的最新研究成果和相关文献。
* 内容创作：为文章或报告生成相关的内容参考。
* 知识问答：回答用户的具体问题，将搜索引擎与 LLM 结合使用，以提供精准的信息。
* 数据分析：在特定日期范围内提取数据，适用于时效性强的信息需求。
* 企业应用：根据公司特定数据定制化问答系统。


##### 快速开始

用户需要设置 Google 搜索和 OpenAI API 的密钥，并运行以下命令来执行程序：


# 安装所需库
pip install -r requirements.txt

# 设置 API 密钥
export SEARCH_API_KEY="你的-google-search-api-key"
export SEARCH_PROJECT_KEY="你的-google-cx-key"
export LLM_API_KEY="你的-openai-api-key"

# 运行程序
python ask.py -q "什么是 LLM 代理？"


此外，可以使用命令行选项自定义搜索参数，如日期限制和目标网站等。

总之，`ask.py` 提供了一个简明易懂的框架，帮助用户了解和体验 AI 查询和回答的功能。