---
title: "Reor"
date: "2024-01-01 00:00:00+08:00"
description: Reor Reor ReorAI，、，。，Obsidianmarkdown。 Reor，（AI）。ReorLla...
slug: reor-obsidian-markdown
tags:
- oobabooga
- reor
- transformers.js
- markdown
- llama.cpp
draft: false
related_tools:
- ama
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- grok2api
---

## Reor

### Reor项目简介

**Reor** 是一个基于AI的桌面笔记应用程序，能够自动链接相关的想法、回答笔记中的问题，以及提供语义搜索。所有内容都存储在本地，你可以使用类似Obsidian的markdown编辑器编辑你的笔记。

Reor项目的假设是，思考工具（通过AI辅助的）应该默认在本地运行模型。Reor利用了[Llama.cpp](<https://github.com/ggerganov/llama.cpp>)和[Transformers.js](<https://github.com/xenova/transformers.js>)的技术，使得大型语言模型(LLMs)和嵌入模型在本地运行成为可能。（同时也支持连接到兼容OpenAI的API，例如Oobabooga。）

##### Reor如何实现“自我组织”？

1. 你写的每一条笔记都被分块并嵌入到内部的向量数据库中。
2. 通过向量相似度自动连接相关的笔记。
3. 利用LLM进行的问答（RAG）是基于笔记集合的。
4. 所有内容都可以进行语义搜索。


可以将Reor视为一个RAG应用程序，其中包含两个生成器：LLM和人类。在问答模式下，LLM通过从笔记集提取的上下文来帮助回答查询。同样，在编辑模式下，人类可以切换侧边栏以展示从语料库中“检索”到的相关笔记。这是一种通过交叉引用当前笔记中的想法与你语料库中的相关想法来“增强”你思考的强大方式。

##### 使用Reor的情况

1. 当你需要一款能够自动整理和关联笔记的笔记应用时。
2. 如果你希望通过自然语言处理查询自己的笔记内容，比如提问并得到基于你笔记的回答。
3. 当你想要在本地运行AI模型，而不愿意或不能因各种原因使用云服务时。
4. 如果你关心数据隐私，并且希望所有笔记和数据都存储在本地。
5. 当你想要一个支持markdown编辑且具备先进搜索功能的笔记工具时。


##### 开始使用Reor

1. 从[reorproject.org](<https://reorproject.org>)或[releases](<https://github.com/reorproject/reor/releases>)下载适用于Mac、Linux和Windows的应用。
2. 像安装普通应用程序一样安装。


##### 运行本地模型

你可以直接与[Llama.cpp](<https://github.com/ggerganov/llama.cpp>)库交互，这样就无需下载Ollama。但目前还需手动下载你选择的模型：

1. 下载一个GGUF模型文件，推荐从[HuggingFace](<https://huggingface.co/models?sort=downloads&search=gguf>)开始，使用7B 4-bit模型看看在你的系统上的表现如何。
2. 在Reor设置中的"添加一个新的本地模型"下连接它。


你也可以连接到兼容OpenAI的API，比如Oobabooga, Ollama或OpenAI本身！

##### 从其他应用导入笔记

Reor在文件系统中工作在一个单独的目录内。首次启动时，你需要选择这个目录。若要从另一个应用导入笔记/文件，你需要手动用markdown文件填充那个目录。希望不久的将来能集成其他应用！