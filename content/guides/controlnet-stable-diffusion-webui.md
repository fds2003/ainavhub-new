---
title: "ControlNet for Stable Diffusion WebUI ControlNet for Stable Diffusion WebUI"
date: "2024-01-01 00:00:00+08:00"
description: "ControlNet for Stable Diffusion WebUI ControlNet Stable Diffusion"
slug: "controlnet-stable-diffusion-webui"
draft: false
---

## ControlNet for Stable Diffusion WebUI

ControlNet 是一个为 Stable Diffusion（一种生成图像的人工智能模型）设计的插件，通过这个插件，用户可以在 Stable Diffusion 的 WebUI（网页用户界面）中更加精确地控制图像生成的过程。这篇总结将会以通俗易懂的语言来详细介绍 ControlNet for Stable Diffusion WebUI 的主要功能和使用场景。

## ControlNet 的主要功能

* **模型和预处理器的完美支持：**ControlNet 支持所有可用的模型和预处理器，包括 T2I 风格适配器和 ControlNet 1.1 Shuffle。

* **高分辨率修复支持：** 开启高分辨率修复后，ControlNet 将输出两种不同大小的控制图像，小的用于基础生成，大的用于高分辨率生成。

* **全面兼容各种掩码类型和图像到图像设置：** ControlNet 已经与 WebUI 的不同掩码类型和设置进行了广泛测试，确保用户能够在几乎所有情况下使用 ControlNet。

* **像素完美模式：** 开启此模式后，不需要手动设置预处理器（注释器）的分辨率，ControlNet 将自动计算最佳的注释器分辨率，以确保每个像素与 Stable Diffusion 完美匹配。

* **用户友好的GUI和预处理器预览：** 提供了更加友好的用户界面和预览功能，使得操作更加便捷。

* **对大部分放大脚本的支持：** ControlNet 1.1 支持几乎所有的放大/拼接方法，包括 “Ultimate SD upscale” 等脚本。

* **更多控制模式：** 修复了之前版本中的一些问题，并添加了新的控制模式，使得用户可以更灵活地控制生成的图像。

* **仅引用控制：** 提供了一种不需要任何控制模型的 `reference-only` 预处理器，可以直接使用图片作为参考来引导生成过程。


## 使用场景

* **当你需要更细致地控制生成的图像时：** 例如，你想根据一些细节（如边缘信息、深度信息）来生成图像，ControlNet 提供了这样的细致控制。

* **进行高分辨率制作时：** 如果你需要生成高分辨率的图像，ControlNet 支持高分辨率修复，可以输出两种不同大小的控制图像。

* **使用不同的掩码类型和图像到图像设置时：** ControlNet 支持 WebUI 的各种设置和掩码类型，可以无障碍地在不同设置下使用。

* **进行专业级别的图像生成时：** 对于需要严格控制生成过程和结果的专业用户或工作室，ControlNet 提供了高级控制功能和灵活的配置选项。


## 安装和使用

要使用 ControlNet for Stable Diffusion WebUI，你需要先在扩展选项卡中通过 URL 进行安装，然后下载所需的模型文件，最后按照指南进行配置和使用。这个过程涉及到在 WebUI 中添加 ControlNet 的功能，并配置好相关模型和设置以优化图像生成过程。

ControlNet for Stable Diffusion WebUI 是一个功能强大的扩展，用于在生成图像时提供更细致的控制。无论你是想要生成高分辨率的艺术作品，还是需要精确控制生成过程的专业人士，ControlNet 都能提供所需的工具和配置选项来满足你的需求。
