---
title: "nano-llama31 nano-llama31"
date: "2024-01-01 00:00:00+08:00"
description: nano-llama31  Nano-Llama31 Nano-Llama31
slug: nano-llama31-llama-gb-gpu-pytorch
tags:
- gpu
- llama3
- meta
- chmod
- models
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- llama3v
- llama3 implemented from scratch
- ama
---

## nano-llama31

##### 什么是Nano-Llama31

Nano-Llama31是一个简单的Llama 3.1版本实现，旨在通过最小化依赖来进行推理（推理规模目前为8B的基础模型，在单个40GB以上的GPU上运行）。目前代码大约有900行，使用的是PyTorch和tiktoken。开发者计划进一步缩小代码规模并添加微调功能。

**注意：** 该项目仍在开发中，不适合直接在生产环境中使用。

##### 基本安装和使用步骤

1. **下载官方Llama 3.1代码：** 首先从Meta官方仓库中下载`llama-models`代码：

git clone https://github.com/meta-llama/llama-models.git


2. **下载模型：** 切换到模型目录并下载Llama 3.1 8B基础模型（需要访问Meta官网申请下载链接）：

cd llama-models/models/llama3_1
chmod u+x download.sh
./download.sh


3. **设置环境：** 创建并激活一个新的Conda环境，安装必要依赖：

conda create -n llama31 python=3.10
conda activate llama31
pip install -r requirements.txt
pip install -e .


4. **运行推理：** 切换到项目根目录并运行生成脚本：

torchrun --nnodes 1 --nproc_per_node 1 reference.py \
--ckpt_dir llama-models/models/llama3_1/Meta-Llama-3.1-8B \
--tokenizer_path llama-models/models/llama3_1/Meta-Llama-3.1-8B/tokenizer.model


5. **简化版运行：** 使用无依赖（仅依赖pytorch和tiktoken）的简化代码运行推理（llama31.py）：

python llama31.py \
--ckpt_dir llama-models/models/llama3_1/Meta-Llama-3.1-8B \
--tokenizer_path llama-models/models/llama3_1/Meta-Llama-3.1-8B/tokenizer.model


##### 适用场景

* **研究人员和开发者：** 由于nano-llama31是一个最小化实现的Llama 3.1版本，非常适合研究人员和开发者用来探索和实验不同语言模型及其应用。

* **有限资源环境：** 项目目标之一是尽量减少依赖，因此在资源有限的环境中也能轻松部署和运行。

* **模型微调：** 开发者正在计划添加微调功能，这将使用户能够在特定任务上细化和优化模型。


##### 项目TODO

* 确保`reference.py`和`llama31.py`输出一致
* 删除更多不必要的代码，并优化代码结构
* 添加训练和微调功能
* 支持Llama 3的其他模型类型和更大模型尺寸
* 转化现有代码使其类似于llm.c项目中的`train_gpt2.py`参考代码


该项目目前仍处在初期开发阶段，开发者正在不断改进和优化。