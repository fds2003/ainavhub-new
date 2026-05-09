---
title: "gpt-oss gpt-oss OpenAI"
date: "2024-01-01 00:00:00+08:00"
description: gpt-oss OpenAI gpt-oss
slug: gpt-oss-openai-gpt-oss-120b-gpt-oss-20b-apache
tags:
- gpu
- harmony
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- gpt-oss
- openai gpt-oss recipes
- graph-constrained reasoning
---

## gpt-oss

OpenAI的`gpt-oss`项目发布了`gpt-oss-120b`和`gpt-oss-20b`两款开放权重模型，它们主要面向强大的推理、代理任务以及多用途开发者应用场景。这些模型采用Apache 2.0许可证，支持根据需求配置推理工作量，并提供完整的思维链以增强调试和输出可信度。项目核心在于其可微调性及内置的代理能力，包括函数调用、网页浏览和Python代码执行，同时利用原生MXFP4量化技术实现高效硬件部署，使得`gpt-oss-120b`可在单H100 GPU上运行，`gpt-oss-20b`仅需16GB内存。`gpt-oss`模型通过特定的Harmony响应格式进行交互，并提供广泛的推理框架（如Transformers、vLLM、Ollama、LM Studio）兼容性及PyTorch、Triton、Metal的参考实现，还包含用于终端互动和API服务的客户端示例，支持通过内置的浏览器和Python工具进行复杂操作。