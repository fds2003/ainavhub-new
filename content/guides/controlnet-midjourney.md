---
title: "ControlNet"
date: "2024-01-01 00:00:00+08:00"
description: 'ControlNet++ ControlNet++  MidJourney '
slug: controlnet-midjourney
tags:
- canny
- const
- midjourney
- controlnet
- github
draft: false
related_tools:
- graph-constrained reasoning
- midjourney角色一致性功能
- finecontrolnet
- controlnet++
- claude github webhook
---

## ControlNet++

ControlNet++ 是一款用于图像生成和编辑的全能控制网络。其网络结构支持 10 多种控制类型的文本到图像生成，并能够生成视觉效果媲美 MidJourney 的高分辨率图像。基于原始的 ControlNet 结构，ControlNet++ 设计了两个新模块：

1. 扩展原始 ControlNet，以支持使用相同网络参数的不同图像条件。
2. 支持多个条件输入而不增加计算负担，这对希望详细编辑图像的设计师特别重要，不同的条件使用相同的条件编码器，不增加额外的计算或参数。


经过广泛的实验，ControlNet++ 在控制能力和美感得分上都表现优异，并且已向开源社区发布，供所有人使用。

具体视觉示例如 Openpose、Depth、Canny、Lineart、AnimeLineart 等，以及多控制条件的组合示例如 Openpose+Canny、Openpose+Depth 等。更多详细信息可以在其 GitHub 页面找到：https://github.com/xinsir6/ControlNetPlus/tree/main。

若觉得有用，欢迎给他们点赞支持。