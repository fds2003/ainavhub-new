---
title: "Search-R1"
date: "2024-01-01 00:00:00+08:00"
description: 'Search-R1 Search-R1  Search-R1 '
slug: search-r1-deepseek-r1-llm-tool-call-verl
tags:
- deepseek-r1
- search-r1
- llama3.2-3b-base
- outcome
- verl
draft: false
related_tools:
- train-deepseek-r1
- deepseek-r1
- search-r1
- ama
- rllm
---

## Search-R1

**Search-R1 是什么？**

Search-R1 是一个项目，旨在复现 DeepSeek-R1 的方法，使用强化学习训练大型语言模型（LLM）具备推理和调用搜索引擎的能力，让LLM可以边推理边搜索（tool-call）。它基于 veRL 开发。通过强化学习 (rule-based outcome reward)，能让像 Qwen2.5-3b-base 和 Llama3.2-3b-base 这样的3B**基础** 语言模型自主地学习推理和调用搜索引擎。

**Search-R1 的使用场景：**

Search-R1 可以用来训练 LLM，使其能够在以下场景中发挥作用：

* **需要外部知识的问答：** 当问题需要模型结合实时信息或特定领域的知识才能回答时，模型可以通过调用搜索引擎来获取相关信息，然后进行推理并给出答案。 例如，回答“今天的天气怎么样？” 或 “最新的AI技术发展有哪些？”
* **需要多轮搜索和推理的复杂任务：** 有些任务需要模型进行多次搜索，并且在每次搜索后进行推理，才能逐步解决问题。 例如，规划一次旅行，需要搜索机票、酒店、景点等信息，并根据这些信息进行推理和选择。
* **事实核查：** 模型可以调用搜索引擎来验证信息的真实性，避免产生幻觉或传播不准确的信息。
* **自动生成研究报告或文章：** 模型可以根据给定的主题，自动搜索相关资料，进行整理和分析，生成研究报告或文章。


总而言之，Search-R1 旨在让 LLM 具备更强大的信息获取和利用能力，从而能够更好地解决现实世界中的复杂问题。