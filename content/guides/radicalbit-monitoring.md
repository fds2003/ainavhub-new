---
title: "Radicalbit AI Monitoring Radicalbit AI Monitoring Radicalbit AI Monitoring"
date: "2024-01-01 00:00:00+08:00"
description: Radicalbit AI Monitoring Radicalbit AI Monitoring  Radicalbit AI Monitoring
  ...
slug: radicalbit-monitoring
tags:
- monitoring
- radicalbit
draft: false
related_tools:
- onit
---

## Radicalbit AI Monitoring

Radicalbit AI Monitoring 是一种全面解决方案，用于在生产环境中监控机器学习和大型语言模型。当模型在开发和验证阶段表现良好时，它们在生产环境中的效果可能会因数据变化或概念漂移等因素而逐渐减弱。Radicalbit AI Monitoring 平台能够帮助用户主动识别和解决潜在的性能问题，确保AI模型在生产环境中的最佳表现。

## 关键功能

Radicalbit AI Monitoring 提供了广泛的监控功能，包括：

* **数据质量监控**
* **模型质量监控**
* **模型漂移监控**


通过分析参考数据集（用于预生产验证）和当前数据集，用户可以从多个层面对模型进行全方位控制。

## 使用场景

Radicalbit AI Monitoring 适用于各种AI模型的生产环境，包括但不限于以下场景：

1. **批量工作负载**

* 二元分类（表格数据）
* 大型语言模型（数据质量和模型质量）
* 多类别分类（表格数据）
* 回归分析（表格数据）
* 计算机视觉（图像）
* 聚类分析（表格数据）
2. **实时工作负载**

* 二元分类
* 多类别分类
* 回归分析
* 计算机视觉
* 聚类分析


## 安装及使用

Radicalbit AI Monitoring 提供了使用 Docker Compose 进行本地部署的简便方法，可以通过以下命令启动平台：


docker compose up


若需要UI界面：


docker compose --profile ui up


之后可以通过访问 [http://localhost:5173](<http://127.0.0.1:5173>) 来操作应用程序。

此外，该平台也支持与K3s集群的交互，AWS集成等多种功能，并且提供了详细的[文档](<https://docs.oss-monitoring.radicalbit.ai>)。用户还可以加入其[Discord社区](<https://discord.gg/x2Ze8TMRsD>)进行交流与支持。