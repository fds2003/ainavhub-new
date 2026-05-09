---
title: "PaLM-rlhf-pytorch"
date: "2024-01-01 00:00:00+08:00"
description: ChatGLM-6B PaLMRLHF（） PaLM RLHF（）。 ChatGPT， PaLM。PaLM AI 「Pathways」 5400
  ...
slug: palm-rlhf-pytorch-palm-rlhf
tags:
- chatglm-6b
- pathways
- chatgpt
- palm-rlhf-pytorch
- prompt
draft: false
related_tools:
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
- chatgpt-on-cs
- chatgpt instantly
---

#### 产品介绍

![Image](/images/screenshots/PaLM-rlhf-pytorch.png)

#### [ChatGLM-6B](<https://github.com/lucidrains/PaLM-rlhf-pytorch>)

在PaLM体系结构之上实现RLHF（人工反馈强化学习）

#### 特性

该项目是在 `PaLM` 架构之上实施` RLHF`（人类反馈强化学习）。

基本上等同于 `ChatGPT`，区别是使用了 `PaLM`。`PaLM` 是在谷歌的通用 `AI` 架构「`Pathways`」上训练而成的具有 `5400` 亿参数的大型语言模型。

而 `RLHF`，是 `ChatGPT` 在 `GPT 3.5` 系列模型的基础上，引入「人工标注数据 + 强化学习」（`RLHF`）来不断微调预训练语言模型，旨在让大型语言模型（`LLM`）学会理解人类的命令，并学会根据给定的 `prompt` 给出最优的答案。