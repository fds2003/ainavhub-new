---
title: "Audio-Mamba"
date: "2024-01-01 00:00:00+08:00"
description: Audio-Mamba Audio-Mamba AuM
slug: audio-mamba-aum-ast-vim
tags:
- gpu
- ast
- commands
- face
- vim
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- recammaster
- fastvlm
- ai podcast transcriber
---

## Audio-Mamba

Audio-Mamba（AuM）是一种用于音频表示学习的双向状态空间模型，旨在进行音频分类。它是一种通用的、无自注意力机制的纯状态空间模型，实现了在各种音频分类基准上的训练和评估。Audio-Mamba基于[AST](<https://github.com/YuanGongND/ast>)和[ViM](<https://github.com/hustvl/Vim>)的研究成果，并利用了Hugging Face的[Accelerate](<https://huggingface.co/docs/accelerate/en/index>)库来支持高效的多GPU训练。

##### 使用场景

Audio-Mamba主要应用于以下音频分类任务：

1. **Audioset** ：用来处理和分类大规模的一般音频数据集。
2. **AS-20K** ：处理和分类较小规模的音频数据。
3. **VGGSound** ：用于多类别音频识别。
4. **VoxCeleb** ：用于语音识别和验证。
5. **Speech Commands V2** ：识别特定的语音命令。
6. **EPIC-SOUNDS** ：用于复杂音频环境下的声音分类。


##### 功能和特点

* 提供了从零开始训练和评估模型的必要代码。
* 支持多GPU高效训练。
* 提供了预训练的模型检查点，便于快速复现和进一步训练。


##### 设置步骤

1. **创建Conda环境** ：

conda create -n aum python=3.10.13
conda activate aum


2. **设置CUDA和CuDNN** ：

conda install nvidia/label/cuda-11.8.0::cuda-nvcc
conda install nvidia/label/cuda-11.8.0::cuda
conda install -c conda-forge cudnn


3. **安装PyTorch和其他依赖** ：

pip install torch==2.1.1 torchvision==0.16.1 torchaudio==2.1.1 --index-url https://download.pytorch.org/whl/cu118
pip install -r requirements.txt


4. **安装Mamba相关包** ：

pip install causal_conv1d==1.1.3.post1 mamba_ssm==1.1.3.post1


5. **启用双向SSM处理** ：

cp -rf vim-mamba_ssm/mamba_ssm $CONDA_PREFIX/lib/python3.10/site-packages


##### 推理与训练

提供了测试音频文件的推理示例脚本，以及每个数据集的评估和训练脚本。训练脚本参数可根据需要调整，支持多GPU训练配置。

##### 预训练模型

预训练模型的检查点包含多种配置和数据集的详细性能指标，便于快速应用和调整。

通过上述描述，可以快速上手和运行Audio-Mamba，进行各种音频分类任务的研究和应用。