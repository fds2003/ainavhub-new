---
title: "omniparse omniparse OmniParse"
date: "2024-01-01 00:00:00+08:00"
description: omniparse OmniParse  AI
slug: omniparse-genai-rag-retrieva
tags:
- gradio
- retrieval-augmented
- markdown
- generation
- omniparse
draft: false
related_tools:
- gradio webrtc
- gemini 2.0 flash image generation and editing
- 4o-image-generation
- parallelized autoregressive visual generation
- awesome-music-generation
---

## omniparse

OmniParse 是一个数据解析平台，旨在将各种非结构化数据转换为适用于生成式AI（GenAI）应用的结构化数据。无论是文档、表格、图像、视频、音频文件，还是网页，OmniParse 都能对其进行处理，使其变得干净、结构化，并为诸如 RAG（Retrieval-Augmented Generation）和细调等AI应用做好准备。

##### 主要特性

* 完全本地化，无需外部API
* 支持多达 20 种文件类型
* 将文档、多媒体和网页转换为高质量的结构化 Markdown
* 支持表格提取、图像提取与标注、音频/视频转录、网页爬取
* 通过 Docker 和 Skypilot 轻松部署
* 兼容 Colab
* 交互式 UI 由 Gradio 提供支持


##### 安装与使用

OmniParse 目前只支持Linux系统。安装步骤包括：

1. 克隆项目：

git clone https://github.com/adithya-s-k/omniparse
cd omniparse


2. 建立虚拟环境：

conda create --name omniparse-venv python=3.10
conda activate omniparse-venv


3. 安装依赖：

poetry install
# 或
pip install -e .


##### Docker 部署

1. 从 Docker Hub 拉取 OmniParse API 镜像：

docker pull savatar101/omniparse:0.1
docker run --gpus all -p 8000:8000 savatar101/omniparse:0.1  # 使用 GPU
# 或
docker run -p 8000:8000 savatar101/omniparse:0.1  # 不使用 GPU


##### 使用场景

OmniParse 可以应对多种类型的数据解析需求，包括：

1. 文档解析：支持 .doc、.docx、.pdf、.ppt、.pptx 格式。
2. 图像解析：支持 .png、.jpg、.jpeg、.tiff、.bmp、.heic 格式。
3. 视频解析：支持 .mp4、.mkv、.avi、.mov 格式。
4. 音频解析：支持 .mp3、.wav、.aac 格式。
5. 网页解析：动态网页、任意 URL。


##### 未来计划

* 集成 LlamaIndex、Langchain 和 Haystack
* 批量数据处理
* 动态数据分块和基于指定 schema 的结构化数据提取
* 单一 API 接口：只需输入文件和需要执行的任务，其余的由系统自动处理
* 动态模型选择和支持外部 API
* 为 Surya OCR 和 Marker 模型开发新的开源替代方案


OmniParse 的最终目标是替换所有不同类型的解析模型，使用一个多模态模型统一处理所有类型的数据解析需求。

* * *

OmniParse 为处理不同形态和大小的数据提供了一站式解决方案，使其能够转化为适合生成式 AI 应用的结构化数据。这使得它成为一个高效的工具，适用于多种数据解析场景。