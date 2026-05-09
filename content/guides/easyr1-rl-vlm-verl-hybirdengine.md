---
title: "EasyR1"
date: "2024-01-01 00:00:00+08:00"
description: EasyR1 EasyR1、（RL），（VLM）。veRL，HybirdEnginevLLMSPMD，。 ： Qwen2/Qwen2.5
  Qwen2/Qwe...
slug: easyr1-rl-vlm-verl-hybirdengine
tags:
- vlm
- grpo
- deepseek-r1
- qwen2.5-vl
- hybirdengine
draft: false
related_tools:
- fastvlm
- simple_grpo
- local grpo training
- train-deepseek-r1
- deepseek-r1
---

## EasyR1

EasyR1是一个高效、可扩展的多模态强化学习（RL）训练框架，旨在支持视觉语言模型（VLM）。它是原有项目veRL的一个干净的分支，利用了HybirdEngine设计和vLLM的最新SPMD模式，使其在性能上更具优势。

##### 主要特点

* **支持的模型** ：

* Qwen2/Qwen2.5语言模型
* Qwen2/Qwen2.5-VL视觉语言模型
* DeepSeek-R1蒸馏模型
* **支持的算法** ：

* GRPO
* 其他RL算法（即将推出）
* **支持的数据集** ：

* 任何文本或视觉-文本数据集，只需符合特定格式。


##### 使用场景

EasyR1适合多种场景，包括但不限于：

* 训练和优化视觉语言模型，以增强图像理解与文本生成的能力。
* 实现各种强化学习算法，助力多模态任务的研究与开发。
* 从事学术研究或工业项目，涉及视觉语言处理、智能问答系统等。


EasyR1的易用性在于其简单的安装和明确的运行流程，用户只需几步即可开始训练，并可方便地与Hugging Face平台进行模型合并与管理。该框架支持定制数据集，适用于不同需求的研究者和开发者。

##### 展望与发展

未来，EasyR1将继续扩展功能，包括对更多强化学习算法的支持、无填充训练的实现以及对更多VLM架构的支持，旨在提升用户在多模态学习领域的研究与应用能力。