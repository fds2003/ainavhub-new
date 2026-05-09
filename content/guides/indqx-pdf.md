---
title: "Indqx PDF Indqx PDF Indqx PDF"
date: "2024-01-01 00:00:00+08:00"
description: 'Indqx PDF Indqx PDF  PDF '
slug: indqx-pdf
tags:
- pdf
- indqx
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Indqx PDF

Indqx PDF 翻訳是一种特别为学术论文设计的 PDF 翻译工具，其主要功能是能够在不破坏 PDF 格式的情况下，对文档进行翻译。下面是这个工具的主要特点和使用情境的详细总结：

##### Indqx PDF 翻译的主要功能

1. **自动识别正文** ：

* 这个功能会自动识别并翻译文档中的主要内容，比如正文部分，而忽略数式、标题等不需要翻译的部分。
* 通过分析文本块的宽度、字数和字体大小来进行识别。
2. **合并翻译块** ：

* 如果在检测到的文本块中没有结束符号（如句号、冒号等），工具会将多个文本块合并成一个进行翻译。这样可以避免翻译文本在块与块之间或页与页之间断开的情况。
3. **图表说明的分割翻译** ：

* 工具会自动识别图表的说明文本，并将其与正文分开进行翻译。


##### 使用Indqx PDF翻译的情景

* **学术研究** ：当需要翻译外文论文时，这个工具可以确保格式不变，使得译文能够直接用于引用或进一步研究。
* **专业用途** ：适用于翻译包含复杂结构（如数式和图表说明）的专业文档，确保翻译后的文档仍然保持原有的专业排版。
* **个人学习和研究** ：对于需要理解外国文献或技术文档的人来说，这个工具可以提高阅读和理解的效率。


##### 如何在本地使用Indqx PDF翻译

###### 安装步骤

1. **克隆代码库** ：

* 将[代码库](<https://github.com/Mega-Gorilla/Index_PDF_Translation>)克隆到本地。
2. **安装必要的库** ：

* 在命令行终端中运行以下命令来安装所需的 Python 库：

pip install -r requirements.txt


3. **设置API Key** ：

* 打开 `config.py` 文件，将获取到的 DeepL API Key 填入相应位置。可以在 [DeepL](<https://www.deepl.com/ja/your-account/keys>) 注册并获取 API Key。

* 如果是 DeepL API Pro 用户，还需要将 `DeepL_URL` 设置为 Pro API 的 URL。

DeepL_API_Key = "xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx:fx"


###### 运行代码

1. **执行翻译命令** ：

* 在终端中运行以下命令：

python manual_translate_pdf.py


2. **选择要翻译的PDF** ：

* 运行代码后，会弹出一个文件选择界面，用户可以选择需要翻译的 PDF 文件。
* 翻译完成后，翻译后的 PDF 文件会保存在 `./output` 目录下。


通过这些步骤，用户可以在本地执行 Indqx PDF 翻译，并体验其高效准确的翻译功能，适用于各种需要保持 PDF 格式的专业文档翻译场景。