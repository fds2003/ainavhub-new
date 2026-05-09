---
title: "Pydfy"
date: "2024-01-01 00:00:00+08:00"
description: Pydfy Pydfy PDF ， PDF 。Pydfy PDF ， LaTeX、BI 、 PDF PDF 。 Pydfy ...
slug: pydfy-pdf-latex-bi
tags:
- pydfy
- pdf
- slo
- latest
- tailwindcss
draft: false
related_tools:
- pydfy
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
---

## Pydfy

Pydfy 是一个简化 PDF 报告生成的工具，它旨在让创建漂亮的 PDF 报告变得非常简单。Pydfy 解决了生成 PDF 报告过程中常见的一些问题，例如团队成员不熟悉 LaTeX、BI 工具的支持不足、网页通常不适合导出为 PDF 以及复杂的 PDF 生成器难以在短时间内输出结果等。

##### Pydfy 的使用场景

* **生成商业报告** ：例如销售报告、财务报表等，通过读取数据表格，并进行计算和图表展示，从而生成专业的 PDF 报告。
* **学术用途** ：可以将研究数据和分析结果生成 PDF 形式的报告，方便分享和传播。
* **企业内部汇报** ：自动生成公司内部各类数据分析报表，提升工作效率。
* **项目总结和展示** ：将项目数据和成果汇编成 PDF 报告进行展示和存档。
* **自定义模板报告** ：通过创建自定义模板和样式，可以生成具有公司或组织风格的专属报告。


##### 安装步骤

1. 确保 `tailwindcss` 安装在路径中（Linux 示例）：

curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
chmod +x tailwindcss-linux-x64
sudo mv tailwindcss-linux-x64 /usr/local/bin/tailwindcss


2. 确保安装了 Chromium：

apt-get update && apt-get install -y chromium-driver  # 使用 apt-get 示例
brew install --cask chromium                          # 使用 Homebrew 示例（适用于 macOS）


3. 使用 `pip` 安装 Pydfy：

pip install pydfy


4. 可选地安装额外依赖：

pip install "pydfy[pandas,matplotlib]"


##### 使用示例

以下是一个生成销售报告的简单示例：


import pydfy.models as pf
import pandas as pd

sales_df = pd.read_csv("sales.csv")
orders_last_week = sales_df[sales_df["week"] == 10]
avg_price = sales_df["price"].mean()

pdf = pf.PDF(
pf.Title(text="Sales Report"),
[pf.Number(orders_last_week, title="Orders last week"), pf.Number(avg_price, title="Average price")],
[pf.Table(sales_df, "Sales table"), sales_df.plot("hist")],
)
pdf.render()


##### 自定义组件和样式

用户可以创建自定义组件和 HTML 模板，也可以添加自定义 CSS，以满足不同的报告样式需求。

使用 Docker 进行开发时，可以通过以下命令创建和运行 Docker 容器：


docker build -t pydfy .
cd examples/iris
docker run -v $PWD:/pydfy pydfy > out.pdf


Pydfy 通过简洁的 API 和强大的可扩展性，让各种场景下的 PDF 报告生成变得高效和容易。