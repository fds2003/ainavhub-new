---
title: "RunsOn"
date: "2024-01-01 00:00:00+08:00"
description: RunsOn RunsOn GitHub Action
slug: runson-github-action-aws
tags:
- aws
- github
- ami
- cpu
- action
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## RunsOn

RunsOn是一个提供给GitHub Action自托管运行器的解决方案，旨在以更低的成本提供快速、灵活且高效的运行环境。通过利用您自己的AWS账户，在需要时动态启动运行器，RunsOn可以极大地降低使用GitHub Action运行器的成本，并提供比标准GitHub托管运行器更强的自定义和控制能力。

##### 使用场景：

1. **成本效益** ：对于希望降低GitHub Action运算成本的团队，RunsOn提供的自托管运行器比标准的GitHub托管运行器便宜多达10倍。

2. **定制与控制** ：当你需要更多地控制运行器的环境时（例如使用特定的操作系统映像或访问特定的硬件资源），RunsOn允许访问所有AWS上可用的Linux运行器类型，包括裸金属服务器，并支持x64和arm64架构。你甚至可以使用自己的AMI。

3. **无限制并发** ：对于需要同时运行多个工作流程的项目，RunsOn可以无限制地扩展，不受并发限制。

4. **执行速度** ：使用较大的实例类型（例如16核心CPU的实例）可以让工作流程更快完成，从而实现成本的节约，尤其是当你的工作流程能够充分利用更高的核心数量时。

5. **缓存优化** ：RunsOn的最新版本引入了本地S3缓存功能，可以提高工作流程的速度，并且不限制缓存大小。

6. **高级特性** ：需要SSH访问运行器进行调试，或者希望使用更有效的并发控制算法来管理自托管运行器池的组织，也会发现RunsOn很有吸引力。


##### 成本：

RunsOn提供极具竞争力的价格，至少比市面上的SaaS解决方案便宜2倍，同时你还拥有对基础设施的完全控制。此外，RunsOn的作者提供了一个成本计算器，帮助用户估算使用RunsOn相比标准GitHub托管运行器可节省的成本。

##### 许可和作者信息：

* RunsOn采用繁荣公共许可证3.0.0（Prosperity Public License 3.0.0），对非营利组织或个人使用免费。商业组织可以免费评估15天，之后必须购买许可证。
* 该软件由Cyril Rohr创建，他还有其他与DevOps工具相关的项目，如PullPreview.com和Packager.io。


RunsOn是面向需要灵活、成本效益高、且可控的GitHub Action运行环境的组织的理想选择。无论是希望减少成本、需要特定的运行环境配置，还是要求高并发执行，RunsOn都提供了一个强大的解决方案。