---
title: "AgentGuard"
date: "2024-01-01 00:00:00+08:00"
description: AgentGuard AgentGuard AI
slug: agentguard-openai-anthropic-api
tags:
- clientsecret
- const
- redis
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
draft: false
related_tools:
- graph-constrained reasoning
- reddit ai trend reports
- report maistro
- pi
- anthropic prompt library
---

## AgentGuard

AgentGuard是一个专为AI代理程序设计的实时成本管理与防护工具，其核心功能在于自动拦截和监控对OpenAI、Anthropic等主要AI API的调用，通过精确的令牌计算和实时定价，在程序执行过程中持续追踪实际消耗。一旦检测到费用即将或已超出预设的预算上限，它能立即激活保护机制，自动停止或以可控方式中断代理程序的运行，从而有效避免因无限循环、配置错误等导致的意外高额开支。该工具提供多种灵活的保护模式（如抛出可恢复错误、仅通知或强制终止进程）、支持通过Redis实现多进程共享预算、具备数据脱敏等隐私保护功能，并能生成详细的成本报告，为AI应用的开发与生产环境提供了即时、前瞻性的成本控制与风险规避。