---
title: "Llama3-S Llama3-S"
date: "2024-01-01 00:00:00+08:00"
description: Llama3-S Llama3-S、，（LLM）“”。MetaChameleon，，LLM，，。 ...
slug: llama3-s-llm-meta-chameleon
tags:
- llama3
- chameleon
- meta
- llm
- llama3-s
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- meta agents research environments
---

## Llama3-S

##### 简介

Llama3-S是一个开放的、正在进行中的研究实验，旨在将文本语言模型（LLM）扩展为具有“听力”能力。该项目借鉴了Meta的Chameleon论文中的技术，采用了早期融合模型的训练方法，重点在于通过扩展LLM的词汇表，使其包含声音标记，从而扩展至未来的多种输入类型。

##### 主要特点

* **正在进行中的研究** ：Llama3-S目前还处于早期训练阶段，是一个开放的科学实验，代码库和数据集都是开源的。
* **早期融合模型** ：借鉴了Meta的Chameleon论文中的技术，重点在于标记传递性，扩展LLM的词汇表以包含声音标记。
* **听力能力** ：目前，模型能够理解女性的澳大利亚口音的合成语音数据，但仅能处理单一声音指令数据。


##### 使用场景

Llama3-S的使用场景主要集中在以下几个方面：

1. **多模态交互** ：可以在需要结合文本和语音输入进行交互的场景中使用，如智能助手和对话系统。
2. **语音指令处理** ：有潜力在需要通过语音指令进行操作的系统中应用，例如智能家居控制。
3. **教育和培训** ：可以用于语音驱动的教育和培训系统，帮助用户通过语音进行学习和实践。


##### 当前进展

* **2024年8月2日** ：重新训练了阶段1模型，使用了Llama3.1，并修正了超参数，显著提升了性能。
* **2024年7月19日** ：模型能够理解有限的合成语音。
* **2024年7月1日** ：初次训练阶段2模型，显示出较好的损失收敛。


##### 加入我们

Llama3-S项目是开放的研究项目，欢迎任何对该领域感兴趣的人士加入我们的团队。我们未来可能会转向众包语音数据集的生成。

##### 快速入门

你可以通过Google Colab快速开始使用Llama3-S，详细的步骤和代码可以在项目的GitHub仓库中找到。

##### 参考文献

项目中使用了一些重要的参考文献和工具，包括Meta的Chameleon论文、Hugging Face的Accelerate库、WhisperSpeech的文本到语音生成模型以及Facebook的Encodec音频编解码器。

##### 致谢

感谢以下项目和工具为我们的工作提供支持：

* Torchtune
* WhisperSpeech
* Encodec
* Accelerate
* Llama3家庭模型


通过这些工具和技术的支持，Llama3-S项目得以顺利进行并取得初步成果。