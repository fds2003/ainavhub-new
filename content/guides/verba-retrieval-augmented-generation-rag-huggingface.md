---
title: "Verba"
date: "2024-01-01 00:00:00+08:00"
description: Verba Verba Retrieval-Augmented Generation, RAG)
slug: verba-retrieval-augmented-generation-rag-huggingface
tags:
- llama3
- pdf
- opena
- cohere
- xlsx
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- pdf-craft
---

## Verba

Verba，是一个开源应用程序，旨在提供开箱即用的检索增强生成(Retrieval-Augmented Generation, RAG)解决方案。通过简单易行的步骤，可以本地或通过云端探索数据集并提取洞见，支持如HuggingFace、Ollama以及OpenAI、Cohere、Google等多种大语言模型(LLM)提供商。

##### Verba的功能特点

1. **模型支持** ：
* 例如Ollama的Llama3模型、HuggingFace的MiniLMEmbedder、Cohere的Command R+、Google的Gemini、OpenAI的GPT4等，统一提供嵌入和生成能力。
2. **数据支持** ：
* 能导入PDF、CSV/XLSX等结构化数据，未来还计划支持多模态数据和通过UnstructuredIO导入数据。
3. **RAG功能** ：
* 提供混合搜索、语义缓存、自动补全建议、过滤器（计划中）等功能，能够重新排序和评估RAG结果。
4. **扩展功能** ：
* 提供Docker支持、自定义前端，并计划集成如Haystack、LlamaIndex、LangChain等RAG库。


##### Verba的使用场景

1. **数据查询与互动** ：
* 作为个人助理，通过本地或云端来查询和互动数据，帮助解决文档、数据交叉参考以及从现有知识库中获取洞见。
2. **全面配置的RAG接口** ：
* 灵活选择不同的RAG框架、数据类型、分块技术和LLM提供商，适配各种使用场景需求。
3. **开发人员和分析师** ：
* 对需要频繁从大规模文档和数据集中提取洞见的开发人员和数据分析师特别有用。
4. **轻松集成** ：
* 灵活的API管理和集成方案，可以通过API Keys配置各种服务，方便与现有系统部署和集成。
5. **前端用户** ：
* 提供易于使用的前端界面，通过简单的操作界面进行数据的添加和RAG配置，实现零编程实现文档查询和生成功能。


##### 安装与部署方式

1. **通过Pip安装** ：

pip install goldenverba
verba start


2. **从源码构建** ：

git clone https://github.com/weaviate/Verba.git
cd Verba
pip install -e .
verba start


3. **通过Docker部署** ： 克隆仓库，更新`.env`文件，然后使用docker-compose进行部署：

docker compose up -d


以上种种功能和部署选项，使得Verba可以灵活应用于各类数据检索和生成任务，方便用户快速而高效地获取所需信息。