---
title: "HunyuanWorld-Voyager"
date: "2024-01-01 00:00:00+08:00"
description: 'HunyuanWorld-Voyager HunyuanWorld-Voyager  D '
slug: hunyuanworld-voyager-rgb
tags:
- gpu
- gradio
- const
- gitalk
- cl
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- gradio webrtc
- graph-constrained reasoning
- cloudflare agents
---

## HunyuanWorld-Voyager

HunyuanWorld-Voyager 项目提供了一个创新的视频扩散框架，其核心能力在于能够根据单个输入图像和用户定义的摄像机路径，生成与真实世界高度一致的 3D 点云序列。该框架的主要功能是生成可探索世界的 3D 一致场景视频，并能输出对齐的深度和 RGB 视频，从而实现高效且直接的 3D 重建。其核心要点在于结合了“世界一致性视频扩散”以确保全局连贯性，以及“长程世界探索”通过高效缓存和自回归推理实现场景的迭代扩展与上下文感知一致性。为支持其强大的生成能力，项目还开发了一个可扩展的数据引擎，自动化视频的相机姿态估计和度量深度预测，用于构建大规模的训练数据集。HunyuanWorld-Voyager 在 WorldScore 基准测试中展现了卓越的性能，在平均 WorldScore、物体控制、风格一致性和主观质量等多项关键指标上均达到领先水平。用户可以通过提供输入图像和预设的相机路径进行推理，项目支持单 GPU 和多 GPU 并行加速，并提供了一个便捷的 Gradio 演示界面。