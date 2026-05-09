---
title: "plinder plinder Plinder"
date: "2024-01-01 00:00:00+08:00"
description: plinder Plinder  Protein Ligand INteractions Dataset and Evaluation Resource
slug: plinder-protein-ligand-interactions-dataset
tags:
- protein
- scop
- plinder
- resource
- ligand
draft: false
related_tools:
- scrapling
- stock data insights application
- stickerbaker - 基于replicate和fly.io技术，100%开源的制作贴纸的工具
- react ai assistant application
- auto_jobs_applier_ai_agent
---

## plinder

**Plinder** 是“蛋白质-配体相互作用数据集和评估资源（Protein Ligand INteractions Dataset and Evaluation Resource）”的缩写，是一个用于蛋白质与配体对接算法训练和评估的综合数据集和资源。

##### Plinder 的特点

* **丰富的数据量** ：包含超过40万个蛋白质-配体相互作用（PLI）系统，涉及11,000多个SCOP结构域和50,000个独特的小分子。
* **高质量注释** ：每个系统包含500多条注释，包括蛋白质和配体的属性、质量、匹配的分子系列等。
* **自动化数据整理** ：通过自动化整理管道保持与PDB的同步。
* **多种评估指标** ：提供14种PLI评估指标和超过200亿个相似性得分。
* **数据分割** ：支持根据学习任务进行灵活的训练、验证和测试集划分。
* **评估工具** ：提供稳健的评估工具，简化和标准化不同模型的性能比较。


##### Plinder 的使用场景

1. **模型训练和验证** ：

* 用于蛋白质-配体对接算法的开发和改进。
* 支持多种机器学习和深度学习模型的训练。
2. **药物研发** ：

* 有助于发现和优化药物分子。
* 提供高质量、真实的实验数据，以减少在药物开发过程中的不确定性。
3. **生物信息学研究** ：

* 支持生物分子的结构预测以及分析其相互作用。
* 提供全面的数据资源，支持多领域的研究和实验。
4. **学术研究和竞赛** ：

* 将作为2024年NeurIPS “结构生物中的机器学习”（MLSB）研讨会上的标准数据集，用于相关竞赛和学术比较。


##### 获取和使用 Plinder

* **安装** ：建议使用卷环境管理器（如miniforge）来安装和运行Plinder项目，目前仅支持Linux环境。
* **数据下载** ：通过Plinder核心API惰性下载和交互数据信息，或直接使用`gsutil`工具下载数据集。
* **版本控制** ：通过Release和Iteration标签来标记不同版本的数据集，确保稳定性及可追溯性。


##### 开发与贡献

Plinder是一个社区驱动项目，由多家机构合作推出，定期更新，欢迎社区贡献。包括代码改进、新特性添加、数据集扩展等。项目代码组织结构清晰，包含核心数据结构、数据生成和评估工具等模块。

如果你觉得Plinder对你的研究有帮助，请参考详细的引用信息以适当引用该资源。