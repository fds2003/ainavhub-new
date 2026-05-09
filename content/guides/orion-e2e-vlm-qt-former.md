---
title: "ORION"
date: "2024-01-01 00:00:00+08:00"
description: ORION ORION （E2E），-（VLM），。E2E，。ORION QT-Former （）、（LL...
slug: orion-e2e-vlm-qt-former
tags:
- e2e
- vlm
- const
- gitalk
- vqa
draft: false
related_tools:
- fastvlm
- graph-constrained reasoning
- cursor auto register
- vibegit
- mcp registry
---

## ORION

ORION 是一个端到端（E2E）的自动驾驶框架，它利用视觉-语言模型（VLM）进行指令引导的动作生成，从而实现更强的因果推理能力。现有E2E自动驾驶方法由于因果推理能力有限，在交互式闭环评估中难以做出正确的决策。ORION 通过结合 QT-Former （用于聚合长期历史上下文）、大型语言模型（LLM，用于驾驶场景推理）和生成式规划器（用于精确轨迹预测）来解决这个问题。ORION 将推理空间和动作空间对齐，从而对视觉问答 (VQA) 和规划任务进行统一的 E2E 优化。

**ORION 的使用场景：**

* **自动驾驶汽车：** 作为自动驾驶系统的核心，ORION 可以根据视觉输入和语言指令生成车辆的行驶轨迹，从而实现车辆的自动驾驶。
* **模拟驾驶环境：** ORION 可以用于模拟各种驾驶场景，帮助开发者测试和改进自动驾驶算法。
* **机器人导航：** 除了自动驾驶汽车，ORION 还可以应用于其他机器人导航任务，例如无人机、扫地机器人等。


**总结来说，ORION 通过利用 VLM 的强大理解和推理能力，提高了 E2E 自动驾驶系统在复杂场景下的决策能力和安全性。**