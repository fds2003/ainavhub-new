---
title: "RAG Me Up RAG Me Up RAG Me Up"
date: "2024-01-01 00:00:00+08:00"
description: RAG Me Up RAG Me Up  UI
slug: rag-me-up-ui-retrieval-augmented
tags:
- gpu
- pdf
- cpu
- retrieval-augmented
- gb
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## RAG Me Up

**RAG Me Up** 是一个通用框架（包括服务器和UI），旨在让用户能够轻松地在自有数据集上进行RAG（Retrieval-Augmented Generation）。其核心是一个小巧轻便的服务器以及几种与服务器通信的UI运行方式（或者用户可以自行编写）。

**RAG Me Up** 可以在CPU上运行，但使用默认的指令模型时，建议在至少具有16GB显存的GPU上运行。

**RAG Me Up** 功能和使用场景包括：

1. **文档索引** ：

* 收集并提供文档。
* 读取各种类型的文档内容，如PDF、JSON、DOCX等。
* 使用递归分割器进行文档分片。
* 使用嵌入模型将文档块转为向量。
* 使用组合的密集向量和稀疏向量搜索策略进行索引，默认使用本地Milvus数据库。
2. **推理** ：

* 用户查询可包括初始查询或有历史记录的后续查询。
* 系统检查是否需要获取新文档。如果没有历史记录或者需要获取新文档，系统会执行以下步骤：
* 从向量数据库和BM25索引中获取文档。
* 根据必要情况重新排序文档。
* 判断文档是否能回答问题，如果不能，重写查询一次。
* 将文档注入到提示中，使用LLM生成回答。


**使用场景** ：

1. **知识管理** ：帮助组织在内部知识库中快速找到相关信息。
2. **客户服务** ：为客户查询提供即时且准确的回答。
3. **研究与开发** ：支持大规模的文档检索和信息汇总。
4. **法律和法规** ：协助法律专业人士在海量文档中查找相关法条和案例。


通过这些功能和使用场景，**RAG Me Up** 可以广泛应用于各类需要高效信息检索和生成文本的场景中。