---
title: "RAGFoundry RAGFoundry RAG Foundry"
date: "2024-01-01 00:00:00+08:00"
description: 'RAGFoundry RAG Foundry RAG Foundry '
slug: ragfoundry-rag-foundry-llms
tags:
- ragas
- foundry
- ragfoundry
- hf
- peft
draft: false
related_tools:
- mcp-hfspace mcp server
- flashface
- depthflow - 图片转换成2.5d视差效果视频的工具，是一个专业的deephy替代品。
- gemma-3
- codemcp
---

## RAGFoundry

## **RAG Foundry** 简介及使用场景

##### 介绍

**RAG Foundry** 是一个用于增强大语言模型（LLMs）处理基于检索的生成（RAG）任务的框架。它通过使用RAG工作流程，创建数据增强的数据集来微调模型，以提高其利用外部信息的能力。该库主要完成以下工作：

1. 创建用于训练的RAG增强数据集。
2. 通过参数高效微调（PEFT）进行模型训练。
3. 使用特定的RAG指标评估模型性能的提升。


##### 主要模块

RAG Foundry 框架由四个模块组成，分别是数据集创建、训练、推理和评估。

1. **数据集创建** ：处理模块生成数据集，保存RAG交互，用于训练和推理。包括数据加载、标准化、信息检索、API集成、基于模板的提示创建等。数据以一致且模型无关的格式保存，包含所有字段和元数据。

2. **训练** ：使用PEFT进行高效训练，可以在增强数据集上训练任何模型。训练完成后，模型可以上传到HF Hub。

3. **推理** ：使用训练好的模型或未训练的LLMs，生成增强数据集的预测结果。

4. **评估** ：对推理模块生成的输出进行评估。用户可以提供指标列表，现有指标包括EM、F1、ROUGE、BERTScore、Deepeval、RAGAS等。


##### 使用场景

RAG Foundry适用于各种需要结合外部信息并对大语言模型进行微调和评估的场景：

1. **高级问答系统** ：使用RAG技术从外部数据库或文档中检索信息，并生成精确的答案。

2. **情报分析** ：针对多源数据，整合并提取有用信息。

3. **客户支持** ：利用外部知识库，提供精准的自动化客户服务。

4. **内容生成** ：通过集成外部数据源，提高生成内容的连贯性和准确性。


##### 安装和运行

克隆项目并安装依赖：


pip install -r requirements.txt


运行各模块脚本，如创建数据集：


python processing.py -cp configs/paper -cn processing-asqa-retrieval


##### 灵活配置

RAG Foundry使用[Hydra](<https://hydra.cc/docs/intro/>)配置工具，允许通过CLI覆盖配置值并远程运行多个任务。

##### 许可证

代码基于[Apache 2.0 License](<LICENSE>)许可。

##### 免责声明

这不是Intel的官方产品。