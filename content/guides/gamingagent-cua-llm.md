---
title: "GamingAgent"
date: "2024-01-01 00:00:00+08:00"
description: 'GamingAgent GamingAgent  GamingAgent '
slug: gamingagent-cua-llm
tags:
- o1
- atari
- cua
- agent.py
- gamingagent
draft: false
related_tools:
- llamav-o1
- search-o1
- llava-o1
- llama-o1
- marco-o1
---

## GamingAgent

## GamingAgent 总结性介绍

GamingAgent 是一个旨在提供便捷方案，用于部署可在个人电脑和笔记本电脑上运行的计算机使用代理 (CUA) 的项目。目前该项目专注于构建本地游戏代理。它使用大型语言模型 (LLM) 作为智能体，通过视觉输入，操控电脑上的游戏。目前支持的游戏包括超级马里奥兄弟、2048 和俄罗斯方块。

**核心功能:**

* **游戏代理:** 提供用于控制平台游戏和 Atari 游戏的智能代理。
* **多模型支持:** 支持 OpenAI (gpt-4o, gpt-4o-mini, o1), Anthropic (claude-3-5-sonnet-20241022, claude-3-7-sonnet-20250219) 和 Gemini (gemini-1.5-pro) 等多种 LLM。
* **可定制策略:** 允许用户自定义游戏策略，例如在 `mario_agent.py` 中实现不同的马里奥策略，可以选择高并发的短期规划和低并发的长期规划。
* **易于安装和使用:** 提供详细的安装步骤和简单的命令行启动方式。


## GamingAgent 的使用场景

GamingAgent 的主要使用场景是**利用 LLM 自动玩游戏，并探索不同的游戏策略。**

**具体应用包括：**

* **游戏AI研究:** 用于研究 LLM 在游戏环境中的表现，例如智能体如何理解游戏规则、制定策略和解决问题。
* **自动化游戏测试:** 用于自动化游戏测试，例如测试游戏的平衡性、发现漏洞等。
* **游戏辅助:** 用于为玩家提供游戏辅助，例如提供游戏提示、自动完成重复性任务等。
* **AI能力展示:** 用于展示 LLM 的能力，例如展示 LLM 在复杂环境中的推理、决策和控制能力。


**总而言之，GamingAgent 提供了一个平台，让开发者和研究人员可以方便地使用 LLM 构建游戏智能体，并探索 LLM 在游戏领域的各种应用。**