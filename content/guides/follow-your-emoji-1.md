---
title: "Follow-Your-Emoji"
date: "2024-01-01 00:00:00+08:00"
description: 'Follow-Your-Emoji Follow-Your-Emoji '
slug: follow-your-emoji-1
tags:
- infer.
- follow-your-emoji
- huggingface
- requirements.txt
- install
draft: false
related_tools:
- follow-your-emoji
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## Follow-Your-Emoji

**Follow-Your-Emoji** 是一种基于扩散模型的肖像动画生成框架，可以通过目标标志序列动画化参考肖像。其核心优势在于能够实现精细可控和富有表现力的自由风格肖像动画。

##### 核心特点

* **精细可控** ：允许用户通过提供特定的表情标志，精确控制肖像动画。
* **表现力强** ：生成的动画能捕捉丰富的面部表情变化，实现高表现力的肖像动画。
* **易于使用** ：提供预训练模型和清晰的使用指南，用户只需简单的配置和运行即可生成动画。


##### 使用场景

1. **社交媒体内容创作** ：用户可以生成个性化的肖像动画，用于社交媒体平台的内容分享。
2. **虚拟形象和表情包制作** ：支持制作风格各异的虚拟形象和动态表情包，增强在线沟通的趣味性。
3. **动画和游戏开发** ：为动画和游戏中的人物提供多样且真实的面部表情，提升用户体验。
4. **情感分析和表达** ：在教育、心理治疗等领域，用于更细腻的情感表达和分析。


##### 使用步骤

1. **环境准备** ：克隆代码仓库并安装依赖。

pip install -r requirements.txt


2. **下载预训练模型** ：从 Huggingface 下载所需的预训练模型，并按照指定的目录结构组织存放。
3. **模型推理** ：

bash infer.sh


或

CUDA_VISIBLE_DEVICES=0 python3 -m torch.distributed.run \
--nnodes 1 \
--master_addr $LOCAL_IP \
--master_port 12345 \
--node_rank 0 \
--nproc_per_node 1 \
infer.py \
--config ./configs/infer.yaml \
--model_path /path/to/model \
--input_path your_own_images_path \
--lmk_path ./inference_temple/test_temple.npy  \
--output_path your_own_output_path


4. **创建自己的Emoji** ：使用 MediaPipe 工具制作自己的 Emoji 模板，并结合模型生成个性化的动态表情。

CUDA_VISIBLE_DEVICES=0 python3 -m torch.distributed.run \
--nnodes 1 \
--master_addr $LOCAL_IP \
--master_port 12345 \
--node_rank 0 \
--nproc_per_node 1 \
infer.py \
--config ./configs/infer.yaml \
--model_path /path/to/model \
--input_path your_own_images_path \
--lmk_path your_own_temple_path \
--output_path your_own_output_path


Follow-Your-Emoji 提供了一个直观且强大的工具，可以广泛应用于各种需要生动肖像动画的场景中。