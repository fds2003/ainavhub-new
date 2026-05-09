---
title: "LOTUS"
date: "2024-01-01 00:00:00+08:00"
description: LOTUS LOTUS ，（LLMs）。，。LOTUS Pandas API，。...
slug: lotus-llms-pandas-api
tags:
- lotus
- join
- topk
- top-k
- map
draft: false
related_tools:
- joinly.ai
- ai expert roadmap
- llamaparse
- chat with googlemap
- pdf mind map maker
---

## LOTUS

LOTUS 是一个引擎，能够通过大型语言模型（LLMs）在数据上执行查询。它提供了一种声明性编程模型和一个优化的查询引擎，可以在结构化和非结构化数据上进行强大的推理查询。LOTUS 拥有类似 Pandas 的简单直观的 API，通过实现一系列模块化的语义算子来扩展关系模型。程序员可以轻松地结合语义算子和传统数据操作，构建覆盖广泛知识语料库的先进 AI 系统。

##### LOTUS 提供的主要语义算子包括：

* **sem_map** ：使用自然语言投影映射数据框的每一行。
* **sem_filter** ：保留符合自然语言谓词的行。
* **sem_agg** ：对某列的所有行执行自然语言聚合（例如，汇总）。
* **sem_topk** ：按某种自然语言排序标准对数据框进行排序。
* **sem_join** ：基于自然语言谓词连接两个数据框。
* **sem_index** ：在文本列上创建语义相似性索引。
* **sem_search** ：在文本列上执行 top-k 搜索。


##### 使用场景：

LOTUS 适用于需要对多种数据类型进行复杂推理查询的场景，特别是在需求涉及自然语言理解与数据操作相结合的情况下。例如：

* 教育领域：从课程信息中提取技能相关性。
* 商业分析：对市场数据进行语义查询以找出潜在商机。
* 内容管理：在大量文本数据中快速找到相关信息。
* 数据集成：从不同的数据源中提取并关联相关信息。


##### 安装方法：


conda create -n lotus python=3.9 -y
conda activate lotus
pip install lotus-ai


##### 快速开始：

如果你已经熟悉 Pandas，那么上手会非常容易。以下是一个简单的示例程序，展示了使用语义连接算子的操作。


import pandas as pd
import lotus
from lotus.models import OpenAIModel

# 配置语言模型，并记得导出你的 API 密钥
lm = OpenAIModel()
lotus.settings.configure(lm=lm)

# 创建包含课程名称和技能的数据框
courses_data = {
"Course Name": [
"History of the Atlantic World",
"Riemannian Geometry",
"Operating Systems",
"Food Science",
"Compilers",
"Intro to computer science",
]
}
skills_data = {"Skill": ["Math", "Computer Science"]}
courses_df = pd.DataFrame(courses_data)
skills_df = pd.DataFrame(skills_data)

# 使用 lotus 进行语义连接
res = courses_df.sem_join(skills_df, "Taking {Course Name} will help me learn {Skill}")
print(res)


##### 引用

如果你在研究论文中使用 LOTUS，请按以下格式引用此工作：


@misc{patel2024lotusenablingsemanticqueries,
title={LOTUS: Enabling Semantic Queries with LLMs Over Tables of Unstructured and Structured Data},
author={Liana Patel and Siddharth Jha and Carlos Guestrin and Matei Zaharia},
year={2024},
eprint={2407.11418},
archivePrefix={arXiv},
primaryClass={cs.DB},
url={https://arxiv.org/abs/2407.11418},
}