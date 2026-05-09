---
title: "AvaTaR"
date: "2024-01-01 00:00:00+08:00"
description: 'AvaTaR AvaTaR:  AvaTaR'
slug: avatar-llm-comparator-modul
tags:
- install
- stark-qa
- typeguard
- pip
- org
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## AvaTaR

**AvaTaR: 优化工具辅助知识检索的大型语言模型代理**

AvaTaR是一种新颖且自动化的框架，旨在优化大型语言模型（LLM）代理，以有效地使用提供的工具，并在特定任务或领域中提升其性能。在优化过程中，我们设计了一个比较模块（comparator module），通过对从训练数据中抽取的正面和负面例子的推理，迭代地向LLM代理提供有见地和全面的提示。

## 使用场景

AvaTaR主要用于需要大量信息检索和处理的场景，如问答系统、图像注释生成、以及其他需要精确工具使用的复杂任务。比如在数据集STaRK和Flickr30k Entities上，通过优化LLM代理的动作，可以显著提升其任务表现。

## 安装步骤

1. 创建环境并安装依赖：

conda create -n avatar python=3.11
pip install stark-qa typeguard


2. 准备工作：

* 在命令行中指定API密钥：

export ANTHROPIC_API_KEY=YOUR_API_KEY
export OPENAI_API_KEY=YOUR_API_KEY
export OPENAI_ORG=YOUR_ORGANIZATION


* 下载嵌入（Embeddings）：

sh scripts/emb_download_all.sh


* 获取并组织原始数据：
* 运行代码时，STaRK数据将自动下载。
* 对于Flickr30k Entities，需提交表单获取访问权限，然后按照以下结构组织数据：

data
├── flickr30k_entities
│   ├── raw
│   │   ├── Annotations
│   │   ├── flickr30k-images
│   ├── split
│   │   ├── test.index
│   │   ├── train.index
│   │   ├── val.index
│   ├── qa.csv


## 运行代理

我们已经在`output/eval`目录下包含了本地VSS结果，并在`output/agent`目录下包含了分组数据（仅限STaRK）。通过这些文件，您可以直接按照AvaTaR管道优化代理动作。

* 优化：根据默认设置进行优化：

sh scripts/run_avatar_stark.sh


可以在`scripts/run_avatar_stark.sh`中指定数据集名称和分组。

sh run_avatar_flickr30k_entities.sh


* 评价：运行以下命令评价优化后的代理动作：

sh scripts/run_eval_avatar_stark.sh


或

sh scripts/run_eval_avatar_flickr30k_entities.sh


## 参考文献


@article{wu24avatar,
title        = {AvaTaR: Optimizing LLM Agents for Tool-Assisted Knowledge Retrieval},
author       = {
Shirley Wu and Shiyu Zhao and
Qian Huang and Kexin Huang and
Michihiro Yasunaga and Kaidi Cao and
Vassilis N. Ioannidis and Karthik Subbian and
Jure Leskove and James Zou
},
eprinttype   = {arXiv},
eprint       = {2406.11200},
year         = {2024}
}