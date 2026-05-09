---
title: "TaskMeAnything"
date: "2024-01-01 00:00:00+08:00"
description: 'TaskMeAnything TaskMeAnything  TaskMeAnything '
slug: taskmeanything-mlm
tags:
- taskmeanything-ui
- vqa
- taskmeanything
- taskmeanything-db
- mlm
draft: false
related_tools:
- taskmeanything
- vimlm
---

## TaskMeAnything

## TaskMeAnything 简介及使用场景

##### 简介

TaskMeAnything 是一个基准生成引擎，它能够根据用户的需求为大型多模态语言模型 (MLM) 生成基准测试。该引擎维护着一个可扩展的视觉资产分类系统，并可以以编程方式生成大量的任务实例。此外，它还能在有限的计算预算内针对用户关于 MLM 性能的查询进行算法优化。当前版本可以生成超过 5 亿对用以评估 MLM 感知能力的图像/视频问答对。

##### 主要资源

我们发布了以下资源：

1. **TaskMeAnything-v1** : 第一个版本，包含 28 个任务生成器，可生成超过 5 亿个 VQA 任务。
2. **TaskMeAnything-v1-Random** : 从 TaskMeAnything-v1 随机选择的数据集，包括 5,700 个图像问答和 1,800 个视频问答任务实例。
3. **TaskMeAnything-DB** : 存储 TaskMeAnything 评估数据库，涵盖 13 个开源 MLM 在 1 百万个 VQA 任务实例上的评估结果。
4. **TaskMeAnything-UI** : 基于 TaskMeAnything-DB 的交互式图形界面，让用户以直观的方式与模型在 TaskMeAnything-v1 上的性能进行交互。


##### 安装

你可以通过以下命令轻松下载仓库并设置环境：


git clone https://github.com/JieyuZ2/TaskMeAnything.git
cd ./TaskMeAnything

pip install -r requirements.txt


##### 数据来源

源数据存储在 [HuggingFace](<https://huggingface.co/datasets/jieyuz2/TaskMeAnything-v1-source>)。包括 `3d_assets`、`agqa_video` 和 `object_images`。对于包含场景图真实性图像，请使用提供的链接下载并移动到指定文件夹中。

##### 使用场景

TaskMeAnything 提供了多个任务生成器，覆盖了五种场景：

1. **2D 贴纸图像** : 包括 `grid-how-many`、`grid-what`、`grid-where` 等任务。
2. **3D 桌面图像** : 包括 `3d-what`、`3d-where`、`3d-what-attribute` 等任务。
3. **3D 桌面视频** : 包括 `video-3d-what-move`、`video-3d-where-move`、`video-3d-what-attribute-move` 等任务。
4. **真实图像** : 包括 `sg-what-object`、`sg-what-relation`、`sg-what-attribute` 等任务。
5. **真实视频** : 包括 `video-sg-what-object`、`video-sg-what-relation`、`video-sg-what-action` 等任务。


##### 支持的模型

TaskMeAnything 支持以下图像问答和视频问答模型：

* **图像问答** : qwenvl-chat, qwenvl, llavav1.5-7b, llavav1.5-13b, instructblip-vicuna7b, instructblip-vicuna13b, internvl-chat-v1.5, gemini-vision-pro, qwen-vl-max, gpt4v, gpt4o
* **视频问答** : video-llama2-7b, video-llama2-13b, video-llava-7b, chat-univi-7b, chat-univi-13b, video-chatgpt-7b, video-chat2-7b


##### TaskMeAnything-v1-Random 数据集加载示例

_图像问答数据集_


import datasets

dataset_name = 'weikaih/TaskMeAnything-v1-imageqa-random'
dataset = datasets.load_dataset(dataset_name, split='2d_how_many')


_视频问答数据集并转换为 mp4 格式_


import datasets

dataset_name = 'weikaih/TaskMeAnything-v1-videoqa-random'
dataset = datasets.load_dataset(dataset_name, split='video-3d-what-move')

# 转换二进制流为 .mp4 文件
video_binary = dataset[0]['video']
with open('/path/save/video.mp4', 'wb') as f:
f.write(video_binary)


##### 联系信息

* Jieyu Zhang: [jieyuz2@cs.washington.edu](<mailto:jieyuz2@cs.washington.edu>)


##### 引用

如果你使用了 TaskMeAnything，请引用相应的学术论文（BibTeX 格式待更新）。