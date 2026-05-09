---
title: "DGRT 3DGRT 3DGRT"
date: "2024-01-01 00:00:00+08:00"
description: DGRT 3DGRT (3D Gaussian Ray Tracing)  splatting
slug: dgrt-gaussian-ray-tracing-splatting
tags:
- splatting
- tracing
- dgrut
- unscented
- dgut
draft: false
related_tools:
- aci
- citygaussian
- supergaussian
- 3dgrt
- ktransformers
---

## 3DGRT

3DGRT (3D Gaussian Ray Tracing) 是一种新的渲染技术，它使用射线追踪来渲染3D高斯粒子，而不是像传统方法那样使用 splatting。这使得它能够支持具有复杂、时变效果的畸变相机，例如卷帘快门，并且可以高效地模拟反射、折射和阴影等二次光线效果。然而，3DGRT 需要专用的射线追踪硬件，并且速度仍然比 3DGS 慢。

为了解决这个限制，研究者还提出了 3DGUT (3D Gaussian Unscented Transform)，它可以在光栅化框架内支持具有复杂、时变效果的畸变相机，从而保持光栅化方法的效率。通过对齐 3DGRT 和 3DGUT 的渲染公式，研究者们引入了一种混合方法，称为 **3DGRUT** 。这种技术允许通过光栅化渲染主光线，通过射线追踪渲染二次光线，从而结合了两种方法的优点，以提高性能和灵活性。

**使用场景:**

* **渲染具有复杂相机运动和畸变效果的场景** : 例如，带有卷帘快门效果的运动场景，或者使用鱼眼镜头拍摄的场景。
* **需要高质量的反射、折射和阴影效果的场景** : 3DGRT 能够准确地模拟这些效果，从而提供更逼真的渲染结果。
* **混合渲染场景** : 3DGRUT 可以在性能和质量之间进行权衡，通过光栅化渲染主要部分，通过射线追踪渲染需要高质量效果的部分。
* **交互式场景探索** : 3DGRT 提供了一个交互式 Playground GUI，可以用于探索预训练的场景，并调整各种渲染参数。