---
title: "FastChat"
date: "2024-01-01 00:00:00+08:00"
description: FastChat FastChat LLM
slug: fastchat-llm-chatbot-arena-elo
tags:
- vicuna
- elo
- restful
- fine-tuning
- arena
draft: false
related_tools:
- claude code spec-driven development
- melotts - 支持多语言的高品质文本转语音库，支持中英文混合及实时cpu推理。
- terminal velocity
- qwen3 fine-tuning playground
- openaifine-tuning（微调） api的新功能
---

## FastChat

FastChat是一个开放平台，用于训练、服务和评估基于大型语言模型（LLM）的聊天机器人。它的一项主要功能是支持Chatbot Arena，这是一个平台，通过侧边对比大量的LLM进行战斗，并根据用户投票来汇编在线LLM Elo排行榜。此外，FastChat还提供了与OpenAI兼容的RESTful APIs，使其能够服务和评估顶尖的模型，如Vicuna、MT-Bench等。

##### FastChat将在哪些情况下使用?

1. **训练LLMs** ：开发者可以使用FastChat训练自己的聊天机器人模型。它为用户提供了细微调整（fine-tuning）现有模型所需的代码和指令，例如使用Vicuna模型。

2. **服务LLMs** ：一旦完成训练，FastChat能够以分布式多模型服务系统的形式为聊天机器人提供服务，包括通过Web UI和兼容OpenAI的RESTful API。

3. **评估LLMs** ：FastChat提供了多种工具和数据集，如MT-Bench和Chatbot Arena Conversations，帮助开发者对他们的LLMs进行客观的评估。

4. **聊天机器人比赛** ：通过Chatbot Arena，开发者可以将他们的LLMs与其他模型进行对比，了解自己模型的强项和弱点，并根据用户投票获取反馈。

5. **开发者研究与创新** ：FastChat提供的大规模真实世界LLM对话数据集支持开发者进行前沿研究，以及探索聊天机器人技术的新用途和改进方法。


##### 使用FastChat的情况示例：

* **研究人员** ：希望评估和对比不同LLMs在特定任务上的表现，以进行学术研究或改进现有技术。

* **开发者** ：希望开发定制的聊天机器人服务，需要一个平台来训练、服务和评估他们的模型。

* **技术爱好者** ：对AI聊天机器人感兴趣，想通过Chatbot Arena参与或观察LLMs之间的对抗，了解最先进技术的动态。


FastChat为研究、开发和评估大型语言模型聊天机器人提供了一个全面的解决方案。无论是对于想要精细调整和改进现有模型的开发者，还是希望从头开始训练自己的LLMs的研究人员，FastChat都提供了必要的工具集合。通过利用其提供的数据集和评估工具，用户可以有效地对其模型进行迭代改进，并通过Chatbot Arena等平台了解其模型相对于其他顶尖技术的定位。