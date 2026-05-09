---
title: "News Agents News Agents News Agents"
date: "2024-01-01 00:00:00+08:00"
description: 'News Agents News Agents  News Agents '
slug: news-agents-amazon-cli-model
tags:
- techcrunch
- main-summar
- sub
- rss
- news
draft: false
related_tools:
- simple subtitling
- claude code subagents collection
- claude sub-agents manager
- subtitles by fframes
- dippy empathetic speech subnet
---

## News Agents

**News Agents 是什么？**

News Agents 是一个实验项目，它利用 Amazon Q CLI 作为代理框架，使用 Model Context Protocol (MCP) 解析 RSS feed 作为工具，并使用 tmux 进行终端分割和监控，最终创建一个在终端中运行的新闻聚合系统。 简单来说，它通过多个并行工作的代理，从 Hacker News, TechCrunch, WSJ 等多个新闻源抓取并总结新闻，最终生成易于阅读的摘要。

**News Agents 的工作原理：**

* **主代理 (Main Agent):** 读取 `feeds.txt` 中的新闻源 URL，将其分成三份，然后在独立的 tmux 窗格中启动三个子代理，监控它们的进度，并在最后收集所有摘要。
* **子代理 (Sub Agents):** 每个子代理被分配一部分新闻源，它们负责下载内容，解析文章，生成摘要，并将摘要保存到 `summaries/` 目录下以新闻源命名的文件中，完成后向主代理报告。
* **整个过程:** 主代理协调子代理，并行处理新闻源，最后将所有子代理生成的摘要合并成一个总摘要 `main-summary.md`。


**News Agents 的使用场景：**

* **在终端中快速获取新闻摘要：** 如果你喜欢在终端工作，并想快速了解来自不同新闻源的最新信息，News Agents 提供了一种在终端中并行抓取和总结新闻的便捷方式。
* **AI 代理协作演示：** 该项目展示了如何使用 Amazon Q CLI 和 MCP 构建多代理系统，可以作为学习 AI 代理如何协作完成任务的示例。
* **实验和定制：** News Agents 提供了一个框架，可以进行自定义和扩展，例如添加新的新闻源、修改摘要生成逻辑、甚至集成其他 AI 工具。
* **本地运行和控制：** 与使用在线新闻聚合服务不同，News Agents 在本地运行，你可以完全控制数据来源、处理方式和隐私。


**总结：**

News Agents 是一个基于终端的新闻聚合系统，它通过多代理并行工作，可以快速从多个新闻源获取并总结新闻。它是一个学习 AI 代理协作的示例，也可以作为一个可定制的本地新闻聚合工具。