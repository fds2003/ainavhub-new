---
title: "AudioLCM"
date: "2024-01-01 00:00:00+08:00"
description: AudioLCM AudioLCM Latent Consistency Model
slug: audiolcm-latent-consistency-model-pytorch
tags:
- gpu
- txt2audio
- github
- ste
- nvidia
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- udio
- claude github webhook
- github copilot
---

## AudioLCM

AudioLCM是一种高效、优质的文本到音频生成模型，利用潜在一致性模型（Latent Consistency Model）实现。该项目提供了PyTorch实现和预训练模型，并在GitHub和HuggingFace上开源。其主要特点在于能够快速生成高保真度的音频样本。

##### 使用场景

1. **文本到音频的生成** ：可以根据输入的文本描述生成相应的音频。
2. **语音合成与转换** ：尤其适用于需要高质量语音输出的应用，如语音助手、音频读物等。
3. **多媒体内容创作** ：可用于游戏、动画和电影配音等多媒体内容创作领域。


##### 快速开始

要在本地环境中使用AudioLCM，需保证有NVIDIA GPU和CUDA cuDNN。首先克隆项目仓库，然后下载所需的预训练模型权重并放置在指定路径中。

##### 支持的数据集和预训练模型

权重文件可以从Huggingface下载，包括audiolcm.ckpt、BigVGAN vocoder等。

##### 依赖项

需要安装项目依赖，详见`requirement.txt`。

##### 预训练模型推理

使用下面的命令进行推理：


python scripts/txt2audio_for_lcm.py  --ddim_steps 2 -b configs/audiolcm.yaml --sample_rate 16000 --vocoder-ckpt  vocoder/logs/bigvnat16k93.5w --outdir results --test-dataset audiocaps  -r ckpt/audiolcm.ckpt


##### 训练

1. **数据集准备** ：将数据集信息构建成tsv文件，包括音频ID、数据集名称、音频路径、音频描述、melspec文件路径。
2. **生成melspec文件** ：根据已有tsv文件生成melspec文件。
3. **训练变分自编码器（VAE）** ：根据准备好的数据集进行VAE训练。
4. **训练潜在扩散模型** ：使用训练好的VAE检查点，进行扩散模型训练。


##### 评估

生成样本后，可以计算FD、FAD、IS、KL等指标，以及Clap_score。

##### 致谢

该实现参考了多个开源项目，如[Make-An-Audio](<https://github.com/Text-to-Audio/Make-An-Audio>)、[CLAP](<https://github.com/LAION-AI/CLAP>)等。

##### 引用

如果您在研究中使用了该代码，请考虑引用以下文献：


@misc{liu2024audiolcm,
title={AudioLCM: Text-to-Audio Generation with Latent Consistency Models},
author={Huadai Liu and Rongjie Huang and Yang Liu and Hengyuan Cao and Jialei Wang and Xize Cheng and Siqi Zheng and Zhou Zhao},
year={2024},
eprint={2406.00356},
archivePrefix={arXiv},
primaryClass={eess.AS}
}


##### 声明

禁止任何组织或个人未经允许使用本文所提及的技术生成他人声音，包括但不限于政府领导人、政治人物和名人，以免违反相关法律。