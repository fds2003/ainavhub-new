---
title: "midGPT midGPT MidGPT MidGPT"
date: "2024-01-01 00:00:00+08:00"
description: midGPT MidGPT MidGPT  LLM
slug: midgpt-llm-jax-equinox-tpus
tags:
- char
- midgpt
- memmapped
- shakespeare
- py
draft: false
related_tools:
- instantcharacter
- mcp echarts
- customchar
- charactergen
- character.ai 创始人回归google
---

## midGPT

# MidGPT

MidGPT 是一个用于 LLM（大型语言模型）预训练实验的简单且可扩展的代码库，基于 Jax 和 Equinox 构建。该代码库能够在 TPUs 或 GPUs 上训练具有数十亿参数的 GPT风格的解码器-仅 Transformers 模型。

MidGPT 受 NanoGPT 启发，但支持多设备和多主机的 FSDP（全栈数据并行），从而可以训练更大的模型。它还包括了一些最近的 Transformer 改进：旋转嵌入（rotary embeddings）、RMSNorm、QK-Layernorm 和独立权重衰减，能够在更大规模的训练中提高性能或稳定性。

模型代码位于 `src/model.py`，训练代码位于 `src/train.py`，实验配置文件位于 `src/configs/*.py`。测试环境为 Python 3.10.12。

## 数据准备

与 NanoGPT 类似，MidGPT 支持 shakespeare_char（莎士比亚文本的字符级预测）和 openwebtext 数据集。数据集首先被处理成 numpy memmapped 的 `.bin` 文件：


cd data/openwebtext  # 或 data/shakespeare_char
python prepare.py


## 单主机，多设备设置

从一个新的 Python 3.10+ 虚拟环境开始，为你的加速器类型[安装 Jax](<https://jax.readthedocs.io/en/latest/installation.html>)，然后 `pip install -r requirements.txt`。要分析性能，还可以 `pip install tensorflow-cpu tensorboard-plugin-profile`。

开始训练：


export WANDB_API_KEY=<你的key>
python launch.py --config=shakespeare_char
python launch.py --config=openwebtext  # 124M 模型


默认情况下，这将在 `outputs/` 中创建一个带时间戳的 rundir。你也可以手动指定 `--rundir`，这对恢复训练很有用：


# 创建新的 rundir，或者如果 rundir 已存在则恢复训练：
python launch.py --config=openwebtext --rundir=<rundir>


如果你想 (1) 启用 jax 分析器和 (2) 跳过检查点保存，可以添加 `--debug`。

## 多主机设置

多主机训练仅在 TPU slices (如 TPU v3-128) 上测试过，我们假设数据集为 openwebtext。开始之前，修改 `scripts/tpu_commands.sh` 中的 `tpu_project` 和 `tpu_zone` 变量为你的项目 ID 和区域名。然后，导入 TPU 命令：


source scripts/tpu_commands.sh


数据应位于谷歌云持久磁盘的 `openwebtext/` 文件夹中，然后将其挂载到每个主机上。用正确的区域和磁盘名称修改 `scripts/setup.sh`，然后：


./scripts/setup.sh <zone> <TPU 名称> <磁盘名称> # 在启动 TPU slice 之后


要开始训练一个 1.5B 的模型：


tpu midGPT ssh <TPU 名称> 'tmux new -d -s launch "WANDB_API_KEY=<你的key> python ~/midGPT/launch.py --config=openwebtext_xl --multihost --rundir=gs://你的_bucket_name/run_name"'


## 预期性能

`openwebtext.py` 文件配置的 124M 模型（类似 nanoGPT）应该在 60,000 步后达到 ~2.80 的验证损失。`openwebtext_xl.py` 文件配置的 1.5B 模型应该在 25,000 步后达到 ~2.42 的验证损失。在 TPU v3-128 上，1.5B 模型大约需要 16.5 小时训练完成（吞吐量：约 444K 令牌每秒，MFU=47.8%）。

## 致谢

计算资源由 TPU Research Cloud (TRC) 慷慨提供。

* 任务和数据加载来自 [nanoGPT](<https://github.com/karpathy/nanoGPT/>)
* TPU shell 命令改编自 [easyLM](<https://github.com/young-geng/EasyLM>)
* 更高的学习率、独立权重衰减和 QK-LayerNorm 基于 [small-scale proxies](<https://arxiv.org/abs/2309.14322>) 的结果


MidGPT 由 Allan Zhou 和 Nick Landolfi 主要开发，并得到了 Yiding Jiang 的帮助和建议。

## 使用场景

MidGPT 主要用于以下场景：

1. **LLM 预训练实验** ：通过在不同数据集上训练大型 GPT 模型，研究和测试新的 Transformer 改进。
2. **多设备分布式训练** ：利用多个 GPU/TPU 进行大规模模型训练，加速训练过程。
3. **文本生成和预测** ：在字符级或单词级数据集上进行文本生成任务，例如莎士比亚文本的字符级预测。
4. **研究新算法和优化技术** ：例如旋转嵌入、RMSNorm 等新技术的研究和性能对比实验。