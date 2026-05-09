---
title: "STORM"
date: "2024-01-01 00:00:00+08:00"
description: STORM STORM STORM（Synthesis of Topic Outlines through Retrieval and Multi-perspective
  Question Asking）（LLM）。：...
slug: storm-synthesis-topic-outlines-through
tags:
- topic
- asking
- synthesis
- llm
- storm
draft: false
related_tools:
- pi
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## STORM

**STORM简介**

STORM（Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking）是一种使用大规模语言模型（LLM）从互联网检索信息并撰写类似维基百科的文章的系统。该系统主要分为两个步骤：

1. **预写阶段** ：系统通过互联网研究主题，收集参考资料并生成大纲。
2. **写作阶段** ：系统使用生成的大纲和参考资料撰写完整的带有引用的文章。


STORM采取了两种策略来提高问题的深度和广度：

1. **透视导向问题生成** ：STORM从类似主题的现有文章中发现不同的视角，并用这些视角来控制问答过程。
2. **模拟对话** ：系统模拟维基百科撰稿人与主题专家之间的对话，根据互联网资源更新理解并提出后续问题。


**使用场景**

STORM的主要使用场景包括但不限于：

* **维基百科编辑** ：帮助编辑在撰写或更新维基百科条目时生成初步内容和大纲。
* **知识探索** ：用于学术研究、内容创作等需要大量信息整理和输出的场景。
* **内容生成** ：生成具有引用且结构化的长篇文章。


**模块与定制**

STORM由以下四个模块组成，可以根据特定需求进行定制：

1. **知识整理模块** ：收集广泛覆盖主题的信息。
2. **大纲生成模块** ：将收集到的信息组织成分层次的大纲。
3. **文章生成模块** ：用收集的信息填充生成的大纲。
4. **文章润色模块** ：修改和提升文章的展示效果。


STORM支持多个检索模块（如You.com搜索引擎、Bing搜索引擎以及用户提供文档的向量检索模型）和多种语言模型（如OpenAI模型、Claude模型等）。

**快速开始**

1. **克隆并安装** ：

git clone https://github.com/stanford-oval/storm.git
cd storm
conda create -n storm python=3.11
conda activate storm
pip install -r requirements.txt


2. **设置API键** ： 创建`secrets.toml`文件，添加OpenAI和You.com的API密钥。

3. **运行STORM-wiki** ： 使用如下命令运行STORM并生成维基百科文章：

python examples/run_storm_wiki_gpt.py \
--output-dir $OUTPUT_DIR \
--retriever you \
--do-research \
--do-generate-outline \
--do-generate-article \
--do-polish-article


STORM是一个模块化、高可定制的系统，旨在通过自动的深度问题生成和模拟对话来辅助用户进行高效的内容创作和知识探索。