---
title: "nanoPerplexityAI"
date: "2024-01-01 00:00:00+08:00"
description: nanoPerplexityAI nanoPerplexityAI nanoPerplexityAI
slug: nanoperplexityai-perplexity.ai-llm-nanoperple
tags:
- gui
- install
- markdown
- beautifulsoup4
- nanoperple
draft: false
related_tools:
- gpt-4.1 prompting guide
- agentcpm-gui
- gui-actor
- ollama-gui
- languine
---

## nanoPerplexityAI

##### nanoPerplexityAI简介

nanoPerplexityAI是一个简单且直观的开源实现版本，灵感来源于[perplexity.ai](<https://www.perplexity.ai/>)。perplexity.ai 是一个大型语言模型（LLM）服务，通过谷歌来引用信息。nanoPerplexityAI不涉及复杂的GUI或LLM代理，仅使用**100行Python代码** 即可实现其功能。

##### 功能架构

1. 获取用户查询
2. 通过谷歌搜索找到相关网页URL并获取文本内容
3. 使用`系统提示 + 网页内容 + 用户查询`构建提示
4. 调用LLM API生成答案
5. 格式化引用并将LLM答案保存为Markdown文件以供可视化


##### 安装步骤

首先安装所需的Python库：


pip install googlesearch-python requests beautifulsoup4 lxml openai


##### 快速开始

设置OpenAI API密钥，然后运行脚本：


export OPENAI_API_KEY=<Your OpenAI API KEY>
python nanoPerplexityAI.py


脚本将提示你输入问题，然后生成答案并保存为`.md`文件。

##### 查看生成的答案

你可以通过以下几种方式查看生成的Markdown文件：

* 在代码编辑器中打开，如VScode
* 在[Markdown Playground](<https://dotmd-editor.vercel.app/>)中打开
* 将文件推送到你的GitHub仓库


可以查看nanoPerplexityAI生成的[示例答案](</example_outputs/>)

##### 使用场景

nanoPerplexityAI主要适用于以下场景：

1. 快速获取信息并生成结构化的答案
2. 自动化生成带有引用的答案，适合研究和学习
3. 集成到其他系统中，作为信息查询和处理模块
4. 任何需要结合LLM生成文本并从网页提取信息的应用场景


致谢：感谢[perplexity.ai](<https://www.perplexity.ai/>)提供的灵感，以及[clarity-ai](<https://github.com/mckaywrigley/clarity-ai>)和[Perplexica](<https://github.com/ItzCrazyKns/Perplexica>)提供的代码参考。