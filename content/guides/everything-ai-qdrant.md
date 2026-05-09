---
title: "everything-ai"
date: "2024-01-01 00:00:00+08:00"
description: everything-ai everything-ai  AI
slug: everything-ai-qdrant
tags:
- qdrant
- pdf
- chatgpt
- everything-ai
- hf
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## everything-ai

**everything-ai** 是一个本地化的、功能全面的人工智能驱动聊天机器人助手🤖。该工具旨在提供多种AI服务，从文本生成、摘要、到图像生成与分类，甚至是蛋白质折叠等。

##### 使用场景

1. **检索文本生成** ：通过 `qdrant` 后端建立检索友好的知识库，可以查询知识库并调整模型的响应 （多语言支持）。
2. **通用文本生成** ：类似于ChatGPT的文本生成，可支持HF Hub上的任何文本生成模型（多语言支持）。
3. **文本摘要** ：摘要文本和PDF，支持HF Hub上的文本摘要模型（仅英语）。
4. **图像生成** ：使用稳定扩散，根据文本生成图像，支持HF Hub上的任何文本到图像模型（多语言支持）。
5. **图像分类** ：对图像进行分类，支持HF Hub上的任何图像分类模型（仅英语）。
6. **图像描述** ：描述图像内容，支持HF Hub上的任何图像到文本模型（仅英语）。
7. **音频分类** ：分类音频文件或麦克风录音，支持HF Hub上的音频分类模型。
8. **语音识别** ：将音频文件或麦克风录音转录成文字，支持HF Hub上的自动语音识别模型。
9. **视频生成** ：根据文本提示生成视频，支持HF Hub上的文本到视频模型（仅英语）。
10. **蛋白质折叠** ：根据氨基酸序列预测蛋白质的3D结构（仅支持GPU）。
11. **自动训练** ：使用自动训练高级选项，对特定任务进行模型微调。
12. **Spaces API与Supabase结合** ：使用HF Spaces API结合Supabase PostgreSQL数据库，释放更强大的LLM和更大的RAG取向向量数据库（多语言支持）。
13. **llama.cpp与qdrant结合** ：类似于检索文本生成，但使用llama.cpp作为推理引擎（多语言支持）。
14. **图像检索搜索** ：上传文件夹作为数据库输入，进行图像数据库搜索。


##### 快速开始

1. **克隆项目**

git clone https://github.com/AstraBert/everything-ai.git
cd everything-ai


2. **设置`.env` 文件**：配置文件系统挂载、模型路径、模型名称和最大令牌数。

3. **拉取必要的Docker镜像**

docker pull astrabert/everything-ai:latest
docker pull qdrant/qdrant:latest
docker pull ghcr.io/ggerganov/llama.cpp:server


4. **运行多容器应用**

docker compose up


5. **选择任务** ：通过访问 `localhost:8670`，选择你需要的AI助手任务。

6. **开始使用** ：访问 `localhost:7860`，开始使用你的聊天机器人助手。


**everything-ai** 提供了便捷的安装步骤和多种功能，适用于广泛的AI应用场景，满足用户多样化需求。