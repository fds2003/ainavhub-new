---
title: "Mixture-of-Agents"
date: "2024-01-01 00:00:00+08:00"
description: 'Mixture-of-Agents Mixture-of-Agents Mixture of Agents (MoA) '
slug: mixture-of-agents-mixture-agents-moa-llm
tags:
- omni
- alpacaeval
- mixture-of-agents
- key
- mt-bench
draft: false
related_tools:
- humanomni
- qwen2.5-omni
- omnitalker
- qwen3-omni
- omnilmm-真正第一个开源多模态大模型系列
---

## Mixture-of-Agents

## Mixture-of-Agents概述

Mixture of Agents (MoA) 是一种新颖的方法，通过利用多个大型语言模型（LLM）的集体优势，显著提高性能，实现了最先进的效果。MoA采用分层架构，每一层由多个LLM代理组成，相比之下，MoA在AlpacaEval 2.0上的得分为65.1%，远超GPT-4 Omni的57.5%，而且仅使用开源模型。

##### 使用场景

1. **多轮对话系统** ：

* MoA能够集成多个参考模型的输出，生成最终响应，因此特别适用于需要复杂对话管理的多轮对话系统。
2. **性能评估** ：

* 可以通过MoA方法在如AlpacaEval 2.0、MT-Bench和FLASK等基准测试中评估不同模型的性能。
3. **模型增强** ：

* 使用MoA可以增强现有LLM的各个方面性能，如正确性、事实性、通用常识、全面性和元认知能力。


## MoA的部署与演示

##### 交互演示

提供了一个简单的多轮聊天机器人演示。最终的响应是从多个参考模型的输出中聚合得出的。

##### 安装与运行

1. **设置API Key** ：

确保你有Together API密钥并将其导出为环境变量：

export TOGETHER_API_KEY={your_key}


2. **安装依赖** ：

pip install -r requirements.txt


3. **运行演示** ：

使用Python运行脚本：

python bot.py


交互式输入指令，系统会根据预定义的参考模型处理输入并生成响应，支持多轮对话。


##### 配置

可以通过指定以下参数来配置演示：

* `--aggregator`: 用于生成最终响应的主要模型。
* `--reference_models`: 参考模型列表。
* `--temperature`: 控制响应生成的随机性。
* `--max_tokens`: 响应中的最大token数量。
* `--rounds`: 输入处理的轮次数（轮次数 = MoA层数 - 1）。
* `--num_proc`: 并行运行的进程数量，提高执行速度。
* `--multi_turn`: 切换多轮对话功能的布尔值。


## 评估与结果

提供了脚本来快速复现论文中的一些结果。包括AlpacaEval、MT-Bench和FLASK的评估程序。

##### 评估准备


pip install -r requirements.txt
cd alpaca_eval
pip install -e .
cd FastChat
pip install -e ".[model_worker,llm_judge]"
cd ..

export TOGETHER_API_KEY=<TOGETHER_API_KEY>
export OPENAI_API_KEY=<OPENAI_API_KEY>


##### 运行评估

* **AlpacaEval 2** ：

bash run_eval_alpaca_eval.sh


* **MT-Bench** ：

bash run_eval_mt_bench.sh


* **FLASK** ：

bash run_eval_flask.sh


##### 结果展示

在AlpacaEval 2.0和MT-Bench排行榜上取得了领先位置。特别是在AlpacaEval 2.0上，仅使用开源模型，实现了从57.5% (GPT-4 Omni) 到65.1% (MoA) 的绝对提升7.6%。

FLASK评估显示，MoA在无害性、鲁棒性、正确性、效率、事实性、常识、洞察力和全面性等多个维度上均显著优于Qwen1.5-110B-Chat。此外，MoA在正确性、事实性、洞察力、全面性和元认知方面也优于GPT-4 Omni。