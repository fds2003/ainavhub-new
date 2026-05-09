---
title: "stable-diffusion.cpp"
date: "2024-01-01 00:00:00+08:00"
description: stable-diffusion.cpp stable-diffusion.cpp C/C++
slug: stable-diffusion.cpp-stable-diffusion-ggml-llama.cpp
tags:
- ggml
- windows
- diffusion
- android
- sd2.x
draft: false
related_tools:
- windows-use
- claude code for windows
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- ufo-ufo是一个用于windows操作系统交互的ui聚焦双agent框架
---

## stable-diffusion.cpp

`stable-diffusion.cpp`是一个纯C/C++实现的库，用于推断（即生成图像）Stable Diffusion模型。它是基于[ggml](<https://github.com/ggerganov/ggml>)构建的，工作方式类似于[llama.cpp](<https://github.com/ggerganov/llama.cpp>)。这个库能够在不需要外部依赖的前提下，直接运行Stable Diffusion，包括支持SD1.x, SD2.x 和 SDXL等不同版本的模型。这使得它非常轻量，适合在各种不同的平台（包括Linux、Mac OS、Windows和Android）上使用。

##### 为什么要使用stable-diffusion.cpp?

1. **无需外部依赖：**它是纯C/C++实现，不需要安装Python或其他依赖。
2. **轻量级：**非常适合在资源受限的环境中使用。
3. **跨平台支持：**支持Linux、Mac OS、Windows和Android等平台。
4. **支持多种模型：**能够运行SD1.x, SD2.x和SDXL等多个版本的Stable Diffusion模型。
5. **高效的内存使用：**通过Flash Attention和其他内存优化措施，使得其在生成512x512图片时只需约2.3GB的内存。
6. **支持GPU加速：**完整的CUDA和Metal后端支持，可以利用GPU加速图像生成过程。
7. **支持模型的直接加载：**无需将模型转换至`.ggml`或`.gguf`格式，直接支持ckpt、safetensors 和 diffusers模型/检查点的加载。
8. **丰富的特性支持：**包括原始的`txt2img`和`img2img`模型，负面提示（Negative prompt）、LoRA支持、Latent Consistency Models支持等。


##### 使用场景

* **无服务器或容器环境：**在不易安装Python或其他大型依赖的环境中，如docker容器、微型虚拟机或嵌入式设备上运行Stable Diffusion。
* **跨平台应用开发：**开发跨平台的图片生成应用时，尤其是需要嵌入式系统或移动设备上的应用。
* **资源受限的环境：**在只有有限内存或处理能力的系统上进行图片生成，如使用老旧的硬件或低成本的云服务器。
* **高度定制化的图像生成流程：**需要高度定制化处理流程，或在图像生成过程中加入特定的算法和处理步骤。
* **研究和学习：**用于学习和探索Stable Diffusion模型的运行机制，或在教育和研究领域进行模型的实验和测试。


##### 如何使用

1. 从最新的[release](<https://github.com/leejet/stable-diffusion.cpp/releases/latest>)中下载构建好的可执行程序（如果适用）。
2. 或者自行构建，通过克隆仓库并编译源代码来得到可执行文件。
3. 遵循指令下载所需的模型权重文件（例如Stable Diffusion v1.4, v1.5, 或v2.1等）。
4. 通过命令行参数，指定模型文件路径、生成模式（如`txt2img`或`img2img`）、输入提示等信息，运行生成过程。


`stable-diffusion.cpp`为运行Stable Diffusion提供了一个高效、轻量级、无需Python环境的解决方案，特别适合于需要在不同平台或资源受限的环境下进行图像生成的应用场景。