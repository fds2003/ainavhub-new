---
title: "MuLan"
date: "2024-01-01 00:00:00+08:00"
description: MuLan MuLan？ MuLan，（AI）。，110。，。，MuLan，（2000），...
slug: mulan
tags:
- diffusion
- lora
- mulankit
- stable
- controlnet
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## MuLan

##### MuLan是什么？

MuLan是一种框架，可以为任何扩散模型（例如生成图片的AI模型）添加多语言生成能力。目前，它支持110多种语言。这个框架可以在只使用英文数据进行训练后，无需额外训练就能在其他语言中使用。此外，MuLan还引入了语言适配器，这是一种轻量级模型（参数少于2000万），可以与许多其他模型和工具（例如LoRA、LCM、ControlNet等）无缝结合，不需要进行额外的微调。

##### 什么时候会使用MuLan？

如果你有一个在特定语言（比如英文）上训练的扩散模型，但你希望它能理解和生成其他语言的输出，那么MuLan就是你需要的工具。比如，你在英语上训练了一个AI模型用来生成图片，但你希望它也能理解中文、法文等其他语言，这时候你就可以用MuLan。

##### 怎么使用MuLan？

MuLan非常易于使用，以下是一些简单的步骤：

1. **安装MuLan库：**

pip install mulankit


2. **加载Stable Diffusion模型并将其转换为支持多语言的模型：**

from diffusers import StableDiffusionPipeline
import mulankit

# 加载预训练的Stable Diffusion模型
pipe = StableDiffusionPipeline.from_pretrained('Lykon/dreamshaper-8')

# 加载MuLan语言适配器
pipe = mulankit.transform(pipe, 'mulanai/mulan-lang-adapter::sd15_aesthetic.pth')


3. **生成图片：**

# 输入多语言的提示词
image = pipe('一只蓝色的🐶 in the 바다').images[0]


这段代码会生成一张在海边的蓝色小狗的图片，输入中的语言是中文和韩文。


##### 可供选择的模型和示例

* **基础模型：**

* Stable Diffusion 1.5, 2.1, XL
* Pixart-Alpha/Sigma
* **下游模型：**

* ControlNet, LCM, LoRA, 微调模型等。
* **视频模型：**

* AnimateDiff
* **3D模型：**

* MVDream


具体的使用和示例可以查看[USAGE.md](<USAGE.md>)和[examples](<examples/>)。