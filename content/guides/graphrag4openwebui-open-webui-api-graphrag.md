---
title: "GraphRAG4OpenWebUI"
date: "2024-01-01 00:00:00+08:00"
description: 'GraphRAG4OpenWebUI GraphRAG4OpenWebUI  GraphRAG4OpenWebUI '
slug: graphrag4openwebui-open-webui-api-graphrag
tags:
- open
- graphrag4openwebui
- webui
- api
- tavily
draft: false
related_tools:
- openchat
- openmanus
- openai agents sdk
- opendeepsearch
- openmanus-rl
---

## GraphRAG4OpenWebUI

##### GraphRAG4OpenWebUI 简介

GraphRAG4OpenWebUI 是一个专为 Open WebUI 设计的 API 接口，旨在集成微软研究的 GraphRAG (基于图的检索增强生成) 技术。该项目提供了一个强大的信息检索系统，支持多个搜索模型，尤其适用于开放网页用户界面中的信息检索。

## 项目概述

这个项目的主要目标是为 Open WebUI 提供一个方便的接口，以利用 GraphRAG 的强大功能。它集成了三种主要的检索方法并提供了一个综合搜索选项，使用户能够获得全面而精确的搜索结果。

##### 主要检索功能

1. **本地搜索**

* 使用 GraphRAG 技术高效检索本地知识库
* 适用于快速访问预定义的结构化信息
* 利用图结构提高检索准确性和相关性
2. **全球搜索**

* 在更广泛的范围内搜索信息，超越本地知识库
* 适用于需要更全面信息的查询
* 利用 GraphRAG 的全球上下文理解能力提供更丰富的搜索结果
3. **Tavily 搜索**

* 集成外部 Tavily 搜索 API
* 提供额外的互联网搜索功能，扩展信息来源
* 适用于需要最新或广泛网页信息的查询
4. **全模搜索**

* 结合上述三种搜索方法
* 提供最全面的搜索结果，满足复杂的信息需求
* 自动集成和排名来自不同来源的信息


##### 本地语言模型和嵌入模型支持

GraphRAG4OpenWebUI 现在支持使用本地语言模型 (LLMs) 和嵌入模型，增加了项目的灵活性和隐私性。具体支持以下本地模型：

1. **Ollama**

* 支持通过 Ollama 运行的各种开源 LLM，如 Llama 2、Mistral 等
* 可以通过设置 `API_BASE` 环境变量指向 Ollama 的 API 端点进行配置
2. **LM Studio**

* 兼容 LM Studio 运行的模型
* 通过配置 `API_BASE` 环境变量连接到 LM Studio 的服务
3. **本地嵌入模型**

* 支持使用本地运行的嵌入模型，如 SentenceTransformers
* 通过设置 `GRAPHRAG_EMBEDDING_MODEL` 环境变量指定使用的嵌入模型


支持本地模型使得 GraphRAG4OpenWebUI 不需要依赖外部 API 运行，增强了数据隐私性并减少使用成本。

## 安装

确保您的系统已安装 Python 3.8 或更高版本。然后按照以下步骤进行安装：

1. 克隆仓库：

git clone https://github.com/your-username/GraphRAG4OpenWebUI.git
cd GraphRAG4OpenWebUI


2. 创建并激活虚拟环境：

python -m venv venv
source venv/bin/activate  # Windows 使用 venv\Scripts\activate


3. 安装依赖：

pip install -r requirements.txt


## 配置

在运行 API 之前，需要设置以下环境变量。您可以通过创建 `.env` 文件或在终端中直接导出这些变量进行设置：


# 设置 TAVILY API 密钥
export TAVILY_API_KEY="your_tavily_api_key"

export INPUT_DIR="/path/to/your/input/directory"

# 设置 LLM 的 API 密钥
export GRAPHRAG_API_KEY="your_actual_api_key_here"

# 设置嵌入的 API 密钥（如果与 GRAPHRAG_API_KEY 不同）
export GRAPHRAG_API_KEY_EMBEDDING="your_embedding_api_key_here"

# 设置 LLM 模型
export GRAPHRAG_LLM_MODEL="gemma2"

# 设置 API 基础 URL
export API_BASE="http://localhost:11434/v1"

# 设置嵌入 API 基础 URL（默认是 OpenAI 的 API）
export API_BASE_EMBEDDING="https://api.openai.com/v1"

# 设置嵌入模型（默认是 "text-embedding-3-small"）
export GRAPHRAG_EMBEDDING_MODEL="text-embedding-3-small"


确保将上述命令中的占位符替换为实际的 API 密钥和路径。

## 使用

1. 启动服务器：

python main-en.py


服务器将在 `http://localhost:8012` 上运行。

2. API 端点：

* `/v1/chat/completions`：执行搜索的 POST 请求
* `/v1/models`：获取可用模型列表的 GET 请求
3. 集成到 Open WebUI： 在 Open WebUI 配置中，将 API 端点设置为 `http://localhost:8012/v1/chat/completions`。这将允许 Open WebUI 使用 GraphRAG4OpenWebUI 的搜索功能。

4. 示例搜索请求：

import requests
import json

url = "http://localhost:8012/v1/chat/completions"
headers = {"Content-Type": "application/json"}
data = {
"model": "full-model:latest",
"messages": [{"role": "user", "content": "Your search query"}],
"temperature": 0.7
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())


## 可用模型

* `graphrag-local-search:latest`：本地搜索
* `graphrag-global-search:最新`：全球搜索
* `tavily-search:最新`：Tavily 搜索
* `full-model:最新`：综合搜索（包括上述所有搜索方法）