---
title: "Vanna"
date: "2024-01-01 00:00:00+08:00"
description: Vanna Vanna  Python RAG
slug: vanna-python-rag-retrieval-augmented-generation
tags:
- ddl
- sql
- python
- retrieval-augmented
- generation
draft: false
related_tools:
- opensearch-sql
- mcp server for postgresql
- haiku sqlite rag
- sql chat
- python a2a
---

## Vanna

Vanna 是一个开源的 Python RAG（Retrieval-Augmented Generation，检索增强生成）框架，专门用于生成 SQL 查询和相关功能。它的主要功能是将自然语言问题转化为 SQL 语句，使得用户可以通过提问的方式直接从数据库中获取所需信息。这在需要通过与数据库互动来获取数据的情况下非常有用，特别是对于那些不熟悉 SQL 语法的人来说，Vanna 可以极大地简化查询流程。

Vanna 的工作流程可以分为两步：

1. **训练 RAG 模型** ：首先需要在你的数据上训练一个 RAG 模型。这一步骤包括将数据库表结构（DDL 语句）、业务文档或存在的 SQL 查询等信息提供给 Vanna 进行学习，使得模型能够理解你的数据结构和业务逻辑。
2. **提出问题** ：训练好模型之后，你就可以通过提问来获取相应的 SQL 语句了。Vanna 将解析这些问题，基于训练数据生成相应的 SQL 查询。


使用场景:

* **复杂数据集上的高准确率查询** ：如果你拥有大型或复杂的数据库，并希望通过自然语言来快速准确地提取信息，Vanna 由于其基于强大的语言模型，可以极大提升查询的准确性。
* **保障数据安全和隐私** ：由于所有 SQL 生成和执行都是在本地环境中完成，不需要将数据库内容发送到外部服务器，这可以保证数据的安全性和隐私性。
* **自我学习的能力** ：通过用户对查询结果的反馈，Vanna 能够自我学习和调整，使得未来的查询结果更加准确。
* **支持任意 SQL 数据库** ：只要是可以用 Python 连接的 SQL 数据库，Vanna 都能支持。


扩展性和灵活性也是 Vanna 的一大特点。开发者可以根据自己的需求，选择不同的前端界面（例如 Jupyter Notebook、Streamlit、Flask 或 Slackbot）来使用 Vanna，或者将其集成到自己的系统中。此外，Vanna 的设计允许连接任意的数据库、语言模型（LLM）和向量数据库，通过提供基类 `VannaBase` 和一些默认实现（如 OpenAI 和 ChromaDB），来确保其灵活性和扩展性。

总体而言，Vanna 是一个强大而灵活的框架，适用于需要通过自然语言处理（NLP）技术来与数据库互动的应用场景。无论是数据分析师、开发者还是普通用户，都可以通过 Vanna 更加便捷地访问和查询数据库信息。