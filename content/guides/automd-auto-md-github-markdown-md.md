---
title: "automd automd Auto-MD"
date: "2024-01-01 00:00:00+08:00"
description: 'automd Auto-MD  GitHub '
slug: automd-auto-md-github-markdown-md
tags:
- auto-md
- sass
- cpp
- mdwn
- github
draft: false
related_tools:
- deepseek.cpp
- stable-diffusion.cpp
- bitnet.cpp
- chatglm.cpp
- claude github webhook
---

## automd

Auto-MD 是一个可以将各种文件类型和 GitHub 仓库转换为 Markdown 文档（.md）的 Python 工具，这些文档经过优化后可以快速进行大语言模型（LLM）索引和检索。

##### 主要功能

* 支持多种文件类型（详见下表）
* 可处理压缩文件、文件夹、单个文件及 GitHub 仓库
* 能生成单个 MarkDown 文件或多个文件
* 为每个处理的文件创建目录和元数据


##### 支持的文件扩展名

类别 | 扩展名
---|---
文本 | .txt, .text, .log
Markdown | .md, .markdown, .mdown, .mkdn, .mkd, .mdwn, .mdtxt, .mdtext
Web | .html, .htm, .xhtml, .shtml, .css, .scss, .sass, .less
编程 | .py, .pyw, .js, .jsx, .ts, .tsx, .java, .c, .cpp, .cs, .go, .rb, .php, .swift, .kt
数据 | .json, .jsonl, .yaml, .yml, .xml, .csv, .tsv
配置 | .ini, .cfg, .conf, .config, .toml, .editorconfig
Shell | .sh, .bash, .zsh, .fish, .bat, .cmd, .ps1
其他 | .rst, .tex, .sql, .r, .lua, .pl, .scala, .clj, .ex, .hs, .ml, .rs, .vim

##### 快速设置指南

1. 安装 Python 3.7 或更高版本

2. 下载此项目（或正常克隆仓库）：

* 点击上方的绿色“Code”按钮
* 选择“Download ZIP”
* 解压 ZIP 文件
3. 打开终端/命令提示符并导航到解压后的文件夹：

cd path/to/Auto-MD


4. 安装所需的包：

pip install -r requirements.txt


5. 运行应用程序：

python main.py


6. 使用 GUI：

* 选择输入文件/文件夹
* 选择输出位置
* 设置处理选项
* 点击“Start Processing”


##### 使用场景

假设你的文件夹“my_project”中有如下文件：

* README.md
* script.py
* data.json
* styles.css


经过 Auto-MD 处理后，你会得到一个单一的 Markdown 文件（`output.md`），包含所有输入文件的内容，并在顶部附有目录，便于使用大语言模型进行导航和引用。

这个工具特别适合需要将散落在多个文件中的文档、代码、配置和数据整合到一个易于索引和检索的单一 Markdown 文档的场景，例如软件项目的文档汇总、代码库的多文件阅读材料生成等。