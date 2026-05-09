---
title: "Knowledge Graph RAG Knowledge Graph RAG Knowledge Graph RAG"
date: "2024-01-01 00:00:00+08:00"
description: Knowledge Graph RAG Knowledge Graph RAG RAG
slug: knowledge-graph-rag-pip-install
tags:
- document
- documentsgraph
- documents
- graph
- rag
draft: false
related_tools:
- pdf document layout analysis
- fully client-side chat over documents
- document-buddy-app
- solgraph
- langgraph multi-agent swarm
---

## Knowledge Graph RAG

Knowledge Graph RAG是一个自动化创建知识图谱和文档网络的工具，旨在提升检索增强生成（RAG）的性能。以下是对该工具的总结性介绍：

1. **安装与设置** ：

* 可以通过命令`pip install knowledge_graph_rag`来安装。
* 安装后，可以创建知识图谱（Knowledge Graph）或文档图谱（Document Graph）。
2. **创建图谱** ：

* 知识图谱示例代码：

documents = ["心血管疾病 ...",
"新兴的治疗干预 ...",
"流行病学负担 ...",
"心血管疾病也 ...",
"先进的成像技术 ...",
"新型生物标志物的作用 ..."]
knowledge_graph = KnowledgeGraph(documents)
knowledge_graph.create()
knowledge_graph.plot()


* 文档图谱示例代码：

documents_graph = DocumentsGraph(documents=documents)
documents_graph.plot()


3. **增强LLM（大型语言模型）的上下文** ：

* 可以通过知识图谱搜索实体或查找相互连接的文档以丰富LLM的上下文。

knowledge_graph.search_document(user_query)


* 例如，查询“心血管疾病”可能会找到相关的治疗方法、标志物等等，并列出包含相关术语的文档。


该工具主要用于处理医学等领域的大量文本数据，通过创建知识图谱和文档网络来帮助用户更有效地查找和利用信息。