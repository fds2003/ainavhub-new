---
title: "Nixiesearch"
date: "2024-01-01 00:00:00+08:00"
description: Nixiesearch Nixiesearch  S3
slug: nixiesearch-s3-scale-to-zero-apache-lucene
tags:
- nixiesearch
- apache
- llm
- api
- scale-to-zero
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## Nixiesearch

Nixiesearch 是一个**混合搜索引擎** ，旨在优化并适应您的数据。它具有云原生特性，使用S3兼容的索引持久化，支持无状态的搜索架构，且能够实现按需扩展（Scale-to-zero），避免了集群状态变为红色的问题。Nixiesearch 基于经过验证的 Apache Lucene 库构建，提供39种语言支持、分面搜索、高级过滤、自动完成建议和排序等功能，并且集成了RAG查询和向量搜索，无需复杂的索引管道。

##### Nixiesearch的特点：

* 支持云原生架构，能够快速拓展并降低运维复杂度。
* 包含自动完成和丰富的过滤条件，提供精准的搜索体验。
* 实现了混合检索，能结合文本和神经搜索的优点，提供更为全面的搜索结果。
* 提供本地的LLM推理功能，不必将私密数据远程传送至API服务中。


##### 使用场景：

1. **电子商务搜索** ：用户可以在网站上快速找到他们所需要的商品，如通过商品名称、类型等进行高效检索。
2. **文档搜索与推荐** ：企业内部可以利用Nixiesearch来快速检索文档和信息，提升信息获取效率。
3. **多媒体内容查找** ：如图片和视频内容的智能搜索，用户能够基于描述或标签进行搜索。
4. **定制化内容推荐** ：结合用户行为和反馈，Nixiesearch能够为用户提供个性化的内容推荐。


由于目前项目还在积极开发中，尚未支持数据的向后兼容性，因此在使用时请注意这些限制。对于需要实现复杂分析查询的场景，建议使用其他工具如ELK或Clickhouse等。