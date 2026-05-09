---
title: "ComfyUI"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI FL-Trainer ComfyUI
slug: comfyui-fl-trainer-sd1.5-sdxl-lora
tags:
- fl
- git
- diffusion
- lora
- stable
draft: false
related_tools:
- pocket flow framework
- cloudflare agents
- gemini 2.0 flash image generation and editing
- flowgram.ai
- rooflow
---

## ComfyUI_FL-Trainer

ComfyUI_FL-Trainer 是一个用于在 sd1.5 和 SDXL 模型上训练图像 Lora 的工具。该工具通过 git 克隆所需的组件来进行训练，并且会打开一个新的终端窗口来执行训练过程。训练过程中会在节点本身显示推理样本，以便于用户跟踪结果。

## 使用场景

##### 1\. 图像训练

ComfyUI_FL-Trainer 主要用于在不同版本的 Stable Diffusion 模型（如 sd1.5 和 SDXL）上训练图像 Lora。这对需要大量图像数据训练的用户非常有用，特别是用于生成艺术作品或其他需要高质量图像生成的应用。

##### 2\. 简单训练

对于不希望深入配置但想要稳定效果的用户，可以使用工具提供的简化版本——Easy Trainer。用户只需加载图像和相应的文字说明，即可启动训练，工具会自动使用推荐的设置进行训练。

##### 3\. 云端与本地训练

在云端实例上，工具可能无法完全按照预期运行，但它会创建一个名为“FL_train_workspaces”的文件夹，包含训练所需的文件和配置。用户可以手动运行文件夹中的 .bat 或 .sh 文件来启动训练。同样，这种方法也适用于本地环境。

## 未来发展

##### 1\. 更多简化节点

开发者计划添加更多简化的训练节点，尤其是针对风格和人物的训练。目标是让用户能够一键启动训练并获得良好的结果，无需过多调整设置或浪费时间。

##### 2\. 链式训练

链式训练将允许用户从某个训练历元或随机 Lora 开始，逐步调整训练设置、学习率甚至训练数据，从而更高效地完成训练过程。

## 总结

ComfyUI_FL-Trainer 旨在通过简化和自动化流程，帮助用户更高效地在 Stable Diffusion 模型上训练图像 Lora。不论是专业用户还是新手，都可以通过该工具实现高质量图像生成，从而满足不同场景下的需求。