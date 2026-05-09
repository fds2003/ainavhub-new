---
title: "viral-clips-crew"
date: "2024-01-01 00:00:00+08:00"
description: 'viral-clips-crew viral-clips-crew  viral-clips-crew '
slug: viral-clips-crew-crewai
tags:
- viral-clips-crew.git
- git
- python
- openai
- https
draft: false
related_tools:
- viral-clips-crew
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## viral-clips-crew

##### viral-clips-crew 简介

`viral-clips-crew` 是一个利用 [CrewAI](<https://github.com/joaomdmoura/crewAI>) 驱动的视频编辑助手，专为社交媒体内容策划者设计。它能够自动观看和聆听长格式内容，提取出最引人注意且有潜力成为病毒传播的片段，迅速输出可发布到社交媒体上的精华视频。

###### 功能与特点

* **内容再利用** ：帮助用户将已有的长格式内容重新包装为新的、有吸引力的短片，吸引社交媒体流量，驱动用户回到原始内容。这一工具简化了内容再利用的过程，使其变得简单高效。
* **需求** ：需要 Python 3.7 以上版本、CrewAI、OpenAI API 密钥或 Google Gemini API 密钥。


###### 安装方法

1. 将代码仓库克隆到本地：

git clone https://github.com/alexfazio/viral-clips-crew.git


2. 安装 Poetry 以管理项目依赖：

pip install poetry


3. 使用 Poetry 安装必要的 Python 包：

poetry install


4. 在 `.env` 文件中加入你的 OpenAI API 密钥。


###### 使用方法

1. 将要处理的视频文件拖入 `input_files` 目录。

**注意** ：如果使用 Google Gemini API，视频长度最多可达 1 小时；如果使用 OpenAI API，请确保视频长度不超过 15 分钟。

2. 使用 Poetry 运行 `viral-clips-crew`：

poetry run python app.py


完成后，最终输出会在 `subtitler_output` 目录中。

###### 适用场景

1. **社交媒体内容策划** ：对于需要经常发布短视频的社交媒体策划者，`viral-clips-crew` 可以省去大量的视频编辑时间。
2. **内容创建者** ：帮助内容创作者将长视频内容重新包装为短视频，提升内容的曝光率。
3. **市场营销** ：为企业和品牌节省时间和成本，将其已有的视频内容转化为吸引眼球的社交媒体短片。