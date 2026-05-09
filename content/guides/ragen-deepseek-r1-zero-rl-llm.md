---
title: "RAGEN"
date: "2024-01-01 00:00:00+08:00"
description: RAGEN RAGEN DeepSeek-R1(-Zero)
slug: ragen-deepseek-r1-zero-rl-llm
tags:
- deepseek-r1
- zero
- llm
- ragen
- rl
draft: false
related_tools:
- train-deepseek-r1
- deepseek-r1
- zerosearch
- absolute zero
- open reasoner zero
---

## RAGEN

RAGEN（通用推理智能体训练框架）是首次复现DeepSeek-R1(-Zero)方法的工具，旨在训练具有智能体特性的模型。RAGEN结合了增强学习（RL）、大语言模型（LLM）和智能体的优势，致力于推动智能体训练的研究与应用。

##### RAGEN框架概述

RAGEN的框架包括两个主要阶段：**回滚阶段** 和**更新阶段** 。

1. **回滚阶段** ：

* 此阶段同时处理环境生成的状态（环境令牌）和由大语言模型生成的思考和行动令牌。
* 模型根据给定的状态序列生成行动及思考，然后仅将生成的动作发送到模拟器以获取后续状态和奖励。
* 经过多轮回滚，生成的状态和奖励序列最终用于训练模型。
2. **更新阶段** ：

* 在该阶段计算并反向传播生成令牌的损失，并基于之前的轨迹对奖励进行解析和计算。


##### 使用场景

RAGEN可广泛应用于各类需要推理和决策的智能体任务，例如：

* **游戏智能体** ：比如在Sokoban等运输类益智游戏中，智能体需要推理出最佳策略来完成任务。
* **机器人控制** ：在复杂环境中训练机器人进行自主导航和操作。
* **决策支持系统** ：帮助人类在复杂决策中提供建议，提升决策效率。


总之，RAGEN具备强大的推理能力和灵活的应用潜力，是智能体研究和应用的有效工具。