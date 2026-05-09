---
title: "LangChain-Chatchat"
date: "2024-01-01 00:00:00+08:00"
description: LangChain-Chatchat LangChain-Chatchat Langchain-ChatGLM
slug: langchain-chatchat-langchain-chatglm-chatglm-langchain-retrieval-aug
tags:
- langchain-chatchat
- langchain
- retrieval-aug
- retrieval-augmented
- langchain-chatglm
draft: false
related_tools:
- langchain
- langchain-searxng
- langchain swift
- gemini 2.0 flash image generation and editing
- 4o-image-generation
---

## LangChain-Chatchat

LangChain-Chatchat（之前称为Langchain-ChatGLM）是一个基于大型语言模型（如ChatGLM）和应用框架（如Langchain）构建的开源项目，旨在实现一个可离线部署的检索增强生成（Retrieval-Augmented Generation, RAG）大模型知识库。这个项目支持中文场景，对开源模型友好，并且可以完全在本地运行，不依赖于云服务，保证了数据的私密性和安全性。

##### 在什么样的情况下会使用LangChain-Chatchat？

1. **数据隐私保护和安全性需求高的场景：** 由于LangChain-Chatchat可以完全在本地部署，所以对于那些数据隐私保护要求高的企业或个人用户来说，是一个很好的选择。
2. **本地化推理需求：** 在某些情况下，云服务可能不稳定或者无法接入，LangChain-Chatchat提供了一个本地化的解决方案，使得用户无需依赖外部网络即可使用AI服务。
3. **中文知识库问答应用：** 对于需要在中文内容上构建知识库问答系统的开发者，LangChain-Chatchat提供了一套友好的解决方案，支持中文场景和模型。
4. **自定义和扩展能力需求：** 如果你想对知识库问答系统进行定制，或者扩展特定的功能，LangChain-Chatchat提供了灵活的配置和丰富的API接口，便于开发和集成。


##### 功能总结：

* **完全本地化部署：** 可以完全在本地机器上部署和运行，保证数据隐私和安全。
* **支持中文场景：** 针对中文内容进行了优化，支持中文的知识库问答。
* **开源模型支持：** 项目使用了开源的大语言模型和嵌入式模型，例如THUDM/ChatGLM3-6B和BAAI/bge-large-zh。
* **灵活的配置和自定义：** 提供了丰富的API接口和配置选项，支持自定义知识库与问答系统的构建。
* **支持多种向量数据库：** 支持FAISS、milvus、pg_vector等本地向量数据库，满足不同的性能和扩展需求。
* **开源且免费商用：** 该项目采用Apache License许可证，可以免费商用。


##### 使用场景示例：

* **企业内部问答系统：** 企业可以使用LangChain-Chatchat构建内部的知识库问答系统，用于员工培训、知识共享等场景，同时保护企业敏感信息。
* **学术研究：** 研究者可以在本地部署LangChain-Chatchat，用于整理和查询学术资料、论文等，加快研究过程。
* **个人知识管理：** 个人用户可以利用该项目构建个人的知识库系统，用于整理学习笔记、书籍内容等，方便随时查询和回顾。


总之，LangChain-Chatchat是一个非常适合需要数据保密、本地化部署、对中文场景有要求的用户的工具，无论是企业还是个人用户，都可以根据自己的需要利用这个工具构建知识库问答系统。