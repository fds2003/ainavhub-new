---
title: "DeepEP"
date: "2024-01-01 00:00:00+08:00"
description: DeepEP DeepEP Mixture-of-Experts, MoE
slug: deepep-mixture-of-experts-moe-expert-parallelism
tags:
- gpu
- rdma
- hopper
- infiniband
- deepseek-v3
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- deepseek-v3
- ai expert roadmap
- qwen1.5-moe
---

## DeepEP

DeepEP是一个专为混合专家（Mixture-of-Experts, MoE）和专家并行（Expert Parallelism, EP）设计的通信库。它提供了高吞吐量和低延迟的全互联GPU内核，主要用于MoE的调度和组合。该库还支持低精度操作，包括FP8格式。

为使其与DeepSeek-V3论文中提出的基于组限制的门控算法相一致，DeepEP提供了一套针对不对称域带宽转发优化的内核，例如从NVLink域转发到RDMA域的数据。这些内核能够实现高吞吐量，适用于训练和推理预填充任务。此外，它们还支持流处理器(SM)数量的控制。

对于延迟敏感的推理解码，DeepEP包含一组低延迟的内核，使用纯RDMA以最小化延迟。此外，该库引入了一种基于钩子的通信与计算重叠方法，不会占用任何SM资源。

##### 使用场景

DeepEP的典型使用场景包括：

1. **模型训练** ：在模型训练阶段利用低延迟的通信以提高数据传输的效率。
2. **推理预填充** ：在推理时通过高吞吐量的MoE调度和组合加速模型的推理过程。
3. **分布式计算环境** ：在与多GPU分布式架构（如Hopper GPU和InfiniBand网络）结合使用中，提高跨节点的通信效率。


总的来说，DeepEP旨在通过优化的内核和通信策略，提高专家模型的训练和推理性能，特别是在需要处理大量数据时。