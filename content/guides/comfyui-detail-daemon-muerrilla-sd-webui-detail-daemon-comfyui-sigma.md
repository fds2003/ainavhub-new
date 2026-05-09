---
title: "ComfyUI-Detail-Daemon"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-Detail-Daemon ComfyUI-Detail-Daemon  ComfyUI-Detail-Daemon '
slug: comfyui-detail-daemon-muerrilla-sd-webui-detail-daemon-comfyui-sigma
tags:
- detail
- muerrilla
- comfyui-detai
- comfyui-detail-daemon
- hdr
draft: false
related_tools:
- comfyui-detail-daemon
- solgraph
- langgraph multi-agent swarm
- langgraph computer use agent
- graphgen
---

## ComfyUI-Detail-Daemon

**ComfyUI-Detail-Daemon 简介**

ComfyUI-Detail-Daemon 是 muerrilla 的 sd-webui-Detail-Daemon 的一个移植版本，作为 ComfyUI 的一个节点，旨在调整 sigma 值，以增强图像细节，同时可能去除不必要的散景或背景模糊。该工具特别适用于 Flux 模型，但也支持 SDXL、SD1.5 及其他模型。使用不当可能导致图像过度锐化或 HDR 效果。

**主要节点功能：**

1. **Detail Daemon Sampler** : 通过调整 Detail Daemon 的排程来采样，同时保持噪声水平的注入不变，减少每一步去除的噪声量，从而有效增加细节。

2. **Detail Daemon Graph Sigmas** : 可视化调整后的 sigma 值，以帮助用户理解参数变化的影响。

3. **Multiply Sigmas** : 通过指定因子来简单地乘以所有 sigma 值，用于增加图像细节。

4. **Lying Sigma Sampler** : 更简单的版本，只涉及细节量的调整，方便快速设置。


**使用场景**

ComfyUI-Detail-Daemon 的使用场景主要包括：

* **细节增强** : 在生成图像时，用户可以通过调整 sigma 值来增加图像的细节，适用于艺术创作、图像处理等领域。
* **图像修复** : 减少背景模糊或不必要的散景，使得主题更加突出。
* **模型测试** : 用户可以借助提供的示例和工作流程，对不同模型之间的细节增强效果进行比较和测试。


通过上述功能，ComfyUI-Detail-Daemon 能够有效地提升生成图像的质量和细节，广泛应用于艺术创作及图像处理等领域。