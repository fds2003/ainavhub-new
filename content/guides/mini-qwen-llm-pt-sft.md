---
title: "mini"
date: "2024-01-01 00:00:00+08:00"
description: mini_qwen mini_qwen mini_qwen1B（LLM），。：（PT）、（SFT）（DPO）。，12G，14G...
slug: mini-qwen-llm-pt-sft
tags:
- dpo
- qwen2.5-0.5b-instruct
- sft
- qwen
- llm
draft: false
related_tools:
- qwen2
- qwen2.5-omni
- qwen3
- qwenlong-l1
- qwen mac menu bar
---

## mini_qwen

##### mini_qwen简介

mini_qwen是一个具有1B参数的开源大型语言模型（LLM），旨在提供高效且可访问的模型训练体验。该项目分为三个主要部分：预训练（PT）、微调（SFT）和直接偏好优化（DPO）。其全流程训练要求相对较低，仅需12G显存即可进行预训练和微调，而直接偏好优化则需要14G显存，这使得普通的T4显卡用户能够顺利进行训练。

mini_qwen的构建基于Qwen2.5-0.5B-Instruct模型，通过增加模型的层数、维度和注意力头数，将参数数量扩大至1B，并进行随机初始化。训练数据包括来自北京智源人工智能研究院的多种高质量数据集，项目利用最新的训练技术，如flash_attention_2和deepspeed，进行了高效的训练。

##### mini_qwen使用场景

mini_qwen适用于多种场景：

1. **自然语言处理研究** ：学术界和工业界的研究人员可以利用mini_qwen进行各类自然语言处理实验，以探索大模型的性能和潜力。

2. **聊天机器人开发** ：可以基于mini_qwen进行聊天机器人或对话系统的开发，特别是在中文领域，针对特定行业的数据微调可以提高对话的自然度和相关性。

3. **强化学习与偏好优化** ：开发者可以尝试在已有模型基础上进行强化学习的研究，探索DPO（直接偏好优化）的效果，以改进模型对用户反馈的响应能力。

4. **教育和培训** ：教育机构可以使用mini_qwen进行语言模型相关课程的教学或者实践，让学生体验大型模型的训练流程和调优技巧。

5. **产品原型开发** ：企业可以利用mini_qwen原型开发产品，探索在实际应用中的表现，减少研发成本，提高开发效率。


通过这一系列的功能和应用，mini_qwen为用户提供了一个灵活的平台来研究和实践大型语言模型的使用。