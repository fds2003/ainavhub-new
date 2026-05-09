---
title: "torchtitan"
date: "2024-01-01 00:00:00+08:00"
description: 'torchtitan torchtitan  PyTorch '
slug: torchtitan-pytorch-llms-megatron-megablocks
tags:
- pytorch
- tensorbo
- sharding
- megatron
- megablocks
draft: false
related_tools:
- ttt-lm-pytorch
- opendeepsearch
- train-deepseek-r1
- deepseek rag chatbot
- deepsearcher
---

## torchtitan

`torchtitan` 是一个以 PyTorch 为基础的大型语言模型（例如 LLMs）训练的概念验证项目。它展示了 PyTorch 最新的分布式训练特性，并以一个简洁、最小化的代码库呈现。`torchtitan` 不是旨在取代 Megatron、Megablocks、LLM Foundry、Deepspeed 等其他大规模训练代码库，而是希望这些代码库能快速采纳其中展示的特性。`torchtitan` 不太可能围绕它建立一个大型社区。

以下是其一些核心特点和功能:

* **易于理解和使用** : 设计初衷是为了让开发者能够容易地理解、使用并且为不同的训练目的扩展它。
* **最小改动** : 对模型代码改动很小，就可以应用1D、2D或不久后的3D并行。
* **模块化组件** : 相比于单一庞大的代码库，`torchtitan`采用模块化组件。
* **快速入门** : 几分钟之内就可以开始使用，而不是几小时。


`torchtitan`的一些关键功能包括：

1. FSDP2 带有 per param sharding
2. Tensor 并行
3. 选择性的层与操作符激活检查点
4. 分布式检查点
5. 自带2种数据集（45K - 144M）
6. 通过TensorBoard展示GPU使用情况、MFU、每秒令牌数等
7. 学习率调度器、meta init、可选Fused RMSNorm
8. 所有选项可以通过toml文件轻松配置
9. 可以直接加载到`torchtune`中进行精调的互操作检查点


还计划加入的功能有异步检查点、FP8支持、上下文并行、3D Pipeline 并行、`torch.compile` 支持、可扩展的数据加载解决方案。

## 使用场景

那么，`torchtitan`适用于哪些场景呢？简而言之，当你需要利用PyTorch进行大规模语言模型训练时，`torchtitan`会是一个很好的选择，尤其是在以下情况：

* 当你需要一个清晰、易于理解且可扩展的代码库进行训练。
* 当你想尝试PyTorch最新的分布式训练特性，并希望最小化对现有模型代码的更改。
* 当你想快速搭建起一个训练环境，而不想花费太多时间在设置和配置上。


如果你在寻找一个与众不同的、以PyTorch为基础的大模型训练工具，并且对学习和实验最新的分布式训练技术有兴趣，`torchtitan`或许值得你尝试。不过，由于它仍然是一个处于预发布状态并在积极开发中的项目，所以在一些生产环境中可能需要权衡其稳定性和实验性特征。