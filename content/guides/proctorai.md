---
title: "ProctorAI"
date: "2024-01-01 00:00:00+08:00"
description: 'ProctorAI ProctorAI  ProctorAI '
slug: proctorai
tags:
- llava-1.5
- claude-3.5-sonnet
- gpt-4o
- youtube
- proc
draft: false
related_tools:
- awesome gpt-4o images
- sharegpt-4o-image
- gpt-4o ghibli at home
- 7 chatgpt-4o prompts
- gpt-4o
---

## ProctorAI

##### ProctorAI 的总结介绍及使用场景

###### 简介

ProctorAI 是一个多模态的人工智能系统，通过监视用户的电脑屏幕来检测他们是否在拖延。当检测到用户没有专注时，ProctorAI 会接管屏幕并发送个性化的提醒消息，要求用户停止拖延。用户需承诺改正行为，否则 ProctorAI 将持续打扰。

ProctorAI 依靠每隔几秒（基于设置的时间间隔）截取屏幕并将其输入到多模态模型（例如 Claude-3.5-Sonnet、GPT-4o 或 LLaVA-1.5）中进行分析。与传统的站点拦截器相比，ProctorAI 更智能，能够理解和处理复杂的工作流程规则。例如，它可以允许用户访问 YouTube，但只限于观看特定的学习视频。

###### 使用场景

1. **学习和工作时保持专注** ：适合需要在电脑上进行大量学习或工作的用户，通过监督减少对社交媒体或娱乐内容的过度依赖。
2. **远程工作的自我管理** ：特别适合远程工作者，以确保在没有外界监督的情况下保持工作效率。
3. **在线考试监控** ：能够模拟考试监考情况，避免用户在考试期间频繁分心或作弊。
4. **项目开发和编程** ：开发者在写代码时容易被各种网站或应用分散注意力，ProctorAI 可以帮助他们保持专注，提高生产力。


###### 技术设置

1. 克隆项目并创建虚拟环境：

git clone https://github.com/jam3scampbell/ProctorAI
python -m venv focusenv
source focusenv/bin/activate
pip install -r requirements.txt
./run.sh


2. 配置API密钥：

* `OPENAI_API_KEY`
* `ANTHROPIC_API_KEY`
* `GEMINI_API_KEY`
* `ELEVEN_LABS_API_KEY`
3. 启动和配置选项：

* 设置模型名、TTS（文本转语音）、屏幕截图间隔时间等参数，以个性化你的使用体验。


ProctorAI 的最终目标是变得“活灵活现”，让用户感到如同有人时刻监督，从而减少拖延，提高效率。未来的开发方向包括改进对特定任务的模型微调、会话调度、数据记录与时间跟踪，以及为用户提供更好的任务管理和统计信息。