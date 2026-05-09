---
title: "SECAD-Net"
date: "2024-01-01 00:00:00+08:00"
description: SECAD-Net SECAD-Net  CAD
slug: secad-net-cad-marching-cubes-secad
tags:
- capri-net
- python
- requirements.txt
- cubes
- install
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## SECAD-Net

SECAD-Net 是一种用于生成CAD模型的深度学习网络。该项目提供了用于训练、微调和测试SECAD-Net的官方代码。当前代码可以使用“marching cubes”算法生成网格，生成CAD格式的代码还在开发中。

##### 使用场景：

1. **CAD模型生成和设计** ：SECAD-Net主要用于生成高质量的CAD模型，适用于各类3D设计和工程应用，如工业设计、机械零件设计等。
2. **学术研究** ：研究人员可以使用SECAD-Net进行深度学习和计算机图形学相关的研究，尤其是在生成对抗网络（GAN）和三维模型生成领域。
3. **教育和培训** ：学生和教育者可以利用SECAD-Net的代码和预训练模型进行学习和培训，了解深度学习在CAD模型生成中的应用。


##### 环境依赖：

需要安装Python包依赖，可以通过执行以下命令进行安装：


$ pip install -r requirements.txt


##### 数据集：

SECAD-Net使用了经过CAPRI-Net处理的ABC数据集，可以从提供的链接下载该数据集。

##### 训练、微调与测试：

项目提供了基本的实验脚本：


$ sh scripts/train.sh
$ sh scripts/fine-tuning.sh
$ sh scripts/test.sh


##### 预训练模型：

可以从指定的链接下载预训练模型，并放置在`exp_log/ABC/ModelParameters/`目录下，然后运行微调代码。