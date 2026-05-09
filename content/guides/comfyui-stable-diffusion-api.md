---
title: "ComfyUI Stable Diffusion 3 API ComfyUI Stable Diffusion 3 API"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI Stable Diffusion 3 API  Info ComfyUI Stable Diffusion 3 API '
slug: comfyui-stable-diffusion-api
tags:
- amp
- v1.5
- diffusion
- positive
- aspect
draft: false
related_tools:
- computer using agent sample app
- structured outputs sample apps
- gemini spatial example
- mlx examples
- seed-thinking-v1.5
---

## ComfyUI Stable Diffusion 3 API

## 项目介绍 | Info

ComfyUI Stable Diffusion 3 API 是将 Stable Diffusion 3 引入 ComfyUI 的工具。利用 API，用户可以通过 ComfyUI 访问和使用 Stable Diffusion 3 的模型生成图像。目前提供两种模型选择：SD3 和 SD3 Turbo，且不同模型在积分消耗上有所不同。该 API 提供了多种比例和模式以满足不同的生成需求。

##### 模型 & 积分

* **SD3** ：6.5 积分/张
* **SD3 Turbo** ：4 积分/张


**版本信息** ：

* 最新版本 V1.5：支持多种比例的 文生图，修复了 图生图和Turbo 模型的 bug。


## 节点说明 | Features

ComfyUI Stable Diffusion 3 API 包含以下主要节点：

* **positive** ：正向提示词，用于指导图像生成。
* **negative** ：负向提示词，用于排除不需要的图像特征（Turbo 模型不支持）。
* **aspect_ratio** ：画面比例，共 9 种选项：
* “21:9”, “16:9”, “5:4”, “3:2”, “1:1”, “2:3”, “4:5”, “9:16”, “9:21” （图生图不适用）。
* **mode** ：选择生成模式：文生图 或 图生图。
* **model** ：选择使用的模型：SD3 或 SD3 Turbo。
* **seed** ：随机种子，用于确定图像生成的随机性。
* **image** ：用于图生图模式，基于输入图像生成新图像。
* **strength** ：图生图模式下的图像变化强度。


## 安装 | Install

##### 使用前准备

* 申请 API：前往[Stability API key](<https://platform.stability.ai/account/keys>)页面申请，每个账户提供 25 个免费积分。


##### 安装步骤

1. 将 Stability API key 添加到 `config.json` 文件中，运行时会自动加载。
2. 推荐使用 ComfyUI Manager 安装（开发中）。
3. 手动安装方法：

cd custom_nodes
git clone https://github.com/ZHO-ZHO-ZHO/ComfyUI-StableDiffusion3-API
重启 ComfyUI


## 使用场景 | Use Cases

1. **生成高质量图像** ：通过使用正向和负向提示词，用户可以生成符合特定风格和内容要求的高质量图像。
2. **图生图** ：在现有图像基础上进行修改和增强，适用于图像编辑和改进应用。
3. **创意设计** ：为设计师和艺术家提供灵感，方便进行初步创作草图生成。
4. **快速原型** ：在产品设计和开发过程中，用于快速生成视觉原型。


## 作为支持与联系信息

如需更多帮助或有任何疑问，请联系：

* 邮箱：zhozho3965@gmail.com
* QQ 群：839821928


更多社交媒体平台和支持方式请参考原介绍部分。

**Credits** ：本项目基于 [Stable Diffusion 3](<https://stability.ai/news/stable-diffusion-3-api?utm_source=twitter&utm_medium=website&utm_campaign=blog>) 提供的能力。