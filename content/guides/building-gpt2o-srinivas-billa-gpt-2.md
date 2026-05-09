---
title: "Building GPT2o Building GPT2o"
date: "2024-01-01 00:00:00+08:00"
description: Building GPT2o  Building GPT2o
slug: building-gpt2o-srinivas-billa-gpt-2
tags:
- building
- audiopalm
- andrej
- billa
- reproduce
draft: false
related_tools:
- building agentic rag with llamaindex
- building gpt2o
- udio
- awesome gpt-4o images
- sharegpt-4o-image
---

## Building GPT2o

在这篇名为“Building GPT2o——第1部分：音频”的文章中，作者Srinivas Billa记录了他尝试从头开始构建一个能生成音频的GPT-2模型的过程。受到Andrej’s “Let’s Reproduce GPT-2” 的启发，作者希望创建一个类似于OpenAI的GPT-4o或AudioPaLM的自动回归生成音频的模型，而且最好在普通消费者硬件上训练。

##### 关键步骤概述：

1. **音频标记化** ：

* 使用SNAC（一个分层结构的音频离散标记化模型），将音频转换为离散标记。这种方法效果很好，几乎无法分辨原音频和重建音频之间的差别。作者利用SNAC模型和教程，创建了一个能将音频转换为离散标记的标记化工具，以供语言模型训练。
2. **数据集** ：

* 作者错过了LIAON的预标记化数据集，因此使用了来自Librivox的公共领域录音《福尔摩斯历险记》。这些音频总时长约12小时，相当于约150万个SNAC标记，并将其上传至Hugging Face。
3. **训练与推理** ：

* 训练代码与Andrej的原始代码几乎无异，只做了一些小的修改，如数据处理脚本、上下文长度、批次大小和词汇表大小等。尽管作者在分布式数据并行（DDP）版本中遇到问题，但在Colab上可以在一两个小时内得到一个能生成音频的模型。不过模型过拟合，大多数时间生成的音频是乱码。本文仅展示了概念验证，作者相信更多数据和计算资源能提升模型性能。


##### 展望：

* 增加数据量
* 增加计算资源
* 构建更大的模型
* 进行音频指令微调
* 混合文本和音频
* 探索图像标记化


作者提到字节跳动有一个用于图像的离散标记化工具，可以进一步研究。整体上，作者希望通过扩展数据和资源，提升模型生成音频的能力。

体会： 作者通过这一系列探索和实验，展示了构建一个能够生成音频的GPT-2模型的可行性，为未来音频生成领域的研究提供了参考。

代码：https://github.com/nivibilla/build-nanogpt/tree/audio 模型：https://huggingface.co/eastwind/gpt2-audio-tiny-sherlock-5k-overfit 数据：https://huggingface.co/datasets/eastwind/tiny-sherlock-audio