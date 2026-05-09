---
title: "KeywordGacha"
date: "2024-01-01 00:00:00+08:00"
description: KeywordGacha KeywordGacha  KeywordGacha (
slug: keywordgacha-kg-openai
tags:
- kg
- config.json
- keywordgacha
- txt
- zip
draft: false
related_tools:
- duckduckgo search mcp server
- hackgpt enterprise
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- background erase - 快速、高效、免费移除照片背景的创新平台
- llmops python pacakge
---

## KeywordGacha

##### KeywordGacha 简介

**KeywordGacha** (简称 KG) 是一个使用 OpenAI 兼容接口，自动生成小说、漫画、字幕、游戏脚本等文本中词汇表的翻译辅助工具。它运用 AI 技术相较传统工具，具有高命中率、语义化、智能总结角色信息等优势。在处理长篇文本时，能够一键抽取角色名称等专有名词，并进行自动翻译和信息总结，大幅提高在翻译小说、漫画、字幕、游戏脚本等内容时的词汇表制作效率。

##### 使用场景

1. **小说翻译** ：自动识别和翻译角色名字及专有名词，生成翻译准备的词汇表。
2. **漫画翻译** ：自动抓取漫画台词中的人物和专有名词，并翻译。
3. **影视字幕翻译** ：在字幕文件中自动识别和翻译重要词汇，帮助字幕翻译人员提高效率。
4. **游戏脚本翻译** ：识别并总结游戏文本中的角色和专有名词，生成统一的翻译词汇表。


##### 使用说明

1. 从[发布页](<https://github.com/neavo/KeywordGacha/releases>)下载`KeywordGacha_DEV_*.zip`并解压缩。
2. 打开配置文件`config.json`，填写API信息。
3. 双击`01_启动.bat`并按提示操作。
4. 执行完毕后，会生成`角色实体_日志.txt`与`角色实体_列表.json`的结果文件。
5. 可以将生成的词汇表导入翻译工具中使用。


##### 概要

* 需要一个兼容 OpenAI 接口的大语言模型。
* 可与 ChatGPT 系列、Claude 系列及国产模型配合使用。
* 需要至少8G显存的Nvidia显卡运行本地服务。
* 使用简便，支持多种输入文本格式(日文)。


**近期更新** 包括翻译自动填充、NER模型优化、识别组织和物品实体、网络请求频率阈值设置等功能。这些改进显著提升了工具的使用效果和处理速度。

##### 日文文本格式支持

* 支持多种输入格式，包括小说、字幕、游戏脚本等。
* 可通过不同文件形式（如.txt、.json、.csv文件）读取文本内容，并自动处理。


##### 设置说明

包括API密钥、请求地址、模型名称、词语过滤阈值、翻译功能开关、网络请求超时时间及频率阈值等配置项。

**语言能力** 方面，支持 OpenAI 最新模型和多语言处理，但模型的质量与运行成本相关。推荐使用一些需要较少显存的模型，如 GLM4-9B-Chat。

##### 开发计划

计划添加对更多语言（如英文、中文、韩文）和 GPU 加速的支持，并支持更多文本格式和模型。

##### 问题反馈

运行日志保存在`KeywordGacha.log`等日志文件中，用户在反馈问题时需要附上这些日志文件。

通过这些功能特性和场景应用，KeywordGacha 可以显著提升翻译准备阶段的工作效率，特别适用于长期处理翻译项目的用户。