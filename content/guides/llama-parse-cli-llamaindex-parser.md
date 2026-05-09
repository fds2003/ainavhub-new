---
title: "Llama Parse CLI Llama Parse CLI Llama Parse CLI"
date: "2024-01-01 00:00:00+08:00"
description: 'Llama Parse CLI Llama Parse CLI  Llama Parse CLI '
slug: llama-parse-cli-llamaindex-parser
tags:
- markdown
- install
- text
- file
- llamaindex
draft: false
related_tools:
- minimax-text-01
- textdistiller
- model context protocol
- whisper-speech-to-text-api
- region-aware text-to-image generation
---

## Llama Parse CLI

##### Llama Parse CLI 简介

Llama Parse CLI 是一个非官方的命令行工具，旨在利用 LlamaIndex Parser 对文档进行解析。该工具允许用户通过命令行界面快速处理和转换各种格式的文档，便于后续的数据处理和分析。

##### 安装方式

要安装 Llama Parse CLI，用户需要先在系统中安装 Node.js 和 npm。安装完毕后，可以通过以下命令全局安装该工具：


npm install -g llama-parse-cli


##### 使用方法

Llama Parse CLI 提供两个主要命令：`auth` 和 `parse`。

1. **认证** ：

使用 `auth` 命令进行身份验证，输入 API 密钥以便进行后续操作：

llama-parse auth


2. **文档解析** ：

使用 `parse` 命令进行文档解析，命令格式如下：

llama-parse parse <file> [options]


**选项包括** ：

* `-f, --format <format>`：输出格式（json、markdown、text），默认格式为 markdown
* `-o, --output <output>`：指定输出文件
* `-ol, --ocr-language <ocr-language>`：文档语言
* `-v, --verbose`：详细模式


##### 使用场景

Llama Parse CLI 的使用场景包括但不限于：

* 从 PDF 或其他文档格式中提取文本内容，以便进行数据分析。
* 将文档内容导出为特定格式（如 markdown），以便于后续的编辑或发布。
* 在批量处理中解析多个文档，提高工作效率。
* 针对特定页码或内容特征进行解析，如选择性地跳过某些文本或使用快速模式处理大文件。


##### 示例

1. 解析 PDF 文件并以 markdown 格式输出：

llama-parse parse example/sample-pdf.pdf


2. 解析文档并保存输出到文件：

llama-parse parse example/sample-pdf.pdf -o output.md


3. 解析特定页的文档：

llama-parse parse example/sample-pdf.pdf -tp 0


通过这些功能，Llama Parse CLI 提供了一个灵活且高效的方式来处理和解析文档，适合开发者、数据分析师及需要处理文本数据的专业人士使用。