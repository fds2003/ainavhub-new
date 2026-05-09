---
title: "LightReasoner"
date: "2024-01-01 00:00:00+08:00"
description: LightReasoner LightReasoner AI
slug: lightreasoner-slm-llm
tags:
- const
- lightreasoner
- gitalk
- sft
- slm
draft: false
related_tools:
- graph-constrained reasoning
- lightreasoner
- rllm
- onefilellm
- llmanager
---

## LightReasoner

LightReasoner项目颠覆了传统AI训练模式，旨在通过小型语言模型（SLM）“教授”大型语言模型（LLM）来显著提升其推理能力，其核心理念在于“更智能而非更艰难”的AI改进路径。该方法通过战略性地选择高影响力的关键推理步骤，而非对所有token进行详尽训练，实现了卓越的效率突破，相比传统监督微调（SFT）方法，在训练时间、采样问题和调优token数量上分别大幅减少90%、80%和99%。LightReasoner采用独特的三阶段轻量级框架，包括利用KL散度检测自动识别关键步骤、通过专家模型与业余模型之间的行为差异进行对比监督以捕捉专家优势，以及通过自我蒸馏来内化专家能力，从而在无需依赖人工标注或昂贵拒绝采样的情况下，精确识别并解决推理瓶颈。项目的成功关键在于专家与业余模型之间适当的领域专业知识差距，而非模型规模本身，这使得LightReasoner能够在多项基准测试中取得显著性能提升和强大的泛化能力，同时极大地降低了计算成本和数据需求，使高质量的AI训练更具可访问性，并提供持久的独立推理优势。