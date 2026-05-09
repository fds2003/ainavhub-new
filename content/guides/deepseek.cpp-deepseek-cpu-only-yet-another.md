---
title: "deepseek.cpp"
date: "2024-01-01 00:00:00+08:00"
description: 'deepseek.cpp deepseek.cpp  DeepSeek '
slug: deepseek.cpp-deepseek-cpu-only-yet-another
tags:
- model
- deepseek-r1
- python
- language
- yalm
draft: false
related_tools:
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
- granite code models
---

## deepseek.cpp

`deepseek.cpp` 是一个针对 DeepSeek 大型语言模型家族的 CPU-only 推理实现，使用 C++ 语言编写，基于 Yet Another Language Model（YALM）。该项目的目标是为了学习和娱乐。

##### 项目背景

最初，作者在 `yalm` 中添加 DeepSeek 支持，但是由于修改量较大，可能会影响到原项目的简洁性，因此决定将其分叉为一个独立、小巧的代码库。这使得在低端 CPU-only 设备上使用 DeepSeek 成为可能，因为该程序不依赖于 Python 运行时，且代码量相较于其他推理引擎（如 llama.cpp 和 vllm）要小得多。

##### 模型支持

支持的模型包括 DeepSeek-V2-Lite、DeepSeek-V2、DeepSeek-V2.5、DeepSeek-V3 和 DeepSeek-R1，支持不同的数值格式（如 F8E5M2 和 FP16）。

##### 使用场景

`deepseek.cpp` 适用于开发者和研究人员，特别是那些希望在资源受限的环境中进行大型语言模型推理的人群。由于其小巧且不依赖 Python 环境，它很适合在硬件性能较弱的计算机上运行。

##### 使用说明

运行 `deepseek.cpp` 需要一个兼容 C++20 的编译器和 Hugging Face 格式的模型权重和配置文件。用户需要下载模型，并运行提供的指令进行构建和推理。可以通过命令行接口（CLI）选择不同的操作模式，如完成、困惑度计算或生成。

##### 重要注意事项

* 在进行模型权重转换时，使用 F8E5M2 数据类型量化，以提高模型准确性。
* 模型在较低温度下可能会重复输出，因此推荐使用大约 1.0 的温度值。
* 目前仅实现了逐步解码，尚未实现预填充功能以及其他优化。


总之，`deepseek.cpp` 为希望在 CPU-only 环境中使用 DeepSeek 模型的用户提供了一个轻量级的解决方案，同时也为学习和实验提供了良好的平台。