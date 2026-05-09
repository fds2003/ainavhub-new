---
title: "Mistral-finetune"
date: "2024-01-01 00:00:00+08:00"
description: 'Mistral-finetune Mistral-finetune  Mistral-finetune '
slug: mistral-finetune-mistral-lora-a100-h100
tags:
- gpu
- pretrain
- amp
- git
- lora
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- computer using agent sample app
- structured outputs sample apps
- gemini spatial example
---

## Mistral-finetune

##### Mistral-finetune 简介

`Mistral-finetune` 是一个轻量级的代码库，旨在实现 Mistral 模型的高效调优。其基于 [LoRA](<https://arxiv.org/abs/2106.09685>) 训练范式，大部分模型参数被冻结，仅训练 1-2% 的低秩矩阵扰动权重，使其在内存利用和性能方面具有良好的表现。推荐使用 A100 或 H100 GPU 来达到最佳效率，尤其在多 GPU 单节点的设置下。然而，对于较小的模型（如 7B），仅需一块 GPU 即可完成训练。

##### 使用场景

`Mistral-finetune` 适用于以下场景：

1. **模型微调** ：通过微调官方的 Mistral 模型来适应特定的任务和数据集。
2. **数据类型支持** ：支持两种不同的数据类型：
* **预训练数据（Pretrain data）** ：纯文本数据。
* **指令数据（Instruct data）** ：对话形式的数据包含用户和助手的交互。
3. **函数调用** ：对话形式的数据可以包含复杂的函数调用关系，适用于需要函数调用能力的模型训练。


##### 安装

1. 克隆代码库：


cd $HOME && git clone https://github.com/mistralai/mistral-finetune.git


2. 安装依赖：


cd mistral-finetune
pip install -r requirements.txt


##### 模型下载

推荐使用官方提供的 Mistral 模型进行微调。下载并解压模型，然后在训练脚本中引用下载的模型路径。

##### 准备数据集

数据必须以 `jsonl` 格式存储，具体格式参见官方文档。

###### 预训练数据：


{"text": "文档1中的文本"}
{"text": "文档2中的文本"}


###### 指令数据：


{
"messages": [
{"role": "user", "content": "用户交互1"},
{"role": "assistant", "content": "助手交互1"}
]
}


##### 验证数据集

使用验证脚本来确保数据格式正确并估算训练时间：


python -m utils.validate_data --train_yaml example/7B.yaml


##### 开始训练

修改配置文件，根据训练需求设置相关参数，例如 `max_steps`、`run_dir`、`wandb.project` 等，然后使用 torchrun 启动训练：


torchrun --nproc-per-node 8 --master_port $RANDOM -m train example/7B.yaml


##### 训练配置自定义

可以定制训练配置以适应不同的训练需求，调整如`学习率`、`批大小`、`训练步数`等参数。

##### 推理

训练完成后，可以使用 `mistral-inference` 库进行推理测试：


mistral-chat /path/to/model --max_tokens 256 --temperature 1.0 --instruct --lora_path $HOME/ultra_chat_test/checkpoints/checkpoint_000300/consolidated/lora.safetensors


##### 模型扩展

若需使用不兼容 v3 词典的模型，可以通过扩展词典的方式使其兼容：


python -m utils.extend_model_vocab --original_model_ckpt /path/to/old/model --extended_model_ckpt /path/to/extended/model


##### 常见问题

1. **MoE模型微调建议** ：由于MoE模型在不同种子下性能表现会有较大差异，建议进行多次微调并选择表现最佳的模型。
2. **训练过程中使用的令牌数** ：可使用验证数据脚本估算训练过程中使用的令牌数量。
3. **CUDA内存不足** ：尝试减少每个 GPU 的批大小或序列长度来解决内存不足问题。


通过以上方法，可以高效地微调 Mistral 模型，以满足特定任务的需求并优化模型性能。