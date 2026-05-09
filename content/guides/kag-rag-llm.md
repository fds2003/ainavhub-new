---
title: "KAG"
date: "2024-01-01 00:00:00+08:00"
description: KAG KAG（）（RAG）。RAG（LLM），（、），。 KAG20241024OpenSP...
slug: kag-rag-llm
tags:
- app
- openspg
- hotpotqa
- wiki
- rag
draft: false
related_tools:
- whatsapp mcp server
- computer using agent sample app
- appagentx
- langgraph whatsapp agent
- stock data insights application
---

## KAG

KAG（知识增强生成）是一种旨在克服传统检索增强生成（RAG）技术在专业领域应用中的局限性的框架。RAG技术虽能将大语言模型（LLM）与领域应用相结合，但其在知识推理关联性和逻辑敏感性（如数值、时间关系和专家规则等）方面存在明显不足，限制了专业知识服务的实现。

KAG于2024年10月24日由OpenSPG正式发布，其目标是充分利用知识图谱和向量检索的优势，通过以下四个方面双向增强LLM与知识图谱，以解决RAG所面临的挑战：

1. 友好的知识表示方式；
2. 知识图谱与原始文本片段的互相索引；
3. 由逻辑形式引导的混合推理引擎；
4. 与语义推理对齐的知识。


KAG在多跳问答任务中的表现显著优于NaiveRAG、HippoRAG等方法，在hotpotQA数据集上的F1得分提高了19.6%，而在2wiki数据集上提高了33.5%。KAG已成功应用于蚂蚁集团的电子政务和电子健康等专业知识问答任务中，展现出相比传统RAG技术更高的专业性。

##### 使用场景：

1. **专业知识问答系统** ：通过KAG提供更为精准和专业的问答能力，用于电子政务咨询、医疗健康用户询问等场景。
2. **风险挖掘与合规监测** ：在识别潜在风险应用（如赌博APP）和开发者方面，通过建立专家规则进行有效判断。
3. **企业数据集成和知识图谱构建** ：利用KAG的混合推理能力，从复杂的业务数据中提炼知识，构建可供查询的知识图谱。


KAG不仅提升了专业数据处理的准确性和效率，也为各种行业的智能问答和决策支持提供了强有力的技术支撑。