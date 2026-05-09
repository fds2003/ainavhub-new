---
title: "MAS-Zero"
date: "2024-01-01 00:00:00+08:00"
description: MAS-Zero MAS-Zero MAS
slug: mas-zero-mas
tags:
- id
- loca
- const
- gitalk
- clientsecret
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## MAS-Zero

MAS-Zero项目旨在无需人工监督的情况下设计多智能体系统（MAS）。它通过一个元代理，执行设计、评估和验证等多种角色，主要包含元迭代和自验证两个步骤。元迭代包括MAS设计（将任务分解并为每个子任务提出子MAS，构建成代码生成问题）和MAS反馈（通过执行MAS代码评估生成设计的可解性和完整性）。最后，自验证从元迭代过程中生成的所有候选解决方案中选择最合适的方案。该方法无需验证集，在元级别进行自我监督，并且仅在推理时进行操作，在数学推理、研究生水平问答和代码基准测试中表现出色，且不依赖任何外部监督。项目提供了一套环境配置和训练脚本，用于使用零监督来设计MAS，并支持多种LLM。