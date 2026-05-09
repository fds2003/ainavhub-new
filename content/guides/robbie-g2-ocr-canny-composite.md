---
title: "Robbie G2 Robbie G2 Robbie G2"
date: "2024-01-01 00:00:00+08:00"
description: 'Robbie G2 Robbie G2  Robbie G2 '
slug: robbie-g2-ocr-canny-composite
tags:
- canny
- robbie
- playwright
- agentsea
- ocr
draft: false
related_tools:
- playwright mcp server
- playwright mcp
- playwrightess mcp
- agent
- pdf-ocr-obsidian
---

## Robbie G2

##### Robbie G2 简介

Robbie G2 是一款第二代人工智能代理，通过光学字符识别（OCR）、Canny Composite 和 Grid 技术导航图形用户界面（GUI），从而执行各种任务。

![Robbie G2 Logo](images/robbie.jpg)

##### 主要特性

* **多模式操作** : Robbie G2 不仅仅限于网页操作，不同于依赖 Playwright 的机器人。它可以在网页或桌面上导航。
* **任务执行能力** : 可以在 SaaS 应用或远程桌面环境中工作，执行发送邮件、搜索航班、检查 Slack 消息、进行研究等等任务。
* **复杂 GUI 导航** : 通过 AgentSea 技术栈提供的 remote virtual desktop，Robbie 可以应对从未见过的复杂 GUI。
* **工具整合** : 通过 ToolFuse 和 AgentDesk，实现鼠标移动、键盘命令等操控。


##### 使用场景

Robbie G2 能够在多种场景下派上用场：

1. **企业办公** : 在远程桌面环境中处理日常办公任务，如邮件处理、日程管理和文件搜索等。
2. **数据收集与研究** : 从多个网页或应用中抓取所需数据，并进行整理。
3. **自动化运营** : 自动执行常规运营任务，如在线客户服务、订单处理和系统监控。
4. **跨平台任务** : 无论是 SaaS 应用还是本地应用，Robbie G2 都能自如操作，大幅提高效率。


##### 快速开始指南

###### 前提条件

* 安装 Docker: [安装指南](<https://docs.docker.com/engine/install/>)
* 安装 QEMU 或配置 GCP/AWS:
* [QEMU 配置指南](<https://docs.hub.agentsea.ai/configuration/qemu>)
* [GCP 配置指南](<https://docs.hub.agentsea.ai/configuration/gcp>)
* [AWS 配置指南](<https://docs.hub.agentsea.ai/configuration/aws>)


###### 设置步骤

1. 配置你的 OpenAI API 密钥：

export OPENAI_API_KEY=<your key>


2. 安装或升级 SurfKit：

pip install -U surfkit


3. 克隆代码库并进入根目录：

git clone git@github.com:agentsea/robbie-g2.git && cd robbie-g2


4. 安装依赖：

poetry install


###### 创建所需实体

5. 创建一个 tracker：

surfkit create tracker --name tracker01


6. 创建一个 device：

* 如果使用 QEMU：

surfkit create device --provider qemu --name device01


* 如果使用 GCE：

surfkit create device --provider gce --name device01


* 如果使用 AWS：

surfkit create device --provider aws --name device01


7. 创建一个 agent：

surfkit create agent --name agent01


##### 执行任务

例如，搜索关于法国鸭子的常见品种：


surfkit solve "Search for common varieties of french ducks" \
--tracker tracker01 \
--device device01 \
--agent agent01


更多信息和文档，请访问 [文档页面](<https://docs.hub.agentsea.ai>)。