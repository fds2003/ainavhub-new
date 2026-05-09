---
title: "The Knowledge Graph Maker The Knowledge Graph Maker The Knowledge Graph Maker"
date: "2024-01-01 00:00:00+08:00"
description: 'The Knowledge Graph Maker The Knowledge Graph Maker  The Knowledge Graph
  Maker '
slug: knowledge-graph-maker-python
tags:
- augmented
- python
- maker
- graph
- grag
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## The Knowledge Graph Maker

##### The Knowledge Graph Maker 简介

The Knowledge Graph Maker 是一个Python工具，它可以基于特定的本体论，将任意文本转换为知识图谱。

##### 什么是知识图谱？

知识图谱，也称为语义网络，表示真实世界实体（如对象、事件、情境或概念）之间关系的网络。这些信息通常存储在图数据库中，并以图结构形式进行可视化，从而产生“知识图谱”这一术语。

##### 知识图谱的用途

知识图谱可以用于多种用途。我们可以运行图算法并计算任何节点的重要性，以了解某个概念（节点）在整个文本中的重要性。此外，我们可以通过计算社区将概念进行分组，以更好地分析文本，以及理解看似不相关的概念之间的连接性。

最重要的是，我们可以实现图增强的生成（Graph Retrieval Augmented Generation，GRAG），通过使用图作为检索器，以更深入的方式与文本进行对话。这是检索增强生成（Retrieval Augmented Generation，RAG）的新版本，在RAG中，我们使用向量数据库作为检索器与文档进行对话。

##### 项目概况

该项目是一个Python库，能够基于给定的本体论从任何文本中创建知识图谱。该库创建的图谱具有较高的稳定性和容错性。

###### 使用步骤：

1. **定义本体论** ：本体论定义了要提取的实体标签和关系。比如：

ontology = Ontology(
labels=[
{"Person": "仅包含人名，不加任何形容词"},
{"Object": "对象名称，不加冠词'the'"},
{"Event": "涉及多人的事件，不包括动词"},
"Place",
"Document",
"Organisation",
"Action",
{"Miscellanous": "其他无法分类的重要概念"},
],
relationships=["关系"],
)


2. **将文本分割成块** ：由于LLM的上下文窗口有限，需要适当地将文本分块，每块800到1200个token较为合适。

3. **转换为文档** ：每个文档包含文本和元数据。

class Document(BaseModel):
text: str
metadata: dict


4. **选择LLM** ：可以选择OpenAI或Groq的模型，或者自行实现一个遵循抽象类的LLM客户端。

llm = GroqClient(model=model, temperature=0.1, top_p=0.5)


5. **运行图谱生成器** ：通过提供的文档列表，生成完整的知识图谱。

graph = graph_maker.from_documents(docs)


6. **保存到Neo4j（可选）** ：将生成的图谱保存到Neo4j数据库，以便进行进一步分析或可视化。

neo4j_graph.save()


##### The Knowledge Graph Maker 的使用场景

1. **数据分析** ：通过识别文本中重要的概念和它们之间的关系，帮助更好地理解复杂的文本内容。
2. **信息检索** ：实现图增强的生成，与文档进行更有深度的对话。
3. **知识管理** ：创建和维护企业或研究项目的知识图谱，实现知识共享与传播。
4. **AI 和机器学习** ：为图神经网络等模型提供结构化的数据输入，提升模型表现。