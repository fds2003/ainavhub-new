---
title: "ChatOllama"
date: "2024-01-01 00:00:00+08:00"
description: ChatOllama ChatOllama  LLM
slug: chatollama-llm-ollama-openai-azure
tags:
- chatollama
- moonshot
- llm
- llms
- anthropic
draft: false
related_tools:
- chatollama
- ama
- rllm
- onefilellm
- llmanager
---

## ChatOllama

ChatOllama 是一个基于大型语言模型（LLM）的开源聊天机器人。它支持多种语言模型，包括 Ollama 提供的模型、OpenAI、Azure OpenAI、Anthropic、Moonshot、Gemini 和 Groq。

##### ChatOllama 的主要功能

1. **自由对话** ：你可以与 LLMs 进行自由的聊天。
2. **基于知识库的对话** ：可以与 LLMs 进行基于特定知识库内容的对话。


##### ChatOllama 功能列表

* **Ollama 模型管理** ：管理 Ollama 提供的模型。
* **知识库管理** ：管理知识库，以便在对话中引用。
* **聊天功能** ：支持与 LLMs 的不同类型的聊天。
* **商用 LLMs API 密钥管理** ：管理与你的 LLMs 服务提供商（如 OpenAI、Azure OpenAI 等）的 API 密钥。


##### 什么时候会使用 ChatOllama？

1. **需要与智能机器人进行对话** ：当你需要与一个智能机器人进行自然语言对话，无论是用于个人娱乐、客户服务、教育还是其他用途。
2. **基于知识库提供信息** ：当你有一个特定的知识库，并希望通过聊天机器人来提供这些信息，例如公司内部知识库、产品问答等。
3. **开发和测试** ：对于开发者，ChatOllama 可以用于测试和开发新的聊天机器人功能或集成不同的 LLMs 模型。


##### 快速开始

###### 支持的向量数据库

ChatOllama 支持两种向量数据库：Milvus 和 Chroma。你可以选择其中一种并进行设置：


# 支持的值：chroma, milvus
VECTOR_STORE=chroma
CHROMADB_URL=http://localhost:8000
MILVUS_URL=http://localhost:19530


默认情况下，ChatOllama 使用 Chroma。如果想使用 Milvus，需要将 `VECTOR_STORE` 设置为 `milvus` 并指定相应的 URL。

###### 使用 Nuxt 3 开发服务器

1. **安装并运行 Ollama 服务器** ：Ollama 服务器需要运行在本地，默认地址为 http://localhost:11434。
2. **安装 Chroma** ：可通过 Docker 安装并运行 ChromaDB：

docker pull chromadb/chroma
docker run -d -p 8000:8000 chromadb/chroma


3. **设置 ChatOllama** ：
* 复制 `.env.example` 文件为 `.env`：

cp .env.example .env


* 安装依赖：

pnpm install


* 运行数据库迁移：

pnpm prisma-migrate


4. **启动开发服务器** ：确保 Ollama 服务器和 ChromaDB 都在运行，然后启动开发服务器：

pnpm dev


###### 使用 Docker

这是最简单的使用 ChatOllama 的方法。你只需要一个 `docker-compose.yaml` 文件，然后执行以下命令启动 ChatOllama：


docker compose up


首次启动时，需要初始化 SQLite 数据库：


docker compose exec chatollama npx prisma migrate dev


###### 知识库的先决条件

使用知识库时，需要一个有效的嵌入模型，可以是 Ollama 提供的嵌入模型或第三方提供的服务（例如 OpenAI）。

* **Ollama 管理的嵌入模型** ：推荐使用 `nomic-embed-text` 模型。
* **OpenAI 嵌入模型** ：设置有效的 OpenAI API 密钥，并选择合适的嵌入模型（如 `text-embedding-3-large`、`text-embedding-3-small` 或 `text-embedding-ada-002`）。


##### 加入社区

欢迎加入 ChatOllama 社区，可以通过 [Discord 邀请链接](<https://discord.gg/TjhZGYv5pC>) 加入。如果你是开发者，可以在 `technical-discussion` 频道进行技术讨论。如果你在使用 ChatOllama 时遇到任何问题，可以在 `customer-support` 频道寻求帮助。