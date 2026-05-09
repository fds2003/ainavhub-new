---
title: "sqlite-vec"
date: "2024-01-01 00:00:00+08:00"
description: 'sqlite-vec sqlite-vec  SQLite '
slug: sqlite-vec-sqlite-sqlite-vss-vec0
tags:
- macos
- raspberry
- sqlite-vec
- pi
- vec0
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- ai raspberry pi cat detection
---

## sqlite-vec

`sqlite-vec` 是一个极小的、速度“足够快”的向量搜索 SQLite 扩展，能够在任何地方运行。它是 [`sqlite-vss`](<https://github.com/asg017/sqlite-vss>) 的继任者，专为高效存储和查询浮点数、8位整数和二进制向量而设计。

##### 主要特点：

* 可以在 `vec0` 虚拟表中存储和查询浮点数、整数和二进制向量。
* 使用纯 C 编写，无依赖，能够在所有支持 SQLite 的平台（如 Linux、macOS、Windows、浏览器中的 WASM 和 Raspberry Pi 等）上运行。
* 具备与 `rowid IN (...)` 子查询的预过滤功能。


##### 使用场景：

`sqlite-vec` 适用于需要快速进行向量检索的场景，包括但不限于：

* **机器学习和数据分析** ：用户可以存储和检索高维嵌入向量，特别是在处理文本、图像或音频数据时。
* **推荐系统** ：通过快速的最近邻查询，推荐系统可以根据用户偏好找到相关产品。
* **本地人工智能应用** ：轻量级的向量搜索功能使得本地部署的 AI 应用更具响应速度和效率，如基于嵌入的相似性搜索。
* **游戏开发** ：可以用于实时数据处理和优化策略相关的向量检索。


##### 安装与使用示例：

用户可以通过多种编程语言（如 Python、Node.js、Ruby 等）安装 `sqlite-vec`，并通过 SQL 查询进行向量插入和检索。例如，用户可以创建一个虚拟表并插入向量数据，然后执行 KNN 查询来找到与指定向量最接近的数据。

总之，`sqlite-vec` 是一个强大的工具，可以在多个应用场景中提升数据检索的效率和性能。