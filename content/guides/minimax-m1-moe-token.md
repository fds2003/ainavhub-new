---
title: "MiniMax-M1"
date: "2024-01-01 00:00:00+08:00"
description: MiniMax-M1 MiniMax-M1 MoE)
slug: minimax-m1-moe-token
tags:
- calling
- deepseek
- r1
- cispo
- moe
draft: false
related_tools:
- universal tool calling protocol
- train-deepseek-r1
- deepseek rag chatbot
- deepseek 模型兼容性检测
- deepseek open infra
---

## MiniMax-M1

MiniMax-M1是一个大型混合注意力推理模型，它具有以下主要功能和特点：

1. **混合专家模型(MoE)** ：该模型采用混合专家模型架构，该架构结合了闪电注意力机制。总共有4560亿个参数，每个token激活459亿个参数。

2. **超长上下文** ：原生支持100万token的上下文长度，是DeepSeek R1的8倍。

3. **高效计算** ：由于采用了闪电注意力机制，MiniMax-M1在测试时能够有效地扩展计算能力，例如，在生成10万个token时，其FLOPs消耗量仅为DeepSeek R1的25%。

4. **强化学习训练** ：使用大规模强化学习(RL)进行训练，涉及数学推理到基于沙盒的真实世界软件工程环境等多种问题。

5. **CISPO算法** ：采用了名为CISPO的新型算法，该算法裁剪重要性抽样权重而非token更新，优于其他竞争性RL变体。

6. **模型变体** ：提供MiniMax-M1模型的两个版本，分别具有[40K](<https://huggingface.co/MiniMaxAI/MiniMax-M1-40k>)和[80K](<https://huggingface.co/MiniMaxAI/MiniMax-M1-80k>)的思考预算。

7. **优越性能** ：在标准基准测试中，该模型优于其他强大的开放权重模型，尤其是在复杂的软件工程、工具使用和长上下文任务方面。

8. **支持Function Calling** ：该模型支持函数调用功能，可以识别何时需要调用外部函数，并以结构化格式输出函数调用参数。

9. **在线服务和API** ：提供具有在线搜索能力的Chatbot以及面向开发者的在线API。


简而言之，MiniMax-M1凭借其混合MoE架构、超长上下文处理能力、强化学习训练以及在复杂任务上的卓越性能，为下一代语言模型智能体奠定了坚实的基础。