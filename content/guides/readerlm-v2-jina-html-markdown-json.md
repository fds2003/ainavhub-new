---
title: "ReaderLM-v2"
date: "2024-01-01 00:00:00+08:00"
description: 'ReaderLM-v2 ReaderLM-v2  Jina AI '
slug: readerlm-v2-jina-html-markdown-json
tags:
- readerlm-v2
- latex
- markdown
- jina
- json
draft: false
related_tools:
- readerlm-v2
- reader
---

## ReaderLM-v2

ReaderLM-v2 是由 Jina AI 开发的一款具有 1.5 亿参数的语言模型，专门用于将原始 HTML 转换为格式美观的 Markdown 或 JSON。相比前一版本，ReaderLM-v2 在多个方面取得了显著的改进。

##### 主要特性：

1. **改进的 Markdown 生成** ：通过新的训练范式和高质量的数据，能够出色地生成复杂元素，如代码块、嵌套列表、表格和 LaTeX 方程式。
2. **直接 JSON 输出** ：支持从 HTML 直接生成 JSON，避免了中间的 Markdown 转换步骤。
3. **更长的上下文处理** ：支持高达 512K 的输入和输出长度，适合处理长文内容。
4. **多语言支持** ：支持多达 29 种语言，应用范围更广。
5. **增强的稳定性** ：通过对比损失技术，在生成长序列后显著减轻了退化问题。


##### 模型架构：

* 模型类型：自回归，解码器单一转换器
* 隐藏层大小：1536
* 层数：28
* 支持的语言：包括英文、中文、法文等多种语言。


##### 性能评估：

在 HTML 转换任务中，与更大模型相比，ReaderLM-v2 的表现优异，例如 ROUGE-L 达到 0.84，F1 分数为 0.81。此外，在内容完整性、结构准确性等方面也得到了较高的评价。

##### 使用方式：

用户可以通过 Reader API、Google Colab 或本地环境使用 ReaderLM-v2。相关的示例和指引都已提供，以便于操作。

总体而言，ReaderLM-v2 通过其强大的功能和灵活的应用，成为处理 HTML 内容转换的一个高效工具。