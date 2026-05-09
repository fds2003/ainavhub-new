---
title: "Parler-TTS"
date: "2024-01-01 00:00:00+08:00"
description: Parler-TTS Parler-TTS TTS
slug: parler-tts-tts-dan-lyth-simon
tags:
- lyth
- stability
- dan
- parler-tts
- hugging
draft: false
related_tools:
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- parler-tts
- hugging face 表情包
- huggingchat assistants - 免费的可定制的ai聊天助手
- qwen1.5 - qwen1.5更新了六种尺寸的基础和聊天模型，并在hugging face转换器集成了其代码，以提升开发者体验，并支持多种语言和长上下文处理。
---

## Parler-TTS

Parler-TTS是一个轻量级的文本到语音（TTS）模型，可以以特定说话者的风格（包括性别、音调、说话风格等）生成高质量、自然听起来的语音。这个模型是根据Dan Lyth和Simon King的论文《使用合成注解的高保真文本到语音的自然语言指导》而开发的，Dan Lyth属于Stability AI，Simon King来自爱丁堡大学。

与其他TTS模型不同，Parler-TTS是完全开源发布的。所有的数据集、预处理、训练代码和权重都是公开发布的，这使得社区能够在此基础上建立自己的强大TTS模型。

Parler-TTS的安装只需要一行代码，使用起来也非常简单。它支持通过描述来精细控制生成的语音的风格，比如说话者的性别、音调和说话速度等。你可以在[Hugging Face](<https://huggingface.co/spaces/parler-tts/parler_tts_mini>)上尝试它的交互式演示。

##### 在什么样的情况下会使用Parler-TTS？

1. **内容创作和媒体制作：** 对于想要生成具有特定风格或特色的语音内容的内容创作者，比如播客、视频配音等。

2. **个性化语音应用：** 开发需要个性化语音输出的应用程序，如导航软件、智能助手、游戏角色配音等。

3. **辅助技术：** 为有视觉障碍或阅读困难的人群提供更自然、更易于理解的语音输出。

4. **教育和语言学习：** 生成特定口音或语速的语音材料，帮助学习者更好地理解和学习新语言。

5. **研究和开发：** 因为Parler-TTS是完全开源的，它为研究人员和开发者提供了一个强大的工具来研究和改进TTS技术、探索新的应用领域。

6. **业余爱好和实验：** 对技术和语音合成感兴趣的个人可以使用Parler-TTS来实验和学习，或者仅仅为了个人娱乐和创意项目。


Parler-TTS的发布对于推动开源社区发展、创新语音技术和扩展TTS应用场景具有重要意义。无论是对于商业项目还是个人爱好，Parler-TTS都提供了一个灵活而强大的平台。