---
title: "ChatGLM-6B"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatGLM-6B  ChatGLM-6B '
slug: chatglm-6b
tags:
- chatglm-6b
- model
- glm
- int4
- language
draft: false
related_tools:
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
- granite code models
---

#### 产品介绍

![Image](/images/screenshots/ChatGLM-6B.gif)

#### [ChatGLM-6B](<https://github.com/THUDM/ChatGLM-6B>)

开源双语对话语言模型

#### 特性

`ChatGLM-6B` 是一个开源的、支持中英双语的对话语言模型，基于` General Language Model (GLM)` 架构，具有 62 亿参数。结合模型量化技术，用户可以在消费级的显卡上进行本地部署（INT4 量化级别下最低只需 6GB 显存）。

`ChatGLM-6B` 使用了和 `ChatGPT `相似的技术，针对中文问答和对话进行了优化。经过约 1T 标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62 亿参数的 `ChatGLM-6B` 已经能生成相当符合人类偏好的回答。

为了方便下游开发者针对自己的应用场景定制模型，我们同时实现了基于 `P-Tuning v2` 的高效参数微调方法 (使用指南) ，`INT4` 量化级别下最低只需 `7GB` 显存即可启动微调。

不过，由于 `ChatGLM-6B` 的规模较小，目前已知其具有相当多的局限性，如事实性/数学逻辑错误，可能生成有害/有偏见内容，较弱的上下文能力，自我认知混乱，以及对英文指示生成与中文指示完全矛盾的内容。请大家在使用前了解这些问题，以免产生误解。更大的基于 1300 亿参数 `GLM-130B` 的 `ChatGLM` 正在内测开发中。