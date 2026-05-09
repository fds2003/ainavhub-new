---
title: "chat-with-mlx"
date: "2024-01-01 00:00:00+08:00"
description: chat-with-mlx chat-with-mlx  RAG)
slug: chat-with-mlx-rag-doc-pdf-txt
tags:
- url
- pdf
- chat-with-mlx
- macos
- gemma
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## chat-with-mlx

chat-with-mlx 是一个基于“检索增强生成(RAG)”的聊天界面，它能够利用多种开源模型来提高聊天体验。通过这个工具，用户可以与他们的数据进行互动，支持多种文件格式（如doc(x)、pdf、txt）和通过URL添加的YouTube视频。它支持多语言交互，包括英语、西班牙语、中文、越南语和土耳其语。此外，chat-with-mlx可以方便地集成任何HuggingFace和MLX兼容的开源模型，提供了在MacOS和Apple Silicon上使用Native RAG的示例。

###### 使用场合

1. **多语言数据查询：** 当你需要以不同语言查询特定数据，不论是文本、PDF文件还是在线视频。
2. **借助强大模型提升聊天体验：** 利用先进的开源模型（如Google Gemma, Mistral, StableLM等）增强聊天应用的响应能力和信息的准确性。
3. **研究和开发目的：** 对AI和机器学习有研究和开发需求的用户，特别是在Apple Silicon（如M1芯片）环境下，可以利用MLX框架高效开发和测试。
4. **文档管理和检索：** 当需要从大量文本或多媒体内容中检索信息，提供更加直观、快速的访问方式。


###### 主要功能

* 支持和数据聊天，包括各种文件格式和YouTube视频。
* 支持多语言。
* 易于集成各种HuggingFace和MLX兼容的开源模型。
* 在MacOS和Apple Silicon上原生支持RAG。


###### 添加自己的模型

有两种方法添加自己的模型，都涉及在`chat_with_mlx/models/configs`添加一个简单的.yaml配置文件。第一种方法直接通过配置加载模型，第二种方法可手动下载模型文件并添加到指定目录，适用于遇到下载缓慢的情况。

###### 已知问题

* 需要先卸载当前模型才能加载新模型，否则可能导致应用卡在旧模型上。
* 模型下载时只能通过终端中断操作。
* 切换文件时需要手动停止索引，否则新的文档会被添加到当前数据库中。
* 必须选择数据模式（文档或YouTube），应用才能正常工作。


chat-with-mlx适用于需要通过高级聊天界面与自己的数据进行交互的场景，特别是在多语言和多格式文档查询方面。它利用了MLX的强大功能，在苹果的硬件上提供了优异的性能。这使得chat-with-mlx成为数据科学家、研究人员和开发者尤其是那些使用Apple硬件的人一个不可多得的工具。