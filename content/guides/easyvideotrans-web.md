---
title: "easyvideotrans easyvideotrans EasyVideoTrans"
date: "2024-01-01 00:00:00+08:00"
description: 'easyvideotrans EasyVideoTrans  EasyVideoTrans '
slug: easyvideotrans-web
tags:
- outpu
- run
- sudo
- rm
- easyvideotrans
draft: false
related_tools:
- structured outputs sample apps
- structured outputs in the api
- code runner mcp server
- droidrun
- runagent
---

## easyvideotrans

# EasyVideoTrans 简介

**EasyVideoTrans** 是一个从原始视频到翻译配音最终视频的完整流程解决方案，旨在提供一个高效、简单易用且可靠的工具。项目包括一个 web 后端和一个用于测试的前端页面。凭借其高质量的翻译结果和开源的优势，EasyVideoTrans 大幅减少了人工校对的需求，并且适合进行二次开发。

你可以在线使用该工具，也可以通过 Docker 或本地部署其后端服务。

## 使用场景

1. **外语视频翻译** ：将外语视频（如 YouTube 视频）翻译成目标语言，适用于多种领域，包括教育、新闻、娱乐等。
2. **视频配音** ：为视频添加目标语言的配音，提供完整的翻译配音解决方案。
3. **跨文化内容制作** ：帮助内容创作者将他们的视频内容传播到其他语言和文化市场，增加观众覆盖面。
4. **教育领域** ：教师和学生可以翻译教育视频，便于理解外语课程内容。
5. **媒体和娱乐行业** ：为电影、电视剧、纪录片等提供专业的翻译配音服务。


## 部署方式

##### Docker 部署（推荐）

只需一行命令即可通过 Docker 部署：


sudo docker run --rm -p 8888:8080 -v output:/app/output --runtime=nvidia --gpus all hanfa/pytvzhen-web:latest


##### 本地部署

1. **环境准备** ：

* 安装 Python 依赖
* 安装 PyTorch 和 ffmpeg
* 配置 RabbitMQ
* 下载 faster-whisper 模型
2. **运行** ：

* 启动 Celery 队列和 worker
* 启动 Flask 应用


具体安装和运行步骤参考项目文档。

## 相关链接和资源

* [EasyVideoTrans 在线版本](<https://easyvideotrans.com/>)
* [GitHub 项目地址](<https://github.com/sutro-planet/pytvzhen-web>)
* [前端仓库](<https://github.com/sutro-planet/easyvideotrans-frontend>)
* [pytvzhen离线客户端](<https://github.com/CuSO4Gem/pytvzhen>)


通过以上信息，希望你能快速上手 EasyVideoTrans，并充分利用其功能进行视频翻译和配音。