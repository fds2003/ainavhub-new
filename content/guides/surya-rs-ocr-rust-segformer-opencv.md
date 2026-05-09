---
title: "surya-rs"
date: "2024-01-01 00:00:00+08:00"
description: surya-rs surya-rs  OCR
slug: surya-rs-ocr-rust-segformer-opencv
tags:
- gpu
- opencv
- ocr
- transformer
- segformer
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-ocr-obsidian
- uniocr
- olmocr
---

## surya-rs

`surya-rs` 是一个文档光学字符识别（OCR）工具包的 Rust 实现，能够识别多种语言的文档。它基于修改后的 Segformer、OpenCV 和 donut transformer 进行建构。这个工具的存在是为了提供一种高效、可靠地从图像中识别文字的方法，特别是在处理多语言文档时更显其优势。

在下面的场景中，你可能会考虑使用 `surya-rs`：

1. **多语言文档的文字识别** ：如果你需要处理包含多种语言的文档，`surya-rs` 提供了对多语言内容的支持，能够识别和处理多种不同语言的文字。

2. **大规模文档处理** ：由于 `surya-rs` 支持批处理和GPU加速，因此它特别适合需要批量处理大量文档的场合，如数字图书馆、档案管理，以及自动化文档处理系统等。

3. **高精度OCR需求** ：基于 Segformer 和 donut transformer 等先进的模型和技术，`surya-rs` 能够提供高精度的文本检测和识别，适用于对准确率要求较高的场景。

4. **研究和开发** ：对于研究者和开发者来说，`surya-rs` 作为一个开源项目，提供了灵活性和可扩展性，可以用作研究OCR领域新技术、新算法的基础平台，或者集成到其他Rust语言开发的应用中。


使用 `surya-rs` 的具体步骤主要包括：

* 安装 Rust 工具链、llvm 和 opencv；
* 通过 cargo 构建和安装 `surya-rs`；
* 使用 `surya` 命令行工具处理图像。


`surya-rs` 已经实现了图像预处理、文本检测（包括加载权重、产生热力图和亲和图、生成边界框、图像的分割和拼接等）、但识别部分（如 swin 编码器、MoE MBart、donut transformer加载等）还在开发中。

该工具非常适合需要在 Rust 环境中执行高性能、高精度OCR任务的开发者。无论是作为独立的OCR工具，还是作为其他Rust项目的库进行集成，`surya-rs` 都提供了强大且灵活的功能。