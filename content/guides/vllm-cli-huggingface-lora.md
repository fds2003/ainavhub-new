---
title: "vLLM CLI vLLM CLI vLLM CLI"
date: "2024-01-01 00:00:00+08:00"
description: vLLM CLI vLLM CLI vLLM
slug: vllm-cli-huggingface-lora
tags:
- gpu
- const
- gitalk
- clientsecret
- lora
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- index-tts-lora
- comfyui-b-lora
---

## vLLM CLI

vLLM CLI是一款用于通过vLLM服务大型语言模型的命令行工具，它提供了交互式终端界面和直接命令行两种操作模式，以满足不同用户的需求。其核心功能包括对本地模型和HuggingFace远程模型的自动发现与高效管理，并特别支持加载LoRA适配器进行模型服务。该工具允许用户创建和管理个性化配置方案，同时内置了针对高性能、MoE优化和低内存等多种场景的预设方案，并能智能识别并利用多GPU进行张量并行。此外，vLLM CLI还集成了实时服务器监控功能，能详尽展示GPU利用率、服务器状态及日志流，同时提供全面的系统信息（如GPU兼容性、内存详情）以及强大的错误处理和日志查看能力，旨在为用户提供一个全面、高效且用户友好的大模型服务部署与管理体验。