---
title: "CodeGeeX"
date: "2024-01-01 00:00:00+08:00"
description: CodeGeeX CodeGeeX130。CodeGeeXMindSpore，“II”192（1536910 AI）。 2022622，CodeGe...
slug: codegeex-2
tags:
- mindspore
- vscode
- java
- go
- python
draft: false
related_tools:
- tabby vscode agent
- llama.vscode
- duckduckgo search mcp server
- google search console mcp server for seos
- google ads mcp
---

#### 产品介绍

![Image](/images/screenshots/codegeex.png)

#### [CodeGeeX ](<https://codegeex.cn/zh-CN>)

多语言代码生成模型

#### 特性

CodeGeeX是一个具有130亿参数的多编程语言代码生成预训练模型。CodeGeeX采用华为MindSpore框架实现，在鹏城实验室“鹏城云脑II”中的192个节点（共1536个国产[昇腾910 AI处理器](<https://e.huawei.com/cn/products/servers/ascend>)）上训练而成。

截至2022年6月22日，CodeGeeX历时两个月在20多种编程语言的代码语料库（>8500亿Token）上预训练得到。CodeGeeX有以下特点：

* **高精度代码生成** ：支持生成Python、C++、Java、JavaScript和Go等多种主流编程语言的代码，在HumanEval-X代码生成任务上取得47%~60%求解率，较其他开源基线模型有更佳的平均性能。[代码生成示例](<https://models.aminer.cn/codegeex/zh-CN>)
* **跨语言代码翻译** ：支持代码片段在不同编程语言间进行自动翻译转换，翻译结果正确率高，在HumanEval-X代码翻译任务上超越了其它基线模型。[代码翻译示例](<https://models.aminer.cn/codegeex/zh-CN/codeTranslator>)
* **自动编程插件** ：CodeGeeX插件现已上架VSCode插件市场（完全免费），用户可以通过其强大的少样本生成能力，自定义代码生成风格和能力，更好辅助代码编写。[插件下载](<https://marketplace.visualstudio.com/items?itemName=aminer.codegeex>)
* **模型跨平台开源** : 所有代码和模型权重开源开放，用作研究用途。CodeGeeX同时支持昇腾和英伟达平台，可在单张昇腾910或英伟达V100/A100上实现推理。[申请模型权重](<https://models.aminer.cn/codegeex/download/request>)


**全新多编程语言评测基准HumanEval-X** ：HumanEval-X是第一个支持功能正确性评测的多语言、多任务的基准，包含820个人工编写的高质量代码生成题目、测试用例与参考答案，覆盖5种编程语言（Python、C++、Java、JavaScript、Go），支持代码生成与代码翻译能力的评测。[如何使用](<codegeex/benchmark/README_zh.md>)