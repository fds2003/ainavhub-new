---
title: "PartCrafter"
date: "2024-01-01 00:00:00+08:00"
description: PartCrafter PartCrafter Transformer
slug: partcrafter-transformer-rgb-tr
tags:
- gpu
- id
- clientsecret
- clientid
- dis
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- hunyuanvideo-i2v
- android mcp server
- vidorag
---

## PartCrafter

PartCrafter是一个基于组合潜在扩散Transformer的结构化3D网格生成模型，其核心功能是从单个RGB图像一次性联合生成多部件的3D对象。该项目作为相关研究的官方实现，提供从图像生成部分级3D对象的推理能力，并支持利用如TripoSG和RMBG等预训练模型进行操作。它允许用户进行从头训练以及针对不同部件数量和更高细节级别（更多Token）的模型微调，同时具备与Hunyuan3D-2.1等基于向量集的3D对象生成模型的兼容性。该系统要求至少8GB显存的CUDA GPU，并且已经完全开源，包含了推理脚本、预训练权重和训练代码。