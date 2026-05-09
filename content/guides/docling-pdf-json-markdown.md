---
title: "Docling"
date: "2024-01-01 00:00:00+08:00"
description: 'Docling Docling Docling '
slug: docling-pdf-json-markdown
tags:
- pdf
- amp
- python
- quackling
- ocr
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Docling

##### Docling简介

Docling 是一款用于将PDF文档转换为JSON和Markdown格式的工具，提供了一种简单、独立的解决方案。通过Docling，用户可以快速而稳定地处理各种PDF文件，并获得高质量的输出。

##### 核心功能

* **快速转换** ：能够迅速将任何PDF文档转换为JSON或Markdown格式。
* **理解页面布局** ：准确解析文档的详细页面布局和阅读顺序，恢复表格结构。
* **元数据提取** ：从文档中提取包括标题、作者、参考文献和语言等元数据。
* **OCR支持** ：可以选择对扫描PDF应用光学字符识别（OCR）。


##### 使用场景

* **文档处理** ：适用于需要大量处理PDF文档的场合，如科研论文、电子书等。
* **信息检索** ：结合其他工具（如Quackling）进行文档的检索与问答（RAG/Q&A）任务。
* **数据分析** ：提取结构化数据（如表格）并将其转换为可分析的格式，适合学术研究和商业分析。


##### 安装与使用

用户可以通过Python包管理器安装Docling，只需运行：


pip install docling


Docling支持批量转换和自定义转换选项，能够根据需要调整处理管道的特性，如启用或禁用表格结构的恢复和OCR功能。

总的来说，Docling是一个功能强大的PDF文档转换和处理工具，适合需要提取和格式化文档内容的用户和团队。