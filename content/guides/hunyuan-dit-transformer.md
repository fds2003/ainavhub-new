---
title: "Hunyuan-DiT"
date: "2024-01-01 00:00:00+08:00"
description: Hunyuan-DiT Hunyuan-DiT Hunyuan-DiT
slug: hunyuan-dit-transformer
tags:
- git
- hunyuan-dit
- https
- transformer
- mllm
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## Hunyuan-DiT

##### Hunyuan-DiT功能及使用指南

##### 什么是Hunyuan-DiT？

腾讯宣布旗下的混元文生图大模型升级并对外开源Hunyuan-DiT，Hunyuan-DiT是一款多分辨率扩散Transformer 模型，专门用于中文和英文文本到图像的生成。它可以从输入的文本描述生成高质量的图像，并能够处理多轮对话的文生图任务（即根据用户的多个连续输入生成图像）。

##### 主要功能

1. **中英文双语理解** ：Hunyuan-DiT模型能够理解中英文的文本输入，并生成相应的图像。
2. **多轮文本到图像生成** ：支持根据用户的多个连续文本输入逐步生成和优化图像。
3. **细粒度语言理解** ：利用多模态大语言模型（MLLM），能够理解和细化复杂的文本描述，生成更符合预期的图像。


##### 什么时候使用Hunyuan-DiT？

Hunyuan-DiT非常适合以下场景：

1. **内容创作** ：需要根据文本描述生成配图，例如书籍插图、广告设计等。
2. **多轮对话生成** ：用户希望通过多次输入逐步绘制出自己的构想。
3. **中文文生图需求** ：用户需要生成包含大量中文元素的图像。


##### 如何使用Hunyuan-DiT？

###### 安装和配置

1. **克隆仓库**

git clone https://github.com/tencent/HunyuanDiT
cd HunyuanDiT


2. **创建并激活Conda环境**

conda env create -f environment.yml
conda activate HunyuanDiT


3. **安装pip依赖**

python -m pip install -r requirements.txt


4. **（可选）安装Flash Attention加速**

python -m pip install git+https://github.com/Dao-AILab/flash-attention.git@v2.1.2.post3


5. **下载预训练模型**

python -m pip install "huggingface_hub[cli]"
mkdir ckpts
huggingface-cli download Tencent-Hunyuan/HunyuanDiT --local-dir ./ckpts


###### 推理方式

1. **使用Gradio界面**

python app/hydit_app.py  # 默认中文界面
python app/hydit_app.py --lang en  # 英文界面


2. **使用命令行**

python sample_t2i.py --prompt "渔舟唱晚"
python sample_t2i.py --prompt "渔舟唱晚" --no-enhance  # 仅文本到图像，无增强
python sample_t2i.py --infer-mode fa --prompt "渔舟唱晚"  # 使用Flash Attention
python sample_t2i.py --prompt "渔舟唱晚" --image-size 1280 768  # 修改图像尺寸