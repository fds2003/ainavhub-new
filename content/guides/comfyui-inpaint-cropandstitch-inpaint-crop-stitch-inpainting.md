---
title: "ComfyUI-Inpaint-CropAndStitch ComfyUI-Inpaint-CropAndStitch ComfyUI-Inpaint-Crop"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-Inpaint-CropAndStitch ComfyUI-Inpaint-CropAndStitch  ComfyUI-Inpaint-CropAndStitch '
slug: comfyui-inpaint-cropandstitch-inpaint-crop-stitch-inpainting
tags:
- comfyui-inpaint-cropandstitch
- crop
- stitch
- inpaint
- inpainting
draft: false
related_tools:
- pai
---

## ComfyUI-Inpaint-CropAndStitch

##### ComfyUI-Inpaint-CropAndStitch 简单介绍

ComfyUI-Inpaint-CropAndStitch 是一个图像处理工具，分为两个主要功能节点：“Inpaint Crop” 和 “Inpaint Stitch”。这个工具的主要目的是通过裁剪和填充图像的一部分，然后将处理后的图像与原图拼接，来实现高效的图像修复（Inpainting）。

* **“Inpaint Crop"节点** ：在进行图像处理前，先将图像中的某个区域裁剪出来，可以通过设置遮罩、像素扩展或者扩展系数来指定裁剪的区域。这种方法可以提升处理效率和速度。

* **“Inpaint Stitch"节点** ：将修复后的图像部分重新拼接回原始图像中，不会改变未被遮罩的部分。


##### 什么时候会用到ComfyUI-Inpaint-CropAndStitch？

你可能会在以下情况下使用这个工具：

1. **高效的图像修复** ：当你只需要修复图像的某一小部分时，直接对整个图像进行处理会非常耗时。通过裁剪需要修复的部分进行处理，可以大幅提升速度。

2. **复杂背景环境** ：有时你需要在保持图像上下文（背景信息）的情况下进行修复，通过扩展裁剪区域可以提供更多的背景信息，从而得到更好的修复效果。

3. **高分辨率图像** ：在处理高分辨率图像时，通过对小部分图像进行放大处理，然后再缩放回原大小，可以实现更细腻的修复效果。

4. **灵活的裁剪和拼接** ：如果你需要灵活地裁剪、扩展、缩放和拼接图像的特定部分，这个工具可以提供丰富的参数和选择，让你定制化处理过程。


##### 工具的参数和功能具体解释

* **context_expand_pixels** ：指定在遮罩周围扩展的像素数。为处理提供更多的上下文（背景信息），提升修复效果。

* **context_expand_factor** ：指定按照遮罩大小的比例来扩展上下文区域，例如1.1表示扩展 10% 的遮罩大小。

* **invert_mask** ：是否完全反转遮罩，意思是仅保留原本标记的部分，而不是移除标记的部分。

* **fill_mask_holes** ：是否填补遮罩中的任何空洞，使被完全包围的区域也成为遮罩的一部分。

* **rescale_algorithm** ：选择缩放算法。bislerp 是超高清但非常慢的算法，适合拼接；bicubic是高质量且更快的算法，适合裁剪。

* **mode** ：选择自由大小（Free size）或固定大小（Forced size）。

* 自由大小（Free size）：可以选择使用内部缩放因子（internal_rescale_factor）来调整内容的大小，然后再拼接回去；使用padding对齐到标准尺寸。
* 固定大小（Forced size）：使用强制大小（force_size）将内容放大到指定尺寸，然后再缩小并拼接回去。适合特定大小的修复，比如SDXL。


具体实例和工作流程可以参考文档中提供的示例，这些示例展示了不同模式下如何使用这个工具：

* **简单自由大小修复** ：处理小部分图像，比处理整个图像快约20倍。
* **上下文遮罩** ：通过扩展上下文区域，提供更好的修复效果，同时仍然比处理整个图像快。
* **放大自由大小修复** ：提高小部分图像的分辨率进行处理，再拼接回原图。
* **放大固定大小修复** ：将小部分图像放大到具体尺寸（如512），然后处理并缩小拼接回去。