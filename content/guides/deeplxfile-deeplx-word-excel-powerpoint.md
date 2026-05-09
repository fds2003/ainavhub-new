---
title: "DeeplxFile"
date: "2024-01-01 00:00:00+08:00"
description: DeeplxFile DeeplxFile Deeplx
slug: deeplxfile-deeplx-word-excel-powerpoint
tags:
- deeplxfile
- deelxfile
- const
- 'true'
- deeplxfile.py
draft: false
related_tools:
- deeplxfile
- graph-constrained reasoning
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## DeeplxFile

DeeplxFile是一个基于Deeplx平台的免费文件翻译工具，支持不限制文件大小的翻译。用户可以使用该工具轻松翻译Word和Excel文件，同时也能对大部分PowerPoint内容进行翻译。

##### 使用场景

1. **文档翻译** ：适用于需要将大文件（如Word和Excel文档）翻译成其他语言的用户，无论是在学术、商务还是个人用途上。
2. **多语言支持** ：对于跨国公司或国际合作项目，DeeplxFile能有效提升多语言文档处理的效率。
3. **学术研究** ：研究人员可以快速翻译外文文献，有助于更好地理解和分析资料。
4. **内容本地化** ：适合需要将产品说明书、宣传材料等进行多语言翻译的企业。


##### 使用说明

* **Windows** ：下载编译好的exe文件，直接双击运行。
* **从源代码运行** ：下载源代码并在终端中执行`python deeplxfile.py`。
* **MacOS** ：解压文件夹后打开终端并执行`./deelxfile`。


同时，该工具支持配置保存原文，用户只需在生成的config.json文件中将`save_original`设置为`true`。还有直连模式可供选择，避免依赖于Deeplx内核，使用自主实现的请求方法。