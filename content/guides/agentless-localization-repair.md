---
title: "Agentless"
date: "2024-01-01 00:00:00+08:00"
description: Agentless Agentless  agentless
slug: agentless-localization-repair
tags:
- repair
- patches
- localization
- candidate
- diff
draft: false
related_tools:
- pai
- diffusion toolkit
- langdiff
- diffmem
- streammultidiffusion
---

## Agentless

**Agentless** 是一种无代理（agentless）的方法，用于自动解决软件开发中的问题。该方法通过两个简单的阶段来解决每个问题：定位（Localization）和修复（Repair）。

##### 阶段介绍

1. **定位（Localization）** ：

* **分层定位** ：首先定位到具体的文件，然后是相关的类或函数，最后是具体的编辑位置。通过这一分层的方式，Agentless 可以逐步缩小问题区域，提高定位的准确性。
2. **修复（Repair）** ：

* **生成修复补丁** ：基于定位出的编辑位置，Agentless 会生成多个修复补丁（Candidate Patches），以简单的 diff 格式呈现。
* **测试过滤** ：对生成的补丁进行测试过滤。
* **补丁重排名** ：对所有通过测试的补丁进行重新排名，最终选择一个提交。


##### 使用场景

Agentless 可广泛应用于软件开发的各个阶段，特别是在以下场景中具有显著优势：

1. **代码错误修复** ：

* 在大规模代码库中快速定位和修复代码错误。
2. **回归测试和修复** ：

* 针对回归测试中的失败案例，快速找出引发问题的代码并进行修复。
3. **代码优化** ：

* 通过细粒度的定位，发现代码中的低效部分并生成优化建议。
4. **自动化代码审核** ：

* 在代码审核过程中，自动检测和修复潜在的问题，提高代码质量。


Agentless 提供了一种高效、自动化的方式来处理软件开发中的各种问题，减少了人工干预的需求，显著提升了开发效率和软件质量。