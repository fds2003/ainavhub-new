---
title: "MemOS"
date: "2024-01-01 00:00:00+08:00"
description: MemOS MemOS（LLMs），LLMs，、，、。（MAG），API，MemCube，...
slug: memos-llms-mag
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- memcube
- kvcachememory
draft: false
related_tools:
- graph-constrained reasoning
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- rllm
---

## MemOS

MemOS是一个专为大型语言模型（LLMs）设计的操作系统，其核心目标是为LLMs提供强大的长期记忆能力，使其能够高效地存储、检索并管理信息，从而实现更具上下文感知、一致性和个性化的交互。该项目的主要功能围绕记忆增强生成（MAG）展开，提供统一的API接口，并采用模块化的MemCube架构，支持文本记忆、用于加速LLM推理和上下文复用的激活记忆（KVCacheMemory），以及存储模型适应参数的参数记忆等多种记忆类型。MemOS具备高度可扩展性，便于用户轻松集成和定制各类记忆模块、数据源及LLM集成，其在LOCOMO基准测试中展现出显著的性能优势，尤其在时间推理任务中实现了159%的准确率提升，整体表现较基线提升近39%。