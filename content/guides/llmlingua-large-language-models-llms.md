---
title: "LLMLingua"
date: "2024-01-01 00:00:00+08:00"
description: LLMLingua LLMLingua Large Language Models, LLMs)
slug: llmlingua-large-language-models-llms
tags:
- language
- gpt2-small
- prompt
- llms
- llama-7b
draft: false
related_tools:
- awesome ai system prompts
- gpt-4.1 prompting guide
- yprompt
- promptenhancer
- prompthelper
---

## LLMLingua

LLMLingua是一套旨在提高大型语言模型(Large Language Models, LLMs)使用效率的工具，它通过压缩来自用户的提示信息(prompt)，以减少运行成本和提高处理速度。这一系列包括三个主要工具：LLMLingua、LongLLMLingua和LLMLingua-2。下面是用通俗语言详细总结这些工具的主要功能以及它们适用的情境。

##### LLMLingua

LLMLingua使用一个紧凑的、经过良好训练的语言模型（例如GPT2-small, LLaMA-7B）来识别和移除提示信息中的非必要标记（token）。这种方法能够有效地利用大型语言模型进行推理，实现多达20倍的数据压缩率，同时基本不损失性能。无论是在成本上还是在处理支持更长上下文方面，LLMLingua都可以提供显著的帮助。

##### LongLLMLingua

LongLLMLingua解决了LLMs中的“中间丢失”问题，即在处理长上下文信息时的性能下降问题。它通过提示压缩来降低成本和提升效率，使用仅1/4的标记就可以提高RAG性能高达21.4%。

##### LLMLingua-2

LLMLingua-2是一种体积小但功能强大的提示压缩方法，通过从GPT-4进行数据蒸馏（data distillation）训练得到的用于标记分类的模型，配备了一个同BERT水平的编码器，擅长于任务无关的压缩。与LLMLingua相比，它在处理跨领域数据方面表现更佳，提供了3到6倍的性能提升。

##### 使用场合

###### 1\. 处理长文本摘要或问题解答时遇到的标记限制

当你在使用ChatGPT等大型语言模型处理长文本摘要或解答问题时，经常会受制于模型的输入标记长度限制。通过LLMLingua系列工具，你可以将长文本压缩成更短的版本，以适应模型的限制，同时又保留了原始文本的主要信息。

###### 2\. 提高具有成本敏感的应用效率

如果你在为科研或业务项目使用GPT-3.5/4等高成本的API，LLMLingua可以帮助你通过压缩提示信息来减少成本支出，尤其是在需要频繁调用模型的场景中。

###### 3\. 优化长上下文场景的处理效率

在需要处理长上下文序列，如长篇文章或复杂对话历史的场景中，LongLLMLingua可以通过有效压缩来提高模型处理效率和准确性，使其在较长的上下文中仍能维持好的性能。

###### 4\. 跨领域数据处理

当面对跨领域或领域特定的任务时，LLMLingua-2提供了更好的性能，因为它通过数据蒸馏从广泛领域的数据中学习，具有较好的泛化能力，能够更快、更准确地处理来自不同领域的数据。

LLMLingua系列工具在需要提高大型语言模型处理速度、减少处理成本、处理长上下文或跨领域数据时非常有用。它们通过有效地压缩输入提示信息，使得在保持信息完整性的同时，大幅减轻了模型处理的负担。