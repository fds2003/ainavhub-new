---
title: "Prompt-Singer"
date: "2024-01-01 00:00:00+08:00"
description: 'Prompt-Singer Prompt-Singer  Prompt-Singer '
slug: prompt-singer-pytorch-flan-t5
tags:
- pytorch
- gpu
- python
- nvidia
- flan-t5
draft: false
related_tools:
- ttt-lm-pytorch
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- python a2a
- claude code sdk for python
---

## Prompt-Singer

##### Prompt-Singer 简介

Prompt-Singer 是一个可控的歌声音频合成模型，由浙江大学的研究团队开发。通过自然语言提示，Prompt-Singer 可以控制歌手的性别、音量和音域，从而生成符合特定要求的歌声音频。这个模型采用 PyTorch 实现，并使用了经过微调的 FLAN-T5 用作主要技术框架。

##### 使用场景

1. **音乐制作** ：音乐制作人和作曲家可以使用 Prompt-Singer 来生成特定风格和要求的歌声，以便快速制作音乐样本或完整作品。
2. **配音和多媒体制作** ：在电影、电视剧或动画中，根据角色需求生成符合情节的歌声，增强视听效果。
3. **声音艺术** ：声音艺术家可以利用这个工具创造新的声音作品，探索音乐和语音合成的创新可能性。
4. **智能助手和虚拟角色** ：为智能助手或虚拟角色制作特定语感和风格的歌声，提高互动体验。
5. **教育和训练** ：在音乐教育和训练中，生成具有特定特点的歌声用作学习材料或练习范本。


##### 使用说明

1. **依赖环境** ：需要 PyTorch 2.1.0 或以上版本，Python 3.8 或以上版本，以及 NVIDIA GPU 和 NCCL。

2. **安装依赖库** ：包括 NVIDIA 的 apex 库和 fairseq 库。

3. **模型权重下载** ：通过 Hugging Face 平台下载所需的模型检查点，涵盖 SoundStream、微调后的 FLAN-T5、transformer 主干网络和 unit vocoder。

4. **推理过程** ：

* **声学令牌推理** ：根据配置文件生成声学单位。
* **波形生成** ：生成推理结果的音频文件。
5. **训练** ：可以使用自己准备的数据集进行模型训练，并附有详细的数据处理方法和训练指令。


##### 数据处理

为训练模型，需要处理好对齐的音素、音高以及相关标签。提供了生成对齐音素、提取音高并重新缩放的方法和脚本。

##### 注意事项

该代码的部分实现可能与论文发表时有一些差异，正确性尚未完全验证。在使用过程中遇到问题可以提出 Issue。此外，禁止利用该技术未经许可地生成某人的歌声。

##### 参考引文

如果在您的研究中使用了 Prompt-Singer，请引用原文进行开源代码的致谢：


@inproceedings{wang2024prompt,
title={Prompt-Singer: Controllable Singing-Voice-Synthesis with Natural Language Prompt},
author={Wang, Yongqi and Hu, Ruofan and Huang, Rongjie and Hong, Zhiqing and Li, Ruiqi and Liu, Wenrui and You, Fuming and Jin, Tao and Zhao, Zhou},
booktitle={Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)},
pages={4780--4794},
year={2024}
}


##### 免责声明

禁止任何组织或个人在未经他人同意的情况下，利用本文提到的技术生成其歌声（包括但不限于政府领导人、政治人物、和名人）。违反可能会触犯版权法。