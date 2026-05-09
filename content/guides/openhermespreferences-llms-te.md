---
title: "OpenHermesPreferences"
date: "2024-01-01 00:00:00+08:00"
description: OpenHermesPreferences OpenHermesPreferences LLMs
slug: openhermespreferences-llms-te
tags:
- const
- gitalk
- mixtral-8x7b-instruct-v0.1
- nous-hermes-2-yi-34b
- teknium
draft: false
related_tools:
- graph-constrained reasoning
- optexity
- infiniteyou
- computer using agent sample app
- stock analysis system
---

## OpenHermesPreferences

OpenHermesPreferences是一个合成数据集，包含了大约100万个二进制偏好选择，这些偏好选择是从几个大型语言模型（LLMs）中获取的。该数据集的目的是用于训练偏好模型或通过直接偏好优化等技术来对齐语言模型。它结合了来自teknium/OpenHermes-2.5数据集的响应以及来自其他两个模型Mixtral-8x7B-Instruct-v0.1和Nous-Hermes-2-Yi-34B的响应，使用PairRM作为偏好模型来对生成的文本进行评分和排名。数据集的分布显示了不同模型的选择和拒绝的数量，以及数据集的子集的比例。此外，数据集还提供了关于所选和被拒绝文本长度的可视化信息，以及与数据集结构和创建有关的详细信息。然而，OpenHermesPreferences也存在一些限制，比如只从三个模型中采样，排名模型的上下文长度有限，以及对于性能增益的依赖程度等。 OpenHermesPreferences数据集的引用信息和许可证也已经提供。