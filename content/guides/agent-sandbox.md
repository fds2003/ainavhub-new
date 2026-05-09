---
title: "Agent Sandbox Agent Sandbox"
date: "2024-01-01 00:00:00+08:00"
description: Agent Sandbox  Agent Sandbox
slug: agent-sandbox
tags:
- clientsecret
- kubern
- crd
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- graph-constrained reasoning
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
---

## Agent Sandbox

“Agent Sandbox"项目为Kubernetes引入了一个`Sandbox`自定义资源定义（CRD）和控制器，旨在提供声明式、标准化的API，以实现对独立、有状态、单例工作负载的轻松管理，尤其适用于AI代理运行时。它解决了Kubernetes在处理需要稳定身份、长时间运行的单容器场景（如开发环境、AI代码执行、Jupyter Notebooks或小型数据库）时的挑战，避免了现有资源组合的复杂性。其核心特性包括通过gVisor或Kata Containers等运行时提供强大的内核与网络隔离，支持深度休眠与自动恢复，提供高效的弹性持久化存储，探索同一主机上跨沙箱的内存共享，以及实现丰富的身份管理和无需独立服务的有效流量路由，鼓励应用和代理以编程方式利用此API。