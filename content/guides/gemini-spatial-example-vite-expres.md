---
title: "Gemini spatial example Gemini spatial example Gemini Spatial Example"
date: "2024-01-01 00:00:00+08:00"
description: Gemini spatial example Gemini Spatial Example Gemini Spatial Example
slug: gemini-spatial-example-vite-expres
tags:
- vite-express
- npm
- example.env
- example
- key
draft: false
related_tools:
- gemini spatial example
- mlx examples
- monkeycode
- kwai keye-vl
- monkeyocr
---

## Gemini spatial example

# Gemini Spatial Example概述

Gemini Spatial Example展示了当前Gemini模型可以提供的边界框信息。该仓库展示了如何提示和显示边界框信息（其中包含一些技巧），其主要目的是为其他开发者提供演示示例和二次开发的基础。这个项目使用vite-express和一个最小化的服务器来访问API。

一个更简单的使用JSON提示的示例可以在[这里](<https://github.com/GrantCuster/gemini-json-bounding-box-example>)找到。

## 本地运行方式

1. 在[Google AI开发者平台](<https://ai.google.dev/>)获取你的Gemini API Key。
2. 将API Key放入`example.env`文件，并将文件名重命名为`.env`。
3. 使用以下命令安装依赖并运行：

npm install
npm run dev


## 使用场景

* **计算机视觉应用** ：利用边界框信息进行对象检测和识别。
* **增强现实(AR)应用** ：在AR场景中对物体进行精确定位和交互。
* **自动驾驶** ：检测并识别环境中的障碍物及其他重要对象。
* **智能安防** ：监控视频中识别和跟踪可疑目标。
* **图像标注工具** ：帮助标注数据，为机器学习模型提供训练数据。


这个项目主要为开发者提供了一个基础，便于对Gemini模型提供的边界框信息进行探索和扩展开发，适用于各种需要空间信息识别和处理的应用。