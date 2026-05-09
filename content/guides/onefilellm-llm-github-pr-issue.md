---
title: "OneFileLLM"
date: "2024-01-01 00:00:00+08:00"
description: 'OneFileLLM OneFileLLM  LLM) '
slug: onefilellm-llm-github-pr-issue
tags:
- pdf
- doi
- onefilellm
- github
- notebook
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## OneFileLLM

OneFileLLM 是一个命令行工具，旨在简化为大型语言模型 (LLM) 创建信息密集型提示的过程。 它能够从各种来源聚合和预处理数据，将其编译到一个文本文件中，并自动复制到剪贴板方便使用。

**主要功能：**

* **支持多种数据来源：** 本地文件/目录、GitHub 仓库/PR/Issue、ArXiv 学术论文、YouTube 字幕、网页文档、Sci-Hub 论文（DOI/PMID）。
* **支持多种文件格式：** 包括 Jupyter Notebook (.ipynb) 和 PDF 等。
* **网页爬取：** 可以爬取链接页面，深度可控。
* **Sci-Hub 集成：** 自动下载 Sci-Hub 上的论文。
* **文本预处理：** 包括压缩/非压缩输出、停用词移除、小写转换等。
* **自动复制到剪贴板：** 将非压缩文本自动复制到剪贴板。
* **Token 计数：** 报告压缩和非压缩文本的 token 数量。
* **XML 封装：** 使用 XML 封装输出，以提高 LLM 的性能。


**使用场景：**

* **快速构建 LLM 的输入：** 将多个文档、网页、代码库等信息整合，方便快捷地提供给 LLM。
* **知识库构建：** 将多个数据源整合，形成一个 LLM 可以理解的知识库，用于问答、摘要等任务。
* **代码分析：** 提取 GitHub 仓库或 PR 的代码和文档，辅助 LLM 进行代码理解、bug 修复等。
* **学术研究：** 将 ArXiv 和 Sci-Hub 上的论文内容提取出来，辅助 LLM 进行文献综述、知识发现等。
* **网页内容分析：** 抓取网站内容，提供给 LLM 进行信息提取、情感分析等。
* **简化 Prompt 工程：** 通过统一的方式处理多种数据源，降低 Prompt 工程的复杂性。


总之，OneFileLLM 通过自动化数据聚合和预处理，极大地简化了 LLM 的输入准备工作，提高了效率，尤其是在需要处理大量信息时。