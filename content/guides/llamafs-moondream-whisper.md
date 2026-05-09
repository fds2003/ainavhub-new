---
title: "LlamaFS"
date: "2024-01-01 00:00:00+08:00"
description: 'LlamaFS LlamaFS  Moondream '
slug: llamafs-moondream-whisper
tags:
- server.py
- git
- cd
- llamafs
- moondream
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## LlamaFS

LlamaFS 是一个自动化的文件管理工具，通过基于文件内容和常见的命名约定（例如，时间）来自动重命名并组织文件，它可以处理多种类型的文件，包括图像（通过 Moondream 处理）和音频（通过 Whisper 处理）。

##### 使用场景

LlamaFS 主要有两个运行模式：批处理模式和监控模式。

1. **批处理模式** ：用户可以运行一个批处理任务，自动批量重命名和组织目录中的文件。
2. **监控模式** ：LlamaFS 作为守护进程运行，实时监控目录中的文件操作，根据用户最近的编辑行为进行预测和自动分类。例如，如果用户创建了一个 2023 年的税务文件夹并开始将相关文件移动到该文件夹中，LlamaFS 会自动创建并将合适的文件移动到相应位置。


##### 安装步骤

1. 克隆仓库：

git clone https://github.com/iyaja/llama-fs.git


2. 进入项目目录：

cd llama-fs


3. 安装依赖：

pip install -r requirements.txt


##### 使用方法

在本地使用 FastAPI 提供服务，运行以下命令：


fastapi dev server.py


此命令会在默认端口 8000 上运行服务器。可以通过 curl 命令查询 API，并传递文件路径作为参数。例如，对 Downloads 文件夹进行操作：


curl -X POST http://127.0.0.1:8000 \
-H "Content-Type: application/json" \
-d '{"path": "/Users/<username>/Downloads/", "instruction": "string", "incognito": false}'


##### 亮点

* **性能优越** ：在监控模式下，大多数文件操作处理时间不到 500ms。
* **立即实用** ：易于使用，解决了普遍存在的文件管理问题。


通过这些功能和特性，LlamaFS 可以有效地帮助用户自动管理电脑上的文件，保持文件系统的整洁和有序。