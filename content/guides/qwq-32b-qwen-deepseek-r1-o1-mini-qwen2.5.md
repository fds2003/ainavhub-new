---
title: "QwQ-32B"
date: "2024-01-01 00:00:00+08:00"
description: QwQ-32B QwQ-32BQwen，325。，QwQ-32B，，DeepSeek-R1, o1-mini。Qwen2.5，RoPE,
  SwiGLU, RMSNorm, At...
slug: qwq-32b-qwen-deepseek-r1-o1-mini-qwen2.5
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- topp
- const
draft: false
related_tools:
- graph-constrained reasoning
- qwen2.5-omni
- qwen3
- qwenlong-l1
- qwen mac menu bar
---

## QwQ-32B

QwQ-32B是Qwen系列的一个推理模型，参数量为325亿。相较于传统的指令微调模型，QwQ-32B具备更强的推理能力，尤其在解决难题时表现更佳，可以与DeepSeek-R1, o1-mini等先进推理模型相媲美。它基于Qwen2.5，使用了RoPE, SwiGLU, RMSNorm, 和 Attention QKV bias等技术。模型上下文长度为131,072 tokens。为了获得最佳性能，建议在生成时加入"\n"引导模型思考，并使用适当的采样参数(Temperature=0.6, TopP=0.95, TopK=20-40)。 对于长输入，可以使用YaRN技术优化。 该模型支持vLLM部署。