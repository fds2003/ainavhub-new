---
title: "spRAG"
date: "2024-01-01 00:00:00+08:00"
description: spRAG spRAG，，、。，，spRAG。 ，spRAGRAG（）...
slug: sprag
tags:
- rse
- autocontext
- segment
- relevant
- extraction
draft: false
related_tools:
- llm course
- pixverse
- llm twin course
- llamaparse
- omniparse
---

## spRAG

spRAG是一种专门针对非结构化数据设计的框架，非常适合处理密集文本信息的复杂查询任务，例如财务报告、法律文件和学术论文。简单来说，如果你需要从这类复杂文档中准确地检索或回答开放式问题，spRAG就是一个高效的选择。

在挑战性较高的开放式问题回答任务中，spRAG展现了比传统RAG（检索式生成模型）基线更高的准确度。特别是在一个名为[FinanceBench](<https://arxiv.org/abs/2311.11944>)的测试中，spRAG能够以83%的准确率回答问题，而普通RAG基线的准确率仅为19%。

主要通过以下两种方法提高性能：

##### AutoContext（自动上下文）

自动上下文是指在将文档的各个片段（chunks）嵌入之前，自动将文档级别的上下文摘要插入到每个片段中。这种方法能让嵌入向量更加准确和全面地表达文本的内容和含义，从而显著提高检索质量，并减少不相关结果的出现，改善后续聊天和生成应用中文本的误解率。实现它的方式相对简单：生成文档的1-2句摘要，加上文件名，然后将其添加到每个片段的前面。

##### Relevant Segment Extraction（RSE，相关片段提取）

RSE是一个后处理步骤，它将相关的片段智能组合成更长的文本段，这些段可以比任何单个片段提供更好的上下文。对于简单的事实性问题，答案通常包含在单个片段中；而对于更复杂的问题，答案通常涉及更长的文本段。RSE的目标是智能识别出提供最相关信息的文本段，而不受固定长度片段的限制。

##### 使用场景

当你面对以下情况时，spRAG会是非常有用的工具：

* 需要从大量复杂文档中提取精确信息，例如财务报告、法律文件和学术论文。
* 面对的查询或问题需要理解和分析跨越多个文档片段的长篇内容。
* 传统检索方法无法准确理解或回答的复杂问题。


##### 安装和快速开始

spRAG可以通过Python包安装，使用简单的代码就能够创建和查询知识库。这个过程涉及到几个主要步骤：从文件创建知识库、加载知识库、自定义配置等。

例如，创建一个KnowledgeBase对象并从文档中提取信息：


from sprag.create_kb import create_kb_from_file
file_path = "spRAG/tests/data/levels_of_agi.pdf"
kb_id = "levels_of_agi"
kb = create_kb_from_file(kb_id, file_path)


然后，通过以下方式查询知识库并获取结果：


from sprag.knowledge_base import KnowledgeBase
kb = KnowledgeBase("levels_of_agi")
search_queries = ["What are the levels of AGI?", "What is the highest level of AGI?"]
results = kb.query(search_queries)
for segment in results:
print(segment)


spRAG是解决从复杂文本数据中检索和理解信息的强大工具，非常适合处理需要深入分析大量密集文本的场景。