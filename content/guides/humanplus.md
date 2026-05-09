---
title: "HumanPlus"
date: "2024-01-01 00:00:00+08:00"
description: HumanPlus HumanPlus R...
slug: humanplus
tags:
- const
- onr
- humanplus
- gitalk
- zhao
draft: false
related_tools:
- graph-constrained reasoning
- reasonrank
- visionreward
- pi
- wuhr ai ops
---

## HumanPlus

HumanPlus项目是一项由斯坦福大学研究团队开发的完整系统，旨在让类人机器人从人类数据中学习动作和自主技能。该系统通过以下几个步骤实现：

1. **低级策略培训** ： 使用已有的40小时人类动作数据集，在模拟环境中通过强化学习训练出低级策略。
2. **真实世界应用** ： 将这些策略转移到现实中，使类人机器人仅使用RGB摄像头实时模仿和跟随人类的身体和手部动作。
3. **数据收集和任务学习** ： 通过模仿，类人机器人可以收集全身数据，从而在现实世界中学习不同的任务。使用收集到的数据，通过监督行为克隆训练技能策略，使机器人能够自主完成不同任务。


应用示例包括：穿鞋站立和行走、从仓库架上卸载物品、折叠卫衣、排列物品、打字以及向另一台机器人问好。这些任务的成功率在60-100%之间，使用了多达40次演示。

研究团队包括Zipeng Fu、Qingqing Zhao、Qi Wu、Gordon Wetzstein和Chelsea Finn，并得到了多方支持和资助，如斯坦福机器人中心、Inspire-Robots、Unitree Robotics以及ONR和AI研究所的资助。