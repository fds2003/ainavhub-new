---
title: "PyRIT"
date: "2024-01-01 00:00:00+08:00"
description: PyRIT PyRITPyRIT（Python），（AI）。，。PyRIT（LLM），、...
slug: pyrit-python
tags:
- pyrit
- const
- gitalk
- clientsecret
- python
draft: false
related_tools:
- graph-constrained reasoning
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

#### PyRIT

PyRIT是微软发布的一个名为PyRIT（Python风险识别工具的缩写）的开放访问自动化框架，用于主动识别生成式人工智能（AI）系统中的风险。它是一个红队工具，旨在帮助全球的组织负责任地利用最新的人工智能进步进行创新。PyRIT可以用于评估大型语言模型（LLM）端点对不同攻击类别的鲁棒性，例如捏造、滥用和禁止内容。此外，它还可以识别安全风险，如恶意软件生成和越狱，以及隐私风险，如身份盗窃。这个工具带有五个接口，包括目标、数据集、评分引擎、支持多种攻击策略的能力，以及一个用于存储中间输入和输出交互的记忆组件。评分引擎提供了两种不同的评分目标AI系统输出的选项，允许红队成员使用传统的机器学习分类器或利用LLM端点进行自我评估。微软强调PyRIT不是替代生成式AI系统的手动红队评估，而是补充红队现有的领域专业知识。它旨在通过生成可能用于评估AI系统的提示来突出风险“热点”，并标记需要进一步调查的区域。