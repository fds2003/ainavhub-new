---
title: "LangGraph RAG Research Agent Template LangGraph RAG Research Agent Template"
date: "2024-01-01 00:00:00+08:00"
description: "LangGraph RAG Research Agent Template LangGraph RAG Research Agent Template LangGraph"
slug: "langgraph-rag-research-agent-template"
draft: false
---

## LangGraph RAG Research Agent Template

##### LangGraph RAG Research Agent Template 简介

LangGraph RAG Research Agent Template 是一个帮助用户使用 LangGraph 开发 RAG（Retrieval-Augmented Generation）研究代理的启动项目。该项目在 LangGraph Studio 中进行开发，包含三个主要图表：

1. **索引图（Index Graph）** ：负责接收文档对象并进行索引。
2. **检索图（Retrieval Graph）** ：管理用户的聊天历史，并基于获取的文档进行响应。
3. **研究者子图（Researcher Subgraph）** ：作为检索图的一部分，负责根据用户查询生成研究计划并进行相关文档的检索。


这个模板的核心功能包括：

* 接收用户查询，分析查询内容并确定处理方式。
* 根据研究计划生成相关查询，并并行检索相关文档。
* 基于检索到的文档和对话上下文生成回答。


##### 使用场景

LangGraph RAG Research Agent Template 适用于以下场景：

1. **学术研究** ：可以用来协助研究人员快速检索相关文献和资料，从而提高研究效率。
2. **教育平台** ：在在线学习或教育应用中，可以帮助学生获取相关课程信息或补充阅读材料。
3. **知识管理** ：企业内部知识库的建设和维护，帮助员工迅速找到所需的信息。
4. **客户支持** ：为客户提供更为精准和快速的支持，帮助其快速定位问题解决方案。
5. **内容创作** ：创作者在写作过程中可以利用该工具快速获取相关信息和灵感。


通过定制和扩展该模板，用户可以根据具体需求调整检索和响应模型，从而构建满足特定应用场景的 RAG 研究代理。
