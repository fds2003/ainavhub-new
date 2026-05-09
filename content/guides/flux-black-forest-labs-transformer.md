---
title: "flux flux Flux"
date: "2024-01-01 00:00:00+08:00"
description: 'flux Flux  Black Forest Labs '
slug: flux-black-forest-labs-transformer
tags:
- guidance-distilled
- black
- schnell
- flux
- replicate
draft: false
related_tools:
- reasonflux
- comfyui_advancedrefluxcontrol
- comfyui-fluxtapoz
- flux
- x-flux
---

## flux

Flux 是由 Black Forest Labs 开发的一个基于 Transformer 的潜变量修正流（latent rectified flow）模型，主要应用于文本生成图片（text-to-image）和图片生成图片（image-to-image）任务。该项目包含了最小推理代码，方便用户进行相关任务的实践。

##### 使用场景

1. **文本生成图片** ：通过输入文本描述，Flux 模型能够生成对应的图片。
2. **图片生成图片** ：给出一张图片，Flux 模型可以基于此生成新的图片。


##### 模型版本

Flux 提供了三个不同版本的模型：

1. **FLUX.1 [pro]** ：基础版本，通过 API 访问。
2. **FLUX.1 [dev]** ：经过指导蒸馏（guidance-distilled）版本。
3. **FLUX.1 [schnell]** ：经过指导和步骤蒸馏（guidance and step-distilled）版本。


##### 使用方法

* 美国 (Replicate) 和 FAL 提供在线采样服务，用户可以利用这些平台体验 Flux 生成效果。
* 本地安装可以通过克隆代码仓库，并使用 Python 虚拟环境安装依赖。


##### 本地运行示例

1. **交互式采样**

python -m flux --name <name> --loop


2. **单次生成**

python -m flux --name <name> \
--height <height> --width <width> \
--prompt "<prompt>"


3. **Streamlit 演示** 可以运行 Streamlit 演示程序进行文本生成图片和图片生成图片的任务。

streamlit run demo_st.py


##### API 使用

Flux 提供 API 接口，允许用户通过 API 访问专业模型（pro model）。API 的文档可以通过 [docs.bfl.ml](<https://docs.bfl.ml/>) 获取。用户需要先注册并获得 API key，然后可以通过 Python 接口或命令行进行调用。

###### Python 接口示例


from flux.api import ImageRequest

request = ImageRequest("A beautiful beach")
request.url
request.bytes
request.save("outputs/api.jpg")
request.image


###### 命令行示例


$ python -m flux.api --prompt="A beautiful beach" url
https:<...>/sample.jpg

$ python -m flux.api --prompt="A beautiful beach" save outputs/api

$ python -m flux.api --prompt="A beautiful beach" image show


Flux 项目提供了多种方式方便用户进行文本生成图片和图片生成图片的实验和应用，并且通过 API 和本地安装都可以方便地进行模型的调用和测试。