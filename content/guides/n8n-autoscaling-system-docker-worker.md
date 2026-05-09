---
title: "n8n Autoscaling System n8n Autoscaling System n8n"
date: "2024-01-01 00:00:00+08:00"
description: 'n8n Autoscaling System n8n  n8n '
slug: n8n-autoscaling-system-docker-worker
tags:
- kubernetes
- puppeteer
- redis
- workers
- system
draft: false
related_tools:
- puppeteer real browser
- stock analysis system
- awesome ai system prompts
- hospital_multiagent_system
- n8n autoscaling system
---

## n8n Autoscaling System

## n8n 自动伸缩系统总结

n8n 自动伸缩系统是一个基于 Docker 的解决方案，旨在自动调整 n8n 工作流自动化平台的 worker 容器数量，以应对不同的工作负载。它通过监控 Redis 队列的长度来动态调整 worker 容器的数量，无需复杂的 Kubernetes 或其他容器编排平台。它还内置了 Puppeteer 和 Chrome，方便 n8n 代码节点进行高级网页抓取。

**核心思想：** 根据 Redis 队列中待处理的任务数量，自动增加或减少 n8n worker 容器的数量。

**架构：** n8n Main 将任务放入 Redis 队列，Autoscaler 监控 Redis 队列的长度，并根据预设的阈值增加或减少 n8n Workers 的数量。Redis Monitor 则负责持续监控 Redis 队列的状态。

**主要特点：**

* **动态伸缩：** 根据队列长度自动调整 worker 容器数量。
* **易于配置：** 通过 `.env` 文件即可配置伸缩阈值、容器数量限制等。
* **基于 Docker Compose：** 使用 Docker Compose 进行部署，简化了安装和管理。
* **集成 Puppeteer 和 Chrome：** 方便进行网页抓取。
* **监控功能：** 包含 Redis 队列监控服务和 Docker 健康检查，方便排查问题。


## n8n 自动伸缩系统的使用场景

n8n 自动伸缩系统适用于以下场景：

* **工作负载变化大的 n8n 部署：** 当 n8n 工作流的执行量随时间变化较大时，使用自动伸缩系统可以确保系统在高负载时能够及时处理任务，并在低负载时减少资源消耗。

* **需要处理大量并发执行的 n8n 工作流：** 自动伸缩系统可以根据并发量自动增加 worker 容器数量，提高系统的处理能力。

* **资源有限的环境：** 在资源受限的服务器或云环境中，自动伸缩系统可以帮助在性能和成本之间取得平衡，避免资源浪费。

* **希望简化 n8n 部署和管理的场景：** 基于 Docker Compose 的部署方式，使得 n8n 自动伸缩系统的安装和配置都非常简单。


**具体案例：**

* **自动化营销平台：** 在营销活动期间，需要处理大量的邮件发送和数据同步任务，使用自动伸缩系统可以根据活动流量自动调整 worker 数量，确保营销活动的顺利进行。
* **数据抓取系统：** 需要定期抓取大量网页数据，使用自动伸缩系统可以根据抓取任务的数量自动增加 worker 数量，提高抓取效率。
* **电商订单处理系统：** 在促销期间，订单量激增，使用自动伸缩系统可以确保订单能够及时处理，避免客户流失。


总而言之，n8n 自动伸缩系统可以帮助用户更有效地管理和利用 n8n 资源，提高 n8n 工作流的性能和效率，并降低运维成本。