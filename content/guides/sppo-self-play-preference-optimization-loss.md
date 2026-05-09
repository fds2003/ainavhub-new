---
title: "SPPO"
date: "2024-01-01 00:00:00+08:00"
description: SPPO SPPO SPPO（Self-Play Preference Optimization），。SPPO（SPPO loss），。，GPT-4，...
slug: sppo-self-play-preference-optimization-loss
tags:
- sppo
- preference
- alpacaeval
- optimization
- gpt-4
draft: false
related_tools:
- sppo
- awesome gpt-4o images
- gpt-4.1 prompting guide
- sharegpt-4o-image
- gpt-4o ghibli at home
---

## SPPO

##### SPPO简介

SPPO（Self-Play Preference Optimization）是一种新的自我博弈框架，用于语言模型的对齐。通过SPPO框架及其衍生的学习目标（SPPO loss），可以有效地微调大型语言模型。该方法无需依赖强外部信号，如来自GPT-4的响应或偏好反馈，也可以显著提升语言模型的性能。在理论上，SPPO保证了语言模型能够在一般的、可能是非传递性的偏好下收敛到冯·诺依曼赢家（Nash均衡），并在多个数据集上的广泛评估中得到了实证验证。

##### 使用场景

SPPO的主要使用场景包括：

1. **大型语言模型的微调** ：通过自我博弈优化，可以更高效地微调大型语言模型，使其性能超越传统的直接偏好优化方法。

2. **无外部信号的模型训练** ：SPPO可以在没有外部偏好信号（如GPT-4反馈）的情况下提升模型性能，非常适合在资源受限的环境中应用。

3. **性能提升与模型对齐** ：通过自我博弈框架，SPPO能使模型在偏好排序上更为准确和对齐，从而在竞赛中取得更优成绩，如在AlpacaEval 2.0的排行榜中表现出色。


##### 具体应用步骤

1. **环境设置** ：创建虚拟环境并安装必要的依赖包，如`vllm`和`PairRM`。

2. **模型训练** ：通过运行指定的Shell脚本，根据所选的基础模型（如Mistral-7B或Llama-3-8B）进行训练和微调。

3. **生成与排序** ：使用生成脚本生成样本，并用排序脚本对生成的样本进行排序，以优化模型。

4. **性能评估** ：利用指定的评估标准和数据集（如AlpacaEval 2.0、MT-Bench等），对模型进行性能评估。


##### 已发布模型

目前已发布的模型包括Mistral-7B-SPPO和Llama-3-8B-SPPO系列，它们在不同的迭代次数下展示了优异的表现，超越了许多更大的模型和部分专有模型。

例如：

* `Mistral-7B-SPPO Iter3` 在AlpacaEval2.0的胜率为31.02%。
* `Llama-3-8B-SPPO Iter3` 在AlpacaEval2.0的胜率为39.85%。


##### 参考资料

如需更多详细信息，请参阅SPPO的[官方论文](<https://arxiv.org/abs/2405.00675>)和[项目主页](<https://uclaml.github.io/SPPO/>)。