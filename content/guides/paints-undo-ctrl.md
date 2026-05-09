---
title: "Paints-Undo"
date: "2024-01-01 00:00:00+08:00"
description: 'Paints-Undo Paints-Undo Paints-Undo '
slug: paints-undo-ctrl
tags:
- git
- activate
- undo
- cd
- ctrl
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## Paints-Undo

**Paints-Undo：数字绘画中绘画行为的基础模型**

Paints-Undo 是一个旨在提供人类绘画行为基础模型的项目，目的是希望未来的AI模型能更好地符合人类艺术家的实际需求。项目名称 “Paints-Undo” 是受数字绘画软件中按多次“撤销”（通常是 Ctrl+Z）按钮的效果启发，模型的输出看起来像是按了很多次“撤销”按钮。

##### 主要功能

Paints-Undo 提供一组模型，这些模型接受一幅图像作为输入，然后输出该图像的绘制序列。该模型表现出各种人类绘画行为，包括但不限于素描、描线、上色、阴影处理、变换、左右翻转、颜色曲线调整、更改图层可见性，甚至在绘画过程中更改整体构思。

##### 使用方法

###### 本地部署

1. 克隆代码仓库并进入目录：

git clone https://github.com/lllyasviel/Paints-UNDO.git
cd Paints-UNDO


2. 创建并激活 Conda 环境：

conda create -n paints_undo python=3.10
conda activate paints_undo


3. 安装依赖：

pip install xformers
pip install -r requirements.txt


4. 启动 Gradio 应用：

python gradio_app.py


##### 模型要求

此模型在具有24GB VRAM的 Nvidia 4090 和 3090TI 上进行了测试，理论上10到12.5GB的VRAM是最低需求。

##### 使用场景

1. **艺术创作过程分析** ：Paints-Undo 能够模拟数字绘画过程中的每一步操作，从而帮助艺术家和研究人员分析绘画过程。
2. **学习与教学** ：通过回放绘画过程，可以用作绘画教学的辅助工具，帮助学生了解和学习绘画技法。
3. **艺术创意实验** ：艺术家可以使用此工具进行创意实验，观察不同的绘画步骤和方法对最终作品的影响。


##### 模型概述

1. **单帧模型（paints_undo_single_frame）** ：接受一幅图像和一个操作步骤作为输入，输出该图像在相应步骤下的状态。
2. **多帧模型（paints_undo_multi_frame）** ：接受两幅图像作为输入，输出两个图像之间的16个中间帧。该模型在生成短视频时更加连续和一致，但创意性较低。


##### 教程

1. 上传图片或选择示例图片。
2. 点击“生成提示”获取全局提示词。
3. 点击“生成关键帧”生成5-7个关键帧。
4. 点击“生成视频”生成最终视频。


##### 引用


@Misc{paintsundo,
author = {Paints-Undo Team},
title  = {Paints-Undo GitHub Page},
year   = {2024},
}


**免责声明** ：此项目旨在发展人类绘画行为的基础模型，帮助未来的AI系统更好地满足人类艺术家的实际需求。用户可以自由使用此工具创建内容，但应遵守当地法律，并负责任地使用该工具。开发者不对用户的潜在滥用行为承担任何责任。

更多示例和信息可以访问 [Paints-Undo 示例页面](<https://lllyasviel.github.io/pages/paints_undo/>)。