---
title: "dialog dialog Dialog"
date: "2024-01-01 00:00:00+08:00"
description: dialog Dialog  Dialog
slug: dialog-talkd.ai-llm-api-dialog-lib
tags:
- talkd.ai
- git
- dialog
- env.sample
- chatgpt
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## dialog

**Dialog 简介和应用场景**

Dialog（由 talkd.ai 提供）是一个专为程序员设计的应用，旨在简化大语言模型（LLM）的部署过程，让开发者可以花更少的时间在编码上，而更多地专注于训练模型。这个项目通过API提供服务，用户可以基于[dialog-lib](<https://github.com/talkdai/dialog-lib>)的结构部署任意的LLM。最初，Dialog致力于人性化的RAG（检索增强生成），但正在拓展为更广泛的RAG部署和维护方案。

##### 应用场景

Dialog适用于以下场景：

1. **快速部署LLM** ：开发者可以轻松快速地部署像ChatGPT这样的聊天机器人，而无需担心服务器维护问题。
2. **RAG 技术应用** ：在需要使用检索增强生成技术的应用场景下，Dialog提供了便捷的知识库管理和查询能力。
3. **企业级客户服务** ：可以用于构建高效专业的企业客户服务助手，通过分类和个性化的提示配置来满足具体业务需求。


##### 快速开始

你需要了解并安装Docker。以下是一些快速开始的步骤：

1. 克隆仓库：

git clone https://github.com/talkdai/dialog.git


2. 创建`.env`文件：

cp .env.sample .env


3. 设置OpenAI API密钥：

OPENAI_API_KEY=your-openai-api-key


4. 使用Docker构建和启动服务：

docker-compose up --build


启动后会启动两个服务：

* `db`：运行PostgresSQL数据库，支持聊天记录和文档检索。
* `dialog`：提供与API的服务。


##### 自定义提示和数据

要自定义项目，你需要一个包含知识库的`.csv`文件和一个配置提示的 `.toml` 文件。

###### `.csv` 知识库

知识库文件例如如下格式：


category,subcategory,question,content
faq,promotions,loyalty-program,"The company XYZ has a loyalty program when you refer new customers you get a discount on your next purchase, ..."


###### `.toml` 提示配置

配置文件示例如下：


[model]
temperature = 0.2
model_name = "gpt-3.5-turbo"

[prompt]
header = """You are a service operator called Avelino from XYZ, you are an expert in providing
qualified service to high-end customers. Be brief in your answers, without being long-winded
and objective in your responses. Never say that you are a model (AI), always answer as Avelino.
Be polite and friendly!"""

suggested = "Here is some possible content
that could help the user in a better way."

fallback = "I'm sorry, I couldn't find a relevant answer for your question."

fallback_not_found_relevant_contents = "I'm sorry, I couldn't find a relevant answer for your question."

[prompt.subcategory.loyalty-program]
header = """The client is interested in the loyalty program, and needs to be responded to in a
salesy way; the loyalty program is our growth strategy."""


##### 环境变量

查看 `.env.sample` 文件以了解所需的环境变量配置。`.csv`文件只包含知识库，`.toml`文件包含提示配置和部分LLM参数，`.env`文件包含OpenAI的token及项目路径等配置。

Dialog 简化了LLM的部署过程，使开发者能够更加专注于模型优化和训练，非常适用于需要高效客户服务和智能问答的企业和开发者。