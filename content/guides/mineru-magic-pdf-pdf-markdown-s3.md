---
title: "MinerU"
date: "2024-01-01 00:00:00+08:00"
description: 'MinerU MinerU  MinerU '
slug: mineru-magic-pdf-pdf-markdown-s3
tags:
- gpu
- pdf
- pd
- macos
- latex
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## MinerU

**MinerU 简介**

MinerU 是一个一站式、开源的高质量数据提取工具，主要包括以下两个核心功能模块：

1. **Magic-PDF**

* **功能介绍** ：Magic-PDF 能将 PDF 文档转换为 Markdown 格式，可以处理本地存储或支持 S3 协议的对象存储中的文件。
* **主要特色** ：
* 支持多种前端模型输入
* 自动去除页眉、页脚、脚注和页码
* 保留文档原有的结构和格式，包括标题、段落、列表等
* 提取并显示图片和表格
* 将公式转换为 LaTeX 格式
* 自动检测和转换乱码 PDF 文档
* 兼容 CPU 和 GPU 环境
* 可在 Windows、Linux 和 macOS 平台上使用
2. **Magic-Doc**

* **功能介绍** ：Magic-Doc 能将网页或多格式电子书转换为 Markdown 格式。
* **主要特色** ：
* 网页提取：跨模态精确解析文本、图片、表格和公式信息
* 电子书文档提取：支持包括 epub、mobi 在内的多种文档格式，完美适配文本和图片
* 语言类型识别：精确识别176种语言


**使用场景**

* **学术研究** ：将学术文献、文章或书籍快速转换为 Markdown 格式，便于后续的编辑和分析。
* **数据整理** ：高效提取和组织来自PDF文档和网页的内容，用于数据分析、报告生成等。
* **知识管理** ：个人知识管理工具，方便将各类文档和网页内容整理成统一的格式，便于管理和查阅。
* **企业应用** ：企业内部文档或报告的处理和整理，提高文档处理的效率和规范性。


**安装和使用**

1. **安装** ：通过 pip 安装 Magic-PDF

pip install magic-pdf


2. **命令行使用**

cp magic-pdf.template.json ~/magic-pdf.json
magic-pdf pdf-command --pdf "pdf_path" --model "model_json_path"


3. **API 使用**

* **本地环境**

image_writer = DiskReaderWriter(local_image_dir)
image_dir = str(os.path.basename(local_image_dir))
jso_useful_key = {"_pdf_type": "", "model_list": model_json}
pipe = UNIPipe(pdf_bytes, jso_useful_key, image_writer)
pipe.pipe_classify()
pipe.pipe_parse()
md_content = pipe.pipe_mk_markdown(image_dir, drop_mode="none")


* **对象存储环境**

s3pdf_cli = S3ReaderWriter(pdf_ak, pdf_sk, pdf_endpoint)
image_dir = "s3://img_bucket/"
s3image_cli = S3ReaderWriter(img_ak, img_sk, img_endpoint, parent_path=image_dir)
pdf_bytes = s3pdf_cli.read(s3_pdf_path, mode=s3pdf_cli.MODE_BIN)
jso_useful_key = {"_pdf_type": "", "model_list": model_json}
pipe = UNIPipe(pdf_bytes, jso_useful_key, s3image_cli)
pipe.pipe_classify()
pipe.pipe_parse()
md_content = pipe.pipe_mk_markdown(image_dir, drop_mode="none")


综上所述，MinerU 提供了强大的 PDF 和网页数据提取功能，能够显著提升文档处理效率，适用于多种数据提取和知识管理场景。