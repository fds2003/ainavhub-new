---
title: "KG-RAG"
date: "2024-01-01 00:00:00+08:00"
description: KG-RAG KG-RAG Knowledge Graph Retrieval Augmented Generation
slug: kg-rag-knowledge-graph-retrieval-augmented
tags:
- augmented
- kg-rag
- documents
- retrieval-augmented
- graph
draft: false
related_tools:
- fully client-side chat over documents
- solgraph
- langgraph multi-agent swarm
- langgraph computer use agent
- graphgen
---

## KG-RAG

KG-RAG（Knowledge Graph Retrieval Augmented Generation）功能是利用知识图谱技术，通过提取和加工多个文档中的信息来解答问题的一种技术。这个功能通过扩展标准的检索增强生成（Retrieval-Augmented Generation, RAG）模型，使之能够处理与现实世界中客户使用场景更加贴近的复杂问题。具体而言，KG-RAG 功能旨在解决如下场景下的问题：

1. **多文档问题解答（QnA over multiple documents）** ：在现实情况中，很多时候需要从不止一个或几个文档中检索信息来回答问题。KG-RAG 解决了这一问题，使得可以从较大的文档集合中提取所需信息。

2. **使用逼真的长文档** ：KG-RAG 使用的文档非常接近客户在现实生活中使用的文档，而不仅仅是标准的学术样本文档。这些文档更加复杂和多样，能够更好地模拟实际使用场景。

3. **应对不同难度的问题** ：KG-RAG 包含的问题难度不一，旨在更准确地模仿现实世界中的需求。主要分为以下几类：

* **单文档、单块 RAG** ：问题的答案可以在单一文档的连续区域内找到。这要求 RAG 系统正确检索到相关块并将其传递给 LLM（大型语言模型）上下文。例如，查询某公司特定季度的操作活动现金净额。
* **单文档、多块 RAG** ：问题的答案需要在单一文档的多个不连续区域中寻找。这要求 RAG 系统能够从单个文档中检索到多个正确的块，对于某些类型的问题，这可能更具挑战性。例如，探讨某公司财务报表中的股票回购信息与管理讨论中的股权部分之间的关系。
* **多文档 RAG** ：问题的答案需要从多个文档的不连续区域中寻找。这要求 RAG 系统能够从多个文档中正确检索到多个块。例如，研究某公司从 iPhone 销售中获得的收入在不同季度的波动。


在什么情境下会使用 KG-RAG：

* 当问题复杂且需要从多个长文档中提取信息时。
* 当需要处理与真实客户文档相似的逼真、复杂文档时。
* 当问题解答覆盖不同难度级别，包括需要综合分析单文档多区域或多文档信息时。


KG-RAG 是为了更好地模拟和解决实际生产中的复杂问题解答需求而设计的，适用于需要广泛文档检索和复杂信息处理的场景。