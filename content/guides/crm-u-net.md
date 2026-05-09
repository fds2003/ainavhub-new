---
title: "CRM"
date: "2024-01-01 00:00:00+08:00"
description: CRM CRM3D。，3D。，CRM，U-Net，，。CRMFlexicube...
slug: crm-u-net
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- location.pathname
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

#### CRM

CRM是一种高保真度的前馈单图像到3D纹理网格生成模型。它通过将三平面组件的几何先验融入网络设计中，弥补了稀疏3D数据的局限性。首先，CRM从单个输入图像生成六个正交视图图像，然后将这些图像输入到卷积U-Net中，利用其强大的像素级对齐能力和显著的带宽，创建高分辨率的三平面。CRM还采用Flexicubes作为几何表示，有利于在纹理网格上进行直接端到端的优化。总体而言，我们的模型可以在短短10秒内从图像生成高保真度的纹理网格，无需进行任何测试时间优化。