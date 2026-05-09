---
title: "SuperInsights"
date: "2024-01-01 00:00:00+08:00"
description: 'SuperInsights SuperInsights  SuperInsights '
slug: superinsights-llms-openai-api
tags:
- url
- mvc
- reader
- llm
- llms
draft: false
related_tools:
- readerlm-v2
- reader
- elevenlabs reader app
- rllm
- onefilellm
---

## SuperInsights

##### SuperInsights 简介

SuperInsights 是基于大型语言模型（LLMs）开发的工具，旨在从特定网页中提取和总结关键信息，即使你不会编写爬虫，也能轻松使用。它能自动抓取网页内容，并使用与OpenAI API兼容的模型进行分析、总结和翻译（如有需要）。

这个工具帮助用户快速获取行业情报信息，无论是追踪最新技术动态还是收集市场动向，SuperInsights 都能帮你实现。这项目能快速构建日常行业报告、市场情报系统、情感监控等应用场景。

##### 主要特点

1. **🌐 网页抓取** : 使用 JINA Reader 自动解析指定 URL 的内容，提供可靠、有效的网页抓取功能。
2. **💡 智能总结** : 利用大型语言模型生成简明清晰的内容摘要。
3. **📦 本地轻量级数据库支持** : 使用 SQLite 方便进行本地数据维护。
4. **🔗 丰富的 LLM 支持服务** : 支持 OpenAI 及其他与其 API 兼容的在线语言模型。
5. **📊 基础前端显示系统** : 提供一个简单的前端页面以 MVC 模式展示数据，而非直接访问数据库。


##### 使用场景

1. **行业报告生成** : 自动抓取和总结行业新闻，帮助你快速生成每日或每周的行业报告。
2. **市场情报系统** : 收集和分析市场动态信息，为决策提供支持。
3. **情感监控** : 通过分析新闻或社交媒体内容，监控公众情感和舆论。


##### 安装与配置

###### 先决条件

* Python 3.12.2 的本地开发环境。


###### 快速开始

1. 克隆代码库到本地：

git clone https://github.com/your-repository/SuperInsights.git


2. 安装依赖：

pip install -r requirements.txt


3. 配置 `config.json` 和 `config.py`:
* 在 `config.json` 中设置要追踪的信息源。例如 RSS URL。

"feeds": [
{
"url": "https://example.com/feed",
"num_entries": "all",
"update_frequency": 3600
}
]


* 在 `config.py` 中配置 API Key 等信息：

class Config:
RSS_FEEDS = [ ... ]  # 从 config.json 读取配置信息
SQLALCHEMY_DATABASE_URI = 'sqlite:///rss.db'
JINA_API_KEY = ''  # JINA Reader 的 API Key
OPENAI_API_KEY = ''  # LLM 提供商的 API Key
FETCH_INTERVAL = 3600  # 默认抓取间隔：1小时
OPENAI_URL = ''  # LLM 提供商的 URL
OPENAI_MODEL = ''  # LLM 提供商的模型名称


4. 运行示例脚本：

python main.py


##### 使用指南

运行程序后，可以通过几个特定的端点执行任务和访问数据：

* `/update`: 更新 RSS Feed URLs 并解析每个 URL 的网页内容，存储为原始数据到数据库中。
* `/generate_summaries`: 将所有抓取的原始数据提交给 LLM 进行处理。
* `/api/summarydata`: 获取所有处理后的数据。
* `/index`: 显示所有处理数据的简单前端页面。


##### 未来更新

* 自动化程序执行，配置抓取和处理的时间间隔。
* 增强前端页面功能，可能迁移到 React 或 Vue。
* 优化抓取和 LLM 处理的速度。


欢迎专业开发者加入和贡献！

##### 联系作者

邮箱: [sleepwater911@gmail.com](<mailto:sleepwater911@gmail.com>) 微信: 搜索微信号 “mapxiaotu”

如果觉得这个项目对你有帮助，请考虑给我们一个 Star ⭐️，这是对我们最大的鼓励！