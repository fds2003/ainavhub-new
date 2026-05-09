---
title: "SWE-agent"
date: "2024-01-01 00:00:00+08:00"
description: SWE-agent SWE-agent LM
slug: swe-agent-lm-gpt-4-github-bug
tags:
- swe-agent
- linter
- cat
- github
- gpt-4
draft: false
related_tools:
- swe-agent
- agent
- stock data insights application
- otc medication chat agent
- cat code
---

## SWE-agent

SWE-agent利用语言模型（LM），比如GPT-4，将其变成能够修复GitHub仓库中的BUG和问题的软件工程代理。通过在完整的[SWE-bench](<https://github.com/princeton-nlp/SWE-bench>)测试集上，SWE-agent解决了**12.29%**的问题，实现了当前最高水平的性能。

为了达到这样的结果，SWE-agent设计了简单的以LM为中心的命令和反馈格式，这些命令和格式让LM更容易浏览仓库、查看、编辑和执行代码文件。这被称为**代理-计算机接口** （ACI），并且SWE-agent的开发旨在简化基于ACI设计的、操作仓库级代码的代理的迭代过程。

就像典型的语言模型需要好的提示工程一样，良好的ACI设计能在使用代理时带来更好的结果。正如我们在论文中展示的，没有经过良好调整的ACI的基线代理表现得比SWE-agent差很多。

SWE-agent包含在代理-计算机接口设计过程中发现的一些非常有帮助的功能：

1. 添加一个在发出编辑命令时运行的linter，如果代码语法不正确，则不让编辑命令通过。
2. 为代理提供了一个特制的文件浏览器，而不是简单地使用`cat`命令查看文件。这个文件浏览器在每次仅显示100行时表现最佳。我们构建的文件编辑器有上下滚动和在文件中搜索的命令。
3. 为代理提供了一个特制的全目录字符串搜索命令。这个工具简洁地列出了匹配项-我们仅列出了至少有一个匹配的每个文件。为模型显示有关每个匹配更多的上下文被证明对模型来说太混乱了。
4. 当命令没有输出时，我们返回一条消息说"您的命令已成功运行并没有产生任何输出。"


针对不同情况使用SWE-agent：

* 当你遇到GitHub仓库中的BUG或问题，并希望自动化地创建一个尝试修复该问题的pull request时，可以使用SWE-agent。
* 当你在软件开发过程中希望借助语言模型的力量来改善代码质量、解决编程难题时，也可以考虑采用SWE-agent。


无论是希望自动化处理GitHub中的问题，还是提高软件工程的效率，SWE-agent都提供了一个强大工具，帮助开发者通过AI代理更加高效地解决软件工程问题。