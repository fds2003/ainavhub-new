---
title: "Custom WebSearch Agent with LangGraph Custom WebSearch Agent with LangGraph"
date: "2024-01-01 00:00:00+08:00"
description: 'Custom WebSearch Agent with LangGraph  Custom WebSearch Agent with LangGraph '
slug: custom-websearch-agent-langgraph-api
tags:
- agent.git
- install
- custom
- langgraph
- pip
draft: false
related_tools:
- agent
- hunyuancustom
- customer service agents demo
- customchar
- claude customer support agent
---

## Custom WebSearch Agent with LangGraph

##### 总体介绍

**Custom WebSearch Agent with LangGraph** 是一个集成多种语言模型和API的自定义网络搜索代理。该代理通过调用不同的API（如Serper、OpenAI、Gemini、Claude和Groq等），实现强大的网络搜索和信息获取功能。其核心架构采用LangGraph来协调和管理不同API的调用，从而提供高效、准确的信息搜索能力。

##### 安装与配置步骤

1. **安装Anaconda** : 从[Anaconda官方网站](<https://www.anaconda.com/>)下载并安装Anaconda。
2. **创建虚拟环境** :

conda create -n agent_env python=3.11 pip


3. **激活虚拟环境** :

conda activate agent_env


4. **克隆项目仓库** :

git clone https://github.com/john-adeojo/graph_websearch_agent.git


5. **进入项目目录** :

cd /path/to/your-repo/graph_websearch_agent


6. **安装所需依赖** :

pip install -r requirements.txt


7. **配置API密钥** : 打开`config.yaml`文件:

nano config.yaml


输入以下API密钥：
* **Serper API Key** : 来自[Serper](<https://serper.dev/>)
* **OpenAI API Key** : 来自[OpenAI](<https://openai.com/>)
* **Gemini API Key** : 来自[Gemini](<https://ai.google.dev/gemini-api>)
* **Claude API Key** : 来自[Claude](<https://docs.anthropic.com/en/api/getting-started>)
* **Groq API Key** : 来自[Groq](<https://console.groq.com/keys>)


##### 运行前端

如果你想运行前端：

对于Windows系统，运行:


run_windows.ps1


对于Linux/macOS系统，运行:


chmod +x run_linux.sh
run_linux.sh


##### 通过Shell运行查询


python -m app.app


然后输入你的查询。

##### 集成Ollama

1. **下载Ollama** : 从[Ollama下载页面](<https://ollama.com/download>)下载并安装Ollama。

2. **下载Ollama模型** :

curl http://localhost:11434/api/pull -d "{\"name\": \"llama3\"}"


Ollama [API文档](<https://github.com/ollama/ollama/blob/main/docs/api.md#list-local-models>)

###### 如何集成Ollama Server的视频教学：

[![观看视频](https://img.youtube.com/vi/tVcOU054iWA/0.jpg)](<https://youtu.be/tVcOU054iWA>)

##### 使用场景

1. **学术研究** : 通过整合多个API，提供强大的文献和信息检索能力。
2. **数据分析** : 利用多源数据进行综合分析，提供更全面的见解。
3. **企业情报** : 监测市场动态，获取最新行业资讯，辅助决策。
4. **技术支持** : 快速获取技术文档和解决方案，提升支持效率。
5. **客户服务** : 使用自然语言模型提供智能客服，提高客户满意度。


通过这些配置和使用场景，Custom WebSearch Agent with LangGraph 能够显著提升信息检索和处理的效率和准确性。