---
title: "NVIDIA-Ingest"
date: "2024-01-01 00:00:00+08:00"
description: NVIDIA-Ingest NVIDIA-Ingest  PDF
slug: nvidia-ingest-pdf-word-powerpoint-nvidia
tags:
- pdf
- langchain
- nim
- llama-index
- word
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## NVIDIA-Ingest

NVIDIA-Ingest 是一款可扩展且性能导向的文档内容和元数据提取微服务，支持解析 PDF、Word 和 PowerPoint 文档。它利用专门的 NVIDIA NIM 微服务来查找、上下文化和提取文本、表格、图表及图像，以便在后续的生成应用中使用。

NVIDIA-Ingest 允许将文档并行拆分为多个页面，分类内容（如表格、图表、图像和文本），并通过光学字符识别（OCR）进一步上下文化为定义良好的 JSON 格式。从那里，NVIDIA-Ingest 可以选择性地管理提取内容的嵌入计算，并可选择性地存储到向量数据库（如 Milvus）中。

##### 使用场景

1. **文档处理与分析** ：在企业环境中可用于提取和分析大量文档内容，以支持数据驱动的决策。
2. **多模态数据提取** ：适合需要从多种格式（如 PDF、Word）中提取文本、表格和图像的项目，特别是在科研、法律或金融行业。
3. **生成应用** ：为下游生成模型（如对话生成系统、内容推荐系统等）提供结构化的数据输入。
4. **信息检索** ：将提取的内容与检索系统（如 Llama-index 或 LangChain）结合，以构建高效的文档检索和查询解决方案。
5. **大规模文档提取** ：在需要处理大量文档的应用场景中，通过并行处理提高效率和准确性。


总之，NVIDIA-Ingest 适用于需要自动化文档提取并将提取的数据应用于生成和分析任务的各种情况。