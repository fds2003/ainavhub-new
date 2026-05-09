---
title: "GUI-Actor GUI-Actor"
date: "2024-01-01 00:00:00+08:00"
description: GUI-Actor ， GitHub ，、。 GUI-Actor GUI-Actor (VLM)， (GUI) 。 GUI ，...
slug: gui-actor-github-vlm-gui
tags:
- github
- vlm
- gui
- gui-actor
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## GUI-Actor

好的，我来分析一下这个 GitHub 仓库的内容，并总结其主要功能、核心要点和关键特性。

**GUI-Actor 项目总结**

GUI-Actor 是一个视觉语言模型 (VLM)，专门用于图形用户界面 (GUI) 的操作和交互。该项目旨在克服现有基于坐标生成的 GUI 交互方法的局限性，提出了一种无需坐标的、基于动作头的视觉定位方法，并使用一个验证器来选择最佳操作区域，从而更接近人类与数字界面的交互方式。 该项目通过动作注意力机制增强的VLM实现无需坐标的GUI交互，从而更贴近人类行为方式。通过引入定位验证器，该项目能够进一步提升性能，并且在多个GUI定位基准测试中达到领先水平，并且在处理未见过的屏幕分辨率和布局时，依然保持有效性和泛化能力。

**主要功能、核心要点和关键特性：**

1. **坐标无关的 GUI 定位：** 提出了一种新的方法，避免了直接生成屏幕坐标，而是通过注意力机制直接定位和交互目标元素，更符合人类直觉。
2. **动作头增强的 VLM：** 通过添加动作头到 VLM 中，实现了坐标无关的 GUI 定位。
3. **候选区域生成：** 能够一次性生成多个候选的操作区域，为后续的搜索策略提供了更大的灵活性。
4. **定位验证器：** 设计了一个验证器来评估和选择最合理的操作区域，可以与其他定位方法集成以进一步提升性能。
5. **SOTA 性能：** 在多个 GUI 动作定位基准测试中取得了最先进的性能，尤其是在 ScreenSpot-Pro 数据集上超越了更大的模型。
6. **模型和代码发布：** 提供了基于 Qwen2-VL 的模型训练、推理代码和模型权重。
7. **支持多种 backbone VLM** ：支持基于 Qwen2-VL 和 Qwen2.5-VL 的模型。