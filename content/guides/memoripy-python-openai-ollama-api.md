---
title: "Memoripy"
date: "2024-01-01 00:00:00+08:00"
description: 'Memoripy Memoripy  Memoripy '
slug: memoripy-python-openai-ollama-api
tags:
- memoripy
- python
- api
- ollama
- openai
draft: false
related_tools:
- memoripy
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## Memoripy

##### Memoripy 简介

**Memoripy** 是一个基于 Python 的库，旨在管理和检索上下文相关的记忆交互，支持短期记忆和长期记忆的存储。该库特别适合需要记忆管理的人工智能应用，兼容 OpenAI 和 Ollama API。Memoripy 的主要功能包括上下文记忆检索、记忆衰减和增强、分层聚类以及基于图的关联。

##### 主要功能

* **短期和长期记忆管理** ：根据使用和相关性管理记忆的短期记忆和长期记忆。
* **上下文检索** ：根据嵌入、概念和过去的交互来检索记忆。
* **概念提取和嵌入生成** ：借助 OpenAI 或 Ollama 模型进行概念提取和嵌入生成。
* **基于图的关联** ：构建概念图，利用传播激活进行基于相关性的检索。
* **分层聚类** ：将相似的记忆聚类成语义组，以帮助上下文相关的检索。
* **衰减和增强机制** ：旧的记忆随着时间推移而衰减，而经常访问的记忆则会被增强。


##### 使用场景

Memoripy 适合多种场景，包括但不限于：

1. **对话AI助手** ：在聊天机器人或虚拟助手中使用，以保持用户上下文，提供更连贯和个性化的交互体验。
2. **学习系统** ：能够在教学过程中积累和检索学生与学习材料的互动历史，帮助教师个性化教学。
3. **个性化推荐系统** ：通过记忆用户的偏好和历史行为来优化推荐内容。
4. **游戏和虚拟现实** ：记录玩家的选择和互动，实现更丰富的游戏体验。
5. **情感分析和心理健康应用** ：跟踪用户的情感变化和重要事件，以支持人际交流和心理健康管理。


##### 安装和使用

用户可以通过以下命令使用 pip 安装 Memoripy：


pip install memoripy


示例代码展示了如何设置和使用 Memoripy，包括初始化记忆管理器、存储交互、检索相关记忆并生成响应。

##### 结论

Memoripy 提供了一种灵活和高效的方式，用于管理 AI 应用中的记忆交互，具有广泛的应用潜力，适合各类需要上下文记忆的智能系统。