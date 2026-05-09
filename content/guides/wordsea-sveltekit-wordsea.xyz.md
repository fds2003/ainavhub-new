---
title: "WordSea"
date: "2024-01-01 00:00:00+08:00"
description: 'WordSea WordSea  SvelteKit '
slug: wordsea-sveltekit-wordsea.xyz
tags:
- wordsea
- sveltekit
- llms
- wordsea.xyz
- docker
draft: false
related_tools:
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- node.js sandbox mcp server
---

## WordSea

WordSea 是一个基于 SvelteKit 的网络应用程序，旨在提升英语词汇学习效果。你可以访问 [wordsea.xyz](<https://wordsea.xyz/>) 体验 WordSea 带来的便利。

这个应用的核心理念是通过使用与词汇定义相关的视觉化方法来改进新词的学习过程。对于一些词汇，如“苹果”或“降落伞”，很容易通过图像来记忆。但对于如“想象”或“永世”这样抽象的概念，记忆起来就比较困难。为了解决这一挑战，WordSea 利用了最先进的语言模型（LLMs）和文本生成图像模型，生成了一部分英文词汇的定义图像。这些可视化内容被结合到单词定义、国际音标发音、音频录音和衍生信息中，形成紧凑的单词卡片，从而构建出全面的词典条目。

##### 使用场景

1. **英语学习者** ：通过视觉化方法增强记忆，帮助他们更加轻松地掌握新词汇，尤其是那些抽象的概念。
2. **教育工作者** ：提供一个直观的教学工具，可以用来进行单词教学，提高学生的学习兴趣和记忆效果。
3. **语言爱好者** ：为那些对语言学习感兴趣的人士提供一个有趣且有效的工具。


##### 本地运行

如果你想在本地运行这个应用，可以按照以下步骤操作：

###### 前置条件

* 安装 [Docker](<https://www.docker.com/>)
* 安装 [Node.js](<https://nodejs.org/en/>)


首先克隆仓库


git clone https://github.com/Stardust87/wordsea
cd wordsea


###### 应用程序设置


cd app
npm install
cd ..
docker compose up


###### 数据库设置

数据会存储在 MongoDB 中，可以从 [这里](<https://mega.nz/folder/0ptTzCKA#adv2fpwTG0Prxe9zjdApqg>) 下载数据库文件。

获取容器 ID 并恢复数据库


docker exec -i [container_id] mongorestore --gzip --nsInclude="wordsea.*" --archive < [dump_path]


##### 单词卡片示例

以下是一些单词卡片示例：

* Cache ![cache meaning](assets/cache.jpg)
* Slapdash ![slapdash meaning](assets/slapdash.jpg)
* Amenity ![amenity meaning](assets/amenity.jpg)


总之，WordSea 通过结合视觉化的学习方法，大大提高了学习者对词汇的记忆效果和学习兴趣。