---
title: "Ollama supports embedding models Ollama supports embedding models Ollama"
date: "2024-01-01 00:00:00+08:00"
description: Ollama supports embedding models Ollama Retrieval-Augmented Generation
slug: ollama-supports-embedding-models-retrieval-augmented
tags:
- embedding
- prompt
- retrieval-augmented
- vector
- generation
draft: false
related_tools:
- qwen3 embedding
- mlx-embeddings
- openai embedding models-新型嵌入模型，性能更强，价格更低。
- awesome ai system prompts
- gpt-4.1 prompting guide
---

## Ollama supports embedding models

Ollama支持嵌入式模型功能，这允许构建检索增强生成（Retrieval-Augmented Generation，简称RAG）应用程序，它结合了文本提示(prompt)与现有文档或其他数据。这一功能主要用于在需要快速、准确检索与给定文本语义上相似的信息时。

##### 嵌入式模型是什么？

嵌入式模型是专门训练用来生成向量嵌入（vector embeddings）的模型。向量嵌入是长数字数组，代表给定文本序列的语义含义。这些生成的向量嵌入数组可以存储在数据库中，用来比较，以此来搜索语义上相似的数据。

##### 使用场景

* 当你需要在大量文档或数据中快速找到与特定查询（或问题）内容语义上匹配的信息时。
* 构建聊天机器人、推荐系统、信息检索系统等需要实现精准信息匹配功能的应用。
* 在知识增强的自然语言处理任务中，比如需要根据查询内容检索相关信息以辅助回答问题时。


##### 示例操作步骤

###### 步骤1：生成嵌入

首先，通过Ollama下载一个适用的嵌入模型，然后使用该模型对一系列文档进行向量嵌入的生成。将文本输入模型，模型会输出该文本的向量嵌入。

###### 步骤2：检索

接下来，面对一个新的查询或问题，同样生成其向量嵌入，然后在之前生成的文档嵌入库中搜索最相关的文档。这一步是通过比较问题嵌入与文档嵌入的相似度来完成的。

###### 步骤3：生成回答

最后，根据步骤2检索到的最相关信息，结合原始问题，使用另一个模型（如Llama2）生成回答。这个过程相当于将检索到的相关信息作为背景知识，辅助模型更准确地理解问题并生成回答。

##### 总结

Ollama的嵌入式模型功能允许用户搭建一个桥梁，将传统的文本生成和信息检索相结合，增强模型处理复杂查询的能力。在任何需要深入理解大量静态文档或数据的场景中，此功能都能极大地提升处理效率和结果的相关性。