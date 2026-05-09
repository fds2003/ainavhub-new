---
title: "ComfyUI-UltraPixel"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-UltraPixel ComfyUI-UltraPixel  ComfyUI-UltraPixel '
slug: comfyui-ultrapixel-ultrapixel-comfyui-arxiv-github
tags:
- comfyui-ul
- github
- workflow.json
- requirements.txt
- install
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## ComfyUI-UltraPixel

##### ComfyUI-UltraPixel 简介

ComfyUI-UltraPixel 是一个仍在开发中的扩展工具，旨在整合 UltraPixel 算法到 ComfyUI 中。UltraPixel 算法由一个团队开发，具体信息可参阅以下链接：

* [UltraPixel 官方网站](<https://jingjingrenabc.github.io/ultrapixel/>)
* [arXiv 论文](<https://arxiv.org/abs/2407.02158>)
* [GitHub 仓库](<https://github.com/catcathh/UltraPixel>)


要安装 ComfyUI-UltraPixel，可以通过将该仓库克隆到 ComfyUI 的自定义节点目录中：


git clone https://github.com/2kpr/ComfyUI-UltraPixel


然后在你的 conda 或 venv 环境中安装所需的依赖：


pip install -r requirements.txt


加载提供的 `workflow.json` 文件到 ComfyUI 中，并点击“Queue Prompt”按钮。当工作流首次运行时，第一个节点会下载所有必要的文件到 `ComfyUI/models/ulttrapixel` 目录中。注意确保你的版本是最新的，以解决下载问题（详情见 [这里](<https://github.com/2kpr/ComfyUI-UltraPixel/commit/45d32bbe3777f1773dc0f74deea075d77b6d9278>)）。

##### 使用场景

ComfyUI-UltraPixel 适用于生成高质量、高细节的图像。以下是典型的使用场景实例：

1. **人像摄影** :

* 示例提示语: “A close-up portrait of a young woman with flawless skin, vibrant red lipstick, and wavy brown hair, wearing a vintage floral dress and standing in front of a blooming garden.”
* 生成效果: 高质量的人像照片，细节丰富，色彩鲜艳。

![人像示例](https://github.com/2kpr/ComfyUI-UltraPixel/blob/main/ComfyUI_00001_.png)

2. **自然景观** :

* 示例提示语: “A highly detailed, high-quality image of the Banff National Park in Canada. The turquoise waters of Lake Louise are surrounded by snow-capped mountains and dense pine forests. A wooden canoe is docked at the edge of the lake. The sky is a clear, bright blue, and the air is crisp and fresh.”
* 生成效果: 逼真的自然景观照片，色彩自然，细节精细。

![自然景观示例](https://github.com/2kpr/ComfyUI-UltraPixel/blob/main/ComfyUI_00002_.png)


通过这些实例可以看出，ComfyUI-UltraPixel 在生成高质量图像方面具有显著优势，适用于需要详细视觉表现的各种应用场景。