---
title: "agentUniverse"
date: "2024-01-01 00:00:00+08:00"
description: 'agentUniverse agentUniverse  agentUniverse '
slug: agentuniverse
tags:
- peer
- execute
- plan
- agentuniverse
- express
draft: false
related_tools:
- ai peer review
- control plane for your ai agents
- agentuniverse
- agent
- insightexpress
---

## agentUniverse

## agentUniverse 简介

**agentUniverse** 是一个基于大型语言模型的多智能体应用开发框架。它提供了构建单个智能体和多智能体协作机制的所有必要组件，允许开发者构建和自定义多智能体协作模式，以便轻松构建多智能体应用，并共享来自不同技术和业务领域的模式实践。

该框架内置了多种经过实际业务场景验证的多智能体协作模式，并将持续丰富。目前即将发布的模式包括：

* **PEER 模式** ： 此模式利用四种不同的智能体角色——计划（Plan）、执行（Execute）、表达（Express）和回顾（Review），对复杂任务进行多步骤分解和顺序执行，并基于评估反馈进行自主迭代，提升推理和分析任务的性能。

* **DOE 模式** ： 此模式包括三个智能体：数据查找智能体，解决数据密集型和高计算精度任务；意见注入智能体，将第一个智能体的数据结果与预先收集和结构化的专家意见结合；表达智能体根据给定的文档类型和语言风格生成最终结果。


更多模式将陆续推出。

以下是 agentUniverse 框架的结构示意图：

![](docs/guidebook/_picture/agent_universe_framework_resize.jpg)

## agentUniverseSample 项目

[agentUniverse Sample Project](<sample_standard_app/README.md>)

## 快速安装

使用 pip 安装：


pip install agentUniverse


## 快速开始

我们将向您展示如何：

* 准备环境和应用项目
* 构建一个简单的智能体
* 使用模式组件完成多智能体协作
* 测试和优化智能体性能
* 快速部署智能体


详细信息请参阅 [快速开始](<docs/guidebook/en/1_3_Quick_Start.md>)。