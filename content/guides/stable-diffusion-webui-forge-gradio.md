---
title: "Stable Diffusion WebUI Forge Stable Diffusion WebUI Forge Stable Diffusion"
date: "2024-01-01 00:00:00+08:00"
description: "Stable Diffusion WebUI Forge Stable Diffusion WebUI Forge Stable Diffusion"
slug: "stable-diffusion-webui-forge-gradio"
draft: false
---

## Stable Diffusion WebUI Forge

Stable Diffusion WebUI Forge是在Stable Diffusion WebUI（基于Gradio的平台）基础上开发的，目的是为了使开发更加简单，优化资源管理，加快推理速度。名字中的"Forge"灵感来自于"Minecraft Forge"，该项目旨在成为SD WebUI的“Forge”。

和原版WebUI相比，Forge带来的变化包括但不限于推理速度的提升、GPU内存使用的减少、最大分辨率和批量大小的增加，具体提升效果视GPU的不同有所差异。对于8GB视频内存的GPU，可以期待约30~45%的推理速度提升；对于6GB视频内存的GPU，可以期待约60~75%的速度提升；而对于高端GPU（如24GB vram的4090），速度提升约为3~6%。

Forge中最重要的改变之一是引入了**Unet Patcher** ，通过这个功能，开发者可以用大约100行代码实现自注意力引导、Kohya高分辨率修正、FreeU、StyleAlign和Hypertile等方法。这意味着不再需要对UNet进行复杂的改动，避免了与其他扩展的冲突。

Forge还新增了几种采样器，包括DDPM、DDPM Karras、DPM++ 2M Turbo、DPM++ 2M SDE Turbo、LCM Karras、Euler A Turbo等。

Forge的安装可以通过克隆Git仓库的方式进行，也提供了一键安装包方便用户快速安装。

在使用场景上，Stable Diffusion WebUI Forge适合于想要更高效利用GPU资源、加快生成速度、同时便于开发新功能和集成的用户和开发者。它特别适合于具有不同性能GPU的用户，通过对资源管理的优化，使得在资源有限的条件下也能达到良好的生成效果和速度。对于开发者来说，Unet Patcher简化了扩展开发过程，使得在不改变原有框架的前提下，更容易地实现和集成新的功能。

总的来说，Stable Diffusion WebUI Forge为Stable Diffusion的用户和开发者提供了一个性能优化、更易于扩展的平台，特别是当面对高分辨率、大批量生成需求，以及欲在资源受限的GPU上运行复杂模型时，它的优势更为显著。
