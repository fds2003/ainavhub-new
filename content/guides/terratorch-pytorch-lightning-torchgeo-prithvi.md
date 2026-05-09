---
title: "TerraTorch"
date: "2024-01-01 00:00:00+08:00"
description: 'TerraTorch TerraTorch  TerraTorch '
slug: terratorch-pytorch-lightning-torchgeo-prithvi
tags:
- pytorch
- git
- terratorch
- python
- torchgeo
draft: false
related_tools:
- ttt-lm-pytorch
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## TerraTorch

##### TerraTorch 简介

TerraTorch 是一个基于 [PyTorch Lightning](<https://lightning.ai/docs/pytorch/stable/>) 和 [TorchGeo](<https://github.com/microsoft/torchgeo>) 的地理空间数据库的库。它的主要目的是提供一个灵活的微调框架用于地理空间基础模型的开发，可以在不同的抽象层次进行交互。

这个库提供的功能包括：

* 轻松访问开源的预训练地理空间基础模型（如 [Prithvi](<https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M>)、 [SatMAE](<https://sustainlab-group.github.io/SatMAE/>) 和 [ScaleMAE](<https://github.com/bair-climate-initiative/scale-mae>) 等），以及其它在 [timm](<https://github.com/huggingface/pytorch-image-models>)（Pytorch 图像模型）或 [SMP](<https://github.com/qubvel/segmentation_models.pytorch>)（Pytorch 分割模型预训练库）包中的模型。
* 灵活的训练器，用于图像分割、分类和像素级回归的微调任务。
* 通过灵活的配置文件启动微调任务。


##### 安装方法

###### 使用 Pip

确保 `pip` 版本大于等于 21.8，如果需要可以通过命令 `python -m pip install --upgrade pip` 升级。稳定版本可以使用 `pip install terratorch` 进行安装。如果想获取最新的主分支版本，可以使用 `pip install git+https://github.com/IBM/terratorch.git` 进行安装。

TerraTorch 需要安装 GDAL，这是一个相对复杂的过程。如果系统中没有设置 GDAL，推荐使用 conda 环境并通过命令 `conda install -c conda-forge gdal` 进行安装。

开发者可以克隆这个仓库，使用命令 `pip install -r requirements.txt` 安装依赖，然后运行 `pip install -e .` 安装开发版本。

##### 快速开始

要开始使用，请查看[快速开始指南](<https://ibm.github.io/terratorch/quick_start>)。

##### 使用场景

TerraTorch 主要应用于：

1. **地理空间图像分析** ：包括遥感图像的分类和分割。
2. **环境监测** ：例如土地覆盖变化检测和灾害评估。
3. **农业监测** ：作物健康状况的评估和预测。
4. **城市分析** ：城市扩展和土地利用变化的监测。
5. **气候研究** ：利用卫星数据进行气候模式识别和分析。


##### 开发者指南

请参阅[架构概述](<https://ibm.github.io/terratorch/architecture>)。

TerraTorch 提供了一套覆盖从数据预处理到模型微调的完整工具链，使得地理空间数据分析和模型开发更加高效和灵活。