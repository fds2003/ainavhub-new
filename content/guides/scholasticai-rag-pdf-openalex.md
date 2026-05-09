---
title: "ScholasticAI"
date: "2024-01-01 00:00:00+08:00"
description: ScholasticAI ScholasticAI RAG
slug: scholasticai-rag-pdf-openalex
tags:
- gpu
- pdf
- ryzen
- i5
- openalex
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## ScholasticAI

ScholasticAI是一个多功能工具，旨在实现检索增强生成（RAG）。它允许用户上传和分析本地的PDF文件，提取精确的信息，并基于文档中的高保真引用使用生成式AI生成答案，同时还可以查询外部知识数据库，如OpenAlex的2.5亿多文档。该应用程序的核心是pleias-Pico（350M），这是Pleias自有AI基础模型系列的成员，专为RAG任务优化，符合欧洲AI法案，并且完全开源（包括权重、语料和代码）。

该应用程序特别设计为在没有GPU的情况下本地高效运行，适用于普通的笔记本电脑或台式机，使用的是性能卓越、轻量化的模型。虽然ScholasticAI主要用于处理研究文章，但也可用于处理其他类型的PDF文件。

**系统要求** ：

* 操作系统：Windows或MacOS
* 处理器：Ryzen 5 3000系列或Intel Core i5（第8代）、Apple M1处理器
* RAM：至少8GB


**使用步骤** ：

1. 克隆代码仓库。
2. 下载和加载模型。
3. 安装依赖项。
4. 运行应用程序。


ScholasticAI具有多个关键功能，如多语言支持、低毒性内容、源分析等，旨在增强模型的可验证性和事实依据。其设计初衷是创建一个小型实验模型，以提高信息的准确性和可验证性。

该应用程序由Mozilla基金会支持开发，强调遵循开源和许可标准。整体设计强调用户友好性和本地化应用，使其成为学术研究和信息检索的有力工具。