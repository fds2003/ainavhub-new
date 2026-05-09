---
title: "ReSearch"
date: "2024-01-01 00:00:00+08:00"
description: 'ReSearch ReSearch  ReSearch '
slug: research-llm-deepseek-r1-zero-openai-deep
tags:
- grpo
- deep
- deepseek-r1-zero
- llm
- research
draft: false
related_tools:
- simple_grpo
- local grpo training
- opendeepsearch
- deep research
- deepresearcher
---

## ReSearch

## ReSearch 总结性介绍

**ReSearch** 是一个训练大型语言模型 (LLM) 的方法，它受到 Deepseek-R1-Zero 和 OpenAI 的 Deep Research 的启发，旨在让 LLM 具备**推理** 和**搜索** 能力。 该方法使用强化学习（具体是 GRPO 算法）从头开始训练 LLM，使其学会何时以及如何调用搜索工具来有效地回答问题，而无需任何监督数据，仅依赖于强化学习的奖励信号。

**核心思想：** 将搜索操作融入 LLM 的思维过程，使其在推理过程中可以主动搜索相关信息。

**关键技术：**

* **强化学习 (GRPO):** 用于训练 LLM 学习何时以及如何使用搜索工具。
* **从头开始训练:** 从预训练模型开始，完全依赖强化学习进行训练，而不是使用有监督的数据进行微调。
* **解耦 RAG 系统:** 将检索增强生成 (RAG) 系统（用于搜索信息）与 LLM 的训练过程分离，以便更灵活和清晰地进行训练。


**优势：**

* **无需监督数据:** 仅通过强化学习的奖励信号即可训练模型。
* **泛化能力强:** 在训练集上训练的模型可以很好地泛化到其他数据集。
* **主动搜索:** 模型可以在推理过程中主动决定何时进行搜索，而不是被动地接受外部信息。


## ReSearch 的使用场景

ReSearch 适用于以下场景：

* **需要外部知识的问答：** 当 LLM 需要获取外部信息才能回答问题时，可以使用 ReSearch 使其具备搜索能力。例如，回答关于时事、历史事件或科学技术的问题。
* **复杂的推理任务：** ReSearch 可以帮助 LLM 处理需要多个步骤推理的任务，例如，规划、诊断和故障排除。
* **知识密集型任务：** 在需要大量专业知识的任务中，ReSearch 可以使 LLM 访问相关信息，并进行推理。


**具体例子：**

* **HotpotQA：** 一个需要多跳推理和外部知识的问答数据集，ReSearch 在此数据集上进行了训练和验证。
* **Bamboogle 和 StrategyQA：** 其他问答数据集，ReSearch 显示出了良好的泛化能力。


**总体而言，ReSearch 是一种很有前景的 LLM 训练方法，可以显著提高 LLM 在需要外部知识和复杂推理任务中的性能。**

希望以上总结能够帮助你理解 ReSearch 及其应用。