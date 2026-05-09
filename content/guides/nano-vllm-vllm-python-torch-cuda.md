---
title: "Nano-vLLM"
date: "2024-01-01 00:00:00+08:00"
description: Nano-vLLM Nano-vLLM vLLM
slug: nano-vllm-vllm-python-torch-cuda
tags:
- id
- clientsecret
- example.py
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Nano-vLLM

Nano-vLLM是一个轻量级的vLLM实现，它从头开始构建，主要功能包括可与vLLM媲美的快速离线推理速度、仅有1200行Python代码的易读代码库，以及前缀缓存、Torch编译、CUDA图等优化套件。它提供了一个类似于vLLM的接口，并通过基准测试展示了其在Qwen3-0.6B模型上的性能，与vLLM相比，吞吐量十分接近。项目可以通过pip安装，并提供了一个示例文件`example.py`以及基准测试脚本`bench.py`。