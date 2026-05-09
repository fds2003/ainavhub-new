---
title: "Running Llama locally with minimal dependencies Running Llama locally with"
date: "2024-01-01 00:00:00+08:00"
description: "Running Llama locally with minimal dependencies Llama"
slug: "running-llama-locally-minimal-dependencies"
draft: false
---

## Running Llama locally with minimal dependencies

##### 在本地以最小依赖项运行Llama模型的总结

###### 目的

作者希望深入理解大型语言模型（LLM），而不是使用现成的API，这样可以更好地探讨模型的内部机制和细节，比如层的激活、权重及其形状等。虽然有一些流行的工具可以调用这些模型，但它们隐藏了许多有趣的细节，因此作者选择以最小的依赖项直接使用PyTorch运行Llama模型。

###### 设置步骤

1. 下载相关的模型权重。
2. 安装依赖项（requirements.txt）。
3. 安装Llama模型代码。
4. 通过Python运行推理脚本。


###### 模型与输出的探索

有两个推理脚本可供使用：`run_inference.py` 和 `minimal_run_inference.py`。前者较为复杂，包含更多功能和注释，而后者则是使用Llama模型的一种简单方法，适合初学者进行探索和实验。

###### 脚本参数

两个脚本中的全局变量包括模型名称、模型目录、输入字符串和设备信息。这些参数可以根据需要进行修改。

###### 技术概述

####### 依赖项

运行Llama模型的最小依赖项包括：

* `torch`（自然需要）
* `fairscale`（Meta公司发布的库，提供可扩展的PyTorch操作）
* `blobfile`（用于文件I/O的机制）


模型的架构由GitHub上的`llama_models`库提供，需正确初始化`torch`和`fairscale`。

####### Beam-Search

实现了beam-search算法，以获得每个时间步上最可能的序列，优于贪婪选择。

####### 性能注意事项

在使用CPU时，1B模型能够较为舒适地运行，但3B模型和8B模型则存在性能问题。通过使用Apple的GPU（MPS），在前几个token的推理时间上表现更快，但内存使用显著增加，导致处理效率降低。整个过程的表现受到设备内存限制的影响。

##### 使用场景

1. **学习与研究** ：对希望深入了解LLM内部机制的研究者和开发者非常适合。
2. **实验与调试** ：初学者可以通过简单的代码和注释，探索模型的不同方面，促进对深度学习与语言模型理解的加深。
3. **资源受限的环境** ：在资源有限的地方运行较小规模的Llama模型，使得用户能够在没有强大硬件支持的情况下进行实验。
4. **高效推理** ：需要快速推理和反馈的场景，如原型设计和小型应用开发。


总结而言，使用最小依赖项在本地运行Llama模型是一种灵活、直观且适合探索性学习的方式，特别适合对代码细节感兴趣的开发者。
