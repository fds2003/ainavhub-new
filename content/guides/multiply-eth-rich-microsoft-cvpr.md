---
title: "MultiPly"
date: "2024-01-01 00:00:00+08:00"
description: MultiPly MultiPly  ETH Z
slug: multiply-eth-rich-microsoft-cvpr
tags:
- microsoft
- cvpr
- multiply
- rich
- smpl
draft: false
related_tools:
- microsoft copilot for finance
- microsoft power automate
- fire enrich
- oliva multi-agent assistant
- langgraph multi-agent swarm
---

## MultiPly

MultiPly 是一个创新框架，用于从单目视频中重建多个不同人的3D模型。团队成员包括来自ETH Zürich的科学家以及Microsoft的研究人员。该研究成果将在2024年的计算机视觉与模式识别会议（CVPR）上以口头报告的形式展示。

以下是MultiPly框架的主要特点和方法：

##### 主要特点：

1. **重建难度** ：MultiPly 解决了从单目视频中重建多个动态和交互的人的挑战，尤其是在没有先验知识和仅有短视频序列的情况下。
2. **技术创新** ：提出了一种分层的神经表示法，通过逐层的可微分体积渲染来从视频中学习这种表示。
3. **分割方法** ：引入了一种混合实例分割方法，结合了自监督的3D分割和可提示的2D分割模块，即使在人物接近互动的情况下也能提供可靠的实例分割监督。
4. **优化策略** ：提出了一个基于置信度的优化公式，通过光度信息精细化人类姿态，并施加物理上合理的约束，确保3D重建的时间一致性和高保真度。


##### 方法：

1. **几何采样** ：给定图像和SMPL的估计，从相机视角采样人类点和背景点，利用NeRF++框架进行处理。
2. **逆向变形** ：将采样的人类点逆向变形到规范空间，并评估特定人物的隐式网络以获得SDF和辐射值。
3. **层级渲染** ：将以上信息进行层级体积渲染，从图像中学习隐式网络。
4. **闭环分割** ：通过更新SAM的提示动态，在分割实例方面建立闭环优化。
5. **信心优化** ：对于不可靠帧仅优化姿态参数，而对于可靠帧则联合优化姿态和隐式网络。


##### 结果：

MultiPly框架能够生成完整的人形，且轮廓清晰、空间一致的3D重建效果。实验结果显示出其在公开数据集和真实场景视频中的优越表现。

##### 数据集：

为了评估方法的通用性，研究团队采集了名为单目多人（Monocular Multi-huMan, MMM）数据集，其中包括6个序列，每个序列含有2到4个人。部分序列在控制环境下拍摄，并有定量评估的真实数据注释，其余在自然环境中拍摄，供定性评估使用。

##### 鸣谢：

该研究得到瑞士SERI Consolidation Grant “AI-PERCEIVE"和Microsoft Research瑞士JRC Grant的部分支持，感谢所有数据集参与者和Juan Zarate的校对和讨论。

##### 参考文献（BibTeX）：


@inproceedings{multiply,
title={MultiPly: Reconstruction of Multiple People from Monocular Video in the Wild},
author={Jiang, Zeren and Guo, Chen and Kaufmann, Manuel and Jiang, Tianjian and Valentin, Julien and Hilliges, Otmar and Song, Jie},
booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
month     = {June},
year      = {2024},
}


更多视频和代码将在未来发布，敬请期待。