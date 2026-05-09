---
title: "x-flux"
date: "2024-01-01 00:00:00+08:00"
description: x-flux x-flux Black Forest Labs
slug: x-flux-black-forest-labs-flux
tags:
- canny
- x512
- lora
- controlnet
- black
draft: false
related_tools:
- index-tts-lora
- comfyui-b-lora
- finecontrolnet
- controlnet++
- flux
---

## x-flux

x-flux是由Black Forest Labs开发的一种称为Flux的模型，该项目由XLabs AI团队发布了一系列用于微调Flux模型的训练脚本，包括LoRA和ControlNet。

##### 使用场景

1. **LoRA（Low-Rank Adaptation）**

* 适用于需要在大规模预训练模型基础上进行快速微调的场景，特别是当计算资源有限或需要低内存消耗时。
* 可用于生成特定风格或领域的图片，例如通过文本提示生成特定风格的图像。
2. **ControlNet**

* 适用于需要在图像生成过程中施加更精确控制的场景，例如结合边缘检测结果（Canny）来生成特定风格的图像。
* 用户可以通过提供控制图像和文本提示，生成符合特定描述的图像。


##### 训练

训练是通过DeepSpeed工具进行的，以提高训练效率和处理大规模数据集的能力。当前支持512x512分辨率，正在进行1024x1024分辨率的训练。

##### 数据集

训练数据集要求图像和对应的描述以特定格式存放，每个图像文件应有一个对应的.json文件，其中包含用于训练的文本提示。

##### 推理

提供了基础的推理脚本和使用示例，用户可以通过提示生成特定风格的图像。此外，还提供了低内存模式，通过FP8版本和内存卸载选项，可以降低显存使用量。

##### 依赖与配置

需要安装特定的Python依赖，并提供了加速配置示例以帮助用户配置训练环境。

##### 模型许可证

使用的是非商业协议（FLUX.1 [dev] Non-Commercial License），训练和推理脚本则遵循Apache 2 License。

##### 更新计划

Xlabs AI计划发布更多ControlNet权重模型，包括OpenPose和Depth等，用户可以通过关注Xlabs AI获取最新的更新。