---
title: "PromptEnhancer"
date: "2024-01-01 00:00:00+08:00"
description: PromptEnhancer PromptEnhancer
slug: promptenhancer
tags:
- go2co
- tokens
- const
- gitalk
- max
draft: false
related_tools:
- graph-constrained reasoning
- qwq-max-preview
- minimax-text-01
- minimax-m1
- promptenhancer
---

## PromptEnhancer

PromptEnhancer项目是腾讯混元模型上构建的提示词重写工具，旨在通过思维链提示词重写方法提升文本到图像模型的生成效果。其核心功能在于智能重构用户输入的提示词，在保持原始意图不变的前提下，生成更清晰、分层且逻辑一致的提示词，特别适用于图像生成等下游任务。该工具能够精准保留提示词中的关键要素如主体、动作、数量、风格、布局等，并引导生成“全局-细节-总结”的叙事结构。它还具备鲁棒的输出解析能力，并提供可配置的推理参数（如温度、top_p、max_new_tokens），以平衡生成结果的确定性与多样性，允许用户灵活控制生成策略。该项目支持中文和英文提示词输入，并提供了一个7B参数量的模型供使用。