---
title: "KPU - Maisa KPU - Maisa KPU"
date: "2024-01-01 00:00:00+08:00"
description: KPU - Maisa KPU Knowledge Processing Unit
slug: kpu-maisa-knowledge-processing-unit
tags:
- vlm
- const
- gitalk
- kpu
- clientsecret
draft: false
related_tools:
- fastvlm
- graph-constrained reasoning
- 'graphrag: improving global search via dynamic community selection'
- rllm
- onefilellm
---

#### KPU - Maisa

KPU（Knowledge Processing Unit）是一个专有的丰富框架，利用LLM的能力，通过在一个开放性系统中解耦推理和数据处理，能够解决复杂任务。KPU架构包括推理引擎、执行引擎和虚拟上下文窗口这三个主要组件。推理引擎负责制定解决用户任务的计划，依赖LLM或VLM以及可用工具。执行引擎接收推理引擎的指令并执行，将结果反馈给推理引擎进行再规划。虚拟上下文窗口管理数据和信息的输入输出，确保信息传递到推理引擎，并将数据保留在执行引擎中。这种数据和信息的输入输出管理不仅涵盖用户提示和文件，还包括外部来源，如互联网、维基百科、可下载文件等。KPU架构的推理和命令执行解耦允许LLM专注于推理，摆脱幻觉、数据处理或获取当前信息的脆弱操作。综合来看，KPU架构打开了对大量数据和多模态内容任务质量和性能的未来分析，解决开放问题、与数字系统（如API和数据库）互动以及真实性等方面的挑战。