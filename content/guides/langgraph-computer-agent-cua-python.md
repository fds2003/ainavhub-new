---
title: "LangGraph Computer Use Agent LangGraph Computer Use Agent LangGraph Computer"
date: "2024-01-01 00:00:00+08:00"
description: "LangGraph Computer Use Agent LangGraph Computer Use Agent (CUA) LangGraph"
slug: "langgraph-computer-agent-cua-python"
draft: false
---

## LangGraph Computer Use Agent

## LangGraph Computer Use Agent (CUA) 总结

LangGraph Computer Use Agent (CUA) 是一个 Python 库，基于 LangGraph 框架构建，旨在创建具备 **计算机操作能力** 的智能代理。CUA 代理能够通过 **模拟用户在计算机上的操作** 来完成任务，例如：

* **浏览网页**
* **与网页元素交互（填写表单、点击按钮等）**
* **运行 Ubuntu 或 Windows 应用程序**
* **执行其他计算机上的操作**


CUA 集成了**流式处理、短期和长期记忆** ，以及 **人机协作** 等特性，具有高度的灵活性和可定制性。它使用 **Scrapybara** 作为访问虚拟机的接口，通过与虚拟机的交互，实现对计算机的操控。

## 使用场景

CUA 的使用场景非常广泛，主要集中在以下几个方面：

* **自动化网络研究** ：自动搜索特定信息、比较产品价格、收集数据等。
* **自动化软件测试** ：模拟用户操作，对 Web 应用或桌面应用进行自动化测试。
* **自动化数据输入** ：自动填写在线表单、录入数据等。
* **自动化工作流程** ：将多个软件应用串联起来，自动完成一系列任务。
* **辅助决策** ：CUA 代理可以通过计算机操作，收集、分析信息，为用户提供决策依据。
* **贡献开源项目** ：像Demo视频展示的那样，通过 CUA 代理查找开源项目的信息，并制定贡献计划。
* **进行特定领域的搜索和操作** ：找到特定轮胎的最优价格，进行复杂的搜索并进行比较。
* **需要与网页交互的任务** ：比如自动登录网站，保存auth state，下次运行可以直接利用该状态，从而节省重新登录的时间。


简单来说，凡是需要人工在计算机上执行的重复性、繁琐性的任务，都可以考虑使用 CUA 代理来自动化完成，从而提升效率，降低成本。
