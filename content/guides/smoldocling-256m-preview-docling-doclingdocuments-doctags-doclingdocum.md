---
title: "SmolDocling-256M-preview"
date: "2024-01-01 00:00:00+08:00"
description: 'SmolDocling-256M-preview SmolDocling-256M-preview  Docling '
slug: smoldocling-256m-preview-docling-doclingdocuments-doctags-doclingdocum
tags:
- doctags
- doclingdocum
- doclingdocuments
- ocr
- smoldocling-256m-preview
draft: false
related_tools:
- pdf-ocr-obsidian
- uniocr
- olmocr
- monkeyocr
- magi-为漫画自动生成文本记录：检测漫画角色、文本块和面板，对面板进行排序，聚类角色，匹配文本与其说话者，并执行光学字符识别（ocr）
---

## SmolDocling-256M-preview

SmolDocling-256M-preview 是一个多模态的图像-文本到文本的模型，专为高效文档转换而设计。它保留了 Docling 的主要功能，并完全兼容 Docling，通过无缝支持 DoclingDocuments 实现。主要特点包括：

* **DocTags:** 采用DocTags标签，这是一种高效且最小的文档表示方法，完全兼容 DoclingDocuments，更清晰地分离文本和文档结构。
* **OCR:** 准确地从图像中提取文本。
* **布局和定位:** 保留文档结构和元素边界框。
* **代码识别:** 检测并格式化代码块，包括缩进。
* **公式识别:** 识别和处理数学表达式。
* **图表识别:** 提取并解释图表数据。
* **表格识别:** 支持列和行标题，进行结构化表格提取。
* **图像分类:** 区分图形元素。
* **标题对应:** 将标题链接到相关图像和图形。
* **列表分组:** 正确组织和结构化列表元素。
* **整页转换:** 处理整个页面，包括所有页面元素（代码、公式、表格、图表等）。
* **带边界框的OCR:** 使用边界框进行OCR区域识别。
* **通用文档处理:** 经过科学和非科学文档的训练。
* **无缝Docling集成:** 导入Docling并导出为多种格式（MD, HTML 等）。
* **快速推理:** 使用VLLM，在A100 GPU上平均每页0.35秒。


该模型基于 Idefics3 微调，使用 DocTags 进行高效 Token 化，并将提供图表识别增强，多页推理支持，以及化学识别等功能。 开发者还提供了使用 transformers 或 vllm 进行推理，并使用 Docling 将结果转换为多种输出格式的代码示例。