---
title: "Agent Lightning Agent Lightning Agent Lightning"
date: "2024-01-01 00:00:00+08:00"
description: Agent Lightning Agent Lightning  LLM
slug: agent-lightning-llm
tags:
- agentops
- clientsecret
- const
- langchain
- ddefeac06598c65895743c01b9c180691d84c
draft: false
related_tools:
- agent
- graph-constrained reasoning
- langchain-searxng
- langchain swift
- langchain
---

## Agent Lightning

Agent Lightning 是一个灵活可扩展的训练框架，旨在为现有智能体框架提供无缝的模型训练能力。其核心架构由一个训练服务器和多个智能体组成：服务器负责管理训练数据、准备样本和提供语言模型（LLM）端点，并收集智能体返回的LLM交互轨迹以优化模型；智能体则从服务器获取样本并进行处理。该框架支持与AutoGen、LiteLLM、LangChain等多种主流智能体框架集成，并默认集成了AgentOps进行智能体追踪。在实际操作中，项目强调服务器和智能体客户端需独立启动，并建议通过限制提示和响应长度、以及频繁保存检查点来有效应对潜在的超时和内存问题，确保训练流程的稳定性和高效性。