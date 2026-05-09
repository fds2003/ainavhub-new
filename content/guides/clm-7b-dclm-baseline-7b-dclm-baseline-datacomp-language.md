---
title: "CLM-7B"
date: "2024-01-01 00:00:00+08:00"
description: CLM-7B CLM-7B DCLM-Baseline-7B
slug: clm-7b-dclm-baseline-7b-dclm-baseline-datacomp-language
tags:
- dclm
- lm.git
- install
- mlfoundations
- apple
draft: false
related_tools:
- apple doc mcp
- some pre-prompt instructions for apple
- apple intelligence
- claude code but with openai models
- open driving world models
---

## CLM-7B

CLM-7B（DCLM-Baseline-7B）是一款拥有70亿参数的语言模型，该模型是基于DCLM-Baseline数据集训练的。数据集是DataComp for Language Models (DCLM)基准测试的一部分。CLM-7B旨在展示系统性数据整理技术对提升语言模型性能的效果。以下是对该模型的总结性介绍：

##### 模型细节

* **参数量** : 70亿
* **训练语料** : 2.5兆亿 tokens
* **层数** : 32
* **隐藏层大小** : 4096
* **注意力头数** : 32
* **上下文长度** : 2048 tokens


##### 模型描述

* **开发团队** : DCLM团队
* **模型类型** : 仅解码的Transformer语言模型
* **主要语言** : 英文
* **许可证** : Apple Sample Code License
* **发布日期** : 2024年6月


##### 使用方式

1. 安装相关库 open_lm：

pip install git+https://github.com/mlfoundations/open_lm.git


2. 加载和使用模型：

from open_lm.hf import *
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("apple/DCLM-Baseline-7B")
model = AutoModelForCausalLM.from_pretrained("apple/DCLM-Baseline-7B")

inputs = tokenizer(["Machine learning is"], return_tensors="pt")
gen_kwargs = {"max_new_tokens": 50, "top_p": 0.8, "temperature": 0.8, "do_sample": True, "repetition_penalty": 1.1}
output = model.generate(inputs['input_ids'], **gen_kwargs)
output = tokenizer.decode(output[0].tolist(), skip_special_tokens=True)
print(output)


##### 训练细节

* **架构** : 仅解码的Transformer
* **框架** : PyTorch 与 OpenLM
* **优化器** : AdamW
* **学习率** : 2e-3 (峰值)
* **权重衰减** : 0.05
* **批次大小** : 2048 sequences
* **序列长度** : 2048 tokens
* **训练硬件** : H100 GPUs


##### 评估结果

该模型在多个任务上进行了评估，包括MMLU、HellaSwag、Jeopardy、TriviaQA等。最终得分在0到1之间，是正确答案的比例。例如，在MMLU（few-shot）任务上的得分为0.6372。

##### 对比

与其他参数量在70亿左右的模型相比，DCLM-7B在许多任务上表现优越。例如，在核心任务（CORE）上的得分为56.1，比Llama2, DeepSeek, Falcon等模型表现出色。

##### 限制与偏见

该模型可能包含训练数据中的偏见，且没有进行特定的对齐或安全微调，因此输出结果应谨慎使用。此外，模型的知识仅限于训练数据的截断日期。

##### 伦理考量

用户应注意，该模型可能生成有害或具偏见的内容。在涉及对个体决策或敏感应用时，应配备适当的安全措施和人工监督。

##### 引用

如需引用，请参见以下格式：


@article{Li2024DataCompLM,
title={DataComp-LM: In search of the next generation of training sets for language models},
author={Jeffrey Li et al.},
journal={arXiv preprint arXiv:2406.11794},
year={2024}
}