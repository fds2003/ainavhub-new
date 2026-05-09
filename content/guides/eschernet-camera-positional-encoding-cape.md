---
title: "EscherNet"
date: "2024-01-01 00:00:00+08:00"
description: EscherNet EscherNet EscherNet
slug: eschernet-camera-positional-encoding-cape
tags:
- franka16
- synthesis
- positional
- rtmv
- novel
draft: false
related_tools:
- cameractrl
- poetry camera
- nxtscape browser
- ktransformers
- transformer debugger
---

## EscherNet

EscherNet是一种生成模型，旨在解决可扩展视图合成问题。通过多视图条件扩散模型，EscherNet能够学习结合相机位置信息编码（Camera Positional Encoding, CaPE）的隐式和生成3D表示，从而在任意数量的参考视图和目标视图之间实现精确和连续的相机转换控制。这一模型利用自/交叉注意力机制将相机姿态信息嵌入Transformer中，支持4自由度（4DoF）和6自由度（6DoF）的相机位置信息编码。

##### 使用场景

1. **新颖视图合成（Novel View Synthesis, NVS）** ：EscherNet可以从多个参考视图生成新视图，这在2D和3D对象的呈现中尤其有用。例如：

* **对象数据集（GSO、RTMV、NeRF Synthetic、Franka16）** ：生成随机抽样的新视图。
* **文本到图像生成（Text2Img）** ：通过互联网收集的图像或使用生成模型创建的图像集成到新视图生成中。
2. **3D重建** ：利用生成的新视图，EscherNet可以与3D重建算法（例如NeuS）配合使用，生成3D模型并评估如Chamfer距离和IoU等3D指标。


##### 部署和评估

* **安装** ：通过Conda环境配置文件安装所需的环境。
* **演示** ：通过bash脚本运行演示以生成新视图。
* **训练** ：使用Objaverse数据集进行训练，并支持多GPU配置。
* **评估** ：提供评估脚本，通过设置不同参数进行新视图合成的2D和3D评估。
* **示例界面** ：待发布的Gradio界面可以用来构建本地演示。


EscherNet的开发依赖于多个开源项目，如Zero-1-to-3、SyncDreamer、MVDream等，研究人员提供了多种训练和评估工具以方便实验和应用。