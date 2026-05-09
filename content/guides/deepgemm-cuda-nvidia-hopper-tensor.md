---
title: "DeepGEMM"
date: "2024-01-01 00:00:00+08:00"
description: DeepGEMM DeepGEMM CUDA
slug: deepgemm-cuda-nvidia-hopper-tensor
tags:
- hopper
- contiguous
- nvidia
- moe
- jit
draft: false
related_tools:
- dia
- nvidia-ingest
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- qwen1.5-moe
- web codegen scorer
---

## DeepGEMM

DeepGEMM是一个轻量级CUDA库，专为NVIDIA Hopper架构的Tensor Core高效执行FP8格式的通用矩阵乘法 (GEMM) 而设计。它支持普通GEMM和混合专家 (MoE) 模型的分组GEMM。DeepGEMM采用Just-In-Time (JIT)编译方式，安装无需编译，所有内核在运行时编译，代码简洁（核心内核约300行）。 它利用Hopper架构的TMA特性进行优化，并通过CUDA核心进行二级累加来解决FP8精度问题。尽管轻量级，其性能与经过专家调优的库相当甚至更好。

DeepGEMM主要应用于：

* **密集模型:** 用于加速普通密集模型的矩阵乘法运算。
* **MoE模型:** 支持两种分组GEMM方式：连续布局 (contiguous layout)，用于模型训练的前向传递或推理预填充阶段；掩码布局 (masked layout)，用于推理解码阶段，尤其在启用CUDA图且CPU不知道每个专家接收的token数量的情况下。


DeepGEMM的优化策略包括持久化warp specialization、充分利用Hopper架构的TMA特性、高效的block scheduler、以及一些独有的优化技术，例如FFMA SASS插值和非对齐块大小支持，以提高性能和资源利用率。 但需要注意的是，DeepGEMM目前仅支持Hopper架构的GPU，并且对输入矩阵格式有特定要求（NT格式）。