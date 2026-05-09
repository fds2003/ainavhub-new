---
title: "Translation Agent Translation Agent Translation Agent"
date: "2024-01-01 00:00:00+08:00"
description: 'Translation Agent Translation Agent  Translation Agent '
slug: translation-agent-python-llm-source
tags:
- gpu
- agent
- translation-agent
- python
- language
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
---

## Translation Agent

##### Translation Agent 简介

Translation Agent 是一个基于反思工作流程的机器翻译系统的Python示范。其主要步骤包括：

1. 使用大语言模型（LLM）将文本从`source_language`翻译到`target_language`；
2. 让LLM反思这次翻译并提出改进建议；
3. 依据这些建议改进翻译。


##### 定制化特性

Translation Agent 利用LLM作为翻译引擎核心，其系统高度可调性体现在以下方面：

* 修改输出的风格，如正式或非正式。
* 指定如何处理成语和特殊术语，如名称、技术术语和缩写等。例如，在提示中包含术语表，以确保特定术语（如开源、H100或GPU）得到一致翻译。
* 指定语言的特定区域使用或方言，以满足目标受众需求。例如，拉丁美洲和西班牙的西班牙语，加拿大和法国的法语等存在差异。


##### 使用场景

* **风格调整：** 客制化输出文本风格。
* **术语一致性管理：** 确保术语表内的术语一致翻译，适用于技术文档和特定领域文献。
* **区域语言设计：** 调整翻译以适应特定地区或方言，满足本地化需求。


##### 使用方式

要开始使用`translation-agent`，请按以下步骤操作：

1. **安装：**
* 需要Poetry包管理器：[Poetry 安装](<https://python-poetry.org/docs/#installation>)。

pip install poetry


* 需要一个包含OPENAI_API_KEY的.env文件。

git clone https://github.com/andrewyng/translation-agent.git
cd translation-agent
poetry install
poetry shell # 激活虚拟环境


2. **用法：**

import translation_agent as ta
source_lang, target_lang, country = "English", "Spanish", "Mexico"
translation = ta.translate(source_lang, target_lang, source_text, country)


##### 扩展想法

以下是我们尚未尝试但希望开源社区探索的一些扩展想法：

* **尝试其他LLM：** 实验其他语言模型和超参数选择，看哪些对特定语言对更好。
* **术语表创建：** 探索最佳方法，如使用LLM有效创建最重要术语的术语表。
* **术语表使用和实现：** 探索最佳方法将术语表包含在提示中。
* **不同语言的评估：** 研究在不同语言中的表现，并寻找让其在特定源语言或目标语言中表现更好的方法。
* **错误分析：** 理解当前方法的局限，尤其是在专业主题（如法律、医学）或特殊类型文本（如电影字幕）上的表现。
* **改进评估：** 设计更好的评估指标，以捕捉更符合人类翻译偏好的文档级别翻译质量。


##### 相关工作

一些学术研究团队也开始关注基于LLM和代理的翻译。相关研究包括：

* _ChatGPT MT: Competitive for High- (but not Low-) Resource Languages_ , Robinson et al. (2023)
* _How to Design Translation Prompts for ChatGPT: An Empirical Study_ , Gao et al. (2023)
* _Beyond Human Translation: Harnessing Multi-Agent Collaboration for Translating Ultra-Long Literary Texts_ , Wu et al. (2024)


Translation Agent 是一个探索性项目，尚未成熟，旨在通过开放讨论、实验、研究和开源贡献来推动机器翻译领域的进步。