---
title: "Minima"
date: "2024-01-01 00:00:00+08:00"
description: Minima Minima MinimaRAG（），ChatGPTMCP。MinimaRAG，。 Minima： 。 ChatGPTGPT。
  Anthrop...
slug: minima-rag-chatgpt-mcp-chatgp
tags:
- id
- chatgp
- claude
- pdf
- chatgpt
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Minima

**Minima简介**

Minima是一个开源的完全本地的RAG（检索增强生成）系统，能够与ChatGPT和MCP集成。用户可以在本地使用Minima作为RAG，不需要依赖云服务。

Minima目前支持三种模式：

1. 完全本地的最简安装。
2. 通过ChatGPT查询本地文档的自定义GPT模式。
3. 使用Anthropic Claude查询本地文件。


**使用场景**

Minima适用于需要本地数据处理和检索的应用场景，例如：

* 个人或公司需要从本地文档（如PDF、DOCX、TXT等）中快速搜索信息。
* 在敏感数据或隐私信息的情况下，用户可以安全地在本地处理信息，无需将数据上传到云端。
* 集成了ChatGPT后，用户可以自然语言提问，并得到基于本地文档的答案，提高了信息检索的效率。


**使用步骤概述：**

1. 创建一个`.env`文件并设置所需的环境变量（如本地文件路径、嵌入模型ID等）。
2. 根据需求选择不同的Docker配置文件，进行相应的安装。
3. 在安装完成后，用户可以通过指定的地址（如http://localhost:3000）访问聊天界面，并进行信息查询。


Minima的灵活性和本地处理能力使其成为需要高效信息检索或文档查询的用户的理想选择。