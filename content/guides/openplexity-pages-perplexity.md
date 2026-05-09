---
title: "OpenPlexity Pages OpenPlexity Pages OpenPlexity Pages"
date: "2024-01-01 00:00:00+08:00"
description: 'OpenPlexity Pages OpenPlexity Pages  OpenPlexity Pages '
slug: openplexity-pages-perplexity
tags:
- llama3
- openplexity
- perplexity
- pages
- ollama
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- openplexity pages
---

## OpenPlexity Pages

OpenPlexity Pages 是一个开源替代品，旨在将您的研究转化为视觉美观、内容丰富的文章。虽然该系统无法直接生成可以发表的文章，通常还需要大量修改，但经验丰富的编辑在初稿阶段可能会发现它非常有用。

##### OpenPlexity Pages 的优势

* **开源** ：与 Perplexity Pages 不同，OpenPlexity Pages 是完全开源的，允许社区贡献和自定义。
* **隐私保护** ：您的数据始终保留在本地。OpenPlexity Pages 在本地运行，确保您的研究和内容保持私密。
* **可定制** ：根据目标读者调节文章语气，无论是普通读者还是专业人士。
* **适应性强** ：可以轻松修改文章结构，添加、重新排列或删除部分内容。
* **视觉效果** ：增强文章的视觉效果，可以使用 AI 生成的图像或集成您自己的图片。


##### 重要特性

* **本地化语言模型支持（即将推出）** ：利用 Llama3 和 Mixtral，通过 Ollama 生成内容。
* **无缝创作** ：轻松将您的研究转化为结构良好、美观格式的文章。
* **实时更新** ：不像静态工具，OpenPlexity Pages 使用实时搜索结果，确保内容最新。


##### 使用场景

OpenPlexity Pages 能够帮助各个领域的创作者分享知识：

* **教育者** ：开发全面的学习指南，将复杂的主题分解为易于理解的内容。
* **研究人员** ：创建详细的研究报告，使您的研究工作更容易被理解。
* **爱好者** ：通过创建引人入胜的指南分享您的热情，激励他人。
* **内容创作者** ：在任何主题上编写精心研究、视觉美观的文章。


##### 开始使用

1. 确保已安装 Poetry 工具

pip install poetry


2. 安装项目依赖

poetry install


3. 配置 `.env` 文件，包含 API 密钥

echo "GROQ_API_KEY=<your-groq-api-key> BASE_URL=https://rentry.co SERPER_API_KEY=<your-serper-api-key>" > .env


4. 运行应用

poetry run streamlit run openplexity_pages/app.py


##### 架构

OpenPlexity Pages 的架构旨在支持社区贡献及定制，通过开源平台实现 AI 驱动的内容创作，同时保留对数据的完全控制。

**让我们一起创造吧！**