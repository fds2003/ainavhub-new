---
title: "ComfyUI-AnyText"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-AnyText ComfyUI-AnyText ComfyUI-AnyText '
slug: comfyui-anytext-anytext
tags:
- fp32
- comfyui-anytext
- zh2en
- tensorflow
- anytext
draft: false
related_tools:
- flow
- beyond human translation
- translation-starter - 任何视频翻译成任何语言，并实现完美的唇形同步
- translation agent
- happy
---

## ComfyUI-AnyText

**ComfyUI-AnyText简介**

ComfyUI-AnyText 是一个非官方的工具，用于生成和编辑包含多语言文本的视觉内容。该项目基于 AnyText 的原始代码库开发，旨在提供简单的多语言文本生成和编辑功能。

**使用场景**

1. **文本生成** ：用户可以输入包含多语言文本的提示，工具会生成对应的图像，例如刻有古诗的马克杯、电商广告图等。
2. **文本编辑** ：用户可以对已有图像中的文本进行编辑，例如在标志牌、表情包或建筑物前的标牌上添加或修改文字。


**使用说明**

* 需要安装一些额外的包如`modelscope`和`tensorflow`，特别是需要使用`damo/nlp_csanmt_translation_zh2en`翻译模型时。
* 工具支持多种输入格式和分辨率的图像，但输出图像的分辨率会限制在≤768。
* 工具会自动下载默认模型到指定目录，用户也可以手动下载并放置在指定文件夹中。
* 支持 CUDA 和 FP16/FP32 精度，具体配置因系统和环境而异。


**示例提示**

* **英文文本生成** ：

* 在干净的建筑物上有标有“SCIENCE”的标志。
* 标有“Happy Holidays”的冰雕。
* **中文文本生成** ：

* 一张关于墙上的彩色涂鸦艺术的摄影作品，上面写着“人工智能”和“神经网络”。
* 一个装饰华丽的蛋糕，上面用奶油写着“阿里云”和“APSARA”。
* **英文文本编辑** ：

* 一堆水果中央写着“UIT”。
* 沙滩上的照片，有写着“wrong”的小黄人表情包。
* **中文文本编辑** ：

* 一个表情包，小猪说“下班”。
* 一个黄色标志牌，上边写着“不要”和“大意”。


**具体参数**

* **sort_radio** ：控制文本绘制顺序，在 y 轴（纵向绘制）和 x 轴（横向绘制）之间切换。
* **revise_pose** ：在生成模式下，修正文本在图像中的位置。
* **Random_Gen** ：自动生成遮罩，根据文本内容数量生成相应的遮罩。
* **nonEdit_random_gen_width & nonEdit_random_gen_height**：控制文本生成时图像的尺寸，仅在文本生成和随机遮罩情况下使用。


以上是对 ComfyUI-AnyText 的简要介绍及其使用场景。它主要用于多语言文本的视觉生成和编辑，适用于各种创意设计和文本展示场景。