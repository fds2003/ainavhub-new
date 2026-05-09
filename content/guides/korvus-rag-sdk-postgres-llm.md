---
title: "korvus korvus Korvus"
date: "2024-01-01 00:00:00+08:00"
description: korvus Korvus（RAG）SDK，Postgres。KorvusLLM（），，，，，RAG，、，。 ...
slug: korvus-rag-sdk-postgres-llm
tags:
- korvus
- sql
- python
- rust
- llm
draft: false
related_tools:
- opensearch-sql
- mcp server for postgresql
- haiku sqlite rag
- sql chat
- python a2a
---

## korvus

Korvus是一个一体化的开源检索增强生成（RAG）SDK，专为Postgres数据库设计。Korvus通过整合LLM（大语言模型），向量存储，嵌入生成，重新排序，总结以及自定义模型，实现了整个RAG流程在单一数据库查询中的统一操作，提供高性能、可定制的搜索功能，并大大简化了架构复杂性。

##### 使用场景

1. **检索增强生成（RAG）操作** ：通过在单一SQL查询中完成数据检索、语义搜索、文本生成等复杂操作，减少系统延迟，提升性能。
2. **多语言支持** ：Korvus提供针对Python、JavaScript、Rust等多种编程语言的SDK绑定，方便开发者在现有技术栈中无缝集成。
3. **高性能搜索解决方案** ：通过删除外部API调用和数据移动，Korvus直接在数据库中执行复杂操作，提供快速可靠的处理能力。
4. **Postgres原生操作** ：利用Postgres内建的性能和可扩展性，Korvus能够有效处理大规模数据。


##### 主要功能

* **简化架构** ：以单一查询替代复杂的面向服务的架构。
* **高性能** ：减少API调用和数据移动，提高处理速度和可靠性。
* **开源软件** ：改进开发者体验，可以使用本地Docker运行的开源软件和模型。
* **多语言支持** ：支持Python、JavaScript和Rust，开发者可提需求支持更多语言。
* **统一管道** ：在一个查询中组合嵌入生成、向量搜索、重新排序和文本生成。
* **Postgres驱动** ：内部操作通过高效的SQL查询在Postgres数据库平台上驱动。


##### 快速开始

1. 安装Korvus：


pip install korvus


2. 设置数据库连接环境变量：


export KORVUS_DATABASE_URL="{你的数据库连接字符串}"


3. 初始化Collection和Pipeline：


from korvus import Collection, Pipeline
import asyncio

collection = Collection("korvus-demo-v0")
pipeline = Pipeline(
"v1",
{
"text": {
"splitter": {"model": "recursive_character"},
"semantic_search": {"model": "Alibaba-NLP/gte-base-en-v1.5"},
}
},
)

async def add_pipeline():
await collection.add_pipeline(pipeline)

asyncio.run(add_pipeline())


4. 插入文档：


async def upsert_documents():
documents = [
{"id": "1", "text": "Korvus is incredibly fast and easy to use."},
{"id": "2", "text": "Tomatoes are incredible on burgers."},
]
await collection.upsert_documents(documents)

asyncio.run(upsert_documents())


5. 执行RAG操作：


async def rag():
query = "Is Korvus fast?"
print(f"Querying for response to: {query}")
results = await collection.rag(
{
"CONTEXT": {
"vector_search": {
"query": {
"fields": {"text": {"query": query}},
},
"document": {"keys": ["id"]},
"limit": 1,
},
"aggregate": {"join": "\n"},
},
"chat": {
"model": "meta-llama/Meta-Llama-3-8B-Instruct",
"messages": [
{
"role": "system",
"content": "You are a friendly and helpful chatbot",
},
{
"role": "user",
"content": f"Given the context\n:{{CONTEXT}}\nAnswer the question: {query}",
},
],
"max_tokens": 100,
},
},
pipeline,
)
print(results)

asyncio.run(rag())


##### 社区和文档

* 访问[官方文档](<https://postgresml.org/docs/open-source/korvus/>)获取API参考、教程和最佳实践。
* 加入[Discord社区](<https://discord.gg/DmyJP3qJ7U>)获取帮助，分享想法并贡献。


Korvus通过将整个RAG管道压缩到Postgres内部，为开发者提供了一种高效且简化复杂操作的解决方案。希望通过这一工具，开发者能更轻松地实现大规模数据的高效处理和复杂搜索功能。