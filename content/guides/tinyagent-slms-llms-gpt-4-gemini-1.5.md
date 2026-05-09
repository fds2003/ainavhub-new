---
title: "TinyAgent"
date: "2024-01-01 00:00:00+08:00"
description: TinyAgent TinyAgent SLMs
slug: tinyagent-slms-llms-gpt-4-gemini-1.5
tags:
- pdf
- slms
- macos
- gpt-4
- maps
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## TinyAgent

TinyAgent旨在通过在边缘设备上部署的小型语言模型（SLMs），实现复杂的推理和功能调用能力。这种方法克服了传统大规模语言模型（LLMs）如GPT-4和Gemini-1.5在隐私、连接性和延迟方面的挑战。TinyAgent通过高质量的数据训练专用的SLMs，并专注于功能调用，利用LLMCompiler进行实现。TinyAgent的一个主要应用是与各种MacOS应用程序交互，帮助用户完成诸如撰写邮件、管理联系人、安排日程和组织Zoom会议等日常任务。

##### TinyAgent的使用场景

1. **邮件管理**

* 撰写新邮件、回复邮件、转发邮件。
2. **联系人管理**

* 检索电话和电子邮件地址。
3. **短信发送**

* 发送短信给联系人。
4. **日历事件**

* 创建并管理日历事件。
5. **地图服务**

* 在Apple Maps中查找方向或位置。
6. **笔记管理**

* 创建、打开和附加笔记内容。
7. **文件管理**

* 打开和阅读文件，生成PDF文档摘要。
8. **提醒**

* 设置各种活动或任务的提醒。
9. **Zoom会议**

* 安排和组织Zoom会议。
10. **自定义指令**

* 为TinyAgent编写和配置特定指令。


##### 核心功能

* **子代理（Sub-Agents）** ：根据任务的复杂性，TinyAgent可以调度不同的专业化或更小型的语言模型完成任务。
* **ToolRAG** ：在面临复杂任务时，TinyAgent使用ToolRAG来检索最佳的工具和示例，显著提高准确性。
* **语音指令** ：通过OpenAI Whisper API或本地whisper.cpp部署接受语音指令。


##### 模型部署选项

* **OpenAI** ：需要提供OpenAI API密钥和使用的模型。
* **Azure** ：需要提供部署名称和端点信息。
* **本地模型** ：可以使用LMStudio或llama.cpp服务本地模型部署。


TinyAgent还提供了定制化功能，允许用户添加自定义工具和子代理，并可以通过编程方式与TinyAgent互动。这些特性使得TinyAgent成为一个灵活且高效的边缘计算解决方案。