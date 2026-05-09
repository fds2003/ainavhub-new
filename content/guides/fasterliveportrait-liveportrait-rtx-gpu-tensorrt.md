---
title: "FasterLivePortrait"
date: "2024-01-01 00:00:00+08:00"
description: 'FasterLivePortrait FasterLivePortrait  LivePortrait '
slug: fasterliveportrait-liveportrait-rtx-gpu-tensorrt
tags:
- gpu
- liveportrait
- tensorrt
- gradio
- fps
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- liveportrait
- fasterliveportrait
- advancedliveportrait
---

## FasterLivePortrait

FasterLivePortrait 是一个能够在实时环境下将肖像照片进行动画处理的技术。该项目是基于 LivePortrait 的原始代码并进行了许多优化。

##### 新特性：

1. **极速处理** ：在 RTX 3090 GPU 上使用 TensorRT 达到了每秒30帧以上的速度，包括前处理和后处理，而不仅仅是模型推理速度。
2. **Onnx 模型支持** ：将 LivePortrait 模型转换为 Onnx 模型，在 RTX 3090 上使用 onnxruntime-gpu 推理速度能达到每帧约70毫秒（约12 FPS），便于跨平台部署。
3. **Gradio 应用支持** ：大幅提升了速度，同时支持对多个人脸的同时推理。
4. **代码重构** ：不再依赖于 Pytorch，所有模型推理都使用 Onnx 或 TensorRT。


##### 使用场景：

1. **实时视频处理** ：能够将静态肖像照片转换为实时视频动画，适用于视频通话增强、虚拟主播等场景。
2. **跨平台部署** ：通过 Onnx 模型和 Docker 支持，可以方便地在不同平台上进行部署，适用于各种应用环境。
3. **多脸处理** ：支持对多个脸部同时进行动画生成，适用于合影照片的处理或者多人视频场景。


##### 环境配置与使用：

1. **Docker** ：推荐使用 Docker 进行配置，可以省去手动安装 onnxruntime-gpu 和 TensorRT 的麻烦，直接运行预先构建好的镜像。
2. **Python虚拟环境** ：如果不使用 Docker，可以手动创建 Python 虚拟环境并安装必要的 Python 包。


##### 推理模式与测试：

1. **Onnxruntime 推理** ：支持 Onnx 模型推理，配置简单，适用于多平台部署。
2. **TensorRT 推理** ：适用于需要高性能和低延迟的场景，但需要配置 TensorRT 和相关插件。


##### 实时运行与应用：

1. **实时摄像头输入** ：使用摄像头进行实时动画生成，适用于互动应用场景。
2. **Gradio 应用** ：提供了一个网页应用界面，方便用户快速上手体验和测试功能。


FasterLivePortrait 项目通过一系列优化，实现了高性能和实时运行，是将静态肖像照片转化为动态视频的开创性技术，适用于多种应用场景和部署环境。