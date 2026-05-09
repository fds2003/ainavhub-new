---
title: "GraphRAG Local Ollama GraphRAG Local Ollama"
date: "2024-01-01 00:00:00+08:00"
description: 'GraphRAG Local Ollama  GraphRAG Local Ollama '
slug: graphrag-local-ollama-openapi-llm
tags:
- ll
- activate
- python
- openapi
- ollama
draft: false
related_tools:
- rllm
- onefilellm
- deep recall
- llmanager
- llm.pdf
---

## GraphRAG Local Ollama

## 🚀 GraphRAG Local Ollama 简介

欢迎使用 **GraphRAG Local Ollama** ！这个仓库是微软 [GraphRAG](<https://github.com/microsoft/graphrag>) 的一个激动人心的改编，专门支持使用 Ollama 下载的本地模型。不再需要昂贵的 OpenAPI 模型，实现了高效、经济的本地推断！

##### 🌟 主要特性

* **本地模型支持：** 使用 Ollama 的本地模型进行大语言模型（LLM）和嵌入。
* **成本效益高：** 不再依赖昂贵的 OpenAPI 模型。
* **简便设置：** 简单直接的设置过程。


## 📦 安装和设置步骤

按照以下步骤设置 GraphRAG Local Ollama 并使用 Ollama 提供的本地模型：

1. **创建并激活一个新的 conda 环境：**

conda create -n graphrag-ollama-local python=3.10
conda activate graphrag-ollama-local


2. **安装 Ollama：**

* 访问 [Ollama 官网](<https://ollama.com/>) 进行安装。
* 或者运行：

pip install ollama


3. **使用 Ollama 下载所需模型（可以选择任意 LLM 和嵌入模型）：**

ollama pull mistral  #llm
ollama pull nomic-embed-text  #embedding


4. **克隆这个仓库：**

git clone https://github.com/TheAiSingularity/graphrag-local-ollama.git


5. **进入仓库目录：**

cd graphrag-local-ollama/


6. **安装 GraphRAG 包：**

pip install -e .


7. **创建需要的输入目录：存储实验数据和结果的地方 - ./ragtest**

mkdir -p ./ragtest/input


8. **复制示例数据到 ./ragtest：input/ 文件夹有示例数据，可以在这里添加自己的 .txt 格式数据。**

cp input/* ./ragtest/input


9. **初始化 ./ragtest 目录，创建需要的文件：**

python -m graphrag.index --init --root ./ragtest


10. **移动 settings.yaml 文件，这是预定义的配置文件，配置了 Ollama 本地模型：**

mv settings.yaml ./ragtest


用户可以通过更改模型来进行实验。LLM 模型需要语言模型，如 llama3、mistral、phi3 等，嵌入模型需要嵌入模型，如 mxbai-embed-large、nomic-embed-text 等，所有这些模型都由 Ollama 提供。可以在 [Ollama 模型库](<https://ollama.com/library>) 找到完整的模型列表，并本地部署。默认的 API 基础 URL 分别是：http://localhost:11434/v1 用于 LLM 和 http://localhost:11434/api 用于嵌入。

11. **运行索引创建图：**

python -m graphrag.index --root ./ragtest


12. **运行查询（仅支持 Global 方法）：**

python -m graphrag.query --root ./ragtest --method global "What is machine learning?"


可以保存生成的图，并通过将 settings.yaml 文件中的 graphml 选项设为 “true” 来进行可视化：


snapshots:
graphml: true


**可以使用<https://gephi.org/users/download/> 或仓库中的脚本 visualize-graphml.py 来可视化生成的 .graphml 文件：**

在 visualize-graphml.py 中传递 .graphml 文件的路径：


graph = nx.read_graphml('output/20240708-161630/artifacts/summarized_graph.graphml')


13. **可视化 .graphml：**

python visualize-graphml.py


## 使用场景

GraphRAG Local Ollama 主要适用于以下场景：

* **成本敏感的项目：** 通过使用本地模型节省使用外部 API 的巨大成本。
* **数据隐私敏感的应用：** 本地化模型减少数据外泄的风险。
* **离线环境：** 在没有网络连接的情况下也能进行大语言模型推断和嵌入计算。


通过以上步骤，您可以设置和使用本地模型，使得流程更加经济高效。