---
title: "RouteLLM"
date: "2024-01-01 00:00:00+08:00"
description: RouteLLM RouteLLM RouteLLM
slug: routellm-llm-openai-api
tags:
- lm-sys
- git
- routellm
- routellm.git
- cd
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## RouteLLM

##### RouteLLM介绍

RouteLLM是一个用于服务和评估大型语言模型（LLM）路由器的框架。其核心功能包括：

1. **启动兼容OpenAI的API** ：能够接收用户请求，并通过一个命令将请求路由到最适合的模型。
2. **提供预训练路由器** ：在广泛使用的基准测试中，这些路由器能够在保持95% GPT-4性能的同时，将成本降低高达85%。
3. **扩展性强** ：可以轻松增加新的路由器和基准测试，并通过一个命令比较所有路由器的性能。


##### 使用场景

1. **查询路由** ：根据用户请求，将查询路由到最强的或者较弱的模型，以实现高质量或者低成本的响应。
2. **成本管理** ：通过设置成本阈值，用户可以决定请求的成本与质量之间的权衡。
3. **性能评估** ：使用内置评估框架在特定基准测试上衡量不同路由策略的性能。


##### 安装说明

**通过PyPI安装**


pip install "routellm[serve,eval]"


**从源码安装**


git clone https://github.com/lm-sys/RouteLLM.git
cd RouteLLM
pip install -e .[serve,eval]


##### 服务器使用

RouteLLM提供一个轻量级的兼容OpenAI的服务器，可以根据不同的路由策略在两个LLM之间路由请求。启动服务器的命令如下：


python -m routellm.openai_server --routers mf --config config.example.yaml


* `--routers`指定服务器可用的路由器列表。
* `--config`指定配置文件的路径，包含每个路由器所需的路径和设置。


##### 评估

RouteLLM包含一个评估框架，可以在特定基准测试上测量不同路由策略的性能。支持的基准测试包括：MMLU、GSM8K和MT Bench。评估命令示例：


python -m routellm.evals.evaluate --routers random sw_ranking bert --benchmark gsm8k --config config.example.yaml


##### 预训练的路由器

RouteLLM预先支持以下训练好的路由器：

1. `sw_ranking`: 使用加权Elo计算。
2. `bert`: BERT分类器。
3. `causal_llm`: 基于LLM的分类器。
4. `mf`: 矩阵分解模型。
5. `random`: 随机路由。


这些路由器被训练在特定的强模型（如gpt-4-1106-preview）和弱模型（如mixtral-8x7b-instruct-v0.1）对上，具有良好的泛化能力。

##### 配置文件

配置文件格式为YAML，包含路由器的初始化参数。例如：


sw_ranking:
arena_battle_datasets:
- lmsys/lmsys-arena-human-preference-55k
- routellm/gpt4_judge_battles
arena_embedding_datasets:
- routellm/arena_battles_embeddings
- routellm/gpt4_judge_battles_embeddings
strong_model: gpt-4-1106-preview
weak_model: mixtral-8x7b-instruct-v0.1
causal_llm:
checkpoint_path: routellm/causal_llm_gpt4_augmented
bert:
checkpoint_path: routellm/bert_gpt4_augmented
mf:
checkpoint_path: routellm/mf_gpt4_augmented
hidden_size: 128
strong_model: gpt-4-1106-preview
weak_model: mixtral-8x7b-instruct-v0.1


##### 贡献

RouteLLM欢迎社区的贡献，可以通过实现新的路由器或新的基准测试来扩展框架。

##### 引用

如果你觉得这个项目有帮助，请引用RouteLLM的论文：


@misc{ong2024routellmlearningroutellms,
title={RouteLLM: Learning to Route LLMs with Preference Data},
author={Isaac Ong and Amjad Almahairi and Vincent Wu and Wei-Lin Chiang and Tianhao Wu and Joseph E. Gonzalez and M Waleed Kadous and Ion Stoica},
year={2024},
eprint={2406.18665},
archivePrefix={arXiv},
primaryClass={cs.LG},
url={https://arxiv.org/abs/2406.18665},
}