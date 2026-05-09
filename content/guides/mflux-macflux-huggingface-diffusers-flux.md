---
title: "mflux mflux MFLUX"
date: "2024-01-01 00:00:00+08:00"
description: mflux MFLUX MFLUX（MacFLUX） Huggingface Diffusers FLUX ， Mac 。，，。MFLUX
  ， FLU...
slug: mflux-macflux-huggingface-diffusers-flux
tags:
- numpy
- pillow
- mac
- macflux
- huggingface
draft: false
related_tools:
- pi
- qwen mac menu bar
- codemachine cli
- local voice agents on macos with pipecat
- macos-use
---

## mflux

##### MFLUX 简介

MFLUX（MacFLUX）是基于 Huggingface Diffusers 实现的 FLUX 模型的本地移植，使其能够在 Mac 环境中运行。该项目的核心理念是简约且明确，网络架构硬编码且不依赖配置文件，除了用于分词器的部分。MFLUX 旨在提供一个小巧的代码库，只为表达 FLUX 模型而构建，不掺杂过多抽象，因此优先考虑可读性而非通用性和性能。

所有模型均在 MLX 中从头实现，仅通过 Huggingface Transformers 库使用分词器。其他依赖项包括 Numpy 和 Pillow，用于简单的图像后处理。

##### 使用场景

1. **图像生成** ：MFLUX 适用于生成高质量的图像，用户可以通过输入文本提示（prompt）生成指定场景的图像。例如，用户可以要求生成关于奢华食物的摄影图像。

2. **本地化开发** ：开发者可以在本地 Mac 环境中执行和测试 FLUX 模型，而无需依赖云计算或远程服务器。

3. **内容创作** ：适合艺术家、设计师和内容创作者使用，通过生成特定主题的插图，激发灵感或用于作品展示。

4. **图像比较与验证** ：用户可以通过与 Diffusers 实现的结果进行对比，验证模型输出的一致性和准确性，进而提高创作规范性。


##### 当前限制

* 每次生成图像只能生成一张，不支持负面提示（negative prompts）。
* 图像分辨率固定为（1024, 1024）。


MFLUX 是面向需要简洁性和可读性的开发者或用户的理想工具，尤其是在图像生成领域。随着未来更新，功能和可用性将进一步增强。