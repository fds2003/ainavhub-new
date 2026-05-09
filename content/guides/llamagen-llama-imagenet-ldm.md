---
title: "LlamaGen"
date: "2024-01-01 00:00:00+08:00"
description: 'LlamaGen LlamaGen  Llama '
slug: llamagen-llama-imagenet-ldm
tags:
- imagenet
- hugging
- llm
- llama
- face
draft: false
related_tools:
- hugging face 表情包
- huggingchat assistants - 免费的可定制的ai聊天助手
- qwen1.5 - qwen1.5更新了六种尺寸的基础和聊天模型，并在hugging face转换器集成了其代码，以提升开发者体验，并支持多种语言和长上下文处理。
- rllm
- onefilellm
---

## LlamaGen

LlamaGen 由香港大学和字节跳动团队开发

基于 Llama 架构的图像生成模型，参数量从 1.11 亿到 31 亿不等。这些模型采用自回归方式生成图像，并在 ImageNet 256 × 256 基准测试中取得了优于 LDM 等流行扩散模型的性能。

LlamaGen 是一组面向图像生成的新型模型家族，旨在将大型语言模型（如 Llama）的经典“下一个词预测”范式应用于视觉生成领域。这种方法验证了在适当扩展的条件下，传统的自回归模型在没有视觉信号上的归纳偏置的情况下，能否实现最先进的图像生成性能。LlamaGen 通过重新审视图像标记器的设计空间、图像生成模型的可扩展性属性以及训练数据的质量，提升了自动回归模型在图像生成任务中的表现。

在这个项目中，发布了如下内容：

1. 两个不同下采样比例（16 和 8）的图像标记器。
2. 七个具有 1 亿到 30 亿参数不等的类别条件生成模型。
3. 两个具有 700M 参数的文本条件生成模型。
4. 在 Hugging Face Spaces 平台上提供的在线演示，用于运行预训练模型。
5. 支持的 LLM 服务框架，能实现 300% - 400% 的速度提升。


##### LlamaGen 的使用场景

1. **类别条件图像生成** ：模型可以基于给定的类别生成图像。适用于需要生成特定类别图像的场景，如数据增强、营销素材制作等。通过下载预训练模型，可以快速生成高质量的类别条件图像。
2. **文本条件图像生成** ：模型可以根据输入的文本生成相应的图像。该功能适合需要根据描述生成图像的应用场景，如广告创作、故事可视化等。
3. **图像生成服务部署** ：借助高效的服务框架，可将 LlamaGen 模型部署在服务器上，以实现高吞吐量的图像生成服务，适合需要实时生成图像的在线应用。
4. **研究和开发** ：LlamaGen 提供的预训练模型和代码，对于研究者和开发者而言，是一个探索自回归模型在图像生成领域应用的宝贵资源。


##### 示例演示

用户可以通过简单的命令行操作，使用预训练模型生成图像。以下是一个类别条件图像生成的示例：


python3 autoregressive/sample/sample_c2i.py --vq-ckpt ./pretrained_models/vq_ds16_c2i.pt --gpt-ckpt ./pretrained_models/c2i_L_384.pt --gpt-model GPT-L --image-size 384
# 或
python3 autoregressive/sample/sample_c2i.py --vq-ckpt ./pretrained_models/vq_ds16_c2i.pt --gpt-ckpt ./pretrained_models/c2i_XXL_384.pt --gpt-model GPT-XXL --from-fsdp --image-size 384


##### 在线和本地Demo

用户可以通过 [Hugging Face Spaces](<https://huggingface.co/spaces/FoundationVision/LlamaGen>) 上提供的在线演示运行预训练模型，或者在本地通过 Gradio 进行交互式演示。

通过这些创新和多样化的应用场景，LlamaGen 为图像生成领域带来了新的可能性和高效解决方案。