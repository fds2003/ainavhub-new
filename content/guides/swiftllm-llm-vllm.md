---
title: "swiftLLM swiftLLM SwiftLLM"
date: "2024-01-01 00:00:00+08:00"
description: swiftLLM SwiftLLM LLM
slug: swiftllm-llm-vllm
tags:
- llama3
- distserve
- lightllm
- deepspeed-mii
- transformers
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- lightllm
---

## swiftLLM

SwiftLLM是一个小而强大的大型语言模型（LLM）推理系统，专门为研究目的设计。尽管其代码量仅为vLLM的2%（约2k行代码），SwiftLLM能够实现与vLLM相当的性能。

## 为什么选择SwiftLLM

目前已有多个开源的LLM服务框架，如HuggingFace Transformers、vLLM、LightLLM、DistServe和DeepSpeed-MII。这些框架主要面向生产环境，提供丰富的功能，但代码复杂度高，理解和修改困难。SwiftLLM则不同，旨在为研究提供一个简洁、高效的平台，易于理解和修改。

## 功能列表

SwiftLLM目前支持以下功能：

* 迭代调度和选择性批处理
* PagedAttention机制
* 支持LLaMA/LLaMA2/LLaMA3模型及其变种
* 预填充和解码的Piggybacking
* Flash attention和Paged attention v2（也称为Flash-Decoding）


未来计划支持的功能：

* 张量并行和流水线并行


为了保持代码库的简洁，SwiftLLM不支持以下功能，需要自行实现：

* 量化
* LoRA
* 多模态
* 非LLaMA架构的模型
* 除贪婪采样外的其他采样方法
* NVIDIA GPU之外的硬件支持


SwiftLLM并非面向生产的全能解决方案，更适合作为研究项目的基础。

## 使用场景

SwiftLLM主要适用于以下研究场景：

1. **基本推理** ：提供基础的LLM推理功能，适合于验证新算法或模型的效果。
2. **模型优化与加速研究** ：通过其简洁的代码结构，研究和实现新的模型加速和优化方法。
3. **特定应用研究** ：因其易于修改和扩展的特点，可以快速实现特定应用场景下的定制化需求。


## 性能

尽管代码量小，SwiftLLM在多个场景下达到了与vLLM相当甚至更优的性能。

1. **单次前向操作** ：使用LLaMA-3 7B模型进行测试，SwiftLLM在NVIDIA A100 80G PCIE和RTX 4090 GPU上表现与vLLM相当甚至更好。
2. **在线服务** ：使用ShareGPT数据集进行在线服务测试，SwiftLLM在A100 80G PCIE上表现与vLLM相当，而在RTX 4090上显著优于vLLM，主要因其控制平面的低开销。


总之，SwiftLLM提供了一个高效、简洁且易于扩展的平台，适合研究人员进行LLM相关的各类研究工作。