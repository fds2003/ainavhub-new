---
title: "ChatTTSPlus"
date: "2024-01-01 00:00:00+08:00"
description: ChatTTSPlus ChatTTSPlus ChatTTS
slug: chatttsplus-chattts-tensorrt-windows
tags:
- gpu
- tensorrt
- const
- tokens
- lora
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- index-tts-lora
- comfyui-b-lora
---

## ChatTTSPlus

ChatTTSPlus是ChatTTS的扩展版本，它在原有的基础上增加了TensorRT加速、语音克隆和移动端模型部署等功能。该项目使用方便，提供Windows一键安装包，并通过TensorRT实现了超过3倍的性能提升(在Windows 3060 GPU上，从28 tokens/s提升到110 tokens/s)。 它支持使用LoRA进行语音克隆，并正在开发模型压缩和加速技术以实现移动端部署。

ChatTTSPlus 的使用场景包括：

* **语音合成应用:** 基于文本生成语音，并通过TensorRT加速提升效率。
* **语音克隆:** 利用LoRA技术克隆特定声音，生成与目标声音相似的语音。
* **移动端语音应用:** (未来功能) 部署轻量级模型，在移动设备上实现语音合成。
* **播客制作:** 项目提供NotebookLM播客示例，展示其在播客制作方面的应用潜力。


总而言之，ChatTTSPlus是一个功能强大且易于使用的语音合成工具，适用于多种场景，尤其在需要高性能和语音克隆功能的应用中具有优势。