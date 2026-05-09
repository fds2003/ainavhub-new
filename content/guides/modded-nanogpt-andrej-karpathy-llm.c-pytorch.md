---
title: "Modded-NanoGPT"
date: "2024-01-01 00:00:00+08:00"
description: 'Modded-NanoGPT Modded-NanoGPT  Andrej Karpathy '
slug: modded-nanogpt-andrej-karpathy-llm.c-pytorch
tags:
- pytorch
- tokens
- rotary
- andrej
- fineweb.py
draft: false
related_tools:
- ttt-lm-pytorch
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## Modded-NanoGPT

Modded-NanoGPT 是由 [Andrej Karpathy 的 llm.c 项目](<https://github.com/karpathy/llm.c>) 中的 [PyTorch GPT-2 训练器](<https://github.com/karpathy/llm.c/blob/master/train_gpt2.py>) 修改而来的一种变体。它的主要改进如下：

1. **训练效率提高** ：训练效率提高了2倍，只需要处理50亿个tokens就可以达到相同的验证损失（原版需要100亿个tokens）。
2. **代码简化** ：代码行数减少到了446行（原版是858行）。
3. **实现现代化特性** ：如旋转嵌入（rotary embeddings）等。


要运行该模型，可以执行以下命令：


python data/fineweb.py
./run.sh


这将会生成一个具有1.24亿参数的transformer模型，训练数据量为50亿个tokens，在Fineweb验证集上的验证损失为3.2818。相比之下，原版的llm.c训练器在处理了100亿个tokens后，验证损失为3.2847。

为了简化代码，部分功能被移除了，比如文本生成。同时，为了提升训练速度，在架构和超参数方面做了一些调整，不再严格按照GPT-2论文的设计复现。具体的加速改进包括：

* 提高学习率3倍
* 采用梯形学习率调度策略
* 使用旋转嵌入
* 去除了线性层在残差之前的特殊初始化，只是将attention块的输出按固定比例缩小
* 对每个参数的梯度进行了标准化，使其具有单位范数
* 移除了所有仿射变换的尺度和偏置参数，并采用了RMSNorm（虽然这实际上会稍微降低速度，但简化了代码）


##### 使用场景

Modded-NanoGPT 在以下场景中具有显著的优势和应用：

1. **高效模型训练** ：适用于需要快速迭代和训练的情境，尤其是在计算资源有限的情况下。
2. **研究与开发** ：为研究人员和开发人员提供了一个简化且高效的GPT-2训练框架，便于专注于模型调整和新特性开发。
3. **自然语言处理应用** ：例如文本分类、情感分析等任务，可以利用其高效训练来快速创建有效模型。
4. **教育用途** ：由于代码简洁易懂，可作为学习和教学深度学习和NLP模型训练的优秀资源。