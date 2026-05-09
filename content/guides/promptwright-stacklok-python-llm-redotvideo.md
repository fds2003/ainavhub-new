---
title: "Promptwright -"
date: "2024-01-01 00:00:00+08:00"
description: 'Promptwright Promptwright -  Promptwright '
slug: promptwright-stacklok-python-llm-redotvideo
tags:
- pluto
- python
- hugging
- stacklok
- llm
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## Promptwright

##### Promptwright - 合成数据集生成库

Promptwright 是一个由 Stacklok 开发的 Python 库，用于利用本地的 LLM（大规模语言模型）生成大规模的合成数据集。该库提供了一套灵活易用的接口，使用户能够生成以提示为导向的合成数据集，适用于各种场景。

Promptwright 的灵感来源于 redotvideo/pluto 项目，最初作为其分支开发，但最终进行了相当大的重写，以支持针对本地 LLM 模型的数据集生成，相较于 OpenAI 提供的服务，显得更为经济实惠。

##### 主要特性

* **本地 LLM 客户端集成** ：可与基于 Ollama 的模型进行交互。
* **可配置的指令和提示** ：允许用户定义自定义指令和系统提示。
* **推送到 Hugging Face** ：生成的数据集可以方便地上传到 Hugging Face Hub。


##### 使用场景

Promptwright 适用于以下场景：

1. **教育与培训** ：可以生成创意写作提示、练习题和示例答案，以供教育用途。
2. **研究与开发** ：在机器学习和自然语言处理的研究中，可以利用合成数据集进行模型训练和评估。
3. **产品开发** ：在产品设计阶段，生成用户反馈、评测或建议，帮助提升产品的用户体验。
4. **游戏开发** ：创建虚拟世界的故事背景、角色设定和对话，以提高游戏的沉浸感和互动性。


##### 获取和使用

要使用 Promptwright，用户需要安装 Python 3.11+，并确保安装了 `promptwright` 库和 Ollama CLI。一旦设置完成，用户可以通过简单的示例代码来生成不同主题的数据集。

##### 示例

用户可以通过示例代码生成创意写作提示：


engine = LocalDataEngine(
args=LocalEngineArguments(
instructions="生成创意写作提示和示例回应。",
system_prompt="你是提供写作提示和示例回应的创意写作教师。",
model_name="llama3.2:latest",
temperature=0.9,
max_retries=2,
)
)


生成的数据集将被保存为 JSONL 文件。

##### 总结

Promptwright 是一个强大的工具，能够帮助用户高效地生成合成数据集，适用于广泛的应用场景，从教育到商业开发均可发挥重要作用。