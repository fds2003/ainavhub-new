---
title: "CityGaussian"
date: "2024-01-01 00:00:00+08:00"
description: CityGaussian CityGaussian CityGS
slug: citygaussian-citygs-dgs
tags:
- citygs
- lod
- level-of-detail
- gaussian
- dgs
draft: false
related_tools:
- yolodotnet
- citygaussian
- supergaussian
---

## CityGaussian

CityGaussian（简称CityGS）是一种基于高斯原理的实时、高质量、大规模场景渲染技术。现有的3D场景重建和新视角合成技术虽然取得了显著进展，但在大规模3D高斯绘制（3DGS）的有效训练和实时渲染方面仍面临挑战。为了解决这些问题，CityGaussian采用了一种创新的分而治之的训练方法和细节级别（Level-of-Detail，LoD）策略，以实现大规模3DGS的高效训练和渲染。

具体来说，CityGaussian利用全局场景先验和自适应训练数据选择，实现高效训练和无缝融合。基于融合的高斯原语（Gaussian primitives），通过压缩生成不同的细节级别，通过提出的按块选择和聚合细节级别的策略，实现不同尺度下的快速渲染。广泛的实验结果表明，CityGaussian在大规模场景渲染中取得了前所未有的高质量渲染效果，能够在不同的尺度下实现实时渲染。

使用CityGaussian的情景主要包括以下几点：

1. **大规模场景的实时渲染** ：当需要快速渲染城市级别或更广阔场景的时候，CityGaussian提供了一个高效和实时的解决方案。

2. **高质量视觉效果需求** ：对于追求高质量视觉效果的应用场景，例如高级游戏、模拟训练、城市规划和虚拟现实体验等，CityGaussian能够在不牺牲渲染速度的前提下，提供高质量的视觉效果。

3. **不同尺度的视角需求** ：CityGaussian特别适用于需要在不同尺度（例如从街道视角到整个城市的俯瞰）下平滑过渡的场景，其LoD技术能够保证在变换尺度时仍保持良好的渲染效果和性能。

4. **高效的训练与渲染** ：对于需要快速生成和更新大规模3D场景的应用，CityGaussian的分而治之训练方法和高效渲染策略提供了有效的解决方案。


CityGaussian适用于需要快速、高质量渲染大规模场景的各种场合，特别是在游戏开发、模拟训练、城市规划和虚拟现实等领域，它提供了一种前沿且实用的技术方案。