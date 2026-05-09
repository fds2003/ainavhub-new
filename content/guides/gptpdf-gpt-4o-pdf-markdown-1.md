---
title: "gptpdf gptpdf GPTPDF"
date: "2024-01-01 00:00:00+08:00"
description: gptpdf GPTPDF  GPT-4o
slug: gptpdf-gpt-4o-pdf-markdown-1
tags:
- pdf
- gptpdf
- key
- to
- gpt-4o
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## gptpdf

GPTPDF 是一个使用视觉大模型（如 GPT-4o）将 PDF 文件解析成 Markdown 文件的工具。它主要用于高效地解析 PDF 文档中的排版、数学公式、表格、图片、图表等内容，并将这些内容转换为结构化的 Markdown 格式。其显著特点是简单且成本低，每页平均费用为 $0.013。

## 使用场景

1. **学术研究** ：将包含复杂数学公式和图表的学术论文转换为 Markdown 格式，方便进一步编辑或在其他平台发布。
2. **文档归档** ：将各类文档（例如合同、白皮书等）转换成易于管理和搜索的 Markdown 格式。
3. **数据提取** ：从商业报告、调查问卷等 PDF 文档中提取数据，进行后续分析或展示。
4. **内容创作** ：对于内容创作者，可以快速将 PDF 书籍或文章转换成可编辑的 Markdown 内容，用于博客、网站等。


## 安装与使用

要安装 gptpdf，使用以下命令：


pip install gptpdf


使用方法如下：


from gptpdf import parse_pdf

api_key = 'Your OpenAI API Key'
pdf_path = 'path/to/your/pdf/file'
content, image_paths = parse_pdf(pdf_path, api_key=api_key)
print(content)


在上述代码中，`parse_pdf` 函数用于解析 PDF 文件并返回 Markdown 内容及所有图片路径。用户需要提供 OpenAI API Key 以访问大模型解析能力。

## API 函数详解

**parse_pdf**(pdf_path, output_dir=’./’, api_key=None, base_url=None, model=‘gpt-4o’, verbose=False)

* **pdf_path** : PDF 文件路径
* **output_dir** : 输出目录，用于存储所有图片和 Markdown 文件
* **api_key** : OpenAI API Key（可选）。如果没有提供，将使用环境变量 `OPENAI_API_KEY`。
* **base_url** : OpenAI 基础 URL（可选）。如果没有提供，将使用环境变量 `OPENAI_BASE_URL`。
* **model** : OpenAI 视觉模型，默认是 ‘gpt-4o’。也可以使用 qwen-vl-max 等其他模型。
* **verbose** : 是否启用详细模式。
* **gpt_worker** : GPT 解析工作进程数，默认是 1。如果机器性能较好，可以适当增加以提高解析速度。


进一步的用法示例可以参考项目中的 [test/test.py](<test/test.py>)。