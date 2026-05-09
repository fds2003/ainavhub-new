---
title: "DualPipe"
date: "2024-01-01 00:00:00+08:00"
description: 'DualPipe DualPipe  DualPipe '
slug: dualpipe-deepseek-v3-pipeline-bubbles
tags:
- bubbles
- overlap
- deepseek-v3
- pipeline
- dualpipe
draft: false
related_tools:
- deepseek-v3
- pi
- dualpipe
---

## DualPipe

## DualPipe 总结性介绍

DualPipe 是 DeepSeek-V3 技术报告中提出的一种创新的**双向流水线并行算法** 。 它的核心优势在于：

* **全重叠正反向计算和通信阶段：** 极大地减少了传统流水线并行中的空闲等待时间（pipeline bubbles）。
* **减少流水线气泡(pipeline bubbles):** 通过更高效的调度，进一步提高了整体的计算效率。


总而言之，DualPipe旨在通过**双向调度和正反向计算通信的重叠** 来提升大规模模型训练中的并行效率。

## DualPipe 使用场景

DualPipe 适用于以下场景：

* **大规模模型训练：** 当模型规模巨大，需要进行流水线并行时，DualPipe 可以显著提高训练速度和效率。
* **对计算效率有较高要求的场景：** 通过减少pipeline bubbles和充分利用计算资源，能够缩短训练时间，降低成本。
* **硬件资源充足的环境：** 因为DualPipe 需要一定的额外内存来存储正反向计算的状态（参数需要两份），所以更适合在硬件资源相对充足的环境中使用。


**使用 DualPipe 时，需要根据模型的具体结构和计算特点，实现自定义的`overlapped_forward_backward` 方法。** 简单来说，你需要在你的模型中，设计并实现一个能够让正向计算和反向计算互相重叠执行的部分。这部分是使用 DualPipe 的关键和难点，需要针对具体的模型架构进行优化。