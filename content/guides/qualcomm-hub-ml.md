---
title: "Qualcomm AI Hub"
date: "2024-01-01 00:00:00+08:00"
description: Qualcomm Qualcomm AI Hub Qualcomm
slug: qualcomm-hub-ml
tags:
- gpu
- int8
- npu
- int4
- lite
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- haiku sqlite rag
- raglite
- melotts - 支持多语言的高品质文本转语音库，支持中英文混合及实时cpu推理。
---

## Qualcomm

Qualcomm AI Hub模型是为了在Qualcomm设备上部署优化过的先进机器学习（ML）模型而设计的。这些模型针对性能（如延迟、内存等）进行了优化，可以直接在设备上运行，支持视觉、语音、文本和生成式AI等不同类别的模型。

##### Qualcomm 的功能

* **模型优化** ：提供了一系列针对延迟、内存等方面优化的模型，确保在Qualcomm设备上高效运行。
* **通用性** ：支持多种运行时环境和操作系统，如TensorFlow Lite和Android 11+。
* **多种计算单位支持** ：支持CPU、GPU、NPU等计算单元，确保各种类型的设备都能利用其硬件资源。
* **多种精度支持** ：支持FP16浮点数和INT8/INT4整数精度，为不同需求提供灵活选择。
* **广泛的芯片组支持** ：支持多种高通Snapdragon芯片组，覆盖多款市场上流行的智能手机和设备。
* **开源配方和性能指标** ：提供模型的量化、优化和部署的开源配方，同时还有多种设备上捕获的性能指标。
* **Hugging Face集成** ：模型通过Hugging Face平台访问，简化了使用和部署流程。
* **云托管设备运行** ：通过注册Qualcomm AI Hub平台，用户可以在云托管的Qualcomm设备上运行模型。


##### 使用Qualcomm的情况

* **边缘设备AI应用** ：当需要在没有连接到云或网络延迟较大的情况下，直接在设备上实时处理和分析数据时，如在智能手机、无人机或其他物联网设备上。
* **性能和资源优化** ：当应用需要在有限的计算资源下运行，如在移动设备或嵌入式系统中，而又不能牺牲性能的情况下。
* **离线场景** ：在无法保证持续网络连接的环境下，设备需要离线运行模型进行实时分析，比如在偏远地区的监控或农业应用。


Qualcomm提供的AI Hub模型适用于需要在边缘设备上快速而有效地部署机器学习模型的场景，无论是图像处理、语音识别、还是其他AI相关的任务，都能够在保证性能的同时充分利用Qualcomm芯片的优势。