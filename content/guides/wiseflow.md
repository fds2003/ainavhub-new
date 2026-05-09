---
title: "WiseFlow"
date: "2024-01-01 00:00:00+08:00"
description: 'WiseFlow WiseFlow  WiseFlow '
slug: wiseflow
tags:
- gpu
- wiseflow
- git
- https
- wis
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- wiseflow
- flow
- vibegit
---

## WiseFlow

##### WiseFlow 简介和使用场景

**WiseFlow** 是一个敏捷的信息提取工具，能够从各种来源（如网站、微信公众号、社交媒体平台）中，根据预定义的关注点提炼信息，自动对标签进行分类，并上传到数据库。其主要功能是帮助用户节省时间、过滤无关信息，并组织重点关注的信息。

* * *

###### 主要更新和功能

* **全新异步任务架构** ：提升任务处理速度和效率。
* **信息提取与分类** ：从各种来源自动提取信息，并根据用户兴趣进行标签和分类。
* **轻量级设计** ：无需GPU，适合各种硬件环境。
* **本地和在线部署** ：支持本地和在线大型语言模型（LLM）的应用，费用低，数据敏感用户可随时切换本地部署。


###### 使用场景

1. **新闻页面内容解析** ：结合统计学习和大型语言模型（LLM），适用于90%以上的新闻页面内容解析。
2. **微信公众号文章信息提取** ：专门配置的解析器，针对微信公众号文章进行内容提取。
3. **动态知识库构建** ：与其他代理项目集成，作为动态知识库使用。
4. **信息噪声过滤和精炼** ：根据用户定义的关注点过滤海量信息中的噪声，使有价值的信息突显出来。


###### 安装与使用

1. **克隆仓库** ：

git clone https://github.com/TeamWiseFlow/wiseflow.git
cd wiseflow


2. **使用 Docker** ：

docker compose up


在 `.env` 文件中填写相关配置信息，比如 LLM 服务的 API 密钥等。

3. **直接使用 Python 运行** ：

conda create -n wiseflow python=3.10
conda activate wiseflow
cd core
pip install -r requirements.txt


下载并配置 pocketbase 客户端。

4. **配置关注点和源扫描任务** ：

* 打开 pocketbase 管理界面 `http://127.0.0.1:8090/_/`，在 `tags form` 中定义关注点。
* 在 `sites form` 中添加自定义来源及其扫描频率。


WiseFlow 通过高效的信息提取和整理功能，为用户提供了一个轻量级、低成本的信息管理解决方案，特别适用于需要高效处理和过滤大量信息的场景，如新闻报道、社交媒体监控和专题追踪等。