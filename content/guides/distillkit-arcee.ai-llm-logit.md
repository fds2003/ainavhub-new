---
title: "DistillKit"
date: "2024-01-01 00:00:00+08:00"
description: 'DistillKit DistillKit  DistillKit '
slug: distillkit-arcee.ai-llm-logit
tags:
- cpt
- requirements.txt
- install
- pip
- packaging
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## DistillKit

##### DistillKit 简介

DistillKit 是由 Arcee.AI 发起的用于模型蒸馏的开源研究项目。其目标是为社区提供易用的工具，以研究、探索并推动开源大模型（LLM）蒸馏方法的采用。本项目专注于实用且有效的技术，以提升模型的性能和效率。

##### 主要特性

* 基于 Logit（对数几率）的蒸馏（要求模型架构相同）
* 基于隐藏状态的蒸馏（不同架构模型间可用）
* 支持监督微调（SFT），后续将提供 DPO 和 CPT 支持


##### 安装方法

###### 快速安装

通过执行脚本即可快速安装：


./setup.sh


###### 手动安装

如果你更愿意手动安装依赖，请按照以下步骤进行：

1. 安装基础依赖：

pip install torch wheel ninja packaging


2. 安装 Flash Attention：

pip install flash-attn


3. 安装 DeepSpeed：

pip install deepspeed


4. 安装剩余依赖：

pip install -r requirements.txt


##### 配置

你可以直接在训练脚本中设置配置：


config = {
"project_name": "distil-logits",
"dataset": {
"name": "mlabonne/FineTome-100k",
"split": "train",
"seed": 42
},
"models": {
"teacher": "arcee-ai/Arcee-Spark",
"student": "Qwen/Qwen2-1.5B"
},
"tokenizer": {
"max_length": 4096,
"chat_template": "{...}" # 具体模板省略
},
"training": {
"output_dir": "./results",
"num_train_epochs": 3,
"per_device_train_batch_size": 1,
...
},
"distillation": {
"temperature": 2.0,
"alpha": 0.5
},
"model_config": {
"use_flash_attention": True
}
}


##### 使用方法

通过以下命令启动 DistillKit：


accelerate launch distil_logits.py


##### 蒸馏方法

DistillKit 支持以下两种主要的蒸馏方法：

1. **基于 Logit 的蒸馏** ：通过使用硬目标（实际标签）和软目标（教师模型的对数几率）来进行知识迁移。
2. **基于隐藏状态的蒸馏** ：通过对齐学生模型和教师模型的中间层表示进行知识迁移，提升学生模型的学习效果。


##### 使用场景

DistillKit 适用于以下场景：

* 提升大模型的性能和效率
* 合并不同架构间的知识
* 针对特定领域任务进行模型优化
* 在内存受限的环境中运行较大的模型


##### 未来方向

未来的版本将包括持续预训练（CPT）和直接偏好优化（DPO）的蒸馏方法。 DistillKit 欢迎社区做出贡献，包括新蒸馏方法、训练流程优化和内存优化等方面。