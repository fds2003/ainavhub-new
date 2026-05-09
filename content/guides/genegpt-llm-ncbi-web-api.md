---
title: "GeneGPT"
date: "2024-01-01 00:00:00+08:00"
description: GeneGPT GeneGPT（LLM）。，NCBIWeb API，API，LLM“”。 GeneGPT： LLM...
slug: genegpt-llm-ncbi-web-api
tags:
- bing
- chatgpt
- geneturing
- llm
- api
draft: false
related_tools:
- binglish
- linly-dubbing
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
---

## GeneGPT

GeneGPT是一个针对生物医学信息访问改进的工具增强型大型语言模型（LLM）。它利用特定于领域的工具，即NCBI的Web API，通过教授大型语言模型如何执行API调用来回答信息检索问题，从而解决了传统LLM在处理专业知识时常出现的“幻觉”问题。

##### GeneGPT的工作原理和特点：

1. **培训LLM利用工具：** GeneGPT通过在上下文学习中结合新的解码算法，教授LLM如何识别和执行API调用。这意味着当你询问有关生物医学的问题时，GeneGPT不仅依赖其巨大的语料库来产生答案，而且还会实时利用特定的Web API获取最新和最准确的信息。
2. **突破性的性能：** 在八项GeneTuring任务上，GeneGPT的平均得分为0.83，远远超过了以前的最佳模型，比如新的Bing（0.44）、生物医学专门的BioGPT（0.04）和ChatGPT（0.12）。
3. **更好的学习效果：** 研究表明，使用API演示比阅读文档更有效地帮助LLM学习如何利用工具。
4. **能够处理多步骤问题：** GeneGPT可以泛化到更长链的API调用上，解决多跳问题。


##### 使用场景

GeneGPT在需要准确、更新的生物医学信息时特别有用。它适用于有以下需求的情况：

* **研究者** ：寻找特定基因、疾病关联、基因所在位置、DNA比对信息等。
* **生物信息学家** ：需要进行多物种DNA比对、查找蛋白质编码基因、基因SNP（单核苷酸多态性）关联等复杂查询。
* **医疗卫生专业人员** ：虽然GeneGPT的信息不应直接用于临床决策，但它可以作为获取最新科研进展和相关生物标记物信息的工具。


##### 设置和使用

* 安装Python环境和所需依赖后，用户需要一个OpenAI的API密钥才能运行GeneGPT。
* 运行代码前，需要将密钥添加到配置文件中。
* GeneGPT及其“精简版”可以通过命令行执行，用户可以根据需要选取不同的文档和演示来进行上下文学习。
* 提供了评估脚本来衡量GeneGPT在特定任务上的表现。