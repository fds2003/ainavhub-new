---
title: "tldrstory"
date: "2024-01-01 00:00:00+08:00"
description: 'tldrstory tldrstory:  tldrstory'
slug: tldrstory-zero-shot-labeling-txtai
tags:
- labeling
- streamlit
- python
- github
- fastapi
draft: false
related_tools:
- chat with the streamlit docs
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## tldrstory

**tldrstory** : 一个简化新闻头条和故事文本搜索的工具

**功能概述** :

tldrstory是一个基于语义的搜索应用，专注于新闻头条和相关故事文本的搜索。这个工具使用零次标记(zero-shot labeling)技术对文本内容进行动态分类，并构建了一个txtai索引来实现文本相似性搜索。tldrstory提供了一个可定制的Streamlit应用程序和FastAPI后端服务，使用户能够审查和分析处理过的数据。

**使用场景** :

假设你是一个忙碌的人，每天都要浏览大量的新闻和报道，但你又没有足够的时间去阅读它们所有的细节。这时，你可以使用tldrstory快速了解各种新闻头条和故事的主要内容，并且基于语义搜索引擎快速找到和你兴趣点匹配的新闻。不管是追踪最新的移动科技新闻、体育赛事还是其他特定领域的新闻，tldrstory都可以提供实时、准确的信息概览，帮助你节省时间，快速获取信息。

**安装** :

安装tldrstory非常简单，可以通过pip和PyPI来安装，或者直接从GitHub安装。支持Python 3.8+版本。

**配置应用场景** :

安装后，需要配置应用才能运行。一个tldrstory应用主要由三个部分构成：索引、API后端和Streamlit应用程序。以“体育新闻”为例，首先下载相关配置，然后依次启动索引过程、API进程和Streamlit应用程序，进而在浏览器中访问并使用这个工具。

**自定义数据源** :

tldrstory默认支持通过RSS和Reddit API读取数据。如果需要，还可以定义和配置额外的数据源，比如使用neuspo（一个实时体育新闻和赛事应用）作为数据源，自定义载入的文章数据。

**参数参考** :

配置tldrstory应用涉及多个参数设置，包括索引内容配置（支持Reddit API、RSS和自定义数据源）、无视特定的URL模式、零次标记分类配置、模型输出位置、文本索引配置等。此外，还需配置API和Streamlit应用，比如模型索引路径、API端点、应用名称、内容过滤和查询设置等。

tldrstory提供了一个强大而灵活的平台，允许用户根据自己的需求配置和使用，非常适合需要快速、准确获取信息概览的人们。无论是新闻记者、市场研究分析师还是普通读者，都可以通过tldrstory节省时间，高效率地获取所需信息。