---
title: "fyin fyin"
date: "2024-01-01 00:00:00+08:00"
description: fyin fyin fyin，，Perplexity AI。，，。 ：OllamaOpenAI API。 VectorDB：。 、：...
slug: fyin-perplexity-ollama-openai-api
tags:
- sample.env
- query
- fyin.app
- bing
- key
draft: false
related_tools:
- queryweaver
- fyin
- binglish
- linly-dubbing
- monkeycode
---

## fyin

##### 介绍fyin

fyin是一个开源项目，旨在提供一个可以本地运行的工具，作为Perplexity AI的替代品。其主要目标是提供更快速的答案，支持本地运行，并且操作简单。

##### 核心功能

* **本地运行** ：可以使用Ollama或OpenAI API来运行。
* **本地VectorDB** ：用于快速搜索。
* **高效的搜索、抓取和回答** ：通过并行处理实现。
* **可配置搜索结果数量** ：用户可设置解析的搜索结果数量。
* **本地抓取网站** ：支持本地抓取网页内容。


##### 安装步骤

1. 克隆仓库：`git clone https://github.com/shadowfax92/fyin.app`
2. 获取Bing API密钥。
3. 获取OpenAI API密钥或使用Ollama。
4. 填写/设置环境变量（参见`sample.env`文件，复制并重命名为`.fyin.env`，然后填写相应的值）。
5. 运行命令：`cargo run --query "<问题>" -n <搜索结果数量>`。


##### 环境变量配置示例


# OpenAI 配置; Ollama 配置在注释中

# OPENAI_API_KEY="ollama"
OPENAI_API_KEY="your-openai-api-key"

# OPENAI_BASE_URL=http://localhost:11434/v1
# 留空使用默认设置
OPENAI_BASE_URL=

BING_SUBSCRIPTION_KEY="your-bing-subscription-key"
# 留空使用默认设置
BING_ENDPOINT=

# EMBEDDING_MODEL_NAME="llama3"
EMBEDDING_MODEL_NAME="text-embedding-ada-002"

# CHAT_MODEL_NAME="llama3"
CHAT_MODEL_NAME="gpt-4o"


##### Docker运行方式

1. 构建Docker镜像：`docker build -t fyin .`
2. 创建环境文件：`cp sample.env .env`并填充相应的值。
3. 运行Docker容器：


docker run --rm --env-file .env fyin --query "<问题>" --search <可选：解析的搜索结果数量>


##### 使用场景

* **快速信息获取** ：利用其并行搜索和抓取能力，可以高效地从多个来源获取信息。
* **本地搜索引擎** ：不依赖在线服务，可以在本地网络中运行，保证数据隐私。
* **开发测试** ：作为一个开源工具，开发者可以根据需要进行修改和扩展，测试不同的搜索算法和模型。


##### 未来改进方向

* 利用GPT生成3-5个基于提示词的搜索查询，以获取更精确的搜索结果。
* 构建一个简单的网站以提供用户友好的界面。
* 提供托管版本的应用程序。


通过这些功能和特性，fyin为需要本地运行、高效搜索和数据隐私的用户提供了一个强大的工具。