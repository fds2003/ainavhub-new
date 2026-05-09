---
title: "ComfyUI"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI V-Express ComfyUI
slug: comfyui-v-express-ffmpeg-linux-apt
tags:
- v-express.git
- requirements.txt
- install
- demo
- face
draft: false
related_tools:
- v-express
- laravel chat demo with usestream
- realtime solar system demo
- customer service agents demo
- openai-realtime-twilio-demo
---

## ComfyUI_V-Express

# ComfyUI_V-Express

ComfyUI_V-Express 是 [V-Express](<https://github.com/tencent-ailab/V-Express>) 项目的自定义节点，旨在实现音频驱动的视频制作。

## 使用方法

1. 确保 `ffmpeg` 已安装并在命令行中可用

* 对于 Linux:

apt update
apt install ffmpeg


* 对于 Windows，可以通过 [WingetUI](<https://github.com/marticliment/WingetUI>) 自动安装 `ffmpeg`

2. 克隆项目并安装依赖:

git clone https://github.com/AIFSH/ComfyUI_V-Express.git
cd ComfyUI_V-Express
pip install -r requirements.txt


3. 安装与您当前 PyTorch 版本兼容的 `xformers` 版本, 例如:

pip install xformers==0.0.22.post7
pip install accelerate


4. 权重文件将从 Hugging Face 上自动下载，您也可以手动下载 [model_ckpts](<https://huggingface.co/tk93/V-Express>) 并将其放置在 `ComfyUI_V-Express` 目录中。


## 教程

* [Demo 演示](<https://www.bilibili.com/video/BV1Br421L7rX>)


## 微信交流群与捐赠

![Wechat](wechat.jpg?raw=true) ![donate](donate.jpg?raw=true)

## 鸣谢

* [V-Express](<https://github.com/tencent-ailab/V-Express>)


## 使用场景

ComfyUI_V-Express 可以用于多种场景，包括但不限于：

* 创作音频驱动的视频内容，如音乐视频、音频可视化等
* 根据音频生成动画和特效，用于影视制作
* 开发音频响应的交互艺术装置和多媒体作品