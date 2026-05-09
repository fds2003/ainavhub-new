---
title: "OpenDiLoCo"
date: "2024-01-01 00:00:00+08:00"
description: 'OpenDiLoCo OpenDiLoCo  OpenDiLoCo '
slug: opendiloco-open-source-framework-globally-distributed
tags:
- requirements.txt
- opendiloco.git
- install
- pip
- activate
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## OpenDiLoCo

## OpenDiLoCo 简介

OpenDiLoCo 是一个开源框架，旨在实现全球分布式、低通信训练。该框架的设计理念在其论文 [OpenDiLoCo: An Open-Source Framework for Globally Distributed Low-Communication Training](<https://arxiv.org/abs/2407.07852>) 中有详细介绍。OpenDiLoCo 包含了训练代码和实验结果，适用于需要高效、分布式模型训练的场景。

## 架构和设置

在运行实验脚本之前，需要先配置环境，可以使用 conda 环境或预先构建的 Docker 镜像。

##### 克隆仓库


git clone https://github.com/PrimeIntellect-ai/OpenDiLoCo.git --recursive
cd OpenDiLoCo


##### 环境设置

使用 conda:


conda create -n OpenDiLoCo python=3.11 -y && conda activate OpenDiLoCo
pip install -r requirements.txt


使用 Docker:


docker pull primeintellect/open_diloco:main
docker run -d --name open-diloco --ipc=host --network=host --gpus=all primeintellect/open_diloco:main
docker exec -it open-diloco bash


##### 分布式哈希表 (DHT) 初始化

一些实验需要 hivemind 库进行分布式权重平均，这需要一个分布式哈希表 (DHT)。首先，在一个机器上运行 DHT：


python ../hivemind_source/hivemind/hivemind_cli/run_dht.py \
--identity_path fixed_private_key.pem \
--host_maddrs /ip4/0.0.0.0/tcp/30001


记录输出的 multiaddress 用于初始化其他训练进程。

## 实验配置

设置合适的 torchrun 参数和每个设备的批量大小，可以依据实际 GPU 配置进行调整。

##### 150m DDP 基线


torchrun --nproc_per_node=8 \
train_fsdp.py \
--sharding-strategy NO_SHARD \
--per-device-train-batch-size 32 \
--precision bf16-mixed \
--total-batch-size 512 \
--total-steps 88_000 \
--project OpenDiLoCo \
--lr 4e-4 \
--path_model PrimeIntellect/llama-150m-fresh \
--log-activations-steps 200 \
--checkpoint-interval 8000 \
--checkpoint-path 150_ckpt


##### 其他分布式训练实验

详细的实验配置和命令参见原文档，可以实现不同规模和不同本地步长的分布式训练。

## 使用场景

OpenDiLoCo 主要适用于以下场景：

1. **全球分布式训练** ：支持在全球不同位置的机器之间进行低通信的分布式训练。
2. **大模型训练** ：特别适合需要大量计算资源和内存的深度学习模型。
3. **高效训练** ：通过分布式哈希表和低通信优化器实现高效的模型训练过程。


总结而言，OpenDiLoCo 提供了一个灵活且高效的框架，用于在分布式环境中进行大规模深度学习模型训练，适用于研究和工业应用中的多种训练需求。