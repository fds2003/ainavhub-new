---
title: "New fine-tuning API features New fine-tuning API features OpenAI"
date: "2024-01-01 00:00:00+08:00"
description: New fine-tuning API features OpenAI fine-tuning
slug: fine-tuning-api-features-openai-fine-tu
tags:
- biases
- fine-tuning
- features
- checkpoint
- comparative
draft: false
related_tools:
- qwen3 fine-tuning playground
- openaifine-tuning（微调） api的新功能
- fine-tune claude 3 haiku
- sora 2 playground
- gemini multimodal playground
---

## New fine-tuning API features

OpenAI最近介绍了fine-tuning（微调） API的一些新功能，这些功能旨在为开发者提供更多关于微调模型的控制权，并且扩展了定制模型程序。这里我会用通俗的语言来详细总结这些功能，以及在什么情况下会使用它们。

新的Fine-tuning API功能主要包括：

1. **Epoch-based Checkpoint Creation（基于周期的检查点创建）** ：这个功能允许每进行一次训练周期就自动产生一个微调过的模型检查点。这减少了之后再训练（尤其是在过拟合情况下）的需要。

2. **Comparative Playground（对比游乐场）** ：新的UI支持让开发者可以在单一提示下对多个模型或微调截图的输出进行人工评估，从而比较模型质量和性能。

3. **Third-party Integration（第三方集成）** ：从现在开始，API支持与第三方平台（如Weights and Biases）集成，使开发者可以将详细的微调数据分享给他们的技术栈的其他部分。

4. **Comprehensive Validation Metrics（全面的验证指标）** ：提供能够在整个验证数据集上计算损失和准确性的功能，而不仅仅是在一个采样批次上，为模型质量提供更好的见解。

5. **Hyperparameter Configuration（超参数配置）** ：允许从仪表板上配置可用的超参数，而不只是通过API或SDK。


此外，还**改进了Fine-Tuning Dashboard（微调仪表板）** ，包括配置超参数、查看更详细的训练指标、以及从之前的配置重新运行任务的能力。

##### 在什么样的情况下会使用这些功能？

1. **提升特定任务的模型性能** ：如果你的组织需要训练一个模型来更好地完成特定任务——如生成特定编程语言的更好的代码、以特定格式总结文本，或基于用户行为制作个性化内容——那么fine-tuning API非常适合。

2. **减少成本和延迟** ：比如Indeed利用fine-tuning成功改进了个性化推荐功能，大幅减少了提示中的标记数量，降低了成本和延迟。

3. **与第三方工具集成** ：如果你需要将微调过程的详细数据与你的其他工具或平台集成，新API支持的第三方集成功能可以派上用场。

4. **提高模型质量和性能的细粒度控制** ：借助新的UI、全面验证指标、和超参数配置等功能，可以更精细地控制和优化模型训练过程。


通过使用这些新功能，开发者和组织可以更有效地训练和调整他们的模型，以实现特定的业务目标，同时降低成本和提升效率。无论是优化已有的模型，还是从头开始构建一个全新的定制模型，这些新功能都提供了强有力的支持。