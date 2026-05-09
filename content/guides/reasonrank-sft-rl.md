---
title: "ReasonRank"
date: "2024-01-01 00:00:00+08:00"
description: ReasonRank ReasonRank SFT
slug: reasonrank-sft-rl
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- location.pathname
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## ReasonRank

ReasonRank是一款专为推理密集型排序任务设计的段落重排序器，其核心亮点在于通过一个自动化推理密集型训练数据合成框架生成高质量数据，并采用冷启动SFT和多视图排序奖励RL的两阶段训练方法，赋予模型强大的列表式排序能力；该项目发布了reasonrank-7B和reasonrank-32B模型，以及13k的完整训练数据（包含SFT和RL数据），并在BRIGHT基准测试中取得了40.8的SOTA性能，其提供的完整代码库支持模型推理、SFT和RL训练，可用于训练段落重排序器和检索器。