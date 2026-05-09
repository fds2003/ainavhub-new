---
title: "Edge"
date: "2024-01-01 00:00:00+08:00"
description: Edge Edge Edge ，（SSM），。，。Edge ， SSM ，...
slug: edge-ssm
tags:
- edge
- mamba
- ssm
- transformer
- tok
draft: false
related_tools:
- knowledge graph
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- knowledge graph builder app
- knowledge graphs for rag
- local knowledge graph
---

## Edge

##### Edge 介绍

Edge 是一个开源库，专门支持高效的状态空间模型（SSM）的研究和发布，旨在实现多加速器和环境下的本地应用。当前的先进模型往往体积庞大且运行缓慢，需要依赖昂贵和缓慢的云计算解决方案。Edge 的目标是改变这一现状，通过提供能够实时运行于设备上的高效 SSM 模型库，来提升本地应用的性能。

状态空间模型（SSMs）相比于传统的 Transformer 模型，提供了更高效的计算方式和高质量的AI模型构建基础。SSM 模型能够以恒定的每秒令牌数（tok/s）和内存消耗流式处理信息，极大地改变了本地应用的开发思路。

##### Edge 的特点

* **自定义推理内核** ：Edge 支持针对 SSM 架构（例如 Mamba）进行硬件专用的自定义推理内核。
* **本地 SSM 模型** ：Edge 收集开放权重的 SSM 模型，并对多个硬件平台进行优化。


##### 使用场景

Edge 可广泛应用于各类需要在设备上实时处理的 AI 应用场景，如：

1. **移动设备上的语音识别与自然语言处理** ：由于 SSM 的高效性，可以在手机等移动设备上运行复杂的语音识别和语言处理模型，提供快速响应。

2. **边缘计算** ：在数据量庞大但网络连接有限的情况下，Edge 可以在本地进行数据处理，减少对云端的依赖，提高效率和隐私安全。

3. **物联网设备** ：通过将 SSM 模型整合入智能家居设备、传感器等，能够实现实时监测和反馈。

4. **自定义硬件优化** ：利用 Edge 的自定义内核功能，可以在特定硬件上优化模型性能，适应各种计算资源的配置。


##### 版本更新

* 在2024年8月27日，Edge 发布了其第一个公开可用的语言模型 RENE-v0.1，支持 PyTorch 和 MLX，并提供量化支持和自定义硬件内核。


##### 可用软件包

Edge 当前提供多种后端的包支持，包括：

1. **`cartesia-pytorch`** ：包含 PyTorch 实现的模型，可在支持 PyTorch 的任何硬件上使用（如 CPU、CUDA GPU）。
2. **`cartesia-metal`** ：为 Apple 硅上的快速 SSM 推理提供自定义 Metal 内核。
3. **`cartesia-mlx`** ：包含用于在 MLX 上运行的模型的 Python 包。


Edge 的目标是通过高效、灵活的本地 AI 模型，使人工智能技术在更广泛的应用场景中实现实时处理和响应。