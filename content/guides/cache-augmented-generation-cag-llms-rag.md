---
title: "Cache-Augmented Generation Cache-Augmented Generation"
date: "2024-01-01 00:00:00+08:00"
description: Cache-Augmented Generation  Cache-Augmented Generation, CAG
slug: cache-augmented-generation-cag-llms-rag
tags:
- cag
- llms
- generation
- cache-augmented
- rag
draft: false
related_tools:
- docagent
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- gemini 2.0 flash image generation and editing
---

## Cache-Augmented Generation

**缓存增强生成（Cache-Augmented Generation, CAG）**是一种新兴的方法，旨在通过将相关知识预加载到大型语言模型（LLMs）的上下文中，来优化生成任务。CAG的核心思想是避免实时检索，从而解决了检索增强生成（RAG）方法的一些局限性，例如检索延迟、检索错误和系统复杂性。

##### CAG的优势

1. **降低延迟** ：通过消除实时检索步骤，加快推理速度。
2. **提高可靠性** ：减少检索错误，确保上下文的相关性。
3. **简化设计** ：提供一种流线型的替代方案，降低复杂性，同时实现与RAG可比或更好的效果。


##### CAG的局限性

1. **知识规模受限** ：CAG要求整个知识源能够适应于上下文窗口，因而不适合极大数据集的任务。
2. **上下文长度限制** ：对于非常长的上下文，LLMs的性能可能会下降。


##### 使用场景

CAG特别适用于那些对实时反馈要求不高的任务，例如：

* **问答系统** ：可以通过预加载相关文档，快速回答用户问题。
* **知识检索** ：在特定领域中，如医疗、法律等，预先加载行业知识提高了反应速度和准确性。
* **文本生成** ：为生成任务提供了相关背景信息，有助于增强输出质量。


随着大型语言模型的发展，尤其是长上下文窗口的模型，CAG在更复杂应用中的表现也将持续改善，使其成为传统RAG的可行补充方案。