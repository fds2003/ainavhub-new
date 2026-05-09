---
title: "AutoCodeBench"
date: "2024-01-01 00:00:00+08:00"
description: AutoCodeBench AutoCodeBench AutoCodeGen
slug: autocodebench-autocodegen-llm
tags:
- ba3af7dcb9cb
- const
- gitalk
- clientid
- autocodebench-complete
draft: false
related_tools:
- graph-constrained reasoning
- autocodebench
- ocode
- rllm
- onefilellm
---

## AutoCodeBench

AutoCodeBench是由腾讯混元团队推出的一个创新项目，旨在解决现有代码生成基准测试面临的手动标注耗时、难以扩展以及语言和难度分布不均等问题。其核心是一个创新框架，通过**AutoCodeGen** 工作流利用大语言模型（LLM）与沙箱环境交互，自动生成高质量、可扩展的测试输入和输出，从而构建了大规模多语言代码生成数据集。该项目推出的**AutoCodeBench** 包含3,920个编程问题，涵盖20种编程语言，以其高难度、实用性和语言多样性为特色。为提供更灵活的评估方案，它还衍生出**AutoCodeBench-Lite** （1,586个问题，针对一致可解性优化）和**AutoCodeBench-Complete** （1,000个问题，专为评估基础模型而设计）。此外，**MultiLanguageSandbox** 作为其关键组件，提供了一个鲁棒、安全且高性能的多语言代码执行沙箱服务，支持30多种编程语言的编译和执行，从而使用户能够高效地对大语言模型的代码生成能力进行全面且准确的评估。