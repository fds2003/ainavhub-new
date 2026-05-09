---
title: "PPTX2MD"
date: "2024-01-01 00:00:00+08:00"
description: 'PPTX2MD PPTX2MD PPTX2MD  Powerpoint pptx '
slug: pptx2md-powerpoint-pptx-markdown
tags:
- python
- pptx2md
- level
- wikitext
- madoko
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## PPTX2MD

# PPTX2MD

[PPTX2MD](<https://github.com/ssine/pptx2md>) 是一个将 Powerpoint pptx 文件转换成 Markdown 文本的工具。

## 支持的格式

该工具可以保留以下格式：

* 标题。支持通过模糊匹配自定义目录。
* 深度列表。
* 带加粗、斜体、颜色、超链接的文本。
* 图片。图片会被提取并插入到相对路径中。
* 带合并单元格的表格。
* 由上至下再由左至右的块顺序。


## 支持的输出

* Markdown
* [Tiddlywiki](<https://tiddlywiki.com/>)’s wikitext
* [Madoko](<https://www.madoko.net/>)


## 安装与使用

##### 安装

需要确保系统上已安装 _[Python](<https://www.python.org/>)_ 3.6 及以上版本以及 _pip_ 。然后在终端执行以下命令：


pip install pptx2md


##### 使用

安装完成后，使用命令 `pptx2md [pptx 文件名]` 将 pptx 文件转换为 Markdown。

默认输出文件名为 `out.md`，提取的图片会放在 `img` 文件夹中。


pip install --upgrade pptx2md
pip uninstall pptx2md


##### 自定义标题

默认情况下，该工具将所有 pptx 标题解析为 `level 1` 的 Markdown 标题，用户可以通过提供一个预定义的标题列表文件来获得分层目录，并使用 `-t` 参数提供此文件。

标题文件示例（titles.txt）：


Heading 1
Heading 1.1
Heading 1.1.1
Heading 1.2
Heading 1.3
Heading 2
Heading 2.1
Heading 2.2
Heading 2.1.1
Heading 2.1.2
Heading 2.3
Heading 3


使用命令：


pptx2md [文件名] -t titles.txt


## 其他参数

* `-t [文件名]` 提供标题文件
* `-o [文件名]` 输出文件路径
* `-i [路径]` 提取图片的目录
* `--image-width [宽度]` 图片最大宽度（以 px 为单位），设置后图片将作为 HTML img 标签插入
* `--disable-image` 禁用图片提取
* `--disable-escaping` 不尝试转义特殊字符
* `--disable-notes` 不添加演示者注释
* `--disable-wmf` 保持 wmf 格式的图片不变
* `--disable-color` 禁用 HTML 颜色标签
* `--enable-slides` 用 `\n---\n` 分隔幻灯片，用于将 pptx 幻灯片转换为 Markdown 幻灯片
* `--min-block-size [大小]` 输出文本块的最小字符数
* `--wiki` / `--mdk` 生成对应的 wiki 或 madoko 标记语言
* `--qmd` 输出 qmd 标记语言，用于 [quarto](<https://quarto.org/docs/presentations/revealjs/>) 展示


注意：需要安装 [wand](<https://docs.wand-py.org/en/0.6.12/>) 以更好地转换 wmf 图片。

## 使用场景

PPTX2MD 适用于以下场景：

* 需要将 PPT 幻灯片内容转换为 Markdown 文档进行版本控制。
* 需要在 Wiki 或其他文档管理系统中展示 PPT 内容。
* 需要将 PPT 内容嵌入到 Markdown 支持的内容管理系统中。
* 需要对 PPT 进行详细文本解析并进行二次处理。