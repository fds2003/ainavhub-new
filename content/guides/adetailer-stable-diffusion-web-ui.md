---
title: "ADetailer"
date: "2024-01-01 00:00:00+08:00"
description: ADetailer ADetailer  Stable Diffusion
slug: adetailer-stable-diffusion-web-ui
tags:
- url
- git
- ultralytics
- diffusion
- mmdet
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## ADetailer

ADetailer 是一个适用于稳定扩散（Stable Diffusion）的 Web UI 扩展程序，它和Detection Detailer功能相似，不同之处在于使用的是ultralytics的检测模型而不是mmdet。通过这个扩展程序，用户可以在生成的图像中自动识别和修改特定的对象，如人脸、手或人物等。

##### 在什么情况下会使用ADetailer？

1. **改善图像质量** ：如果你想要去除或修改生成图像中的特定元素，比如去除背景中的对象或是改善人物的面部特征，可以使用ADetailer来实现。

2. **艺术创作** ：对于艺术家和设计师来说，ADetailer可以帮助他们更精确地控制图像的细节，实现更为复杂和个性化的创作。

3. **数据清洗** ：在使用机器学习模型处理图像数据时，可能需要从大量图像中准确识别和删除不需要的对象，ADetailer提供了一个自动化的解决方案。


##### 安装和使用

1. 在Stable Diffusion的Web UI中打开“Extensions”标签页，选择“Install from URL”并输入ADetailer的git仓库网址`https://github.com/Bing-su/adetailer.git`安装。

2. 安装后重新启动A1111 webui，包括终端（或重启计算机）。

3. 使用时，你可以在生成图像前选择ADetailer模型和想要检测的目标，还可以设置负提示（negative prompts）以排除不想要的元素。

4. 在图像生成后，ADetailer会自动检测并根据设置选项对图像进行修改，如去除或细化特定对象。


##### 特色功能

* **自动掩码生成** ：ADetailer利用检测模型自动创建对象的掩码（mask），便于后续的图像处理。

* **高级选项** ：提供多种图像处理选项，包括掩码偏移、腐蚀/扩张和合并等，让用户有更多的自由度来达到预期的效果。

* **与ControlNet的兼容性** ：如果安装了ControlNet扩展程序和控制模型，ADetailer也能与之兼容，为用户提供更多的创作可能。


无论是想要在图像生成过程中自动去除不想要的元素，还是在艺术创作中寻求更高精度的图像控制，ADetailer都提供了一个强大而灵活的工具。