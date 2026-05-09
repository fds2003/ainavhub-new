---
title: "Frames of Mind Frames of Mind"
date: "2024-01-01 00:00:00+08:00"
description: Frames of Mind  Frames of Mind
slug: frames-mind-openai-api-t-sne
tags:
- frames
- const
- gitalk
- python
- clientsec
draft: false
related_tools:
- frames of mind
- subtitles by fframes
- graph-constrained reasoning
- python a2a
- claude code sdk for python
---

## Frames of Mind

《Frames of Mind》是一个关于可视化思维过程的项目，主要通过以下步骤实现：

1. **保存思维链** ：将思维过程中的每一步以文本形式记录下来。
2. **转换文本为嵌入** ：使用OpenAI API将文本转换为嵌入向量。
3. **绘制嵌入** ：应用t-SNE算法，按顺序绘制这些嵌入，从而可视化思维的流动。


该项目展示了一个智能体（称为R1）在回答问题时的思维过程。例如，当R1被要求描述自行车的工作原理时，项目能够展示其思维连接的可视化图。

此外，项目通过计算思维过程中相邻两个思维步骤之间的相似度，来分析思维的跳跃幅度。这些数据图可以分为几个阶段，包括“搜索”阶段（思维跳跃较大）、稳定的“思考”阶段和“结论”阶段。

项目中使用了一系列提示来引导R1的思考，比如“描述自行车的工作原理”、“设计一种新型交通工具”等，用户可以从数据文件夹中获取这些思维链的详细信息。

最后，用户需要安装相关的Python包，并通过提供的脚本从公共聊天界面轻松提取数据。