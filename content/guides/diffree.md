---
title: "Diffree"
date: "2024-01-01 00:00:00+08:00"
description: 'Diffree Diffree  Diffree '
slug: diffree
tags:
- diffree
- oabench
draft: false
---

## Diffree

##### Diffree 简介

Diffree 是一种基于扩散模型的文本引导对象添加技术，用于图像补全和对象嵌入。其核心目标是通过文本控制在图像中无缝添加新对象，同时保持视觉上下文的一致性（如光照、纹理和空间位置）。传统的文本引导图像补全方法在添加新对象时，往往难以保持背景一致性，或需要繁琐的人工干预（如指定边界框或用户涂鸦掩码）。而Diffree 通过只使用文本控制来预测新对象的位置，实现对象的添加。

为了支持 Diffree 的训练，研究人员创建了名为 OABench 的数据集。这是一个由 74K 真实世界图像组成的合成数据集，包括原始图像、去除对象后的填充图像、对象掩码和对象描述。

通过在 OABench 数据集上使用带有掩码预测模块的稳定扩散模型进行训练，Diffree 独有地实现了通过文本指导预测新对象的位置和添加对象。在多项实验中，Diffree 展现出了高成功率，同时保持背景一致性、空间适宜性以及对象的相关性和质量。

##### 使用场景

1. **图像编辑：** 利用文本控制在现有图像中无缝添加或替换对象，广泛应用于图像设计和广告制作。
2. **虚拟现实与增强现实：** 在虚拟或增强现实环境中动态添加与上下文一致的对象，提高用户体验。
3. **游戏开发：** 在游戏场景中根据文本描述动态创建新对象，提高游戏的动态性与互动性。
4. **影视制作：** 在电影和视频制作中，快速添加与场景一致的对象，减少后期制作成本。
5. **教育与科研：** 可用于教学示例和视觉研究中的图像实验，提供直观的对象添加演示。


##### 安装与推理

###### 安装步骤

1. 克隆代码库并进入 Diffree 目录：

git clone https://github.com/OpenGVLab/Diffree.git
cd Diffree


2. 安装所需软件包：

conda create -n diffree python=3.8.5
conda activate diffree
pip install -r requirements.txt


###### 推理步骤

1. 从 Huggingface 下载 Diffree 模型：

pip install huggingface_hub
huggingface-cli download LiruiZhao/Diffree --local-dir ./checkpoints


2. 使用脚本进行推理：

python app.py


##### 引用

如果你发现这个工作有用，请考虑引用以下文献：


@article{zhao2024diffree,
title={Diffree: Text-Guided Shape Free Object Inpainting with Diffusion Model},
author={Zhao, Lirui and Yang, Tianshuo and Shao, Wenqi and Zhang, Yuxin and Qiao, Yu and Luo, Ping and Zhang, Kaipeng and Ji, Rongrong},
journal={arXiv preprint arXiv:2407.16982},
year={2024}
}