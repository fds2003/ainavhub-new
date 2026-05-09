---
title: "'Knowledge Graph Builder App Knowledge Graph Builder App Knowledge Graph Builder '"
date: "2024-01-01 00:00:00+08:00"
description: 'Knowledge Graph Builder App Knowledge Graph Builder App  Knowledge Graph
  Builder App '
slug: knowledge-graph-builder-app-pdf
tags:
- aws
- pdf
- langchain
- neo4j
- app
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Knowledge Graph Builder App

##### Knowledge Graph Builder App 简介

Knowledge Graph Builder App 是一款应用程序，旨在将非结构化数据（如PDF文件、文档、文本、YouTube视频、网页等）转换为存储在Neo4j中的知识图谱。该应用利用大语言模型（如OpenAI、Gemini等）的强大功能，从文本中提取节点、关系及其属性，并使用Langchain框架创建结构化的知识图谱。

###### 主要功能

* **知识图谱创建** ：使用大语言模型将非结构化数据转换为结构化的知识图谱。
* **提供架构** ：可以提供自定义架构或使用设置中的现有架构来生成图谱。
* **查看图谱** ：可在Bloom中查看特定来源或同时查看多个来源的图谱。
* **数据交互** ：通过对话查询的方式与Neo4j数据库中的数据交互，并检索查询响应的元数据。


###### 使用场景

1. **文档管理** ：将大量非结构化文档（如PDF、Word文档等）转换为结构化的知识图谱，方便管理和查询。
2. **数据整合** ：将来自多个来源（如本地文件、YouTube、Wikipedia、AWS S3和网页）的数据整合为一个统一的知识图谱。
3. **知识发现** ：通过知识图谱的视图和交互，对多个来源的数据进行分析和发现新的知识。
4. **智能问答** ：使用内置的聊天功能，对处理过的数据进行问答，对复杂的查询提供有效的回答，并提供响应的详细信息。


###### 部署与配置

该应用支持在本地和云端部署，需要Neo4j数据库支持。用户可以通过Docker Compose或分别运行前后端来进行部署。应用支持多种数据源和多种大语言模型，用户可以根据需要进行配置。

###### 具体操作步骤

1. 连接到Neo4j Aura实例，并提供URI和密码或使用Neo4j凭证文件。
2. 从非结构化数据源列表中选择源数据以创建图谱。
3. 根据需要从下拉菜单中选择大语言模型以生成图谱。
4. 可选的，在实体图提取设置中定义架构（节点和关系标签）。
5. 选择多个文件并点击“生成图谱”，或处理所有“新建”状态的文件以创建图谱。
6. 使用网格中的“查看”功能查看单个文件的图谱，或选择一个或多个文件并“预览图谱”。
7. 使用聊天机器人提出与处理/完成的源相关的问题，并获取详细的答案和元数据信息。


##### 资源链接

* [LLM Knowledge Graph Builder 应用](<https://llm-graph-builder.neo4jlabs.com/>)
* [Neo4j Workspace](<https://workspace-preview.neo4j.io/workspace/query>)
* [应用演示视频](<https://www.youtube.com/watch?v=LlNy5VmV290>)
* [Github 问题追踪](<https://github.com/neo4j-labs/llm-graph-builder/issues>)


通过Knowledge Graph Builder App，用户可以方便地将非结构化数据转化为结构化的知识图谱，为各类应用场景提供强大的数据支持和智能问答功能，使知识管理和数据分析变得更加高效和智能化。