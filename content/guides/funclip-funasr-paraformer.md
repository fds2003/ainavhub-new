---
title: "FunClip"
date: "2024-01-01 00:00:00+08:00"
description: FunClip FunClip  FunClip
slug: funclip-funasr-paraformer
tags:
- id
- gradio
- asr
- funclip
- prompt
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## FunClip

**FunClip** 是一款开源、精准、方便的视频剪辑工具。它主要通过语音识别技术来帮助用户剪辑视频，并且用户可以轻松选择视频中的某些片段或说话人进行裁剪。FunClip集成了阿里巴巴通义实验室的 FunASR Paraformer 系列模型，能够准确地识别视频中的语音内容，生成时间戳，使得视频剪辑更加方便。

##### 主要功能特色

1. **多种大语言模型调用** ：FunClip提供了大语言模型调用方式和prompt配置接口，通过大语言模型进行智能化的视频裁剪。
2. **高精度语音识别** ：采用Paraformer-Large模型，这是目前识别效果最佳的中文ASR模型之一，并且能够准确预测时间戳。
3. **热词定制化** ：通过SeACo-Paraformer模型，可以定制一些实体词或人名作为热词，提升识别的准确性。
4. **说话人识别** ：集成CAM++模型，能够自动识别视频中的说话人ID，并且用户可以根据说话人ID进行剪辑。
5. **多段自由剪辑和字幕生成** ：支持多段自由剪辑，并且能够自动生成完整视频SRT字幕和目标段落的SRT字幕。
6. **Gradio交互界面** ：提供了简便易用的交互界面，用户可以通过浏览器在本地服务器进行操作。
7. **命令行调用** ：用户可以通过命令行调用FunClip进行视频剪辑和语音识别。


##### 何时使用FunClip？

* **需要快速从长视频中提取某些片段** ：FunClip可以通过语音识别快速找到并提取你需要的视频片段，省去了手动查找的麻烦。
* **需要根据说话人进行视频剪辑** ：如果需要剪辑出某个特定说话人的讲话内容，FunClip可以通过自动识别说话人功能帮你实现。
* **需要生成和编辑视频字幕** ：FunClip不仅可以生成完整视频的SRT字幕，还能生成目标段落的字幕文件，方便后续的字幕编辑和调整。
* **智能化剪辑需求** ：如果你希望使用大语言模型进行更智能的剪辑，FunClip提供了相关功能，并且可以根据你提供的prompt进行视频内容的识别和剪辑。


##### 如何安装和使用？

1. **安装Python环境和依赖** ：

git clone https://github.com/alibaba-damo-academy/FunClip.git
cd FunClip
pip install -r ./requirements.txt


2. **（可选）安装imagemagick** ：

* Ubuntu：

apt-get -y update && apt-get -y install ffmpeg imagemagick
sed -i 's/none/read,write/g' /etc/ImageMagick-6/policy.xml


* MacOS：

brew install imagemagick
sed -i 's/none/read,write/g' /usr/local/Cellar/imagemagick/7.1.1-8_1/etc/ImageMagick-7/policy.xml


* 下载字体文件：

wget https://isv-data.oss-cn-hangzhou.aliyuncs.com/ics/MaaS/ClipVideo/STHeitiMedium.ttc -O font/STHeitiMedium.ttc


3. **启动Gradio服务** ：

python funclip/launch.py


随后在浏览器访问 `localhost:7860`，按指引操作即可进行视频剪辑。

4. **使用命令行调用** ：

* 识别步骤：

python funclip/videoclipper.py --stage 1 --file examples/2022云栖大会_片段.mp4 --output_dir ./output


* 裁剪步骤：

python funclip/videoclipper.py --stage 2 --file examples/2022云栖大会_片段.mp4 --output_dir ./output --dest_text '我们把它跟乡村振兴去结合起来，利用我们的设计的能力' --start_ost 0 --end_ost 100 --output_file './output/res.mp4'


5. **在线体验** ： 在Modelscope创空间体验FunClip：[funclip创空间](<https://modelscope.cn/studios/iic/funasr_app_clipvideo/summary>)


##### 交流与反馈

用户可以通过钉钉或微信群联系FunClip社区，交流使用体验或提出建议。此外，FunASR项目也公开提供了大量关于语音识别技术的资源，用户可以进一步了解相关内容。

通过FunClip，用户无需了解复杂的视频编辑技术，即可实现精准、快捷的视频剪辑，非常适合需要频繁处理视频内容的工作场景。