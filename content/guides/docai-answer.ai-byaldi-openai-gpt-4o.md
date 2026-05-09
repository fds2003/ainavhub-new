---
title: "DocAI"
date: "2024-01-01 00:00:00+08:00"
description: 'DocAI DocAI  Answer.AI '
slug: docai-answer.ai-byaldi-openai-gpt-4o
tags:
- pdf
- build
- gpt-4o
- install
- application
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## DocAI

DocAI 是一个旨在从非结构化文档中提取结构化数据的工具，结合了 Answer.AI 的 Byaldi、OpenAI 的 gpt-4o 和 Langchain 的结构化输出功能。它可以帮助用户高效地处理和分析各种文档数据，支持从 PDF 等文件中提取特定信息并输出为结构化格式。

##### 安装指南

用户可以通过以下命令创建一个虚拟环境并安装所需的依赖：


pyenv virtualenv 3.10.6 docai
pyenv activate docai
poetry install


在使用之前，用户需要在环境变量中设置 OpenAI API 密钥和 HF Token：


export OPENAI_API_KEY=<your key>
export HF_TOKEN=<your token>


##### 使用场景

1. **文档索引构建** ：用户可以从指定文件夹中的 PDF 文档构建索引，便于后续提取。

python scripts/build_index.py --folder "pdfs/" --index_name "application"


2. **信息提取** ：利用构建的索引，用户可以提取特定的结构化信息，输出的数据格式化为易于理解的结构体。

python scripts/extract.py


##### 示例输出

在成功提取信息后，DocAI 可以输出例如损失历史和应用基本信息等内容，格式清晰，便于进一步分析和处理。例如：

**损失历史**


LossHistory(
losses=[
Loss(loss_date='2/20/21', loss_amount=7003.0, loss_description='Claimant was in his sleeper when his truck got hit by insured driver on the left', date_of_claim='4/19/21'),
...
]
)


**基本应用信息**


Application(
insured_name='Greentown Burgers LLC',
...
)


##### 总结

DocAI 是一个强大的工具，特别适合需要从大量非结构化文档中提取关键信息的行业，如保险、法律和财务等领域。其自动化程度高，可以有效提高工作效率。