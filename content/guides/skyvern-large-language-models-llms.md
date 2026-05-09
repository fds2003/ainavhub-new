---
title: "Skyvern"
date: "2024-01-01 00:00:00+08:00"
description: Skyvern Skyvern Large Language Models, LLMs)
slug: skyvern-large-language-models-llms
tags:
- task-driven
- language
- llms
- models
- skyvern
draft: false
related_tools:
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- claude code but with openai models
- open driving world models
---

## Skyvern

Skyvern是一个创新的自动化工具，它利用最新的语言模型(Large Language Models, LLMs)和计算机视觉技术来自动化浏览器中的工作流程。简单来说，如果你需要在网站上做一些重复的事情，比如填写表格、提交数据、获取某些信息等等，Skyvern可以帮你自动完成这些任务，而不需要你亲自坐在电脑前一点点操作。

##### Skyvern的优势:

1. **适用于新网站：** Skyvern可以在它之前从未见过的网站上操作，因为它能够实时解析视窗中的项目，创建交互计划，然后进行交互。
2. **抗干扰能力强：** 即便网站布局发生变化，Skyvern也能够继续工作，因为它不依赖预先定义的XPaths或其他选择器。
3. **智能处理复杂情况：** 利用LLMs，Skyvern能够理智地通过交互保证可以处理复杂的情况。


##### 使用场景举例:

* 自动获取汽车保险报价。
* 进行竞争对手分析，比较不同网站上相似产品的差异。
* 自动化采购流程，如为制造公司采购材料。
* 导航到政府网站注册帐户或填写表格。
* 从保险提供者那里获取保险报价，不管语言是什么。


##### 如何工作？

Skyvern受到Task-Driven自主代理设计的启发，通过使用类似Playwright的浏览器自动化库与网站交互。这种方法结合了计算机视觉和语言模型的能力，以动态地理解和操作网页元素。

##### Skyvern云服务：

Skyvern还提供了一个管理的云服务版本，使用户无需管理基础设施即可运行Skyvern。这个版本包括多个Skyvern实例的并行运行、抗bot检测机制、代理网络和验证码解决方案，使用户能够自动化更复杂的工作流程。

##### 快速开始：

Skyvern提供了详细的快速开始指南，包括如何在本地机器上获取和运行Skyvern，以及如何通过提供的UI或curl命令执行自动化任务。

##### 调试和实时示例：

Skyvern带有一个可视化工具，允许用户调试Skyvern在web上的每个交互，每个API请求的任务都可以在可视化器中详细查看，以及Skyvern为完成任务所采取的每一步详细操作。

Skyvern是一个强大的工具，适用于需要自动化浏览器基础工作流的个人或企业。无论是寻找保险报价、自动化采购流程，还是在政府网站上自动填表，Skyvern都能提供有效、灵活的解决方案。