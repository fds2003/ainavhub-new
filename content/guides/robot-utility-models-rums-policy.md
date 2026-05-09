---
title: "Robot Utility Models Robot Utility Models Robot Utility Models"
date: "2024-01-01 00:00:00+08:00"
description: Robot Utility Models Robot Utility Models RUMs
slug: robot-utility-models-rums-policy
tags:
- policy
- learning
- stretch
- multi-modal
- utility
draft: false
related_tools:
- oli
- deeplearning-interview-awesome-2024
- multi-modal researcher
- robot utility models
- finrobot
---

## Robot Utility Models

**Robot Utility Models（RUMs）简介**

Robot Utility Models是一种新兴的 robot policy 框架，旨在实现零-shot（无需微调）在新环境中的机器人政策部署。该模型通过利用大规模数据训练的机器人模型，展示了在真实世界中的操作和导航能力。RUMs 可以直接推广到新的环境中，而无需针对每个新环境进行微调，这与语言或视觉模型在开放世界问题上的灵活性形成对比。

为了高效创建Robot Utility Models，研究者们开发了新工具，以快速收集移动操作任务的数据，并通过多模态模仿学习（multi-modal imitation learning）将这些数据集成到政策中。该系统在Hello Robot Stretch机器人上进行部署，并引入了外部的多模态大型语言模型（mLLM）验证器进行重试操作。研究中训练了五个实用模型，任务包括开柜门、开抽屉、拾起餐巾纸、拾起纸袋和重新定位倾倒的物体。在未见的新环境中，该系统平均成功率达90%。

**使用场景**

Robot Utility Models可以在多个场景中应用：

1. **家庭和日常生活** ：机器人能够自动执行开关柜门、抽屉和拾取物品等家庭杂务。
2. **服务行业** ：在餐厅或酒店中，机器人可以有效地进行物品传递或清理工作。
3. **工业环境** ：在生产线或仓库中，机器人可以处理物品的搬运和整理，尤其是在复杂环境下的作业。
4. **数据收集和环境探测** ：RUMs可用于广泛环境的数据收集和任务测试，如探测和识别不同物体。
5. **教育和研发** ：为机器人学习和研究提供一个可扩展的平台，以测试新的机器人技术。


总之，Robot Utility Models在多种动态环境下的灵活性和高效性使其成为未来智能机器人发展的重要方向。