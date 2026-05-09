---
title: "AutoCodeRover"
date: "2024-01-01 00:00:00+08:00"
description: 'AutoCodeRover AutoCodeRover  GitHub '
slug: autocoderover-github-llm-swe-bench-lite
tags:
- github
- lite
- autocoderover
- llm
- api
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## AutoCodeRover

AutoCodeRover 是一个用来解决 GitHub 问题（比如修复漏洞和增加功能）的全自动程序改进工具。它通过结合大型语言模型（LLM）和分析调试能力，优先考虑修补位置以生成修补方案。这个工具在 SWE-bench lite 这个包含了 300 个真实世界 GitHub 问题的平台上，大约解决了 22% 的问题，这比现有的 AI 软件工程师的解决效率要高。

AutoCodeRover 的工作分为两个阶段：

1. **上下文检索** ：利用代码搜索 API 浏览代码库并收集相关上下文。
2. **补丁生成** ：基于检索到的上下文尝试编写补丁。


##### 独特之处

AutoCodeRover 有两个独特的功能：

* **代码搜索 API 是程序结构感知的** ，这意味着在搜索相关代码上下文（如方法/类）时，它不是简单的基于字符串匹配，而是在抽象语法树中进行搜索。
* 当测试套件可用时，AutoCodeRover 可以利用测试用例实现更高的修复率，通过执行**统计故障定位** 。


##### 使用场景

AutoCodeRover 在以下情况下尤其有用：

* **修复软件中的错误** ：当 GitHub 上报告了软件中的问题或错误时，可以使用 AutoCodeRover 来自动生成修复补丁。
* **增加新功能** ：对于需要在现有软件上增加新功能的要求，AutoCodeRover 可以帮助自动化这一过程，尽管它的效率可能依赖于具体问题和上下文的复杂程度。
* **软件维护** ：在软件维护期间，尤其是当维护者面对大量未解决的问题时，AutoCodeRover 可以作为一个有价值的工具，帮助快速定位并尝试提供解决方案。


##### 使用 AutoCodeRover

使用 AutoCodeRover 的建议方式是在 Docker 容器中运行。首先构建并启动 Docker 图像，然后在 Docker 容器中设置必要的环境变量（如 OpenAI Key）。用户需要配置任务（比如 Django 的一个问题），在 SWE-bench 中设置并运行任务。AutoCodeRover 会自动尝试解决这些问题，并输出生成的修补方案。

##### 实例

它成功修复了 Django 的 [#32347](<https://code.djangoproject.com/ticket/32347>) 问题，并且当测试用例可用时，AutoCodeRover 可以解决更多问题，如演示视频中的示例所示。

总的来说，AutoCodeRover 是为那些希望自动化处理 GitHub 问题报告（包括错误修复和功能添加）的开发者和维护者设计的。通过自动化这些流程，它不仅可以提高软件维护的效率，也可以减少开发者在修复过程中的工作量。