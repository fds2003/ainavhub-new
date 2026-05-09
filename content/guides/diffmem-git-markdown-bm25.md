---
title: "DiffMem"
date: "2024-01-01 00:00:00+08:00"
description: DiffMem DiffMemAI、Git，Markdown，Git，BM25。“”，...
slug: diffmem-git-markdown-bm25
tags:
- diffmem
- git
- const
- gitalk
- clientsecret
draft: false
related_tools:
- diffmem
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## DiffMem

DiffMem是一个为AI代理和对话系统设计的轻量级、基于Git的差分记忆后端，其核心在于利用Markdown文件实现人类可读的知识存储，通过Git的版本控制能力追踪记忆的随时间演变，并结合内存中的BM25索引提供快速且可解释的检索。该项目通过将知识的“当前状态”存储在可编辑文件中，同时将历史变更保留在Git的提交图中，实现了高效的“现在”视图查询和按需深入历史的能力，解决了传统AI记忆系统在处理长期、演变知识时可能出现的臃肿和低效问题。其关键特性包括专注于当前状态以优化查询和令牌效率、通过Git差异实现记忆演变的智能追踪、利用Git的分布式特性确保数据持久性和可移植性，并允许AI代理根据需求选择加载当前信息或深入历史，从而在保持上下文窗口精简的同时实现丰富的时态推理。