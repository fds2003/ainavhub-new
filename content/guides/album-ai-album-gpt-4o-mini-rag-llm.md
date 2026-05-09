---
title: "album-ai album-ai Album AI"
date: "2024-01-01 00:00:00+08:00"
description: 'album-ai Album AI  Album AI '
slug: album-ai-album-gpt-4o-mini-rag-llm
tags:
- pgsql
- album-ai
- haiku
- embedding
- album
draft: false
related_tools:
- album-ai
- haiku sqlite rag
- fine-tune claude 3 haiku
- qwen3 embedding
- mlx-embeddings
---

## album-ai

##### Album AI 简介

Album AI 是一个实验性项目，它使用最新发布的 gpt-4o-mini 作为视觉模型，自动识别相册图片的元数据，并利用 RAG 技术实现与相册的自然语言对话。它既可以作为传统的照片相册，也可以作为图像知识库，帮助大语言模型（LLM）生成内容。

##### 背景故事

作为一个摄影爱好者，面对海量照片时，我常常感到不知所措。所有现有的照片管理软件都需要额外的维护工作。Haiku 和新发布的 gpt-4o-mini 给了我希望，于是我决定立即实施。我的合作伙伴和我在不到 24 小时内创建了第一个版本。

我们希望你也会喜欢它。欢迎任何赞美与批评。别忘了给我们一个 ⭐️ 或分享，让更多人知道它。

##### 功能特点

* 自动发现相册中的图片，并使用 PgSQL 数据库进行存储。
* 利用 GPT-4-o-mini 自动生成图片元数据。
* 使用 OpenAI 的 Embedding API 进行元数据矢量化。
* 提供两个 API：
* 搜索 API：接受查询并返回最相关的图片。
* 聊天 API：接受查询，检索图片并生成响应。
* 支持 Docker 容器的一键部署，适用于诸如 Render 等平台。
* 许可的开源协议，允许集成和修改（商业用途请联系）。


##### 使用场景

1. **个人照片管理** ：自动整理和标记个人照片，只需通过自然语言查询即可找到需要的照片。
2. **商业图像管理** ：用于公司内部的图像数据库管理，提高查找效率。
3. **内容创作支持** ：为内容创作者提供图片辅助，自动生成图片相关的描述和标签。
4. **教育和研究** ：帮助研究人员和学生整理和分析大量图片数据。


##### 如何开始使用？

1. **克隆项目**

git clone git@github.com:gcui-art/album-ai.git
cd album-ai


2. **修改 .env 文件**

cp .env.prod.example .env.prod


打开 `.env.prod` 文件并进行配置：

HOST_NAME= # 本地 IP 地址，通常是 192.168.x.x:8080
PROXY_URL= # 本地代理 IP 地址，通常是 192.168.x.x:7890，当不能直接访问 OpenAI API 时需要配置


在 docker-compose.yml 文件中配置 OPENAI_API_KEY：

OPENAI_API_KEY= # 你的 OpenAI API 密钥


3. **构建并运行项目**

chmod a+x ./build.sh
./build.sh


4. **享受体验**

打开浏览器访问 `http://localhost:8080` 查看演示。

5. **添加新照片**

打开项目中的 `images` 目录，添加新照片到 `images` 目录，后台会自动识别和矢量化元数据。之后，你可以通过搜索和聊天在演示中使用这些照片。


##### API 参考

目前实现的 API 包括：

* `get` /api/v1/file/search：搜索图片
* `post` /api/v1/chat：与图片进行聊天


##### 贡献方式

支持该项目的四种方式：

1. Fork 项目并提交 PR：我们欢迎任何使 Album AI 更好的 PR。
2. 提交 Issue：我们欢迎任何合理的建议或错误报告。
3. 推荐：推荐项目给他人，点击 Star，使用后在项目中放置链接。
4. 联系我们：商业用途请联系。


##### 相关链接

* 项目仓库：[github.com/gcui-art/album-ai](<https://github.com/gcui-art/album-ai>)
* 作者：[@Kane](<https://x.com/BlueeonY>)


##### 免责声明

商业用途请联系我们。