---
title: "Artist"
date: "2024-01-01 00:00:00+08:00"
description: 'Artist Artist  Artist '
slug: artist-loras
tags:
- songrise
- git
- diffusion
- stable
- artist
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## Artist

**Artist** 是一种无需训练的文本驱动图像风格化方法。通过提供一张图像和描述所需风格的文本提示，**Artist** 能够生成具有该风格的图像，并将原图的细节与所提供的风格进行和谐地融合。用户无需进行任何训练，也无需下载额外的控制网络或LoRAs，只需要使用预训练的Stable Diffusion模型即可。

##### 主要特点：

* **无需训练** ：用户不需要任何训练过程。
* **文本驱动** ：通过文本输入描述生成图像风格。
* **模型下载** ：首次使用时，自动从Hugging Face仓库下载Stable Diffusion模型。


##### 使用场景：

* **艺术创作** ：艺术家和设计师可以用来快速生成不同风格的图像作品，如素描、水彩等。
* **营销设计** ：广告行业可以根据不同主题或节日快速生成相应风格的视觉素材。
* **内容创作** ：博主和内容创作者可以用来生成独特风格的插图或封面图片。
* **科研与教育** ：可以用作计算机视觉、图像处理课程的教学示例，帮助学生理解图像风格化技术。


##### 如何使用：

1. 克隆代码库：

git clone https://github.com/songrise/Artist


2. 创建虚拟环境并安装依赖：

conda create -n artist python=3.8
conda activate artist
pip install -r requirements.txt


3. 首次运行时，会自动从Hugging Face仓库下载Stable Diffusion模型。

4. 启动Gradio界面：

python injection_main.py --mode app


然后在浏览器中访问 `http://localhost:7860`。

5. 命令行风格化图像示例：

python injection_main.py --mode cli --image_dir data/example/1.png --prompt "A B&W pencil sketch, detailed cross-hatching --config example_config.yaml


通过这些步骤，用户可以方便地使用**Artist** 进行图像风格化，借助文本提示轻松生成出自己所需风格的图像。