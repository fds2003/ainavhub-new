---
title: "SuperEasy"
date: "2024-01-01 00:00:00+08:00"
description: 'SuperEasy SuperEasy  Ollama '
slug: supereasy-ollama-email-rag-retriever-augmented
tags:
- llama3
- pdf
- mxbai-embed-large
- dir
- requirements.txt
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- pdf-craft
---

## SuperEasy

SuperEasy 是一个结合了 Ollama 和 Email RAG 的 100% 本地 RAG（Retriever-Augmented Generation）解决方案。其主要特点是通过把本地的强大语言模型(LLM)与外部信息的检索功能相结合，生成更准确、可靠和多功能的 AI 应用。

##### 使用场景：

1. **文档管理：** 上传 PDF、.txt、JSON 文件，通过本地 RAG 系统进行检索和查询。
2. **邮件处理：** 集成 Email RAG，能够下载邮件并与其进行对话，适用于邮件管控和信息检索。


##### 安装步骤：

1. 克隆项目：`git clone https://github.com/AllAboutAI-YT/easy-local-rag.git`
2. 进入目录：`cd dir`
3. 安装依赖：`pip install -r requirements.txt`
4. 安装 Ollama：https://ollama.com/download
5. 拉取所需模型：如 `ollama pull llama3` 和 `ollama pull mxbai-embed-large`
6. 运行上传脚本：`python upload.py`
7. 运行本地 RAG：`python localrag.py` 或 `python localrag_no_rewrite.py`


##### Email RAG 设置步骤：

1. 同上（步骤 1-5）
2. 配置邮件登录信息：设置在 `.env` 文件中（对于 Gmail，需要创建应用密码）
3. 下载邮件：`python collect_emails.py`
4. 与邮件对话：`python emailrag2.py`


##### 最新功能更新：

* 支持 Email RAG (v1.3)
* 上传脚本更新，优化文本处理 (v1.2)
* 新增嵌入模型 mxbai-embed-large (v1.2)
* 改进检索功能，支持重写查询 (v1.2)
* 命令行选择模型功能 (v1.1)
* 支持对话历史的无限循环对话 (v1.1)


RAG 是一种通过结合强大语言理解能力和外部信息检索功能来增强 LLM 的能力的方法。Ollama 是一个开源平台，简化了在本地机器上运行强大 LLM 的过程，提供了更大的控制和灵活性。