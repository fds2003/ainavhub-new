---
title: "MiniCPM-V"
date: "2024-01-01 00:00:00+08:00"
description: MiniCPM-V MiniCPM-V  MLLMs
slug: minicpm-v-mllms
tags:
- gpt-4v-1106
- yi-vl
- claude
- npu
- cogvlm-chat
draft: false
related_tools:
- yi-vl-34b-先进的开源多模态模型
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
---

## MiniCPM-V

MiniCPM-V 是一系列针对视觉与语言理解设计的末端多模态大型语言模型（MLLMs）。这些模型能够接受图像和文字输入，并提供高质量的文字输出。自2024年2月以来，该系列已经发布了四个版本，目标是实现**强大的性能和高效的部署** 。

##### MiniCPM-V系列主要模型：

1. **MiniCPM-Llama3-V 2.5** :

* **最新且最强大的模型** ，拥有8B参数。
* 超越多个知名模型如GPT-4V-1106、Gemini Pro、Qwen-VL-Max和Claude 3。
* 支持包括英语和中文在内的**30多种语言** 的多模态对话。
* 具有增强的OCR和指令遵循能力。
* 通过量化、编译优化和CPU/NPU上的高效推理技术，可实现**在末端设备上的高效部署** 。
2. **MiniCPM-V 2.0** :

* 系列中最轻量的模型，拥有2B参数。
* 性能超越多个大型模型如Yi-VL 34B、CogVLM-Chat 17B和Qwen-VL-Chat 10B。
* 接受任意宽高比且高达1.8百万像素（如1344x1344）的图像输入，在场景文字理解方面表现优异，匹敌Gemini Pro，并且在低幻觉率上匹敌GPT-4V。


##### 使用场景：

* **多语言对话：** 支持30多种语言，包括但不限于英语、中文、法语、西班牙语、德语。
* **图像文字识别（OCR）：** 能够处理高像素图像并进行文字识别和转换。
* **末端设备部署：** 通过量化和优化，可以在移动设备和个人电脑上高效运行。
* **教育和研究：** 提供的高性能和多语言支持适用于教育研究、语言学习等多个领域。
* **多轮对话系统：** 适用于支持多轮交互的对话系统，强化人机交互体验。


##### 产品优势：

* 高性能：在多个评测基准上表现突出，尤其在视觉和文本理解方面。
* 强大的OCR能力：能处理高分辨率图像，并在各大OCR基准评测中获得高分。
* 可信赖行为：采用最新的RLAIF-V技术，减少生成内容中的幻觉率。
* 多语言支持：支持超过30种语言，提升跨语言通用能力。
* 高效部署：通过系统化的优化，实现高效的末端设备部署。


MiniCPM-V 通过持续优化和技术创新，确保在多个使用场景中实现强大的性能和高效的运行。