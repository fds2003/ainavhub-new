---
title: "Phi-3.5-MoE"
date: "2024-01-01 00:00:00+08:00"
description: Phi-3.5-MoE Phi-3.5-MoE Mixture of Experts
slug: phi-3.5-moe-mixture-experts-phi-3
tags:
- phi-3.5-moe-instruct
- 'true'
- phi-3
- transformers
- trust
draft: false
related_tools:
- phi-3-mini
- ktransformers
- claude code remote
- codemcp
- code runner mcp server
---

## Phi-3.5-MoE

Phi-3.5-MoE（Mixture of Experts）是一种轻量级的开源先进模型，基于Phi-3模型构建，使用合成数据和经过筛选的公共可用文档作为训练数据，重点关注高质量的推理密集型数据。该模型支持多语言，具有高达128K的上下文长度（以标记为单位）。Phi-3.5-MoE经过严格的增强过程，包括监督微调、邻近策略优化和直接偏好优化，以确保精确遵循指令和强大的安全措施。

##### 主要用途

该模型适用于商业和研究用途，支持多语言，提供通用AI系统和需要强推理能力（尤其是代码、数学和逻辑）的应用。它旨在加速对语言和多模态模型的研究，并用作生成AI功能的构建块。

##### 使用要求

Phi-3.5-MoE-instruct模型将在官方的transformers版本中集成，用户需确保在加载模型时传递`trust_remote_code=True`参数。支持的词汇表大小达到32064个标记，适合使用聊天格式的提示进行输入。

##### 训练数据和模型架构

Phi-3.5-MoE的架构为16个3.8B参数的混合专家解码器，仅在使用两个专家时激活6.6B参数。模型训练使用了合计4.9万亿个标记的多样化数据，包括新创建的合成数据和经过筛选的高质量教育数据。

##### 评估与安全考虑

Phi-3.5-MoE在多个基准测试中表现出色，尤其在推理能力上优于许多更大规模的模型。虽然模型在多语言任务上具有竞争力，但由于训练数据的限制，处理非英语内容的表现可能存在差异。模型生成的内容可能会包含不准确或过时的信息，因此在敏感上下文中使用时需要谨慎。

总体来说，Phi-3.5-MoE是一个强大的通用模型，适用于众多NLP任务，尤其是在资源有限的环境和高延迟场景下表现优异。