---
title: "Stable Video Diffusion 1.1 Image-to-Video Stable Video Diffusion 1.1 Image-to-Vi"
date: "2024-01-01 00:00:00+08:00"
description: 'Stable Video Diffusion 1.1 Image-to-Video Stable Video Diffusion (SVD)
  1.1 Image-to-Video '
slug: stable-video-diffusion-image-to-video-svd
tags:
- image-to-video
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- stable video diffusion 1.1 image-to-video - svd 1.1 image-to-video 模型生成短视频
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
---

#### Stable Video Diffusion 1.1 Image-to-Video

Stable Video Diffusion (SVD) 1.1 Image-to-Video 是一个扩散模型，通过将静止图像作为条件帧，生成相应的视频。该模型是一个潜在扩散模型，经过训练，能够从图像生成短视频片段。在分辨率为 1024x576 的情况下，该模型训练生成 25 帧视频，其训练基于相同大小的上下文帧，并从 SVD Image-to-Video [25 frames] 进行了微调。微调时，固定了6FPS和Motion Bucket Id 127的条件，以提高输出的一致性，而无需调整超参数。