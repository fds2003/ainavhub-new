---
title: "Mira"
date: "2024-01-01 00:00:00+08:00"
description: Mira MiraPCG ARC，、，Sora。（T2V），Mira： ：2（16），Mira，10、20。 ：...
slug: mira-pcg-arc-sora-t2v
tags:
- miradata
- t2v
- mira
- arc
- pcg
draft: false
related_tools:
- mira
- archon
- ii-researcher
- ai-researcher
- research
---

## Mira

Mira是腾讯PCG ARC实验室的一个新项目，旨在探索高质量、长时长的视频生成，类似Sora。与现有的文本到视频（T2V）生成框架相比，Mira具有几项显著的优势：

1. **扩展的序列长度** ：大多数框架只能生成2秒（16帧）的视频，而Mira设计生成的序列更长，可以达到10秒、20秒甚至更多。
2. **增强的动态效果** ：Mira能够生成具有丰富动态和复杂动作的视频，超越当前视频生成技术中较为静态的输出。
3. **强大的3D一致性** ：即使在动态的场景和物体交互过程中，Mira也能保持物体的3D完整性，避免明显的失真。


需要注意的是，Mira目前仍处于实验阶段，与Sora在许多关键领域存在显著差距，例如互动对象和环境、持续的物体一致性等。

Mira项目的目标是探索和改进整个数据-模型-训练管道，并初步展示一些Sora的特性，从而推动创新并使内容创作领域更加大众化和先进。

此外，MiraData是一个专为长视频生成任务设计的大规模视频数据集，包含长时长和结构化的字幕。主要特点包括：

1. **长视频时长** ：与以往通常不超过6秒的视频片段不同，MiraData专注于1到2分钟的未剪辑视频段。
2. **结构化的字幕** ：每个视频都有详细的字幕，平均长度为349字，从多个角度丰富地描述视频内容。


MiraData目前包括两个场景：游戏和城市/风景探索，未来将添加更多场景并提高数据集的质量。

github 地址：https://github.com/mira-space/MiraData