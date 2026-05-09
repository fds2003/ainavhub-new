---
title: "ProcessPainter"
date: "2024-01-01 00:00:00+08:00"
description: ProcessPainter ProcessPainter  animatediff
slug: processpainter-animatediff
tags:
- gpu
- v1.5
- diffusion
- processpainter
- lora
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- seed-thinking-v1.5
- whiterabbitneo-7b-v1.5a-whiterabbitneo-7b-v1.5a 是一个预训练的大型语言模型，可用于多种自然语言处理任务。
- diffusion toolkit
---

## ProcessPainter

ProcessPainter 是一种基于动画扩散模型（animatediff）来生成仿人类绘画过程的模型。它的开发过程包括基础和完整推理代码的发布、模型检查点的发布，并计划未来发布训练代码和训练数据集。

##### 特点和创新

1. **绘画过程生成** ：ProcessPainter 可以模拟人类绘画的步骤，生成逼真的绘画过程。
2. **预训练和微调** ：绘画模块基于多种传统绘画过程重建方法进行了预训练。通过使用 LoRA（低秩适应）技术，进一步微调模型，取得了非常出色的绘画过程生成效果。
3. **图像参考** ：通过结合图像参考网络，可以重构现有绘画或完成未完成的绘画过程。


##### 使用场景

1. **角色绘画** ：如动漫角色、游戏角色等的绘制。
2. **建筑绘画** ：快速绘制建筑物或其他静物。
3. **艺术创作辅助** ：帮助艺术家模拟绘画过程，提供创作灵感或教学辅助。
4. **未完成作品的完成** ：通过给定的一部分绘画，完成剩余部分。


##### 推理要求

* 最低需要30GB GPU内存进行单次推理。
* 需下载预训练模型，如Stable Diffusion v1.5等。


##### 推理教程

1. 下载预训练模型放置在 `models` 文件夹：

wget -O models/DreamBooth_LoRA/v3_sd15_adapter.ckpt https://huggingface.co/guoyww/animatediff/blob/main/v3_sd15_adapter.ckpt
git lfs install
git clone https://huggingface.co/runwayml/stable-diffusion-v1-5 models/stable-diffusion-v1-5


2. 使用如下命令进行角色绘画推理：

python scripts/animate.py --config configs/prompts/character.yaml


3. 使用如下命令进行建筑绘画推理：

python scripts/animate.py --config configs/prompts/speedpainting.yaml


##### 致谢

ProcessPainter 的开发得益于多项前沿研究和社区贡献，包括但不限于以下资源：

* [Stylized Neural Painting](<https://jiupinjia.github.io/neuralpainter/>)
* [Learning to Paint With Model-based Deep Reinforcement Learning](<https://github.com/hzwer/ICCV2019-LearningToPaint>)
* [Paint Transformer: Feed Forward Neural Painting with Stroke Prediction](<https://github.com/Huage001/PaintTransformer>)
* [AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning](<https://github.com/guoyww/animatediff/>)


训练数据由 @“Doodling by the Lakeside” 提供，特此感谢。