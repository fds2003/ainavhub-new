---
title: "Medical SAM 2 Medical SAM 2 Medical SAM 2"
date: "2024-01-01 00:00:00+08:00"
description: Medical SAM 2 Medical SAM 2 MedSAM-2
slug: medical-sam-medsam-2-segment-images
tags:
- btcv
- model
- segment
- python
- medical
draft: false
related_tools:
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
- granite code models
---

## Medical SAM 2

Medical SAM 2（简称MedSAM-2）是一种高级图像分割模型，基于SAM 2框架，专门用于处理2D和3D的医疗图像分割任务。该模型通过把医疗图像当作视频来分割，展现了较为突出的性能。具体细节请参见论文：[Medical SAM 2: Segment Medical Images As Video Via Segment Anything Model 2](<https://arxiv.org/abs/2408.00874>)。

##### 使用场景

1. **2D医疗图像分割** ：

* 例如，对于眼底图像中的视盘/视杯进行分割，Medical SAM 2可以快速、高效地完成这些任务。可以下载预处理后的 REFUGE 数据集，并运行模型进行训练和验证。
2. **3D医疗图像分割** ：

* 如腹部多器官的分割任务，MedSAM-2可以处理3D图像数据，对多个器官进行精确分割。通过下载预处理后的BTCV数据集，并运行模型以进行训练和验证。


##### 操作步骤

1. **安装环境** ：

* 使用`conda`创建并激活所需的环境。
* 下载并使用必要的检查点文件。
2. **处理2D图像任务** ：

* 下载处理后的REFUGE数据集，将其放置在指定的文件夹中。
* 运行指定的Python脚本进行训练和验证。
3. **处理3D图像任务** ：

* 下载处理后的BTCV数据集并进行解压。
* 运行相应的Python脚本进行训练和验证。


##### 最新动态

* 2024年8月5日，Medical SAM 2论文在Hugging Face上被评为当天的#1论文。
* 2024年8月5日，更新了3D案例的详细信息和下载链接。
* 2024年8月5日，更新了2D案例的详细信息和下载链接。
* 2024年8月5日，Medical SAM 2论文正式在线发布。
* 2024年8月5日，Medical SAM 2代码在GitHub上发布。
* 2024年7月30日，SAM 2模型发布。