---
title: "marker marker Marker"
date: "2024-01-01 00:00:00+08:00"
description: marker Marker MarkerPDFMarkdown。（），，、。，，Markdown。，Marker...
slug: marker-pdf-markdown
tags:
- gpu
- pdf
- surya
- postprocessor
- latex
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## marker

## Marker简介

Marker是一款能够快速且准确地将PDF转换为Markdown的工具。它支持多种类型的文档（针对书籍和科学论文进行了优化），支持所有语言，并且能够去除页眉、页脚及其他杂乱信息。此外，它还能正确格式化表格和代码块，并提取图像保存为Markdown。同时，Marker将大多数的公式转换为LaTeX格式，适用于GPU、CPU或MPS环境。

## 工作原理

Marker使用了一系列深度学习模型，包括：

1. 文字提取和OCR（如有需要）：使用启发式方法、[surya](<https://github.com/VikParuchuri/surya>)和tesseract。
2. 页面布局检测和阅读顺序：使用[surya](<https://github.com/VikParuchuri/surya>)。
3. 清理和格式化每个区块：使用启发式方法和[texify](<https://github.com/VikParuchuri/texify>)。
4. 组合区块和后处理完整文本：使用启发式方法和pdf_postprocessor（[pdf_postprocessor](<https://huggingface.co/vikp/pdf_postprocessor_t5>)）。


Marker只在必要时使用模型，从而提高速度和准确性。

## 使用场景

Marker适用于以下场景：

* 将教科书和科学论文等PDF文档快速转换为Markdown格式。
* 对PDF中的表格和代码块进行格式化。
* 提取嵌入在PDF中的图像和公式。
* 需要多语言支持和精确文字提取的场景。
* 高并发的文档转换需求，如批量处理多个PDF文档。


## 例子

Marker和Nougat对不同类型文档的处理效果对比如下：

PDF | 文档类型 | Marker处理效果 | Nougat处理效果
---|---|---|---
[Think Python](<https://greenteapress.com/thinkpython/thinkpython.pdf>) | 教科书 | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/marker/thinkpython.md>) | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/nougat/thinkpython.md>)
[Think OS](<https://greenteapress.com/thinkos/thinkos.pdf>) | 教科书 | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/marker/thinkos.md>) | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/nougat/thinkos.md>)
[Switch Transformers](<https://arxiv.org/pdf/2101.03961.pdf>) | arXiv论文 | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/marker/switch_transformers.md>) | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/nougat/switch_transformers.md>)
[Multi-column CNN](<https://arxiv.org/pdf/1804.07821.pdf>) | arXiv论文 | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/marker/multicolcnn.md>) | [查看](<https://github.com/VikParuchuri/marker/blob/master/data/examples/nougat/multicolcnn.md>)

## 性能

Marker在一个A6000 GPU上运行时，每个任务占用约4GB的VRAM，且在速度和准确性方面优于Nougat。

**速度**

方法 | 平均分数 | 每页时间 | 每份文档时间
---|---|---|---
Marker | 0.614 | 0.632 s | 58.143 s
Nougat | 0.407 | 2.597 s | 238.926 s

**准确性**

方法 | multicolcnn.pdf | switch_trans.pdf | thinkpython.pdf | thinkos.pdf | thinkdsp.pdf | crowd.pdf
---|---|---|---|---|---|---
Marker | 0.536 | 0.517 | 0.705 | 0.711 | 0.690 | 0.523
Nougat | 0.440 | 0.589 | 0.323 | 0.401 | 0.161 | 0.526

## 安装

需要Python 3.9+和PyTorch。使用以下命令安装Marker：


pip install marker-pdf


## 使用

例如，转换单一文件：


marker_single /path/to/file.pdf /path/to/output/folder --batch_multiplier 2 --max_pages 10 --langs English


批量转换多个文件：


marker /path/to/input/folder /path/to/output/folder --workers 10 --max 10 --metadata_file /path/to/metadata.json --min_length 10000


更多详细配置和操作请参考Marker的官方文档。