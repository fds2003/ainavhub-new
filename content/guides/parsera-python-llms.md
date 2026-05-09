---
title: "Parsera"
date: "2024-01-01 00:00:00+08:00"
description: Parsera Parsera Parsera
slug: parsera-python-llms
tags:
- install
- result
- points
- title
- pip
draft: false
related_tools:
- subtitles by fframes
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## Parsera

**Parsera概述**

Parsera是一个轻量级的Python库，专门为使用大型语言模型（LLMs）进行网页数据抓取而设计。它的设计目标是简化网页抓取过程，减少代币使用，从而提高速度并降低成本。用户可以在其[官方网站](<https://parsera.org>)上进行测试。

**安装方法** 要安装Parsera，用户需要运行以下命令：


pip install parsera
playwright install


在使用OpenAI的模型时，需要设置`OPENAI_API_KEY`环境变量。

**基本用法** Parsera的基本使用非常简单，以下是一个抓取网站数据的示例：


from parsera import Parsera

url = "https://news.ycombinator.com/"
elements = {
"Title": "News title",
"Points": "Number of points",
"Comments": "Number of comments",
}

scrapper = Parsera()
result = scrapper.run(url=url, elements=elements)


运行后，`result`将包含抓取到的数据，格式为JSON数组。Parsera还支持异步方法`arun`，可以用于Jupyter Notebook。

**应用场景** Parsera适合用于各种网页数据抓取的场景，包括但不限于：

1. **新闻网站数据抓取** ：捕捉最新新闻标题、评论数等信息。
2. **电子商务网站监控** ：获取产品价格、评论等动态数据。
3. **社交媒体分析** ：分析帖子互动数据，如点赞数、评论数。
4. **市场调研** ：自动收集竞争对手网站的关键信息。


因其简单易用和高效性，Parsera非常适合研发人员和数据分析师在需要快速抓取和处理网络数据时使用。