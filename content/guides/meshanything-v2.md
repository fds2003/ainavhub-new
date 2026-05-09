---
title: "MeshAnything V2 MeshAnything V2 MeshAnything V2"
date: "2024-01-01 00:00:00+08:00"
description: MeshAnything V2 MeshAnything V2 MeshAnything V2
slug: meshanything-v2
tags:
- a6000
- gpu
- meshanything
- gb
- v2
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- langbot
- spikingbrain
- gbc-madai
---

## MeshAnything V2

MeshAnything V2是一种基于“邻接网格标记化”技术生成由艺术家设计的网格模型的方法。该模型主要由来自南洋理工大学、清华大学、帝国理工学院、西湖大学的研究人员开发，旨在通过先进的计算技术来自动生成高质量的3D网格模型。以下是对MeshAnything V2的一些关键介绍和使用场景说明：

##### 关键特点

1. **艺术家设计的网格生成** ：专注于生成由艺术家设计的高质量网格模型。
2. **邻接网格标记化** ：使用邻接网格标记化的方法提高网格生成的准确性和质量。
3. **高效** ：在A6000 GPU上生成一个网格约需8GB显存和45秒时间。
4. **输入标准化** ：输入网格会被标准化到一个单位边界框内，并建议使用+Y为上方向以获得更好的结果。
5. **面数限制** ：由于计算资源限制，该模型在少于1600个面以下的网格上进行了训练。


##### 使用场景

1. **3D展示和动画** ：可以用于生成高质量的3D模型，适用于电影、游戏和虚拟现实中的3D展示和动画制作。
2. **艺术创作** ：艺术家和设计师可以使用该工具创建复杂且精细的3D模型，提高工作效率。
3. **3D打印** ：创建适用于3D打印的精细网格模型，应用于制造业、医疗领域等。
4. **研究和教育** ：适用于需要高质量3D模型的研究和教育场景，如计算机视觉、图形学课程等。


##### 具体使用方法

###### 安装步骤

1. 克隆项目仓库并创建环境：

git clone https://github.com/buaacyw/MeshAnythingV2.git && cd MeshAnythingV2
conda create -n MeshAnythingV2 python==3.10.13 -y
conda activate MeshAnythingV2
pip install torch==2.1.1 torchvision==0.16.1 torchaudio==2.1.1 --index-url https://download.pytorch.org/whl/cu118
pip install -r requirements.txt
pip install flash-attn --no-build-isolation
pip install -U gradio


###### 本地Gradio Demo

运行以下命令启动本地Gradio Demo界面：


python app.py


###### 命令行推理

* **网格推理**

python main.py --input_dir examples --out_dir mesh_output --input_type mesh


* **点云数据推理**

python main.py --input_dir pc_examples --out_dir pc_output --input_type pc_normal


##### 重要注意事项

* 建议先使用Rodin进行文本或图像到密集网格的转换，再使用MeshAnything生成艺术家设计的网格。
* 由于面数限制，输入网格的形状应足够尖锐，否则难以在限定面数内准确表示。
* 建议的输入来源包括3D重建、扫描或基于SDS的方法，如DreamCraft3D或Rodin的结果。


MeshAnything V2为各种3D模型生成提供了高效且高质量的解决方案，极大地便利了各行各业的3D模型生产需求。