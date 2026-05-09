---
title: "This repository simple-evals"
date: "2024-01-01 00:00:00+08:00"
description: simple-evals  gpt-4-turbo-2024-04-09
slug: repository-simple-evals-gpt-4-turbo-2024-04-09-zero-shot-chain-of-thought
tags:
- gpt-4-turbo-2024-04-09
- humaneval
- chain-of-thought
- mgsm
- mmmu
draft: false
related_tools:
- rstar-math
- pdfmathtranslate
- ai math notes
- pi
- anthropic prompt library
---

## simple-evals

提供了一个轻量级的库，用于评估语言模型。它的目的在于公开透明地分享与最新模型（例如`gpt-4-turbo-2024-04-09`）发布的准确性数字。该库特别强调在零提示（zero-shot）和思维链（chain-of-thought）设置下使用简单指令进行评估，如“解决以下多项选择问题”，以更真实地反映模型在实际使用中的表现。

仓库不会积极维护，也不会主动监控Pull Requests和Issues。它接受的更改类型包括：bug修复、为新模型添加适配器，以及基于新模型和新的系统提示添加评估结果。

该库不是https://github.com/openai/evals的替代品，后者旨在收集大量评估。

该库具体包含以下评估内容：

* 不同领域的评估，如语言理解（MMLU）、数学问题解决能力（MATH）、高阶问答（GPQA）、阅读理解（DROP）、多语种数学理解（MGSM）、代码理解（HumanEval）和多学科多模态理解（MMMU）。


此外，实现了针对OpenAI和Anthropic（Claude）等语言模型API的采样接口，要求在使用这些API之前设置相应的环境变量。

对于需要的使用场景，该仓库适合在如下情况下使用：

1. **模型性能评估** ：当你需要在没有预先设定答案（即零提示）的情况下，通过思维链技术评估不同语言模型的性能时，这个库提供了一套标准化的评估方法和工具。

2. **研究基准** ：如果你正在进行与语言模型相关的研究，并希望使用公认的数据集和评估标准来比较你的模型与现有最先进模型的表现，该库提供的评估可作为有力的研究基准。

3. **透明度和开放性** ：对于希望公开他们模型准确率并寻求社区反馈和贡献者的开发者和研究人员，这个库提供了一个透明和开放的平台。