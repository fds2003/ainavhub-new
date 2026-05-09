---
title: "Animatable Gaussians Animatable Gaussians Animatable Gaussians"
date: "2024-01-01 00:00:00+08:00"
description: Animatable Gaussians Animatable Gaussians RGB
slug: animatable-gaussians-rgb-mlp-nerf
tags:
- anima
- stylegan
- animatable
- rgb
- gaussians
draft: false
related_tools:
- longanimation
- hunyuanimage-3.0
- animagine xl 3.1
- animatediff-lightning
- xr animator
---

## Animatable Gaussians

Animatable Gaussians是一种用于高保真人形头像建模的新颖表示方法。它解决了一个长期存在的、挑战性的问题：如何从RGB视频中模拟可动的人形头像。现有的方法通常使用基于MLP（多层感知器）的神经辐射字段(NeRF)来表示3D人类，但是纯MLP在回归姿态依赖的服装细节时遇到了困难。Animatable Gaussians通过结合强大的2D CNN（卷积神经网络）和3D高斯溅射，克服了这一挑战，能够创建高保真度的头像。

##### Animatable Gaussians的工作原理:

* **参数化模板学习:** 首先，从输入的视频中学习一个参数化的模板，并且这个模板能够根据所穿衣服的不同进行调整，使其适用于模拟像连衣裙这样的宽松衣服。
* **3D高斯与动画头像的关联:** 将学习到的模板参数化到两个正面和背面的规范高斯图上，每个像素代表一个3D高斯。
* **使用StyleGAN为基础的CNN:** 利用基于StyleGAN的强大卷积神经网络(CNN)，学习姿态依赖的高斯图，以模拟详细的动态外观。
* **姿势投影策略:** 为了更好地泛化新的姿势，引入了一个姿态投影策略。


##### 使用Animatable Gaussians的情况:

在需要从视频中创建高保真、真实感强且具有动态变化特性的3D人形头像时，Animatable Gaussians是非常合适的选择。这对于虚拟现实、增强现实、游戏开发和电影制作等领域来说尤其重要，其中对人形角色的真实感和动态细节有着极高的要求。

Animatable Gaussians通过结合利用2D CNNs的强大能力和3D Gaussians的新颖表示，成功地解决了使用传统NeRF方法在模拟动态、高保真人形头像时遇到的难题。它通通过学习一个能够自适应衣物变化的参数化模板，并利用这个模板引导的2D参数化和姿势投影策略，实现了对复杂动作和细节变化的高度泛化和真实感模拟。