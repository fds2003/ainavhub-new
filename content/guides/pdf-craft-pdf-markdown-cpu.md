---
title: "pdf-craft"
date: "2024-01-01 00:00:00+08:00"
description: 'pdf-craft pdf-craft  pdf-craft '
slug: pdf-craft-pdf-markdown-cpu
tags:
- gpu
- pdf
- ocr
- cpu
- epub
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## pdf-craft

## pdf-craft 简介

pdf-craft 是一个可以将 PDF 文件转换为其他格式的工具，主要专注于处理扫描书籍的 PDF 文件。它利用 AI 模型和算法来提取文本，过滤掉页眉、页脚、脚注和页码等元素，并处理跨页连接问题，生成连贯的文本。

**核心功能：**

* **PDF 转 Markdown：** 使用本地计算能力（CPU 或 GPU），将 PDF 转换为 Markdown 文件。文档中的插图、表格和公式会以截图的形式插入 Markdown 文件中。
* **PDF 转 EPUB：** 将 PDF 转换为 EPUB 格式。此过程涉及使用本地 OCR 识别文本，然后利用大型语言模型 (LLM) 构建书籍结构（如目录），并整合注释和引文信息。LLM 还可以纠正 OCR 错误。


## 使用场景

pdf-craft 的使用场景主要围绕将 PDF 文件转换为更易于阅读和编辑的格式：

* **论文或小型书籍的转换：** 将论文或小型书籍的 PDF 文件转换为 Markdown 格式，方便编辑、修改和二次创作。
* **大型书籍的转换：** 将大型书籍的 PDF 文件转换为 EPUB 格式，以便在电子阅读器上获得更好的阅读体验，并利用 LLM 构建章节目录和整合注释。
* **数字化扫描书籍：** 将扫描的书籍 PDF 文件转换为文本格式，方便检索、引用和长期保存。
* **需要文本提取和结构化信息的场景：** 在需要从 PDF 中提取文本，并将其转换为结构化数据（例如带有目录的 EPUB）的场景下，pdf-craft 可以提供帮助。


总的来说，pdf-craft 旨在提供一种方便、高效的方式，将 PDF 文件转换为其他格式，特别是在处理扫描书籍等复杂 PDF 文件时，其 AI 驱动的功能可以显著提高转换的质量和效率。