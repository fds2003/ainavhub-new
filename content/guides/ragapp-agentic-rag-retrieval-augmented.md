---
title: "RAGapp"
date: "2024-01-01 00:00:00+08:00"
description: RAGapp RAGapp  Agentic RAG
slug: ragapp-agentic-rag-retrieval-augmented
tags:
- docker
- augmented
- agentic
- ollama
- ragapp
draft: false
related_tools:
- agentic memory
- agentic radar
- agentic rag
- magentic-ui
- agenticseek
---

## RAGapp

RAGapp 是一种企业级应用工具，其主要功能是使用 Agentic RAG（Retrieval Augmented Generation）技术。它的配置非常简单，类似于 OpenAI 的自定义 GPT，但其部署在用户自有的云基础设施上，通过 Docker 容器进行管理。RAGapp 基于 LlamaIndex 构建，便于与 OpenAI 或 Gemini 的托管 AI 模型以及本地模型 (如 Ollama) 进行集成。

##### 主要特点

1. **简单配置：** 用户可以通过 Docker 容器快速启动和配置 RAGapp，只需运行相关的 Docker 命令即可。
2. **管理界面：** 提供易于使用的管理员界面和聊天界面，以及 API 文档，方便用户进行管理和访问。
3. **多模型支持：** 支持使用 OpenAI、Gemini 以及本地的 Ollama 模型，能够根据需求灵活切换。
4. **无认证设计：** 默认情况不带有认证层，用户需要在其云环境中保护 `/admin` 路径。


##### 使用场景

1. **企业内部应用：** 部署在企业内部的云基础设施中，提供安全且高效的自然语言处理服务。
2. **产品集成：** 可以集成在现有的产品或服务中，为其增加智能对话或信息检索功能。
3. **开发和测试：** 开发人员可以在本地或云端环境中快速部署和测试不同的语言模型，为产品研发提供支持。


##### 部署方式

1. **Docker 和 Docker Compose：** 用户可以通过单一 Docker 容器运行 RAGapp，也可以使用 Docker Compose 在自己的基础设施上轻松部署 RAGapp和相关的服务。
2. **Kubernetes：** 即将提供自定义的 Kubernetes 部署描述符，方便在云基础设施中进行大规模部署。


##### 开发及联系

开发者可以使用 `poetry` 进行依赖管理和构建，还提供了前端构建和开发模式。任何问题、功能请求或错误报告可以通过 GitHub 上的 issue 进行反馈。

RAGapp 的设计旨在为企业提供方便、灵活且高效的语言生成和信息检索解决方案。通过其强大的集成功能和简便的部署流程，用户能够快速将其应用到不同的业务场景中。