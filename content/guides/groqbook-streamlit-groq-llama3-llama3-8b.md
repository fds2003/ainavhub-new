---
title: "Groqbook"
date: "2024-01-01 00:00:00+08:00"
description: 'Groqbook Groqbook  Streamlit '
slug: groqbook-streamlit-groq-llama3-llama3-8b
tags:
- llama3
- llama3-8b
- streamlit
- ya...
- key
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- chat with the streamlit docs
---

## Groqbook

Groqbook 是一个基于 Streamlit 的应用，利用 Groq 和 Llama3 模型，能够从一句提示中生成整本书。针对非小说类书籍，Groqbook 能在几秒内完成每一章的生成。该应用通过 Llama3-8b 和 Llama3-70b 两种模型的协作，使用较大模型生成书籍结构，较小模型生成内容。目前，模型仅使用章节标题的上下文生成内容，未来将扩展至整本书的上下文，以便生成高质量的小说类书籍。

##### 主要功能

* 使用 Llama3-70b 和 Llama3-8b 模型来平衡速度与质量。
* 采用 Markdown 样式生成包含表格和代码的美观书籍。
* 允许用户下载整个书籍内容的文本文件。


##### 使用场景

1. 非小说类书籍的自动生成，如技术手册、教程等。
2. 书籍快速原型设计，为作者提供写作灵感。
3. 教育资源的生成和分享。


##### 使用方法

可以通过 [groqbook.streamlit.app](<https://groqbook.streamlit.app>) 在线使用，也可以按照以下步骤在本地运行：

1. 设置 Groq API 密钥：

export $GROQ_API_KEY = gsk_yA...


2. 设置虚拟环境并安装依赖：

python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt


3. 运行 Streamlit 应用：

python3 -m streamlit run main.py


##### 技术细节

* Streamlit
* Groq Cloud 上的 Llama3 模型


##### 限制

Groqbook 生成的信息可能不准确或包含占位符内容，建议仅用于娱乐目的。

欢迎通过 PR（Pull Request）进行改进！