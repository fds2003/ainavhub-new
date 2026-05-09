---
title: "MotionFollower"
date: "2024-01-01 00:00:00+08:00"
description: MotionFollower MotionFollower  MotionFollower
slug: motionfollower-editing-video-motion-via
tags:
- score-guided
- zihao
- zhi-qi
- diffusion
- yu-gang
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## MotionFollower

**MotionFollower** 是一种用于视频运动编辑的轻量级分数引导扩散模型，官方项目仓库地址为 [MotionFollower](<https://francis-rings.github.io/MotionFollower/>)。

##### 项目介绍

论文标题：**MotionFollower: Editing Video Motion via Lightweight Score-Guided Diffusion** 作者：Shuyuan Tu、Qi Dai、Zihao Zhang、Sicheng Xie、Zhi-Qi Cheng、Chong Luo、Xintong Han、Zuxuan Wu、Yu-Gang Jiang

##### 摘要

尽管基于扩散的视频编辑模型在改变视频属性方面取得了显著进展，但在保持原始主体外观和背景的同时修改运动信息方面的研究仍然较少。为了解决这个问题，研究团队提出了**MotionFollower** ，它是一种用于视频运动编辑的轻量级分数引导扩散模型。

**核心技术**

1. **条件控制去噪过程** ：利用两个轻量级信号控制器（一个用于姿态，另一个用于外观），这些控制器通过卷积块实现，而不涉及复杂的注意力计算。
2. **评分指导原则** ：基于双分支架构（重构和编辑分支）设计，增强了纹理细节和复杂背景的建模能力。
3. **一致性正则器和损失** ：在分数估计过程中应用多个一致性正则器和损失，确保模型在进行运动修改时保留原始背景细节和主体外观。


##### 实验结果

实验结果表明，MotionFollower在运动编辑能力上具有竞争力。与最先进的运动编辑模型MotionEditor相比，MotionFollower实现了GPU内存约80%的减少，同时提供了更好的运动编辑性能，并支持大范围的摄像机移动和动作。

##### 适用场景

MotionFollower适用于以下场景：

* 视频运动修改：在保持视频主体和背景原样的前提下，修改视频中的运动信息。
* 视频特效制作：为视频添加特定的运动效果。
* 动画与影视：用于动画电影和影视制作中的运动编辑、特效生成等。


##### 联系方式

如有任何建议或觉得该项目有用，可以通过以下邮件联系： Email: [francisshuyuan@gmail.com](<mailto:francisshuyuan@gmail.com>)

如果觉得该项目有用，请考虑引用：


@article{tu2024motionfollower,
title={MotionFollower: Editing Video Motion via Lightweight Score-Guided Diffusion},
author={Shuyuan Tu and Qi Dai and Zihao Zhang and Sicheng Xie and Zhi-Qi Cheng and Chong Luo and Xintong Han and Zuxuan Wu and Yu-Gang Jiang},
journal={arXiv preprint arXiv:2405.20325},
year={2024}
}