---
title: "Pi-Cubed"
date: "2024-01-01 00:00:00+08:00"
description: Pi-Cubed Pi-Cubed（$\pi^3$），，，。，。...
slug: pi-cubed-pi
tags:
- id
- const
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
- clientsecret
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Pi-Cubed

Pi-Cubed（$\pi^3$）项目推出了一种创新的前馈神经网络，旨在革新视觉几何重建，其核心特点是**消除了对固定参考视图的需求** ，从而解决了传统方法因参考视图次优而导致的稳定性和失败问题。该模型采用完全**置换等变** 的架构，能够直接从无序图像集中预测**仿射不变的相机姿态** 和**尺度不变的局部点图** 。这种设计使其**对输入顺序具有固有的鲁棒性** 并**高度可扩展** ，同时无需复杂的先验或训练方案，便能学习到相机姿态流形的密集结构化潜在表示。最终，Pi-Cubed在相机姿态估计、单目/视频深度估计和密集点图估计等广泛任务上均达到了**最先进的性能** ，主要输出包括全局点云、每视图局部点图及相机到世界坐标系的变换矩阵。