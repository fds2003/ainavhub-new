---
title: "MLX Examples MLX Examples MLX Examples"
date: "2024-01-01 00:00:00+08:00"
description: MLX Examples MLX Examples MLX
slug: mlx-examples-lm-llm-transformer
tags:
- mnist
- bert
- gcn
- moe
- whisper
draft: false
related_tools:
- qwen1.5-moe
- local whisper
- whisper app
- betterwhisperx
- whisper-tiktok
---

## MLX Examples

# MLX Examples（MLX示例）

此仓库包含了使用[MLX框架](<https://github.com/ml-explore/mlx>)的一系列独立示例。以下是一些主要的示例及其使用场景。

##### 文本模型

* [MLX LM](<llms/README.md>)：用于大语言模型（LLM）文本生成、微调等。
* [Transformer语言模型](<transformer_lm>)训练。
* 大规模文本生成的简单示例，包括[LLaMA](<llms/llama>)、[Mistral](<llms/mistral>)等，位于[LLMs](<llms>)目录中。
* 使用[Mixtral 8x7B](<llms/mixtral>)的专家混合（MoE）语言模型。
* 使用[LoRA或QLoRA](<lora>)的参数高效微调。
* [T5](<t5>)模型进行文本到文本的多任务处理。
* 使用[BERT](<bert>)进行双向语言理解。


##### 图像模型

* 使用[ResNets在CIFAR-10](<cifar>)上的图像分类。
* 使用[Stable Diffusion或SDXL](<stable_diffusion>)生成图像。
* 在MNIST数据集上的卷积变分自编码器[(CVAE)](<cvae>)。


##### 音频模型

* 使用[OpenAI’s Whisper](<whisper>)进行语音识别。


##### 多模态模型

* 使用[CLIP](<clip>)进行文本和图像嵌入联合训练。
* 使用[LLaVA](<llava>)从图像和文本输入生成文本。


##### 其他模型

* 使用[GCN](<gcn>)进行图结构数据的半监督学习。
* 使用[正常化流](<normalizing_flow>)进行密度估计和采样。


##### Hugging Face

注意：你现在可以直接从[MLX社区](<https://huggingface.co/mlx-community>)组织在Hugging Face上下载一些已转换的检查点。我们鼓励你加入社区并[贡献新模型](<https://github.com/ml-explore/mlx-examples/issues/155>)。

## 贡献

我们感谢所有[贡献者](<ACKNOWLEDGMENTS.md#Individual-Contributors>)。如果你对MLX示例做出贡献并希望被认可，请在你的pull request中将名字添加到列表中。

## 引用MLX示例

MLX软件套件最初由Awni Hannun、Jagrit Digani、Angelos Katharopoulos和Ronan Collobert平等贡献。如果你在研究中发现MLX示例有用并希望引用它，请使用以下BibTex条目：


@software{mlx2023,
author = {Awni Hannun and Jagrit Digani and Angelos Katharopoulos and Ronan Collobert},
title = {{MLX}: Efficient and flexible machine learning on Apple silicon},
url = {https://github.com/ml-explore},
version = {0.0},
year = {2023},
}