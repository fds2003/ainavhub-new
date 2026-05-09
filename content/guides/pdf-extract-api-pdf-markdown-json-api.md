---
title: "pdf-extract-api pdf-extract-api PDF-Extract-API"
date: "2024-01-01 00:00:00+08:00"
description: 'pdf-extract-api PDF-Extract-API  PDF-Extract-API '
slug: pdf-extract-api-pdf-markdown-json-api
tags:
- pytorch
- pdf
- redis
- pdf-extract-api
- fastapi
draft: false
related_tools:
- ttt-lm-pytorch
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
---

## pdf-extract-api

##### PDF-Extract-API 简介

PDF-Extract-API 是一个功能强大的工具，能够将任何图像或 PDF 文件转换为高准确度的 Markdown 文本或 JSON 结构的文档，包括表格数据、数字和数学公式。该 API 使用 FastAPI 构建，并通过 Celery 进行异步任务处理，同时使用 Redis 来缓存 OCR 结果。

###### 主要特点：

* **无外部依赖** ：该工具在本地运行，使用基于 PyTorch 的 OCR（Marker）和 Ollama，不会将数据发送到外部服务器。
* **PDF 到 Markdown 转换** ：支持使用多种 OCR 策略（如 Marker、Surya-OCR、Tesseract）进行高准确度的转换。
* **PDF 到 JSON 转换** ：使用 Ollama 支持的模型进行转换。
* **提高 OCR 结果的准确性** ：使用 LLM（大规模语言模型）来修正 OCR 文本中的拼写和文本问题。
* **去除个人身份信息** ：可以用来从 PDF 中移除个人身份信息（PII）。
* **分布式队列处理** ：使用 Celery 处理异步 OCR 任务。
* **缓存机制** ：通过 Redis 缓存 OCR 结果，提升效率。
* **命令行工具** ：提供 CLI 工具用于发送任务和处理结果。


##### 使用场景

PDF-Extract-API 可广泛应用于多个场景，包括但不限于：

1. **医疗数据处理** ：将医学影像报告（如 MRI）转换为结构化的 Markdown 或 JSON 格式，以便于数据分析和存档。
2. **财务文件处理** ：处理发票、收据等财务文件，将其内容提取为 JSON 格式，并去除 PII，确保数据隐私。
3. **数据迁移与整合** ：将各类文档中的内容提取为标准化格式，便于导入到其他系统或数据库中。
4. **文档智能化处理** ：结合 LLM 的能力，自动生成文档摘要、修正错别字等，实现智能文档处理。


通过以上功能和使用场景，PDF-Extract-API 为开发者在文档处理和数据提取方面提供了强大的支持。