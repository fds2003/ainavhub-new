---
title: "Chitu"
date: "2024-01-01 00:00:00+08:00"
description: “Chitu”。HopperGPUAIFP8，AI，，AI。 **...
slug: chitu-hopper-gpu-fp8
tags:
- gpu
- const
- gitalk
- hopper
- chitu
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- chitu
- audio-reasoner
---

清华大学高性能计算研究所翟季冬教授团队与清程极智联合开源了一款名为“赤兔Chitu”的高性能大模型推理引擎。该引擎的核心突破在于首次实现了在非英伟达Hopper架构GPU及各类国产AI芯片上原生运行FP8精度模型，旨在解决国产AI芯片在大模型部署方面受限于硬件的难题，降低部署成本，并推动国产AI生态的建设。

** 打破硬件绑定困境：**

* 当前领先的FP8模型主要依赖英伟达H系列高端GPU，导致国内企业在部署大模型时面临芯片进口限制和国产芯片不支持FP8数据类型的困境，部署成本高昂。

* “赤兔Chitu”通过底层技术革新，首次实现了在非H卡设备（包括英伟达Hopper架构之前的GPU及各类国产卡）上高效部署原生FP8模型，摆脱了对特定硬件的依赖。

* 在A800集群上部署DeepSeek-R1-671B满血版时，与部分国外开源框架相比，“赤兔”在GPU使用量减少50%的情况下，推理速度仍有3.15倍的提升。

* 基于Chitu引擎，使用3个节点运行FP8模型的输出速度约为使用6个节点运行BF16模型的75%~90%，单位算力的产出获得了1.5x~1.8x的提升。