---
title: "Cosmopedia"
date: "2024-01-01 00:00:00+08:00"
description: Cosmopedia Cosmopedia Mixtral-8x7B-Instruct-v0.1
slug: cosmopedia-mixtral-8x7b-instruct-v0.1-wikihow
tags:
- openstax
- automathtext
- redpajama
- wikihow
- mixtral-8x7b-instruct-v0.1
draft: false
related_tools:
- ama
- cosmopedia - 教科书、博客文章、故事和wikihow文章的数据集
- dia
---

## Cosmopedia

Cosmopedia是由Mixtral-8x7B-Instruct-v0.1生成的合成教科书、博客文章、故事和WikiHow文章的数据集。该数据集包含3000万个样本和250亿个标记，是目前为止最大的开放合成数据集。它涵盖了各种主题，试图映射像RefinedWeb和RedPajama等网络数据集中存在的世界知识，并生成涵盖这些知识的合成内容。Cosmopedia有8个子集，根据用于提示的种子样本的来源而划分。这些子集包括来自网络样本、斯坦福大学、故事、WikiHow、OpenStax、Khan Academy、AutoMathText等数据源。数据集的特点包括提示、生成的内容、种子数据、标记长度、文本样式和目标受众。Cosmopedia的创建过程包括主题聚类、提高多样性和去污染。对于主题聚类，他们首先从网络数据集中聚类了数百万个文件，然后用这些样本的提取内容提示Mixtral 8x7B，并要求它找到它们共同的主题并为该主题提供教育得分。对于多样性，他们发现改变生成风格和/或受众以及目标格式会产生不同的生成结果，覆盖同一主题的不同方面。对于去污染，他们运行去污染管道以确保数据集中没有来自测试基准的样本。