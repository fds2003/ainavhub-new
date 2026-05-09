---
title: "AnimateDiff for ComfyUI AnimateDiff for ComfyUI AnimateDiff for ComfyUI"
date: "2024-01-01 00:00:00+08:00"
description: 'AnimateDiff for ComfyUI AnimateDiff for ComfyUI  ComfyUI '
slug: animatediff-comfyui-evolved-sampling-stable
tags:
- diffusion
- controlnet
- stable
- ipadapter
- txt2img
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## AnimateDiff for ComfyUI

AnimateDiff for ComfyUI 是一种针对 ComfyUI 的集成工具，旨在提供改进的 AnimateDiff 整合以及先进的采样选项，被称为“Evolved Sampling”。这使得用户能够生成更加平滑和连贯的动画。通过在 Stable Diffusion 的基础上添加一层运动模组实现。

## 使用场景

1. **文本生成动态图片（txt2img）** ：通过输入文本提示生成一系列动画帧，从而实现从纯文本描述到动画的转换。

2. **图片生成动态图片（img2img）** ：通过对静态图片进行进一步处理，生成一系列连贯的动画帧，这适用于将静态图像转换为动画的需求。

3. **动画视频处理** ：支持加载和处理已有的视频文件，可用于视频剪辑及效果增强。

4. **多模组联合使用** ：支持结合多个运动模组和辅助模组如 ControlNet、IPAdapter 等，生成复合效果的动画。

5. **高分辨率动画生成** ：通过高分辨率模型和上采样技术，生成高质量、高分辨率的动画序列。


## 安装步骤

##### 通过 ComfyUI 管理器安装

1. 在 ComfyUI 管理器中搜索 `AnimateDiff Evolved`，确保作者是 `Kosinkadink` 并进行安装。


##### 手动安装

1. 将代码仓库克隆到 `custom_nodes` 文件夹。


## 模型设置

1. 下载运动模组，将其放置在指定目录中（如 `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models`）。
2. 可选：下载并配置 Motion LoRAs 以影响运动模组的生成效果。
3. 通过配置文件（如 `extra_model_paths.yaml`）灵活设置模型和 LoRA 存储路径。


## 主要特性

1. **多运动模组支持** ：支持多种运动模组，并提供了对新模组和特定任务优化模组的支持。
2. **无限长度动画** ：通过滑动上下文窗口支持无限长度的动画生成。
3. **动态调整参数** ：可以在采样过程中动态调整多个参数，如运动比例、效果强度等。
4. **兼容性** ：与多种控制模块如 ControlNet、IPAdapter 兼容，同时支持多种采样噪声类型。


## 基本使用

AnimateDiff for ComfyUI 提供了两类节点，分别是 Gen1 和 Gen2，前者更为简化，后者则区分了模型加载和应用过程，并引入了高级抽样特性。

##### 样例工作流程

1. **基本文本到动画（txt2img）工作流** ：输入文本提示，生成短片动画。
2. **文本提示动态变化的动画** ：通过 BatchPromptSchedule 节点进行提示词随时间变化的动画生成。
3. **结合 FreeNoise 的长动画生成** ：利用 FreeNoise 技术生成更为连贯和稳定的长动画。


各类工作流示例和相关节点配置均提供详细参考，允许用户根据实际需求进行多种组合和尝试。

总之，AnimateDiff for ComfyUI 提供了丰富的工具集和灵活的配置选项，适用于各类动画生成和处理需求，不论是简单的文本动画，还是复杂的多模组综合效果应用。