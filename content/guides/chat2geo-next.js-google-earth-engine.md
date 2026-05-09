---
title: "Chat2Geo"
date: "2024-01-01 00:00:00+08:00"
description: Chat2Geo Chat2Geo Chat2Geo
slug: chat2geo-next.js-google-earth-engine
tags:
- gee
- chat2geo
- earth
- next.js
- engine
draft: false
related_tools:
- chat2geo
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- next.js ai chatbot x supabase
- voice engine
- openreasoningengine
---

## Chat2Geo

##### Chat2Geo简介

Chat2Geo是一个基于Next.js 15开发的应用程序，提供类似聊天机器人的用户界面，用于进行基于遥感的数据的地理空间分析。该应用利用Google Earth Engine（GEE）作为后台，实时处理和分析各种遥感数据集。用户可以上传自己的矢量数据，执行高级地理空间查询，并与AI助手集成，以进行特定任务，例如**土地覆盖制图** 、**变化检测** 和**空气污染监测** 。

此外，Chat2Geo使用基于检索增强生成（RAG）的高级知识检索功能，可以结合地理空间分析与非地理空间/文本信息，提供更丰富的分析结果。应用还集成了身份验证与数据库功能，几乎构成一个完整的解决方案。

##### 使用场景

1. **土地覆盖映射** ：用户可以输入遥感数据，在AI助手的帮助下，进行土地覆盖类型的分类和比例分析。

2. **变化检测** ：通过对比不同时期的遥感图像，识别地表变化情况，例如城市扩张或环境退化。

3. **空气污染监测** ：应用支持分析空气污染数据，帮助用户监控和理解不同时期和区域的空气质量变化。

4. **城市热岛效应分析** ：用户可以评估城市与乡村地区温度差异，了解城市热岛效应的影响。

5. **自定义数据集整合** ：用户可以上传自己的矢量数据并与GEE平台链接，进行定制化的地理空间分析。

6. **结合知识库的分析** ：通过检索增强生成（RAG）功能，用户可以将地理空间分析与上传的文档知识相结合，提供更深入的见解。


Chat2Geo适用于研究人员、城市规划者、环境保护人士以及任何需要进行地理空间数据分析的用户。