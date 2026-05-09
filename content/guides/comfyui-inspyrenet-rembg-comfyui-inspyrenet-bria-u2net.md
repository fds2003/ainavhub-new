---
title: "ComfyUI-Inspyrenet-Rembg"
date: "2024-01-01 00:00:00+08:00"
description: "ComfyUI-Inspyrenet-Rembg ComfyUI-Inspyrenet-Rembg ComfyUI-Inspyrenet-Rembg"
slug: "comfyui-inspyrenet-rembg-comfyui-inspyrenet-bria-u2net"
draft: false
---

## ComfyUI-Inspyrenet-Rembg

# ComfyUI-Inspyrenet-Rembg

ComfyUI-Inspyrenet-Rembg是一个基于[ComfyUI](<https://github.com/comfyanonymous/ComfyUI>)节点实现的背景移除工具，采用了[InSPyReNet](<https://github.com/plemeri/InSPyReNet>)技术。

## 特点

1. **高级背景移除质量** ：相比其他方法（如BRIA、U2Net、IsNet等），InSPyReNet的背景移除效果明显更好。
2. **商业用途许可** ：InSPyReNet采用MIT许可证，允许商业用途。
3. **批量处理** ：可接受图像批量输入，适用于视频帧处理。
4. **优化性能** ：专为图像批处理优化，是最快的背景移除节点。
5. **结果输出** ：同时输出图像和相应的掩码文件。
6. **终端进度显示** ：在终端中显示处理进度。


## 安装

##### 简单方法

在ComfyUI-Manager中搜索`ComfyUI-Inspyrenet-Rembg`并点击安装即可。

##### 手动安装

1. 在ComfyUI的`custom_nodes`文件夹中打开终端并运行以下命令：

git clone https://github.com/john-mnz/ComfyUI-Inspyrenet-Rembg.git


2. 安装依赖，运行以下命令：

cd ComfyUI-Inspyrenet-Rembg
pip install -r requirements.txt


首次使用时会自动下载预训练模型。

## 使用注意事项

如果启用了`torchscript_jif`，模型会使用PyTorch内置的TorchScript JIT编译器进行跟踪。这样会导致初始化过程有所延迟，但能够减少推理时间和GPU内存占用。

## 基本工作流

您可以下载并将以下文件拖拽到ComfyUI中以实现基本工作流：[inspyrenet-rembg-basic-workflow.json](<https://github.com/user-attachments/files/16311386/inspyrenet-rembg-basic-workflow.json>)。

## 展示样例

![展示1](https://github.com/user-attachments/assets/bbc36135-1913-4ba3-83e4-6ab86e65ec98)

![展示2](https://github.com/user-attachments/assets/e1817609-7645-4d72-b187-0cf5e74cb6c5)

## 使用场景

1. **视频处理** ：适用于需要背景移除的动画或视频帧处理，提升视频质量。
2. **照片编辑** ：专业的图像编辑工作中，快速高效地移除背景，以便进行进一步处理。
3. **电子商务** ：去除产品照片背景，使产品更突出，提升商业展示效果。
4. **自动化工作流** ：结合其他图像处理节点，实现复杂的自动化图像处理工作流。
