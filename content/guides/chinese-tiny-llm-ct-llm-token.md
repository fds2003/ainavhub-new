---
title: "Chinese-Tiny-LLM"
date: "2024-01-01 00:00:00+08:00"
description: Chinese-Tiny-LLM Chinese-Tiny-LLM CT-LLM
slug: chinese-tiny-llm-ct-llm-token
tags:
- structured
- chinese
- benchmark
- chc-bench
- fine-tuning
draft: false
related_tools:
- structured outputs sample apps
- structured outputs in the api
- chinese-tiny-llm
- chinese-llama-alpaca-3
- gemma 2 9b chinese chat
---

## Chinese-Tiny-LLM

Chinese-Tiny-LLM（简称CT-LLM）是一个专注于中文处理的大型语言模型，它有20亿参数，主要用中文数据进行训练。这个模型使用了1,2000亿个token的语料库，包括8000亿个中文token、3000亿个英文token和1000亿个代码token。这种多语言混合的训练方法提高了模型对中文的处理能力，并且通过对齐技术进一步改进。在中文语言任务上，CT-LLM在CHC-Bench上展示出优秀的表现，并且通过SFT（Structured Fine-Tuning）也能够处理英文任务。这标志着开发LLM（大型语言模型）的方向开始着重考虑中文，拓展了训练方法论。

CT-LLM项目还开源了包含数据清洗和预训练代码的一套程序，发布了Massive Appropriate Pretraining Chinese Corpus（MAP-CC，规模达到8000亿token的中文预训练数据集）和Chinese Hard Case Benchmark（CHC-Bench，挑选的跨学科中文难案例指令理解和跟随评测基准），旨在鼓励对更具包容性和适应性的语言模型的研究和创新。

以下情况可能会使用CT-LLM或其相关工具：

1. **中文NLP任务** ：当需要在中文自然语言处理任务上获得优秀表现时，例如文本生成、情感分析、文本分类等。CT-LLM因大量使用中文训练数据，特别适合处理这类任务。

2. **中英文混合数据项目** ：对于包含中英文混合数据的项目，CT-LLM由于在训练时包括了大量英文和中文数据，因此能够较好地处理和理解这类数据。

3. **代码生成和理解** ：由于CT-LLM的训练数据中包含了大量的代码token，它也可用于代码相关的自然语言处理任务，如代码自动生成、代码注释生成等。

4. **数据清洗与去重** ：项目中提供了一套详细的数据清洗和去重程序，这些工具可以用于中文网页语料的清洗和预处理，对于需要大规模清洗和预处理中文数据集的项目非常有用。

5. **开源项目和研究** ：由于CT-LLM及其相关工具和数据集全部开源，对于学术研究人员和开发者而言，它提供了一个非常宝贵的资源，可以用来进行语言模型的相关研究，或者作为开发中文处理应用的基础。


CT-LLM是一个非常强大的中文处理大型语言模型，适用于一系列涉及中文自然语言处理的应用场景，同时它的开源特性也使其成为研究和开发社区的宝贵资源。