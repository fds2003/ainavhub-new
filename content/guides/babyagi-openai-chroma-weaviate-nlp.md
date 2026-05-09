---
title: "babyagi babyagi BabyAGI"
date: "2024-01-01 00:00:00+08:00"
description: babyagi BabyAGI OpenAI
slug: babyagi-openai-chroma-weaviate-nlp
tags:
- task-driven
- const
- gitalk
- clientsecret
- agent
draft: false
related_tools:
- graph-constrained reasoning
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
---

#### babyagi

BabyAGI是一个使用OpenAI和矢量数据库（如Chroma或Weaviate）创建、优先排序和执行任务的AI任务管理系统示例。该系统的主要思想是根据先前任务的结果和预定义的目标创建任务。脚本使用OpenAI的自然语言处理（NLP）能力根据目标创建新的任务，并使用Chroma/Weaviate存储和检索任务结果以便获得上下文。BabyAGI是Task-Driven Autonomous Agent（2023年3月28日）的简化版本。 BabyAGI通过运行一个无限循环来工作，包括以下步骤：从任务列表中获取第一个任务，将任务发送给执行代理，执行代理使用OpenAI的API基于上下文完成任务，丰富结果并将其存储在Chroma/Weaviate中，根据目标和先前任务的结果创建新任务并重新排序任务列表。BabyAGI还提供了如何使用脚本的说明，包括设置OpenAI API密钥和模型变量等步骤。