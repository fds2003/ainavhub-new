---
title: "EvTexture"
date: "2024-01-01 00:00:00+08:00"
description: 'EvTexture EvTexture  ICML 2024 '
slug: evtexture-icml-event-driven-texture-enhancement
tags:
- icml
- video
- event-driven
- vsr
- texture
draft: false
related_tools:
- hunyuanvideo-i2v
- hunyuanvideo-avatar
- paper2video
- arc-hunyuan-video-7b
- ai video transcriber
---

## EvTexture

**EvTexture** 是一篇发表在 ICML 2024 会议上的论文，其全称是 “EvTexture: Event-driven Texture Enhancement for Video Super-Resolution”。该研究提出了一种基于事件驱动的纹理增强方法，用于视频超分辨率（Video Super-Resolution，VSR）。EvTexture 利用事件相机捕捉高动态范围和高时间分辨率的信息，通过结合传统相机的视频帧和事件数据，有效改善了视频的细节和纹理效果。

##### 使用场景

EvTexture 主要应用于以下场景：

1. **视频超分辨率** ：通过增强视频的细节和纹理，提高视频的清晰度和画质，尤其适用于需要高质量显示的场景如电影制作、视频监控和体育赛事转播等。
2. **高动态范围成像** ：利用事件相机捕捉高动态范围的信息，有效处理光线变化剧烈的场景，如夜间拍摄、车载摄像头监控等。
3. **快速运动物体捕捉** ：适用于拍摄快速运动的物体，如体育比赛、交通监控等，可以避免传统摄像机捕捉到的模糊现象，提高图像质量。


##### 系统安装与测试

EvTexture 提供了详细的安装和测试步骤，可以在 Conda 环境或 Docker 容器中运行。用户可以下载预训练模型和测试数据集，通过简单的命令进行测试。此外，该项目也提供了多个视频演示，展示了在 Vid4 和 REDS4 数据集上的 4× 上采样效果。

##### 相关链接

* [项目主页](<https://dachunkai.github.io/evtexture.github.io/>)
* [论文地址](<https://arxiv.org/abs/2406.13457>)
* [海报展示](<https://docs.google.com/presentation/d/1nbDb39TFb374DzBwdz5v20kIREUA0nBH/edit?usp=sharing>)


##### 研究作者

* **Dachun Kai** （主联系人）
* Jiayao Lu
* Yueyi Zhang
* Xiaoyan Sun
* 中国科学技术大学


##### 引用格式

如果该工作对您的研究有所帮助，请引用以下论文：


@inproceedings{kai2024evtexture,
title={Ev{T}exture: {E}vent-driven {T}exture {E}nhancement for {V}ideo {S}uper-{R}esolution},
author={Kai, Dachun and Lu, Jiayao and Zhang, Yueyi and Sun, Xiaoyan},
booktitle={International Conference on Machine Learning},
year={2024},
organization={PMLR}
}


##### 联系方式

如果在使用过程中遇到问题，可以通过以下邮箱联系主作者：

* Dachun Kai: [dachunkai@mail.ustc.edu.cn](<mailto:dachunkai@mail.ustc.edu.cn>)


EvTexture 是在 Apache-2.0 许可下发布的，并在开发过程中借鉴了 BasicSR、RAFT 和 event_utils 项目中的一些代码和灵感。