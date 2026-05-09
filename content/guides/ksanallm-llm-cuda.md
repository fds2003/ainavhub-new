---
title: "KsanaLLM"
date: "2024-01-01 00:00:00+08:00"
description: KsanaLLM KsanaLLM  LLM)
slug: ksanallm-llm-cuda
tags:
- gpu
- nvidia
- face
- llm
- ksanallm
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- dia
- nvidia-ingest
- bananaface
---

## KsanaLLM

**KsanaLLM** 是一个高性能且易于使用的大型语言模型(LLM)推理和服务引擎。它的设计理念是通过优化计算内核、内存管理和任务调度，来提升性能和吞吐量。同时，它也注重灵活性，方便用户集成和使用。

##### 高性能和高吞吐量特性：

1. **优化的CUDA内核** ：利用了来自多个开源项目的高性能内核，包括[vllm](<https://github.com/vllm-project/vllm>)、[TensorRT-LLM](<https://github.com/NVIDIA/TensorRT-LLM>)和[FastTransformer](<https://github.com/NVIDIA/FasterTransformer>)。
2. **有效管理注意力键值内存** ：采用了PagedAttention机制。
3. **动态批处理** ：详细优化了任务调度和内存使用。
4. **Prefix caching支持** （实验性功能）。
5. **充分测试** ：已在A10、A100等GPU上进行了足够的测试。


##### 灵活性和易用性：

1. **无缝集成Hugging Face模型** ：支持多种权重格式，如pytorch和SafeTensors。
2. **支持多种解码算法** ：包括并行采样、束搜索等，适用于高吞吐量的服务。
3. **多GPU张量并行** ：支持多GPU的张量并行。
4. **流式输出** ：支持流式输出。
5. **兼容OpenAI API** ：提供与OpenAI兼容的API服务器。
6. **支持多种硬件** ：NVIDIA GPU和华为Ascend NPU。


##### 支持的模型：

* LLaMA 7B/13B & LLaMA-2 7B/13B & LLaMA3 8B/70B
* Baichuan1 7B/13B & Baichuan2 7B/13B
* Qwen 7B/14B & QWen1.5 7B/14B/72B


##### 支持的硬件：

* Nvidia GPU: A10, A100
* Huawei Ascend NPU: 910B


##### 使用场景：

1. **高性能推理服务** ：适用于需要高并发、大批量处理的推理请求场景。
2. **动态批处理应用** ：对于多任务并发请求进行有效的调度和处理。
3. **流式输出应用** ：需要实时响应和输出的大型语言模型应用。
4. **多GPU环境** ：需要充分利用多GPU算力的复杂模型推理任务。
5. **跨平台兼容** ：能够在不同硬件平台（如NVIDIA GPU和华为Ascend NPU）上无缝运行。


##### 使用步骤概要：

1. **创建Docker容器和运行时环境** ：根据使用的硬件平台（Nvidia GPU或Huawei Ascend NPU），分别配置环境。
2. **克隆源码** ：通过Git克隆KsanaLLM项目。
3. **编译代码** ：根据硬件平台选择相应的编译指令。
4. **运行服务** ：配置模型目录和环境变量后启动服务。
5. **推理测试** ：通过一个简单的示例测试推理功能。
6. **分发** ：创建和安装Python包进行分发。


KsanaLLM为开发者提供了高性能、易用且灵活的LLM推理和服务解决方案，适用于大规模、高性能的人工智能应用。