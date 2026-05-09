---
title: "Omost"
date: "2024-01-01 00:00:00+08:00"
description: Omost Omost Omost  LLM
slug: omost-llm-almost-there-omni
tags:
- llama3
- gpt4o
- preference
- optimization
- phi3
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- gpt4o captcha bypass
---

## Omost

# Omost

Omost 是一个将大语言模型（LLM）的编码能力转换为图像生成（更准确地说是图像合成）能力的项目。

`Omost` 这个名字有两个含义：

1. 每次你使用 Omost 后，你的图像几乎完成（almost there）。
2. `O` 代表 “omni”（多模态），`most` 代表我们希望充分利用它（get the most out of it）。


Omost 提供 LLM 模型，这些模型会编写代码来使用 Omost 的虚拟 `Canvas` 代理合成图像视觉内容。特定的图像生成器实现可以渲染这个 `Canvas` 实际生成图像。

目前，我们提供了基于 Llama3 和 Phi3 变体的三个预训练 LLM 模型。

模型训练数据包括：(1) 几个数据集的真实注释数据，包括 Open-Images，(2) 自动标注图像提取的数据，(3) 来自 DPO（Direct Preference Optimization）的强化学习数据（“代码是否可以通过 python 3.10 编译” 作为直接偏好），以及 (4) 来自 OpenAI GPT4o 多模态能力的一小部分调整数据。

## 使用场景

Omost 的主要使用场景可以包括但不限于：

1. **图片生成与编辑** ：通过大语言模型生成代码并使用虚拟 Canvas 合成复杂图像，可以用于艺术创作、广告设计等。
2. **游戏与电影制作** ：快速生成场景和角色设计，有助于游戏和电影的前期制作和概念设计。
3. **教育与教学** ：用于图像合成和计算机图形学教学中，帮助学生理解图像生成过程。
4. **科研与实验** ：在计算机视觉和人工智能领域，使用 Omost 可以帮助研究者进行图像相关的实验。


## 快速开始

可以使用[官方 HuggingFace 空间](<https://huggingface.co/spaces/lllyasviel/Omost>)来直接体验。

或者，通过以下步骤在本地部署（需要 8GB Nvidia VRAM）：


git clone https://github.com/lllyasviel/Omost.git
cd Omost
conda create -n omost python=3.10
conda activate omost
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt
python gradio_app.py


如果一些较老的 GPU（如 9XX 或 10XX 或 20XX）在运行 `bitsandbytes` 时遇到问题，可以直接使用我们的官方 HuggingFace 空间。

Omost 提供多个预训练模型，可以根据需要选择合适的模型进行图像生成和编辑。