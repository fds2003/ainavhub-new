---
title: "Live"
date: "2024-01-01 00:00:00+08:00"
description: 'Live_Portrait_Monitor Live_Portrait_Monitor ，，。 “LivePortrait: Efficient
  Portrait Animation with Stitc...'
slug: live-portrait-monitor-liveportrait-efficient
tags:
- facevid2vid
- liveportrait
- open
- monitor
- retargeting
draft: false
related_tools:
- liveportrait
- fasterliveportrait
- advancedliveportrait
- openchat
- openmanus
---

## Live_Portrait_Monitor

**Live_Portrait_Monitor** 这是一款基于实时人像动画效果的工具，可以通过摄像头或监视器的输入，将静态图像生成动态的动画效果。该项目主要参考了论文 “LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control” 并集成了多种开源技术如FOMM、Open Facevid2vid等。项目的目标是为研究提供一个高效、易于使用的实时人像动画生成框架。

**使用场景** ：

1. **视频会议和直播** ：在不影响原始视频流的情况下，可以为在线会议和直播添加虚拟背景或特效。
2. **娱乐和社交媒体** ：用户可以在社交媒体平台上分享动态人像视频，增加互动性和趣味性。
3. **虚拟助手和教育** ：在虚拟助手或在线教育应用中，使用动态人像可以提高用户体验和参与度。
4. **广告和营销** ：动态人像可以用于创作更具吸引力的广告和营销内容。
5. **视频编辑和特效制作** ：为视频编辑和特效制作提供更多创意和高效的工具。


操作步骤包括克隆代码、准备环境、下载预训练模型、运行推理脚本，生成动画效果。详细操作和参数设置可以根据项目需求进行调整。项目也在不断更新和完善，欢迎提出改进建议或提交代码。


# 克隆代码并准备环境
git clone https://github.com/Mrkomiljon/Live_Portrait_Monitor.git
cd Live_Portrait_Monitor
conda create -n LivePortrait python==3.9.18
conda activate LivePortrait
pip install -r requirements.txt
pip install mss


# 运行推理脚本以生成动画效果
python inference_org.py


项目会生成一个包括驱动视频、输入图像和生成结果的mp4文件。用户也可以通过指定不同的参数来自定义输入输出。

**感谢** ： 特别感谢FOMM、Open Facevid2vid、SPADE和InsightFace等项目的贡献者，以及LivePortrait的主要作者。