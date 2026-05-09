---
title: "SEED-Story"
date: "2024-01-01 00:00:00+08:00"
description: 'SEED-Story SEED-Story SEED-Story '
slug: seed-story-seed-x-storystr
tags:
- de-tokenizer
- storystr
- storystream
- seed-story
- sd-xl
draft: false
related_tools:
- seed-story
- vita-1.5
- vita
---

## SEED-Story

##### SEED-Story简介和使用场景

**SEED-Story** 是一种多模态长故事生成模型，具备生成包含丰富且连贯的叙事文本和一致性高的人物和风格图像的能力。此模型基于 [SEED-X](<https://github.com/AILab-CVC/SEED-X>) 构建。为了训练和评估多模态故事生成，SEED-Story还发布了一个大规模数据集 **StoryStream** 。

###### 主要功能

1. **多模态故事生成** ：从用户提供的初始图像和文本生成包含文本和图像的长故事。生成的故事在人物和风格上一致，最多可包含25个多模态序列。
2. **一致性调整** ：在生成图像和文本时，能够保证图像风格和人物形象的一致性。
3. **多样化生成** ：即使提供相同的初始图像，不同的初始文本可以引导生成不同的发展故事。


###### 方法

1. **阶段1** ：预训练基于SD-XL的去标记器（de-tokenizer），使用预训练ViT的特征重建图像。
2. **阶段2** ：采样交错的图像-文本序列，通过预测下一个词和图像特征回归训练多模态大语言模型（MLLM）。
3. **阶段3** ：使用从MLLM回归的图像特征调优SD-XL，增强生成图像的一致性。


###### 使用场景

1. **儿童故事书生成** ：通过输入一些简单的文字和图片，可以生成完整的故事，适用于儿童电子书和纸质书的创作。
2. **广告和营销** ：根据初始的品牌图片和文本描述，生成一系列连贯的广告宣传素材。
3. **教育与培训** ：生成包含图文并茂的教材，帮助学生通过图像和故事更好地理解知识。
4. **游戏和娱乐** ：自动生成游戏剧情和角色设定，减少开发者的创作负担。


##### 安装和使用

1. **依赖安装** ：[Python (>=3.8)](<https://www.anaconda.com/download/#linux>) 和 [PyTorch (>=2.0.1)](<https://pytorch.org/>)，建议使用Anaconda管理Python环境。

2. **项目克隆和依赖包安装** ：

git clone https://github.com/TencentARC/SEED-Story.git
cd SEED-Story
pip install -r requirements.txt


3. **数据准备** ：下载 [StoryStream](<https://huggingface.co/datasets/TencentARC/StoryStream>) 数据集，并按照需求进行数据分块处理。

4. **模型权重** ：需要下载预训练的分词器、去词器、 SEED-X预训练模型和多个调优的MLLM和去词器模型。

5. **推理** ：

# 生成多模态故事
python3 src/inference/gen_george.py
# 生成故事的多模态注意力可视化
python3 src/inference/vis_george_sink.py


6. **评估** ：可以使用GPT-4 API评估生成结果，从图像风格一致性、故事吸引力和文本图像一体性三个方面进行评分。


##### 引用

如果您觉得此项目对您有帮助，请考虑引用：


@misc{yang2024seedstorymultimodallongstory,
title={SEED-Story: Multimodal Long Story Generation with Large Language Model},
author={Shuai Yang and Yuying Ge and Yang Li and Yukang Chen and Yixiao Ge and Ying Shan and Yingcong Chen},
year={2024},
eprint={2407.08683},
archivePrefix={arXiv},
primaryClass={cs.CV},
url={https://arxiv.org/abs/2407.08683},
}


##### 许可证

SEED-Story的代码在Apache License 2.0下发布，某些第三方组件除外，具体细节见[License](<License_Seed-Story.txt>)。