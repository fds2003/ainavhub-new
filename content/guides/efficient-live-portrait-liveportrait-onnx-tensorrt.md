---
title: "Efficient-Live-Portrait"
date: "2024-01-01 00:00:00+08:00"
description: Efficient-Live-Portrait Efficient-Live-Portrait Efficient-Live-Portrait
slug: efficient-live-portrait-liveportrait-onnx-tensorrt
tags:
- liveportrait
- tensorrt
- tflite
- onnx
- animate-diff
draft: false
related_tools:
- liveportrait
- fasterliveportrait
- advancedliveportrait
- efficient-live-portrait
- agent lightning
---

## Efficient-Live-Portrait

##### **Efficient-Live-Portrait综合介绍**

Efficient-Live-Portrait是一个旨在优化LivePortrait的项目，通过转换成ONNX和TensorRT模型来提高效率，并且在不断更新和改进。其主要功能包括：

1. 实时使用ONNX模型进行演示。
2. 支持TensorRT引擎代码和演示（目前已实现）。
3. 计划转换为CoreML和TFlite模型以支持移动设备运行。
4. 将集成X-pose TensorRT、SadTalker和Animate-Diff Lightning Motion模块，以生成更逼真的视频和动画。


##### **使用场景**

Efficient-Live-Portrait可以广泛应用于以下场景：

1. **虚拟主播和角色动画** ：在实时视频中将静态图像变成动态的人脸动画，适用于直播平台和虚拟助手。
2. **影视制作** ：为影视剧、广告等内容提供逼真的面部表情动画，提升制作效率。
3. **社交媒体和娱乐** ：用户可以将自己的照片转化为动态表情包或短视频，增强互动体验。
4. **教育和培训** ：用于制作教学视频、在线课程中的虚拟讲师，提高学习的趣味性和互动性。
5. **个性化服务** ：在客户服务、销售等领域中，通过虚拟形象提供个性化的互动和服务。


##### **使用指南**

1. 克隆代码并准备环境：

git clone https://github.com/aihacker111/Efficient-Live-Portrait
conda create -n ELivePortrait python==3.10.14
conda activate ELivePortrait
pip install -r requirements-cpu.txt  # 若使用CPU
pip install -r requirements-gpu.txt  # 若使用GPU
pip install -r requirements-mps.txt  # 若使用MPS


2. 下载预训练权重文件：

该项目会自动下载并放置权重文件，无需手动操作。权重文件结构如下：

pretrained_weights
├── landmarks
│   └── models
│       └── buffalo_l
│           ├── 2d106det.onnx
│           └── det_10g.onnx
└── live_portrait
├── appearance_feature_extractor.onnx
├── motion_extractor.onnx
├── generator_warping.onnx
├── stitching_retargeting.onnx
├── stitching_retargeting_eye.onnx
├── stitching_retargeting_lip.onnx


3. 进行推理和实时演示：

使用以下命令进行实时视频或图片的人脸动画推理：

python run_live_portrait.py -v '路径/到您的/视频或摄像头ID' -i '路径/到您的/要动画化的图片' -r '当你想进行实时演示时使用' -e -fp16


通过Efficient-Live-Portrait，用户可以高效地创建逼真的人脸动画，应用于多个领域，为内容创作和互动提供强大的技术支持。