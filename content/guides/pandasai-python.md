---
title: "PandasAI"
date: "2024-01-01 00:00:00+08:00"
description: 'PandasAI PandasAI  Python '
slug: pandasai-python
tags:
- git
- docker
- pandas-ai
- cd
- python
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## PandasAI

PandasAI 是一种 Python 平台，使用户可以用自然语言向自己的数据提问。这种平台不仅帮助非技术用户以更自然的方式与数据互动，还能为技术用户节省处理数据的时间和精力。

##### 主要特点

* **自然语言互动** ：允许用户用自然语言提问，而不是编写复杂的代码。
* **图表生成** ：可以根据用户的指示生成数据图表。
* **处理多个数据框（DataFrame）** ：支持处理多个数据源，并能跨数据源提问。
* **隐私保护** ：提供隐私增强选项，确保数据处理的安全性。


##### 使用场景

* **数据探索** ：例如，业务分析师可以通过简单的自然语言命令获取销售数据的摘要、趋势等。
* **报表生成** ：快速生成可视化的报表，方便管理层查看。
* **教育领域** ：帮助学生学习数据科学和数据分析，无需深入编程。
* **快速原型设计** ：在数据驱动的应用开发中，快速实现数据处理与展示。


##### 部署与使用

###### 部署平台

PandasAI 可通过 Docker 部署，以下是基本步骤：


git clone https://github.com/sinaptik-ai/pandas-ai/
cd pandas-ai
docker-compose build
docker-compose up


平台启动后，可在 `http://localhost:3000` 访问客户端。

###### 使用库

PandasAI 也可以作为一个 Python 库使用，通过 pip 或 poetry 安装：


pip install pandasai


或


poetry add pandasai


###### 开始使用

下面是一个简单的示例，展示了如何使用 PandasAI 来与数据框互动：


import os
import pandas as pd
from pandasai import Agent

# 示例 DataFrame
sales_by_country = pd.DataFrame({
"country": ["United States", "United Kingdom", "France", "Germany", "Italy", "Spain", "Canada", "Australia", "Japan", "China"],
"revenue": [5000, 3200, 2900, 4100, 2300, 2100, 2500, 2600, 4500, 7000]
})

# 设置 API Key
os.environ["PANDASAI_API_KEY"] = "YOUR_API_KEY"

agent = Agent(sales_by_country)
response = agent.chat('Which are the top 5 countries by sales?')
print(response)


输出将会是：


China, United States, Japan, Germany, Australia


更多用法和示例可以参考[官方文档](<https://pandas-ai.readthedocs.io/en/latest/>)和[示例目录](<examples>)。

##### 贡献与社区

PandasAI 非常欢迎社区贡献。如果有兴趣参与开发或提出问题，可以访问其 [GitHub 页面](<https://github.com/gventuri/pandas-ai>) 和 [Discord 社区](<https://discord.gg/kF7FqH2FwS>)。