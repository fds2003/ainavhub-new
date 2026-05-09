---
title: "DupCheck"
date: "2024-01-01 00:00:00+08:00"
description: DupCheck DupCheck Python
slug: dupcheck-python-phash-orb-resnet-18
tags:
- clientsecret
- pinecone
- resnet-18
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- pi
- mcp server for milvus
- dupcheck
- graph-constrained reasoning
- python a2a
---

## DupCheck

DupCheck是一个纯Python实现的通用图片重复与篡改检测工具，旨在解决保险理赔审核、内容审核、电商验真和版权保护等场景中的图像比对需求。该项目通过结合多姿态pHash、多尺度块哈希、ORB关键点以及ResNet-18/CLIP深度学习嵌入等多种特征提取技术构建图片索引，能够高效召回包括精确复制、裁剪、旋转/翻转及轻微修改在内的疑似重复图片。其核心检测流程包括多模态特征索引构建、基于多种哈希与向量搜索（可选FAISS）的候选召回，以及利用ORB+RANSAC进行几何对齐并通过ZNCC算法精确验证重复区域。项目最终能生成详细的检测报告（`dup_report.csv`）和可视化证据图片，辅助人工审核。此外，DupCheck具备高度可定制性，允许用户针对不同业务场景调整检测阈值，并支持与Milvus、Qdrant、Pinecone等外部向量数据库集成以应对大规模图库，确保在性能和准确性之间取得平衡。