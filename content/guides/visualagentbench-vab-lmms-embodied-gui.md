---
title: "VisualAgentBench"
date: "2024-01-01 00:00:00+08:00"
description: VisualAgentBench VisualAgentBench (VAB)  LMMs
slug: visualagentbench-vab-lmms-embodied-gui
tags:
- vab-css
- webarena
- visualwebarena
- vab-minecraft
- gui
draft: false
related_tools:
- gpt-4.1 prompting guide
- agentcpm-gui
- gui-actor
- ollama-gui
- languine
---

## VisualAgentBench

**VisualAgentBench (VAB)** 是首个专门针对大型多模态模型（LMMs）作为视觉基础代理进行系统评估与开发的基准工具。它包含了5个不同的环境，覆盖3种典型的视觉代理任务类型，包括：Embodied（具身）、GUI（图形用户界面）和视觉设计。具体环境包括：

* VAB-OmniGibson（具身）
* VAB-Minecraft（具身）
* VAB-Mobile（图形用户界面）
* VAB-WebArena-Lite（图形用户界面，以WebArena和VisualWebArena为基础）
* VAB-CSS（视觉设计）


相比于其前身AgentBench，VAB强调了视觉输入的重要性，并通过在行为轨迹上的训练来促进基础代理能力的发展，使得开放的大型语言模型（LLMs）和多模态模型（LMMs）能够更好地执行复杂的代理任务指令。

##### 使用场景

VisualAgentBench 适用于以下场景：

1. **研究和开发** ：为研究人员和开发者提供一个标准化的平台，以评估和优化多模态模型在视觉任务中的性能。
2. **行为克隆训练** ：借助轨迹训练集，开发更为强大的视觉基础代理，使其能够更好地模拟人类行为。
3. **智能代理系统评测** ：适用于开发和测试需要视觉理解能力的智能代理系统，例如家居机器人或游戏代理。
4. **多任务学习** ：为多任务微调提供数据集，帮助加速模型在不同视觉任务上的适应。


总之，VAB 是推进大型多模态模型在视觉领域应用的强大工具，能够为其发展与评估提供重要支持。