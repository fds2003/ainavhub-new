---
title: "MLC LLM MLC LLM MLC LLM"
date: "2024-01-01 00:00:00+08:00"
description: MLC LLM MLC LLM Large Language Models
slug: mlc-llm-large-language-models
tags:
- gpu
- macos
- ios
- mali
- xtx
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
---

## MLC LLM

MLC LLM（机器学习编译 Large Language Models，即大型语言模型的机器学习编译）功能是一个高性能的、通用的部署解决方案，它允许任何大型语言模型以原生API和编译器加速的方式部署。它的使命是使每个人都能够在自己的设备上以机器学习编译技术开发、优化和部署AI模型。

##### 通用部署

MLC LLM支持多种平台和硬件：

* 在Linux/Windows上支持AMD GPU、NVIDIA GPU和Intel GPU；
* 在macOS上支持AMD GPU（通过Metal），Apple GPU和Intel GPU（iGPU同样通过Metal）；
* 在Web浏览器上通过WebGPU和WASM进行支持；
* 在iOS/iPadOS上，支持在Apple A系列GPU上通过Metal进行部署；
* 在Android上，支持在Adreno GPU和Mali GPU上通过OpenCL进行部署。


##### 可扩展性

MLC LLM在NVIDIA和AMD GPU、云端和游戏GPU上都能实现扩展。例如，它能在NVIDIA RTX 4090和AMD Radeon 7900 XTX上运行4-bit CodeLlama-34B和Llama2-70B模型，并在多达8个GPU上对fp16和4-bit CodeLlama-34以及Llama2-70B模型进行扩展运行。

##### 使用场景

MLC LLM可以在以下情况下使用：

* **本地部署AI模型：** 当需要在自己的设备上本地运行大型语言模型时，MLC LLM提供了一种高效且易于部署的解决方案。

* **高性能计算需求：** 对于需要高性能加速的应用，如大规模数据处理或AI推理任务，MLC LLM通过编译器加速，优化了性能。

* **跨平台应用开发：** 当需要开发可以跨不同硬件和操作系统运行的AI应用时，MLC LLM支持多平台部署，简化了开发过程。

* **研究与教学：** 对于研究人员和教育工作者，MLC LLM提供了一个开放和高效的工具，用于探索和教授机器学习模型的开发与部署。


MLC LLM提供了一个通用、高性能且可扩展的解决方案，适用于需要本地部署、高性能计算、跨平台部署或用于研究与教学的大型语言模型应用场景。