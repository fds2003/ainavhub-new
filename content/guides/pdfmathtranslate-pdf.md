---
title: "PDFMathTranslate"
date: "2024-01-01 00:00:00+08:00"
description: PDFMathTranslate PDFMathTranslate PDFMathTranslate
slug: pdfmathtranslate-pdf
tags:
- pdfmathtranslate
- pdf
- pdf2zh
- example
- example.pdf
draft: false
related_tools:
- pdfmathtranslate
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
---

## PDFMathTranslate

##### PDFMathTranslate简介

PDFMathTranslate是一个基于深度学习和字体规则的科学论文翻译工具，能够在翻译过程中保留公式和图形的布局。该工具的主要功能是将PDF文档翻译为中文，并能够生成双语对照文件，适合需要对比原文和翻译文本的用户。

##### 使用场景

PDFMathTranslate适用于以下场景：

1. **学术研究** ：研究人员可以使用该工具翻译外文科研论文，以便更好地理解文献内容。
2. **教育教学** ：教师和学生可以利用该工具翻译教材、参考书等，以提升学习效果。
3. **语言学习** ：语言学习者可以通过双语对照文件，提高外语阅读和理解能力。
4. **多语言文档处理** ：需处理多语言版本文档的专业人士，可以通过该工具高效生成所需的翻译文档。


##### 安装与使用

用户可以通过以下命令安装PDFMathTranslate：


pip install pdf2zh


在命令行中执行翻译命令，从而生成翻译后的文档和双语文档：

* **翻译整个文档** ：

pdf2zh example.pdf


* **翻译文档的部分内容** ：

pdf2zh example.pdf -p 1-3,5


* **指定翻译语言** ：

pdf2zh example.pdf -li en -lo ja


* **使用正则表达式指定需要保留的公式字体和字符** ：

pdf2zh BDA3.pdf -f "(CM[^RT].*|MS.*|XY.*|MT.*|BL.*|.*0700|.*0500|.*Italic)" -c "(\(|\||\)|\+|=|\d|[\u0080-\ufaff])"


PDFMathTranslate通过高效的多线程翻译和复杂的布局解析技术，帮助用户在处理PDF格式的科学文献时，确保翻译质量与格式的准确性。