---
title: "Granite Code Models Granite Code Models Granite Code Models"
date: "2024-01-01 00:00:00+08:00"
description: Granite Code Models Granite Code Models IBM
slug: granite-code-models-ibm-bug
tags:
- git
- base
- granite
- github
- instruct
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## Granite Code Models

Granite Code Models是IBM推出的一系列编码生成模型，支持116种编程语言，旨在处理代码生成任务，比如修复bug、解释代码、文档化代码等。这些模型的训练数据遵循IBM的AI伦理原则，确保了企业级的可靠性。这款工具可用于各种代码相关任务，展现了在多个开源代码大型语言模型（LLMs）中始终保持着竞争力或达到最新水平的性能。

Granite Code Models分为两类：

1. **Granite Code Base Models** ：基础模型，旨在处理代码相关任务（例如代码修复、代码解释、代码合成）。
2. **Granite Code Instruct Models** ：指令跟随模型，通过使用Git提交配对的人类指令以及开源合成生成的代码指令数据集进行微调。


这两类模型都提供了不同大小（3B, 8B, 20B, 34B参数规模）的版本。

数据准备阶段，IBM收集了公开可用的数据集、GitHub的公开代码仓库和问题，并基于代码的编程语言（根据文件扩展名确定）以及代码质量进行了筛选。此外，还采用了严格的去重策略，并引入内容过滤来减少生成含有仇恨、辱骂或下流语言的可能性。

在预训练阶段，Granite Code Base模型利用了3-4T tokens的代码数据和与代码相关的自然语言数据集进行训练，训练过程分为两个阶段：仅代码数据训练和代码+语言数据训练。Granite Code Instruct模型则在上述基础上，进行了针对具体指令数据的微调。

这些模型在多个编程任务和编程语言上进行了广泛的评估，结果显示Granite Code Models在不同大小的模型中均展现出了优秀性能。

使用Granite Code Models的情况包括但不限于：

* **代码生成** ：当需要自动生成代码时（比如基于某些规格说明生成代码实现）。
* **代码修复** ：自动识别并修复代码中的错误。
* **代码解释** ：为复杂的代码提供解释，帮助开发者理解特定代码段的功能。
* **代码翻译** ：将一种编程语言的代码转换为另一种。


上述Python示例代码展示了如何使用Granite Code Models来生成代码片段。此外，IBM还提供了相应的HuggingFace模型库，方便研究者和开发者下载和使用这些模型。Granite Code Models对于从事代码相关工作的研究人员和开发人员来说是一项强大的工具，特别适用于需要处理大量代码生成或分析任务的场景。