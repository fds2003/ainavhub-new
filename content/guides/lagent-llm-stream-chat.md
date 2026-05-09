---
title: "lagent lagent Lagent"
date: "2024-01-01 00:00:00+08:00"
description: 'lagent Lagent  Lagent '
slug: lagent-llm-stream-chat
tags:
- lmdeploy
- streamlit
- openai
- transformers
- internlm
draft: false
related_tools:
- chat with the streamlit docs
- openai agents sdk
- claude code but with openai models
- openai.fm
- openai codex cli
---

## lagent

##### Lagent 简介

Lagent 是一个轻量级的开源框架，旨在帮助用户高效创建基于大型语言模型（LLM）的智能代理。它还提供了一些典型工具来增强 LLM 的功能。

##### 使用场景

1. **快速搭建智能代理** Lagent 提供简洁的代码示例，用户可以快速启动并体验智能代理的功能。

2. **流式输出** 通过 `stream_chat` 接口，实现流式输出，便于在本地设置上进行酷炫的流式演示。

3. **模型切换** Lagent 支持多种模型之间的无缝切换，包括 OpenAI API、Transformers 和 LMDeploy 推理加速框架。

4. **行动自定义** 用户可以通过简单的继承和装饰，创建个性化的工具包，适用于 InternLM 和 GPT。

5. **探索与实现智能代理** 仅需一步，将模型转化为智能代理，便于用户探索和实现各种代理应用。


##### 主要功能

* **统一的接口设计** 设计升级，提高了框架的可扩展性。

* **全面的文档支持** 提供完整的 API 文档，便于用户参考和使用。


##### 安装与演示

1. **安装** 推荐使用 pip 进行安装：

pip install lagent


2. **运行 Web 演示** 首先需要安装 Streamlit：

# pip install streamlit
streamlit run examples/internlm2_agent_web_demo.py


##### 技术栈

Lagent 主要使用 Python 编写，感谢所有贡献者的支持。

##### 许可证

Lagent 项目采用 Apache 2.0 开源许可证。

* * *

如果觉得该项目对您的研究有帮助，请考虑引用以下文献：


@misc{lagent2023,
title={{Lagent: InternLM} a lightweight open-source framework that allows users to efficiently build large language model(LLM)-based agents},
author={Lagent Developer Team},
howpublished = {\url{https://github.com/InternLM/lagent}},
year={2023}
}


[🔼 返回顶部](<#top>)