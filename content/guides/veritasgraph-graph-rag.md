---
title: "VeritasGraph"
date: "2024-01-01 00:00:00+08:00"
description: VeritasGraph VeritasGraph  Graph RAG
slug: veritasgraph-graph-rag
tags:
- const
- veritasgraph
- gitalk
- lora
- clientsecret
draft: false
related_tools:
- graph-constrained reasoning
- veritasgraph
- index-tts-lora
- comfyui-b-lora
- solgraph
---

## VeritasGraph

VeritasGraph 是一个专为私有基础设施设计的企业级图谱增强生成（Graph RAG）框架，旨在构建安全、可验证归因的先进问答和摘要系统。该项目通过利用知识图谱进行复杂的多跳推理，克服了传统基于向量搜索的RAG系统的局限性，能够提供具有完整来源归因的透明、可审计的推理路径，从而显著提升企业AI的信任度和可靠性。其核心功能包括强大的多跳图推理能力、采用LoRA调优的本地大型语言模型以实现高效部署、端到端的来源归因机制，以及确保数据主权的安全私有化本地部署架构。系统通过将非结构化文档转化为结构化知识图谱，并结合混合检索引擎（包括向量搜索和多跳图遍历）与本地LLM推理核心，有效解决了复杂查询中信息关联和深层理解的挑战。项目理念强调AI系统的透明性、安全性与可控性，赋能企业自主构建和管理知识资产，减少对外部云服务的依赖，支持本地LLM运行并需要一定的硬件资源配置。