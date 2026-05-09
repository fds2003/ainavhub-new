---
title: "ComoRAG"
date: "2024-01-01 00:00:00+08:00"
description: ComoRAG ComoRAG （RAG），，、。，，，，...
slug: comorag-rag
tags:
- comorag
- const
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
- clientsecret
draft: false
related_tools:
- comorag
- mora
- graph-constrained reasoning
- vidorag
- agentic rag
---

## ComoRAG

ComoRAG 是一个受认知启发的检索增强生成（RAG）框架，旨在解决长文档和多文档场景中的有状态长篇叙事推理问题，涵盖问答、信息提取和知识图谱构建。其核心突破在于通过模拟大脑记忆过程，实现迭代推理循环，即在遇到障碍时生成探测查询以探索新证据路径，并将新检索到的证据整合到全局记忆池中，逐步构建连贯上下文，从而有效应对传统RAG在处理复杂故事情节和动态实体关系时存在的局限性。该框架在四个挑战性的长上下文叙事基准测试中表现出色，相比最强基线实现了高达11%的性能提升，尤其擅长需要全局理解的复杂查询。ComoRAG还具备支持多种大语言模型和嵌入模型、图增强检索、灵活的数据处理以及模块化设计的关键特性，适用于学术研究和实际应用。