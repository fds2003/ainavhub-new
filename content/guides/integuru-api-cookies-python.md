---
title: "Integuru"
date: "2024-01-01 00:00:00+08:00"
description: 'Integuru Integuru  AI '
slug: integuru-api-cookies-python
tags:
- url
- id
- cook
- integuru
- python
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Integuru

Integuru 是一款 AI 代理工具，能够通过反向工程平台的内部 API 来生成集成代码。用户只需提供一个包含浏览器网络请求的文件、一个包含 cookies 的文件，以及一个描述浏览器中触发的操作的提示，Integuru 就能输出可运行的 Python 代码，从而访问平台的内部接口以执行所需操作。

##### Integuru 的使用场景

1. **下载实用账单** ：

* 用户希望下载某个账户的账单，Integuru 会首先分析相关的网络请求，识别出下载账单所需的请求 URL，以及动态参数（如账户 ID 和用户 ID）如何获取。接着，它会生成一个依赖图，这个图显示了如何逐步获取所需的参数，直到最终构造出完整的下载请求。
2. ** API 请求逆向工程**：

* 开发者可以利用 Integuru 解析和逆向工程其他平台的 API 请求，提取数据或进行自动化操作。
3. **自定义集成** ：

* 对于一些特定需求，用户可以通过提供特定的 .har 文件和提示，生成针对某个平台的自定义集成代码。


##### 设置和使用

* 设置 Integuru 需要安装 Python 依赖、准备 OpenAI API 密钥以及创建 .har 和 cookies 文件。
* 开发者可以通过命令行或 Jupyter Notebook 运行 Integuru，输入提示以分析并生成代码。


##### 特点

* 支持生成请求的依赖图，确保最终请求是有效的。
* 可以接受输入变量（如特定年份）以定制 下载内容。
* 生成代码以执行所有请求，自动化整合操作。


Integuru 不仅简化了与外部平台交互的过程，还为需要集成与自动化的用户提供了高效的解决方案。