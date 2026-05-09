---
title: "starline starline Starline"
date: "2024-01-01 00:00:00+08:00"
description: starline Starline Strict Coloring Machine for Line Drawings
slug: starline-strict-coloring-machine-line
tags:
- drawings
- starline.git
- nvidia
- requirements.txt
- install
draft: false
related_tools:
- starline
- dia
- nvidia-ingest
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- dualpipe
---

## starline

Starline是一款专门用于对线稿进行颜色填充的工具。其全称为Strict Coloring Machine for Line Drawings。用户只需输入带有透明背景的线稿图像，并提供描述所期望颜色的提示，Starline就会按照提示生成上色后的图像。

##### 安装步骤

1. 克隆Starline仓库：

git clone https://github.com/mattyamonaca/starline.git
cd starline


2. 创建并激活Conda环境：

conda create -n starline python=3.10
conda activate starline


3. 安装必要的依赖：

conda install pytorch torchvision pytorch-cuda=12.1 -c pytorch -c nvidia
pip install -r requirements.txt


##### 使用方法

1. 运行应用程序： `python app.py`
2. 输入带有透明背景的线稿图像。
3. 输入描述要添加颜色的提示。


##### 注意事项

* 建议使用1024 x 1024像素的图像尺寸。
* 抗锯齿处理目前处于测试阶段，建议使用二值化的线稿以提高效果。
* 细小封闭区域无法着色，这部分将以透明状态输出。


##### 使用场景

Starline可以广泛应用于漫画上色、设计草图填色以及任何需要对线稿图像进行上色的场景，适用于艺术家、设计师以及漫画爱好者。

友情链接：[Starline GitHub仓库](<https://github.com/mattyamonaca/starline>)