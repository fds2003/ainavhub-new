---
title: "Draw2Img"
date: "2024-01-01 00:00:00+08:00"
description: 'Draw2Img Draw2Img Draw2Img  Web '
slug: draw2img-web-sdxl-turbo
tags:
- gpu
- png
- sdxl-turbo
- windows
- edge
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- windows-use
- claude code for windows
---

## Draw2Img

**Draw2Img**

Draw2Img 是一个简单的 Web 用户界面，用于互动式的文本引导图像生成，适合任何年龄和技能水平的用户。该工具通过用户输入的文本来生成相应的图像，操作直观，使用便捷。

##### 特点

* 基于 Web 的用户界面，包含基础的绘画工具和颜色选择器
* 通过 [SDXL-Turbo](<https://huggingface.co/stabilityai/sdxl-turbo>) 实时进行文本引导的图像生成（512 x 512 像素）
* 可编辑提示文本、种子、步骤和强度参数
* 带有导出按钮，可以将输入和输出图像保存为 PNG 文件，并将参数保存为 JSON 文件
* 多线程服务器支持多用户并发访问
* 易于在局域网中托管，与家人和朋友一起创作
* 本地运行（不需要互联网），私密且开源


##### 硬件要求

* **GPU** ：推荐至少拥有10 GB VRAM的GPU，但不是必须的
* **CPU** ：仅使用CPU环境也可以，但图像生成速度会显著降低


##### 操作系统

* Linux，Mac 或 Windows


##### 软件要求

* Python >= 3.10 且 <= 3.11


##### 浏览器

* 任何现代浏览器（如 Firefox、Chrome、Edge、Safari 等）


##### 使用场景

1. **教育与实验** ：可以用作教育工具，帮助学生理解基础的图像处理与生成技术，同时也能作为实验平台进行相关研究。
2. **创意绘画** ：用户可以通过绘画和文本描述结合生成独特的艺术作品，适合艺术家和创意爱好者。
3. **家庭娱乐** ：用户可以在家庭环境中与家人朋友共同创作，增添互动乐趣。
4. **快速原型** ：设计师可以用来快速生成设计原型和概念图，提升工作效率。


##### 安装与运行

1. 克隆仓库：

git clone https://github.com/GradientSurfer/Draw2Img.git


2. 安装依赖：

pip install .


3. 启动服务器（默认监听地址为 <http://localhost:8080>）：

python draw2img/main.py


4. 在浏览器中访问 HTTP URL，即可开始使用。


此外，还可以选择使用 Docker 容器进行安装与运行，从而简化环境配置。详细的安装和运行步骤请参见项目文档。

Draw2Img 项目完全开源，任何人均可贡献代码或提出改进意见。在使用过程中，请注意监督儿童，防止生成不适内容。