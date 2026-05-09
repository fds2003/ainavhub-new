---
title: "Ciphey"
date: "2024-01-01 00:00:00+08:00"
description: Ciphey Ciphey//，(NLP)(AI)，。，，，Ciphey，。 ： ：...
slug: ciphey-nlp
tags:
- ciphey
- base64
- flag
- capture
- ausearch
draft: false
---

## Ciphey

Ciphey是一个自动化的解密/解码/破解工具，它利用自然语言处理(NLP)和人工智能(AI)技术，以及一些常识来帮助用户识别和解码加密文本。这意味着，如果您有一段加密的文本，但不知道使用了哪种加密方法，Ciphey可以帮助您找出来，并尝试解码它。

**使用场合** ：

1. **解码未知加密** ：当您遇到一段未知加密方式的文本时，Ciphey可以自动尝试多种解密方法，帮您节省尝试的时间和努力。

2. **安全研究和CTF竞赛** ：对于安全研究者或参与Capture The Flag (CTF) 竞赛的人来说，Ciphey可以快速识别和解码各种加密，帮助他们更快地解决挑战。

3. **教育学习** ：如果您正在学习密码学，Ciphey可以作为一个实践工具，帮助您了解和实验不同的加密技术及其解码方法。


**功能特点** ：

* 支持50多种加密/编码方式，包括二进制、摩尔斯码、Base64、古典密码（如凯撒密码、仿射密码、维吉尼亚密码）以及一些更现代的加密方式如重复密钥XOR等。

* 利用定制的人工智能模块（AuSearch）来猜测使用的加密方式，以及定制的自然语言处理模块来检测文本是否已被成功解密。

* 多种语言支持（目前支持英语和德语，包括英语的澳大利亚、英国、加拿大、美国变体）。

* 简单易用，通过命令行即可操作，同时也支持导入Ciphey的功能到自己的代码中。


**安装和运行** ：

Ciphey可通过Python、Docker、MacPorts（macOS）和Homebrew（macOS/Linux）安装。具体安装方法参见其[安装指南](<https://github.com/Ciphey/Ciphey/wiki/Installation>)。

运行Ciphey非常简单，可以通过指定加密文件(`ciphey -f encrypted.txt`)、直接传入加密文本(`ciphey -- "Encrypted input"`)，或使用更通用的方式(`ciphey -t "Encrypted input"`)来运行。