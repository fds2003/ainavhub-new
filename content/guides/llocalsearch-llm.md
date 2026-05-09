---
title: "LLocalSearch"
date: "2024-01-01 00:00:00+08:00"
description: LLocalSearch LLocalSearch LLM
slug: llocalsearch-llm
tags:
- llm
- api
- google
- llocalsearch
- openai
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## LLocalSearch

LLocalSearch是一个完全本地运行的搜索聚合器，它利用长短期记忆（LLM）智能体来执行搜索任务。用户可以向系统提问，系统则通过一系列LLM智能体来寻找答案，并允许用户看到智能体工作的进度及最终答案。这个系统的独特之处在于其完全本地化的特性，无需OpenAI或Google的API密钥就可以运行。

##### 使用场景

LLocalSearch适合在以下情况下使用：

1. **隐私保护** ：当用户对隐私有严格要求，不希望查询内容通过互联网传输或者存储在外部服务器上时，LLocalSearch提供了一种安全的本地搜索解决方案。

2. **成本敏感** ：如果用户希望避免支付给大型API提供商昂贵的费用，特别是在频繁进行大量搜索查询的应用场景中，LLocalSearch因其无需API密钥而成为一种成本效益较高的选择。

3. **硬件限制** ：LLocalSearch能够在较低端的LLM硬件上运行，这意味着即使在计算资源受限的环境中，用户也能够部署和使用这个系统。


##### 功能特点

* **完全本地运行** ：保障数据隐私，避免数据通过互联网传输。
* **适用于低端硬件** ：能够在7b模型等低端LLM硬件上运行。
* **进度日志** ：提供搜索过程的透明视图，让用户了解搜索进展。
* **支持追加问题** ：允许用户对搜索结果提出跟进问题。
* **移动友好的界面** ：通过轻量级的网页接口，用户可以从任何设备访问LLocalSearch。
* **快速部署** ：支持通过Docker Compose快速简易地部署。
* **定制UI** ：提供包括暗黑模式在内的手工设计的界面。


##### 安装需求

部署LLocalSearch需要满足以下条件：

* 配置并运行的Ollama服务器，且该服务器能够从容器中访问。虽然GPU不是必须的，但推荐使用以获得更好的性能。
* 安装Docker Compose。


##### 安装步骤

根据用户的需求，LLocalSearch提供了稳定版和开发版两种运行方式。推荐普通用户使用稳定版来避免开发过程中可能遇到的问题。对于希望对项目做出贡献的开发者，则可以选择运行开发版。

LLocalSearch为需要完全本地化且成本效率高的搜索解决方案提供了新的选择，特别是对于那些重视数据隐私和安全性的用户而言，这是一个非常有吸引力的选项。