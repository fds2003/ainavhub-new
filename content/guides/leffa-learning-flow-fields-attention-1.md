---
title: "Leffa"
date: "2024-01-01 00:00:00+08:00"
description: Leffa Leffa learning flow fields in attention
slug: leffa-learning-flow-fields-attention-1
tags:
- clientsecret
- learning
- clientid
- ba3af7dcb9cbfcf08
- in
draft: false
related_tools:
- deeplearning-interview-awesome-2024
- infiniteyou
- computer using agent sample app
- theoremexplainagent
- gamingagent
---

## Leffa

Leffa是一个统一的框架，用于可控的人物图像生成，能够精确地控制人物的外观（如虚拟试穿）和姿势（如姿势迁移）。 它的核心在于通过学习注意力中的流动场（learning flow fields in attention），即在训练过程中显式地引导目标查询去关注参考图像中正确的对应区域。具体来说，Leffa通过在基于扩散的基线模型之上添加一个正则化损失来实现这一点。

**使用场景:**

* **虚拟试穿 (Virtual Try-On):** 将服装应用于目标人物图像，模拟试穿效果。
* **姿势迁移 (Pose Transfer):** 将目标人物图像的姿势迁移到参考人物图像上。
* **可控的人物图像生成:** 允许用户精确控制生成人物图像的外观和姿势。