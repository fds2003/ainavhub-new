---
title: "AgentCPM-GUI"
date: "2024-01-01 00:00:00+08:00"
description: 'AgentCPM-GUI AgentCPM-GUI  THUNLP '
slug: agentcpm-gui-thunlp-modelbest-llm-minicpm-v
tags:
- app
- rft
- gui
- agentcpm-gui
- android
draft: false
related_tools:
- whatsapp mcp server
- computer using agent sample app
- appagentx
- langgraph whatsapp agent
- stock data insights application
---

## AgentCPM-GUI

AgentCPM-GUI 是一个由 THUNLP 和 ModelBest 联合开发的开源设备端大型语言模型（LLM）智能体。它基于拥有 80 亿参数的 MiniCPM-V 构建，以智能手机屏幕截图作为输入，能够自主执行用户指定的任务，尤其擅长操作中文应用程序。

**主要特点包括：**

* **高质量的GUI理解：** 通过大规模双语 Android 数据集上的预训练，显著提高了对常见 GUI 部件（按钮、输入框、标签、图标等）的定位和理解能力。
* **中文App操作：** 它是首个针对中文应用程序进行微调的开源 GUI 智能体，涵盖了 30 多个流行的应用程序，如高德地图、大众点评、哔哩哔哩和小红书等。
* **增强的规划和推理能力：** 通过强化微调 (RFT)，模型在输出操作之前能够“思考”，从而大大提高了复杂任务的成功率。
* **紧凑的动作空间设计：** 优化的动作空间和简洁的 JSON 格式将平均动作长度缩短到 9.7 个 token，从而提高了设备端的推理效率。


**AgentCPM-GUI 的使用场景：**

* **自动化移动App任务：** 可以根据用户指令自动完成App中的各种操作，例如：
* 在高德地图上搜索特定地点并导航。
* 在大众点评上搜索餐厅并预定座位。
* 在哔哩哔哩上搜索视频并播放。
* 在小红书上浏览特定类型的帖子。
* **辅助功能：** 可以为残疾人士或老年人提供辅助，帮助他们更方便地使用移动设备。
* **自动化测试：** 可以用于移动应用程序的自动化测试，提高测试效率和覆盖率。
* **智能助手：** 可以集成到智能助手中，作为助手的一部分，负责执行移动应用程序相关的任务。