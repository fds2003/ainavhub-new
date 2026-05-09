---
title: "klingCreator"
date: "2024-01-01 00:00:00+08:00"
description: klingCreator klingCreator  API
slug: klingcreator-api
tags:
- type
- cat
- big
- python
- hat
draft: false
related_tools:
- typeagent
- virtual try-on prototype with flask
- stock data insights application
- otc medication chat agent
- cat code
---

## klingCreator

klingCreator 是一个高质量视频和图像生成工具，通过逆向工程快手平台的API实现。它可以根据用户的文字提示生成图像或视频，还能基于现有图像进行处理和生成。以下是klingCreator的主要使用场景和步骤：

## 使用场景

1. **图像生成** ：输入描述文本生成对应的图片，例如 `python -m kling --prompt 'a big dog'`。
2. **基于图像的图像生成** ：使用已有图像和描述文本生成新的图像，例如 `python -m kling --prompt 'wear a yellow hat' -I dog.png`。
3. **视频生成** ：输入描述文本生成对应的视频，例如 `python -m kling --type video --prompt 'a big running cat'`。
4. **高质量视频生成** ：生成高质量版本的视频，例如 `python -m kling --type video --prompt 'a big running cat' --high-quality`。
5. **基于图像的视频生成** ：使用已有图像和描述文本生成视频，例如 `python -m kling --type video --prompt 'make this picture alive' -I cat.png`。


## 使用步骤

1. 登录 <https://klingai.kuaishou.com/> 或 <https://klingai.com/> 并生成视频或图像。
2. 使用 `Chrome` 或其他浏览器检查网络请求 (F12 -> XHR)。
3. 克隆项目仓库： `git clone https://github.com/yihong0618/klingCreator.git`。
4. 复制全部Cookie并设置环境变量 `export KLING_COOKIE='xxxxx'`。
5. 按需使用上述命令生成图像或视频。


此外，还可以通过安装 pip 包并在 Python 中使用相关类来生成图像或视频：


pip install -U kling-creator

from kling import ImageGen, VideoGen

i = ImageGen('cookie')  # 替换 'cookie'
i.save_image("a blue cyber dream", './output')
i.save_image("a blue cyber dream", './output', image_url="xxxx.png")

v = VideoGen('cookie')  # 替换 'cookie'
v.save_video("a blue cyber dream", './output', image_url="xxxxx_url.png")
v.save_video("a blue cyber dream", './output', image_url="xxxxx_url.png", is_high_quality=True)


通过以上步骤和命令，你可以利用 klingCreator 生成符合需求的高质量图像和视频。