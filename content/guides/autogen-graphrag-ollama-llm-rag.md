---
title: "Autogen"
date: "2024-01-01 00:00:00+08:00"
description: Autogen_GraphRAG_Ollama AutoGen_GraphRAG_Ollama AutoGen_GraphRAG_Ollama
  GraphRAG、AutoGen LLM （ Ollama ） (RAG) 。...
slug: autogen-graphrag-ollama-llm-rag
tags:
- agentic-rag
- chainlit
- gr
- llm
- lite-llm
draft: false
related_tools:
- agent
- solgraph
- langgraph multi-agent swarm
- flowgram.ai
- langgraph computer use agent
---

## Autogen_GraphRAG_Ollama

##### AutoGen_GraphRAG_Ollama 简介

AutoGen_GraphRAG_Ollama 是一个集成了 GraphRAG、AutoGen 代理和本地 LLM 模型（由 Ollama 提供）的多代理检索增强生成 (RAG) 超级机器人。它在本地实现免费的嵌入和推理功能，具备以下关键特点：

* **Agentic-RAG:** 使用 GraphRAG 的知识搜索方法通过函数调用与 AutoGen 代理进行集成。
* **离线 LLM 支持:** 配置 GraphRAG（包括本地和全局搜索）以支持 Ollama 的本地模型进行推理和嵌入。
* **非 OpenAI 函数调用:** 扩展 AutoGen 以支持通过 Lite-LLM 代理服务器调用来自 Ollama 的非 OpenAI LLM。
* **交互式用户界面:** 部署 Chainlit UI 以处理连续对话、多线程和用户输入设置。


##### 使用场景

AutoGen_GraphRAG_Ollama 支持本地的、多代理的 RAG 系统，可以应用于：

1. **知识库问答:** 使用本地存储的知识库和模型进行复杂的问答系统。
2. **文档检索与生成:** 通过本地嵌入和推理能力快速高效地检索和生成文档内容。
3. **多线程对话:** 在一个界面内管理和处理多个用户线程的对话。
4. **隐私敏感应用:** 在不依赖外部服务的情况下进行智能对话和生成，确保数据隐私和安全。


##### 安装与配置 (Linux)

1. **安装 LLM 模型:**

请访问 [Ollama 网站](<https://ollama.com/>) 获取安装文件。

ollama pull mistral
ollama pull nomic-embed-text
ollama pull llama3
ollama serve


2. **创建 conda 环境并安装包:**

conda create -n RAG_agents python=3.12
conda activate RAG_agents
git clone https://github.com/karthik-codex/autogen_graphRAG.git
cd autogen_graphRAG
pip install -r requirements.txt


3. **初始化 GraphRAG 根文件夹:**

mkdir -p ./input
python -m graphrag.index --init  --root .
mv ./utils/settings.yaml ./


4. **替换 GraphRAG 包文件夹中的 ’embedding.py’ 和 ‘openai_embeddings_llm.py’:**

sudo find / -name openai_embeddings_llm.py
sudo find / -name embedding.py


5. **创建嵌入和知识图:**

python -m graphrag.index --root .


6. **启动 Lite-LLM 代理服务器:**

litellm --model ollama_chat/llama3


7. **运行应用程序:**

chainlit run appUI.py


##### 安装与配置 (Windows)

1. **安装 LLM 模型:**

请访问 [Ollama 网站](<https://ollama.com/>) 获取安装文件。

ollama pull mistral
ollama pull nomic-embed-text
ollama pull llama3
ollama serve


2. **创建 conda 环境并安装包:**

git clone https://github.com/karthik-codex/autogen_graphRAG.git
cd autogen_graphRAG
python -m venv venv
./venv/Scripts/activate
pip install -r requirements.txt


3. **初始化 GraphRAG 根文件夹:**

mkdir input
python -m graphrag.index --init  --root .
cp ./utils/settings.yaml ./


4. **替换 GraphRAG 包文件夹中的 ’embedding.py’ 和 ‘openai_embeddings_llm.py’:**

cp ./utils/openai_embeddings_llm.py .\venv\Lib\site-packages\graphrag\llm\openai\openai_embeddings_llm.py
cp ./utils/embedding.py .\venv\Lib\site-packages\graphrag\query\llm\oai\embedding.py


5. **创建嵌入和知识图:**

python -m graphrag.index --root .


6. **启动 Lite-LLM 代理服务器:**

litellm --model ollama_chat/llama3


7. **运行应用程序:**

chainlit run appUI.py