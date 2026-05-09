---
title: "Soda Soda"
date: "2024-01-01 00:00:00+08:00"
description: Soda SODA（Search, Organize, Discover Anything），（LLMs）。SODA，，，。 ：A...
slug: soda-search-organize-discover-anything
tags:
- bing
- serper
- llm
- llms
- api
draft: false
related_tools:
- binglish
- linly-dubbing
- rllm
- onefilellm
- llmanager
---

## Soda

##### 简介

SODA（Search, Organize, Discover Anything）是一种前沿的信息集成工具，由大语言模型（LLMs）驱动。SODA通过整合多种信息源，为用户提供准确且可靠的答案，并支持用户上传个人文件，创建一个私人且安全的本地知识数据库。

##### 使用场景

1. **网络搜索** ：通过调用各种搜索引擎API（如Google、Bing、Serper等），SODA可以根据用户查询从互联网上获取相关信息，并提供详细的答案。
2. **本地数据库检索** ：用户可以使用SODA创建和检索本地数据库，包括文本-文本检索、图像-图像检索以及跨模态检索。在文本检索中，SODA实现了一个两阶段的检索过程，包括初步检索和后续排序。
3. **数据处理和保护** ：SODA支持本地数据的安全上传和使用，无需预训练或微调模型，保护用户隐私的同时，提供可靠的信息服务。


##### 亮点

* **新技术框架** ：开发了一个以LLM为核心的信息集成工具，为检索增强生成（RAG）和AI工具使用方向提供了技术框架。
* **良好兼容性** ：SODA能够轻松更换组件，支持多种搜索引擎、向量数据库和LLM，表现出良好的兼容性。
* **可靠可追溯** ：SODA有效应对部分LLM的“幻觉问题”，提供可靠且可追溯的信息来源。
* **数据隐私** ：支持本地数据库，获取新知识无需预训练或微调，同时有效保护用户数据隐私。


##### 使用方法

1. **安装** ：

* 克隆仓库并设置环境。

mkdir SODA
cd SODA
git clone https://github.com/Liuziyu77/Soda.git
pip install -r requirements.txt


* 运行Gradio本地UI：

cd web_ui
python web_ui.py


* 修改`web_ui.py`中的`base_directory`路径。
2. **网络搜索** ：通过API（Google、Bing、Serper等）进行网络搜索，需要在相关文件中输入对应的API密钥。

3. **本地数据库检索** ：可以通过运行不同的`.ipynb`文件，构建和检索本地数据库，支持文本、图像以及多模态数据。

4. **信息处理** ：使用InternLM-Xcomposer2或GPT-4处理信息，并将结果反馈给用户。


##### 引用


@misc{2024SODA,
title={SODA: Search, Organize, Discovery Anything},
author={SODA Team},
howpublished = {\url{https://github.com/Liuziyu77/Soda}},
year={2024}
}


##### 许可

代码依据Apache 2.0许可证发布，数据依据CC By NC 4.0许可证发布。上述许可仅限研究用途。