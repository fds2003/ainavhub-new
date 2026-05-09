---
title: "OpenPerPlex"
date: "2024-01-01 00:00:00+08:00"
description: 'OpenPerPlex OpenPerPlex  OpenPerPlex '
slug: openperplex-vue.js-https-github.com-yasskhazzan
tags:
- semantic
- cohere
- pip
- statistical.py
- backend
draft: false
related_tools:
- semantic search on wikipedia
- cohere toolkit
- dualpipe
- local voice agents on macos with pipecat
- pi
---

## OpenPerPlex

##### OpenPerPlex 简介

OpenPerPlex 是一个开源的AI搜索引擎，利用先进的技术提供网络搜索功能。

##### 前端应用 (Vue.js)

前端应用代码库链接: `https://github.com/YassKhazzan/openperplex_front.git`

##### 主要特性

* 使用 Cohere 和 semantic-chunkers 库进行语义分块 (`https://github.com/aurelio-labs/semantic-chunkers/blob/main/semantic_chunkers/chunkers/statistical.py`)
* 使用 JINA API 对搜索结果进行重新排序
* 集成 Google 搜索（通过 serper.dev）
* 使用 Groq 作为推理引擎
* 支持 Llama 3 70B 模型


##### 快速开始

###### 前提条件

* Python 3.11+
* pip (Python 包管理工具)


###### 安装步骤

1. 克隆仓库:

git clone https://github.com/YassKhazzan/openperplex_backend_os.git


2. 安装所需的 Python 包:

pip install -r requirements.txt


3. 设置环境变量:

* 将 `.env_example` 文件复制为 `.env`
* 在 `.env` 文件中填写您的 API 密钥


###### 运行项目

启动 OpenPerPlex 服务器:


uvicorn main:app --port 8000


服务器将运行在 `http://localhost:8000`

##### 配置

在 `.env` 文件中设置必要的 API 密钥：

* `COHERE_API_KEY`
* `JINA_API_KEY`
* `SERPER_API_KEY`
* `GROQ_API_KEY`


##### 贡献

欢迎对 OpenPerPlex 进行贡献！可以提交问题、fork 仓库并发送 pull 请求。

##### 许可证

本项目采用 [MIT 许可证](<LICENSE>)。

##### 鸣谢

感谢以下技术和平台的支持：

* [Cohere](<https://cohere.ai/>)
* [JINA AI](<https://jina.ai/>)
* [serper.dev](<https://serper.dev/>)
* [Groq](<https://groq.com/>)
* [META](<https://www.meta.ai/>)


##### 联系

如有任何问题或反馈，请在仓库中开启问题或通过 [X](<https://x.com/KhazzanYassine>) 联系我。

* * *

祝您使用 OpenPerPlex 搜索愉快！🚀🔍

##### 使用场景

OpenPerPlex 可以应用于以下场景：

1. **科研和学术研究** ：通过整合多种搜索技术，提高文献和资料的检索效率。
2. **企业搜索** ：帮助企业内部在海量数据中快速找到所需信息。
3. **个性化推荐** ：利用语义理解和内容分块技术，为用户提供更精确的推荐结果。
4. **在线教育** ：辅助学生和教师在互联网上查找学习资料和研究资源。