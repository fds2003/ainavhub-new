---
title: "TaskCraft"
date: "2024-01-01 00:00:00+08:00"
description: TaskCraft TaskCraft PDF
slug: taskcraft
tags:
- url
- pdf
- const
- gitalk
- taskcraft
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## TaskCraft

TaskCraft是一个专注于自动化生成智能体任务的库，旨在提供难度可扩展、支持多工具且可验证的任务，并能捕获详细的执行轨迹。其核心功能包括通过深度（层级）和宽度（组合）两种扩展策略，将简单的原子任务转化为支持多跳推理和多工具协作的复杂挑战。该项目能够无缝解析PDF、HTML、URL及图像等多种模态输入，自动提取关键信息以生成单模态或多模态的原子问题。此外，TaskCraft能够生成标准化的函数调用日志和工具调用链，从而实现智能体执行过程的精确复现和评估。它内置难度评分系统，可自动生成从基础到专家级别的任务，并提供了一个包含超过36,000个合成任务的大规模数据集供模型训练，同时支持用户集成自定义智能体。