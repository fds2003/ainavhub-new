---
title: "Fast-LLM"
date: "2024-01-01 00:00:00+08:00"
description: Fast-LLM Fast-LLM  LLM
slug: fast-llm-llm-deepspeed-megatron-flashattention
tags:
- gpu
- tflops
- meta
- pre
- math.py
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- meta agents research environments
- meta llama 3
- meta lingua
---

## Fast-LLM

Fast-LLM 是一个用于快速大语言模型（LLM）训练的代码库，整合了多个技术组件，包括Deepspeed、Megatron、FlashAttention、CudaFusionKernel以及编译器，并具有动态策略选择功能。该代码库的主要特点和使用步骤如下：

##### 使用步骤：

1. **计算参考指标** ：通过修改并运行 `pre_train_math.py` 文件中的常量，获取模型大小、GPU内存使用情况、训练时间和推荐策略。
2. **准备模型和数据** ：
* **准备模型** ：将LLAMA模型从Meta格式转换为Huggingface（HF）格式，再从HF格式转换为Megatron格式。其他模型可以使用类似的转换工具。
* **准备数据** ：数据项以jsonl格式存储，并可以通过 `preprocess_data.py` 进行预处理。
3. **训练模型** ：根据1中获取的推荐参数和策略，修改并运行 `3.pretrain_xxxxxx.sh` 脚本进行模型训练。
4. **计算TFLOPs** ：通过修改并运行 `aft_train_math.py` 文件中的常量来计算训练过程中的TFLOPs。
5. **转换模型至Huggingface Transformers格式** ：使用 `deepspeed_to_transformers.py` 脚本将训练结束后的模型转换为HF格式。


##### 使用场景：

1. **大模型训练** ：Fast-LLM 支持快速高效的大语言模型训练，适用于对大规模数据和模型的训练任务。
2. **模型转换和兼容处理** ：方便地在不同框架和格式间转换模型，适用于需要在不同平台和工具间进行模型迁移的场景。
3. **快速评估和策略选择** ：能够根据模型规模和硬件资源动态选择训练策略，适用于需要对多个训练方案进行快速评估和选择的情况。


该项目致力于提高大语言模型的训练效率，并且计划支持更多的模型（如Baichuan2）及指令调优功能，并与其他代码库在不同设置下进行TFLOPs基准测试。