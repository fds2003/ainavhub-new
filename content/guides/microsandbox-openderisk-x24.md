---
title: "MICROSANDBOX MICROSANDBOX"
date: "2024-01-01 00:00:00+08:00"
description: MICROSANDBOX  OpenDeRisk
slug: microsandbox-openderisk-x24
tags:
- microsandbox
- vis-agent
- openderisk
- agent
- openrca
draft: false
related_tools:
- microsandbox
- agent
- openderisk
- oliva multi-agent assistant
- openai agents sdk
---

## MICROSANDBOX

这段文本描述的是 OpenDeRisk，一个AI原生风险智能系统，可以提供7x24小时的全面深度保护。虽然文本中没有直接提到“MICROSANDBOX”，但是我们可以推断 OpenDeRisk 是在沙箱环境中运行和测试的，或者它的某些组件/代理可能需要在沙箱环境中执行某些操作。

**OpenDeRisk 的主要特点:**

* **DeepResearch RCA (根因分析):** 通过深度分析日志、追踪和代码，快速定位问题根源。
* **可视化证据链:** 全面展示诊断过程和证据链，使诊断清晰，便于快速判断准确性。
* **多 Agent 协作:** SRE-Agent, Code-Agent, ReportAgent, Vis-Agent 和 Data-Agent 之间的协作。
* **开放和开源架构:** 采用完全开放和开源的架构，允许相关框架和代码在开源项目中开箱即用。


**架构:**

OpenDeRisk 采用多 Agent 架构，并基于微软的开源 OpenRCA 数据集 (大约 26GB)。通过多 Agent 协作进行根因分析和诊断，其中 Code-Agent 动态编写代码进行最终分析。

**技术实现:**

* **数据层:** 从 GitHub 拉取大规模 OpenRCA 数据集 (20GB)，本地解压并处理以进行分析。
* **逻辑层:** 多 Agent 架构，通过 SRE-Agent, Code-Agent, ReportAgent, Vis-Agent 和 Data-Agent 协作执行深度 DeepResearch RCA (根因分析)。
* **可视化层:** 使用 Vis 协议动态呈现整个处理流程和证据链，以及多角色协作和切换的过程。


**快速开始:**

提供了安装和启动 OpenDeRisk 的说明，包括安装 uv，安装依赖包以及配置 API 密钥。 同时提供了访问网站的地址 `http://localhost:7777`。

**使用场景:**

从执行结果的截图来看，OpenDeRisk 适用于需要多个 Agent 协同处理的复杂运维诊断任务。它能够帮助定位服务故障的根因，并提供可视化的分析过程。

**MICROSANDBOX 的潜在使用场景 (基于 OpenDeRisk 的功能推断):**

虽然没有直接提及，但 OpenDeRisk 在以下场景可能用到沙箱技术：

* **代码执行环境隔离:** Code-Agent 动态编写代码用于分析，为了防止恶意代码或潜在的风险，这些代码可能需要在沙箱环境中执行。 这保证了系统的安全性。
* **实验和测试:** 在部署到生产环境之前，新的 Agent 或分析逻辑可能需要在沙箱环境中进行测试，以确保其稳定性和安全性。
* **数据安全:** 分析敏感数据时，可以在沙箱中进行，以防止数据泄露或被篡改。
* **第三方组件隔离:** OpenDeRisk 依赖于许多第三方组件，为了降低引入安全漏洞的风险，这些组件可能在沙箱中运行。


总而言之，OpenDeRisk 是一个功能强大的 AI 原生风险智能系统，它利用多 Agent 协作和开源架构进行根因分析和诊断。 虽然文档没有直接说明 MICROSANDBOX 的使用，但是根据它的架构和功能特点，可以推断沙箱技术在它的某些组件和流程中可能扮演着重要的角色，以确保系统的安全性、稳定性、可测试性和数据安全。

**总结：**

OpenDeRisk是一个开源的AI原生风险智能系统，通过多Agent架构实现对应用系统的风险智能管理和7*24小时的保护。潜在的应用场景包括：运维诊断、根因分析等，并通过MICROSANDBOX技术保证代码执行安全和测试环境隔离。