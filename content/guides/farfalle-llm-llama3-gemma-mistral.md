---
title: "Farfalle"
date: "2024-01-01 00:00:00+08:00"
description: 'Farfalle Farfalle Farfalle '
slug: farfalle-llm-llama3-gemma-mistral
tags:
- llama3
- gemma
- mistral
- llm
- vercel
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- gemma-3
---

## Farfalle

##### Farfalle功能概述

Farfalle 是一个开源的、由人工智能驱动的搜索引擎。这个工具的核心功能是利用本地大型语言模型（LLM）或云端模型来回答问题和进行搜索。

###### 主要功能

* 能够运行本地的LLM，如**llama3** 、**gemma** 、**mistral** ，也支持使用云端模型，如**Groq/Llama3** 、**OpenAI/gpt4-o** 。
* 既可以在本地运行，也可以通过云端进行部署。


##### 适用场景

Farfalle 适用于以下这些情况：

1. **快速搜索和问答** ：当你需要一个高效的搜索工具来快速找到信息或者回答问题时，无论是在本地电脑还是通过云服务。

2. **本地模型计算** ：如果你有高效的本地硬件支持（例如拥有M1 Macbook Pro）并且需要在本地运行大型语言模型，可以使用Farfalle来充分利用本地资源。

3. **定制化需求** ：对于希望根据自己的需求定制搜索引擎功能的开发人员和研究人员，Farfalle提供了开源代码和丰富的配置选项。

4. **云端部署与协作** ：对于需要跨团队协作或者将搜索功能集成到web服务中的情况，可以方便地在云端（如Render、Vercel）进行部署和使用。


##### 如何开始使用Farfalle

###### 前提条件

* 安装 [Docker](<https://docs.docker.com/get-docker/>)
* 下载并启动 [Ollama](<https://ollama.com/download>) 服务，以及至少下载其中一个支持的模型：**llama3** 、**mistral** 、**gemma**


###### 获取API键

* 注册并获取 [Tavily](<https://app.tavily.com/home>) 的API键
* 可选的云服务API键：[OpenAI](<https://platform.openai.com/api-keys>) 和 [Groq](<https://console.groq.com/keys>)


##### 安装步骤

1. **克隆仓库**

git clone git@github.com:rashadphz/farfalle.git
cd farfalle


2. **配置环境变量** 创建 `.env` 文件并添加 API 键：

touch .env


填入API键，比如：

TAVILY_API_KEY=你的API键
OPENAI_API_KEY=（可选）
GROQ_API_KEY=（可选）


3. **运行Docker容器** 确保 Docker Compose 版本为 2.22.0 或更高：

docker-compose -f docker-compose.dev.yaml up -d


然后访问 <http://localhost:3000> 来查看应用。


##### 部署方法

###### 后端

点击按钮，直接部署到Render： [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](<https://render.com/deploy?repo=https://github.com/rashadphz/farfalle>)

###### 前端

部署前端时使用从Render后端复制的URL，并在Vercel上进行部署： [![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frashadphz%2Ffarfalle&env=NEXT_PUBLIC_API_URL&envDescription=URL%20for%20your%20backend%20application.%20For%20backends%20deployed%20with%20Render%2C%20the%20URL%20will%20look%20like%20this%3A%20https%3A%2F%2F%5Bsome-hostname%5D.onrender.com&root-directory=src%2Ffrontend>)

执行上述步骤后，你就可以开始使用全新的Farfalle搜索引擎了！🥳