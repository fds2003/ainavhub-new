---
title: "ASearcher"
date: "2024-01-01 00:00:00+08:00"
description: ASearcher ASearcher RL
slug: asearcher-rl
tags:
- gpu
- frames
- const
- gitalk
- clientsecret
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- frames of mind
- subtitles by fframes
- graph-constrained reasoning
---

## ASearcher

ASearcher是一个专注于大规模在线强化学习（RL）的开源框架，旨在训练和提升搜索代理达到专家级性能。该项目通过提供完全开源的模型权重、详细训练方法和数据合成管道，致力于赋能开发者高效构建定制化的高性能搜索代理。其主要功能和核心创新体现在：引入了基于大型语言模型（LLM）的自动化数据合成代理，能够自主生成高质量、具有挑战性和不确定性的问答对以丰富训练数据；采用了完全异步的Agentic RL框架，有效解决了GPU空闲问题，实现了轨迹收集与模型训练的解耦，从而支持高效的长周期强化学习训练，使得搜索代理能够进行超过40轮的工具调用和生成超过150k令牌的深度搜索；在GAIA、xBench-DeepSearch和Frames等基准测试中，ASearcher展现出领先的性能，其强化学习训练显著提升了代理的表现，并通过简洁的设计便超越了同等规模的其他开源搜索代理。