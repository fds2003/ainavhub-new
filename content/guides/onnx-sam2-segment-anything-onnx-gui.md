---
title: "ONNX-SAM2-Segment-Anything"
date: "2024-01-01 00:00:00+08:00"
description: 'ONNX-SAM2-Segment-Anything ONNX-SAM2-Segment-Anything  ONNX '
slug: onnx-sam2-segment-anything-onnx-gui
tags:
- gpu
- gui
- nvidia
- requirements.txt
- install
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- gpt-4.1 prompting guide
- agentcpm-gui
- gui-actor
---

## ONNX-SAM2-Segment-Anything

ONNX-SAM2-Segment-Anything 是一个基于 ONNX 模型进行图像分割的项目。它能够利用指定的点标进行图像分割，并提供一个简单的图形用户界面 (GUI) 用于图像的注释。目前该项目仍在开发中，尚且只支持图像预测，视频预测功能即将上线。此外，该项目目前在分辨率、仅支持点和掩码输入等方面有限制。

##### 安装步骤

1. 克隆项目并安装依赖：

git clone https://github.com/ibaiGorordo/ONNX-SAM2-Segment-Anything.git
cd ONNX-SAM2-Segment-Anything
pip install -r requirements.txt


2. 安装 ONNX Runtime：

* 对于 Nvidia GPU 用户：

pip install onnxruntime-gpu


* 对于其他用户：

pip install onnxruntime


3. 使用 Google Colab 转换编码器和解码器模型，并将模型文件放置在 `models` 文件夹中。


##### 示例

###### 图像推理

通过执行下面的命令运行图像分割模型：


python image_segmentation.py


使用方法：

* `point_coords`: 包含二维点坐标的列表，用于不同标签。
* `point_labels`: 包含标签的列表，每个标签对应的点是0或1，分别表示在那个像素位置对象是否存在。


###### SAM2 注释应用

运行注释 GUI：


python webcam_depth_estimation.py


注释操作：

* **左击** ：添加一个正点，如果附近存在其他点会删除它
* **右击** ：添加一个负点
* **添加标签按钮** ：增加一个新的标签用于注释
* **删除标签按钮** ：删除最后一个标签


##### 使用场景

* **图像分割** ：可以根据指定的点标在图像中进行对象的分割。
* **图像注释** ：使用 GUI 工具对图像进行注释，特别适用于创建训练数据集。


##### 参考资料

* SAM2 仓库: <https://github.com/facebookresearch/segment-anything-2>