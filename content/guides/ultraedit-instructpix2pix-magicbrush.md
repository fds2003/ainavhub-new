---
title: "UltraEdit"
date: "2024-01-01 00:00:00+08:00"
description: 'UltraEdit UltraEdit  UltraEdit '
slug: ultraedit-instructpix2pix-magicbrush
tags:
- stable-diffusion
- amp
- instructpix2pix
- cd
- stable-diffusi
draft: false
related_tools:
- stable-diffusion.cpp
- computer using agent sample app
- structured outputs sample apps
- gemini spatial example
- mlx examples
---

## UltraEdit

##### UltraEdit 简介

**UltraEdit** 是一个大规模的自动生成指令图像编辑数据集，包含约400万的编辑样本。其主要目的是解决现有图像编辑数据集（如InstructPix2Pix和MagicBrush）的缺陷，并提供一种系统的方法来生成大量高质量的图像编辑样本。

###### 优势:

1. **更广泛的编辑指令** ：通过大语言模型（LLMs）的创造力结合人类评估者的上下文编辑范例来实现。
2. **基于真实图像的数据源** ：包括照片和艺术作品，提供了比纯文本生成的图像模型更多样且更少偏见的数据。
3. **支持基于区域的编辑** ：通过高质量的自动生成区域注释来增强。


###### 使用场景:

* **图像编辑研究** ：提供丰富多样的编辑样本，可用于训练和评估图像编辑模型。
* **学术研究** ：适用于对指令图像编辑技术进行深入研究的学术项目。
* **应用开发** ：帮助开发人员构建高级图像编辑应用，例如照片修图、艺术创作等。


###### 训练过程:

1. **环境设置** ：

pip install -r requirements
cd diffusers && pip install -e .


2. **结合不同版本Stable-Diffusion的训练** ：

* **Stable-Diffusion 3** ：
* 阶段 1：自由形式图像编辑

bash scripts/run_sft_512_sd3_stage1.sh


* 阶段 2：混合训练

bash scripts/run_sft_512_with_mask_sd3_stage2.sh


* **Stable-Diffusion XL** ：
* 阶段 1：自由形式图像编辑

bash scripts/run_sft_512_sdxl_stage1.sh


* **Stable-Diffusion 1.5** ：
* 阶段 1：自由形式图像编辑

bash scripts/run_sft_512_sd15_stage1.sh


* 阶段 2：混合训练

bash scripts/run_sft_512_with_mask_sd15_stage2.sh


###### 示例:

以下是使用我们的管道进行图像编辑的示例。给定输入图像和遮罩图像，模型可根据提供的提示生成编辑后的结果。


import torch
from diffusers import StableDiffusion3InstructPix2PixPipeline
from diffusers.utils import load_image
import requests
import PIL.Image
import PIL.ImageOps

pipe = StableDiffusion3InstructPix2PixPipeline.from_pretrained("BleachNick/SD3_UltraEdit_w_mask", torch_dtype=torch.float16)
pipe = pipe.to("cuda")

prompt = "What if the horse wears a hat?"
img = load_image("input.png").resize((512, 512))
mask_img = load_image("mask_img.png").resize(img.size)
# 对于自由形式的编辑，可以使用一个空白遮罩
# mask_img = PIL.Image.new("RGB", img.size, (255, 255, 255))

image = pipe(
prompt,
image=img,
mask_img=mask_img,
negative_prompt="",
num_inference_steps=50,
image_guidance_scale=1.5,
guidance_scale=7.5,
).images[0]

image.save("edited_image.png")
# 显示图像


UltraEdit 在图像编辑领域具有广泛的应用前景，为开发更智能、更高效的图像编辑工具提供了坚实的数据基础。