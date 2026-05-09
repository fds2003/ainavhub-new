---
title: "ComfyUI-Bringing-Old-Photos-Back-to-Life ComfyUI-Bringing-Old-Photos-Back-to-Lif"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI-Bringing-Old-Photos-Back-to-Life ComfyUI-Bringing-Old-Photos-Back-to-Life
  Bringing-Old-Photos-Back-to-Life
slug: comfyui-bringing-old-photos-back-to-life-bringing-old-photos-back-to-life-comfyui
tags:
- pytorch
- python.exe
- cd
- python
- vae
draft: false
related_tools:
- ttt-lm-pytorch
- magicdrivedit
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## ComfyUI-Bringing-Old-Photos-Back-to-Life

ComfyUI-Bringing-Old-Photos-Back-to-Life是一个用于增强旧照片或低质量图像的工具，基于[微软的“Bringing-Old-Photos-Back-to-Life”](<https://github.com/microsoft/Bringing-Old-Photos-Back-to-Life>)项目。该工具可以在ComfyUI中运行，具备自动擦除划痕和面部增强的可选功能。使用该工具需要安装一些小型的检查点和VAE。

##### 使用场景

1. **旧照片修复** ：可以用来修复老旧、损坏或低质量的照片，使其恢复到原有的清晰度和细节。
2. **面部增强** ：通过先进的面部检测和增强技术，可以进一步提高照片中的面部细节和质量。
3. **划痕去除** ：自动检测和去除照片中的划痕和杂质，使照片看起来更加完美。


##### 安装和设置

###### 前提条件

确保在安装前激活虚拟环境，并根据需要在pip命令前加上目标Python可执行文件的路径：


cd ./ComfyUI-Bringing-Old-Photos-Back-to-Life/
path\to\python.exe pip install -r requirements.txt --upgrade


另外需要安装PyTorch和TorchVision。

###### 安装问题解决

在Windows上安装dlib可能遇到问题，可以尝试以下方法：

1. 手动安装所需的软件包：


path\to\python.exe -m pip install easydict matplotlib opencv-python scikit-image scipy
path\to\python.exe -m pip install cmake
path\to\python.exe -m pip install dlib==19.24.1


2. 寻找预编译的dlib轮子文件：


path\to\python.exe -m pip install path\to\dlib.whl


##### 模型下载和放置

需要下载多个模型文件并将其放置在指定目录中，例如`models/vae/`和`models/checkpoints/`，具体包括BOPBTL模型、面部检测及增强模型等。

##### 工作流

提供多种工作流示例，包括带有划痕检测和面部增强的完整工作流，以及仅面部增强的工作流。

##### 提示

* 处理过程中可能需要将图像缩放、裁剪或填充到最近的8或16像素，以避免崩溃。
* 如果未检测到面部，“Detect Faces (Dlib)“和"Enhance Faces"节点将返回原始图像。


##### 引用

如果在学术研究中使用该工具，请引用相关论文：


@inproceedings{wan2020bringing,
title={Bringing Old Photos Back to Life},
author={Wan, Ziyu and Zhang, Bo and Chen, Dongdong and Zhang, Pan and Chen, Dong and Liao, Jing and Wen, Fang},
booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
pages={2747--2757},
year={2020}
}

@article{wan2020old,
title={Old Photo Restoration via Deep Latent Space Translation},
author={Wan, Ziyu and Zhang, Bo and Chen, Dongdong and Zhang, Pan and Chen, Dong and Liao, Jing and Wen, Fang},
journal={arXiv preprint arXiv:2009.07047},
year={2020}
}


##### 许可

此工具和预训练模型遵循MIT许可证，具体请参见LICENSE文件。该项目采用了[微软开源行为准则](<https://opensource.microsoft.com/codeofconduct/>)。