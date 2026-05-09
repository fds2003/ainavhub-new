---
title: "X-Portrait Nodes X-Portrait Nodes X-Portrait Nodes"
date: "2024-01-01 00:00:00+08:00"
description: X-Portrait Nodes X-Portrait Nodes ComfyUI
slug: x-portrait-nodes-comfyui-source-image
tags:
- x512
- video
- nodes
- source
- seed
draft: false
related_tools:
- hunyuanvideo-i2v
- hunyuanvideo-avatar
- paper2video
- arc-hunyuan-video-7b
- ai video transcriber
---

## X-Portrait Nodes

X-Portrait Nodes是一个用于动画化肖像的工具，运行在ComfyUI平台上。用户可以使用一段视频和一张参考图像来生成动态肖像。该功能的主要组件包括：

* **source_image** ：参考图像，要求为正方形，最大尺寸为512x512。
* **driving_video** ：包含面孔的驱动视频，分辨率需要与参考图像匹配，最大尺寸同样为512x512。
* **seed** ：控制当前生成的随机种子。
* **ddim_steps** ：生成输出所需的样本（步骤）数量，超过15步后收益递减。
* **best_frame** ：指示驱动视频中与参考图像最匹配的帧。


##### 使用场景

X-Portrait Nodes非常适合于以下几种场景：

1. **动画制作** ：可用于将静态肖像转化为动态动画，适合动画和影视行业的工作。
2. **社交媒体内容创作** ：创作者可以通过动画化肖像，增加视觉吸引力，丰富内容表现。
3. **在线头像或个性化形象制作** ：用户可以将自己的肖像进行动态展示，适用于游戏或虚拟现实环境中。
4. **实验性艺术创作** ：艺术家可以探索通过动态肖像表达情感和故事的可能性，创造独特的视觉艺术作品。


总之，X-Portrait Nodes提供了一种创新的方式，将静态图像与动态视效结合，拓展了各种创作和表达的可能性。