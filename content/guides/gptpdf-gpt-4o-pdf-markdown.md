---
title: "gptpdf"
date: "2024-01-01 00:00:00+08:00"
description: gptpdf gptpdf  GPT-4o
slug: gptpdf-gpt-4o-pdf-markdown
tags:
- pdf
- ap
- gptpdf
- paths
- key
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## gptpdf

**gptpdf** 是一个利用具备视觉能力的大规模语言模型（如 GPT-4o）将 PDF 文件解析为 Markdown 格式的工具，旨在准确地转换排版、数学公式、表格、图片和图表等非文本区域。整个工具的代码量仅有293行，但是功能十分强大，并且转换成本相对较低，每页平均花费约 $0.013。

**使用场景** ：

1. **学术研究** ：将学术论文或技术文档的 PDF 文件轻松转换为 Markdown 格式，便于编辑和分享。
2. **数据处理** ：在对文档进行文本分析或数据挖掘前，将复杂的 PDF 文档转换为纯文本格式。
3. **内容管理** ：将 PDF 文件中的有价值内容提取并重新组织，以便用于博客文章、技术文档或其他出版物。
4. **协作编辑** ：方便团队协作，对文档进行版本控制和实时编辑。


**使用步骤** ：

1. **安装** ：

pip install gptpdf


2. **代码示例** ：

from gptpdf import parse_pdf
api_key = 'Your OpenAI API Key'
content, image_paths = parse_pdf(pdf_path, api_key=api_key)
print(content)


3. **API 调用说明** ：

parse_pdf(pdf_path, output_dir='./', api_key=None, base_url=None, model='gpt-4o', verbose=False)


* **pdf_path** : PDF 文件路径
* **output_dir** : 输出目录，用于存储所有图片和生成的 Markdown 文件
* **api_key** : OpenAI API 密钥 （可选项，若未提供则使用环境变量）
* **base_url** : OpenAI 基础 URL（可选项，若未提供则使用环境变量）
* **model** : 使用的视觉大规模语言模型，默认是 ‘gpt-4o’，也可以选择其他模型如 qwen-vl-max
* **verbose** : 是否开启详细模式


通过这些步骤，用户可以快速方便地利用 gptpdf 实现 PDF 文件向 Markdown 格式的转换。