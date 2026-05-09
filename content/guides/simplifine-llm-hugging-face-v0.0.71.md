---
title: "Simplifine Simplifine"
date: "2024-01-01 00:00:00+08:00"
description: 'Simplifine  Simplifine '
slug: simplifine-llm-hugging-face-v0.0.71
tags:
- wandb
- bug
- simplifine
- git
- simplifine-llm
draft: false
related_tools:
- transformer debugger
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## Simplifine

🌟 **Simplifine** 🌟

**最简单、完全开源的LLM微调库！**

Simplifine 可以让你仅用一行代码就能调用任何 Hugging Face 的数据集或模型进行 LLM（大语言模型）微调。

## 🔄 更新

**v0.0.71 (2024-07-25)**

* **Bug 修复:** 解决了库在某些配置下无法加载的问题。
* **新功能:** 增加了从 git 安装的支持，支持使用 Hugging Face API 令牌来访问受限模型。
* **文档:** 更新了示例。


## 🚀 特性

* **监督微调** 🧑‍🏫
* **问答微调** ❓➕
* **用于嵌入任务的对比损失** 🌌
* **多标签分类微调** 🏷️
* **WandB 日志记录** 📊
* **内置评价工具** 📈
* **自动化微调参数** 🤖
* **最先进的优化技术（DeepSpeed, FDSP）** 🏎️


## 📦 安装

使用以下命令安装：


pip install simplifine-alpha


或者从源代码安装，下载项目内容，进入安装文件夹并运行以下命令：


pip install .


亦可直接从 GitHub 安装：


pip install git+https://github.com/simplifine-llm/Simplifine.git


## 🏁 快速入门

更多详细示例请参见示例文件夹中的这个 [notebook](<https://github.com/simplifine-llm/Simplifine/blob/main/examples/sft_quick_start.ipynb>)。

## 🤝 贡献

我们正在寻找贡献者！请发送邮件到 [founders@simplifine.com](<mailto:founders@simplifine.com>) 获取入职信息，或在 [www.simplifine.com](<http://www.simplifine.com>) 加入候选名单。

## 📄 许可证

Simplifine 依据 GNU General Public License Version 3 许可。详见 LICENSE 文件。

## 📚 文档

完整文档请见 [docs.simplifine.com](<http://docs.simplifine.com>)。

## 💬 支持

请为你希望添加的新功能提出问题，我们会尽快努力实现！其他问题请联系 [founders@simplifine.com](<mailto:founders@simplifine.com>)。

* * *

**使用场景:**

* **监督微调** : 为机器学习训练添加监督信号，以提高模型性能。
* **问答微调** : 细化模型处理具体问答任务的能力。
* **嵌入任务** : 使用对比损失优化模型的嵌入表示。
* **多标签分类** : 处理复杂的多标签分类问题，比如情感分析、多标签文本分类等。
* **汽车化微调** : 自动优化参数和配置，简化微调过程。
* **先进优化技术** : 利用最新的技术如 DeepSpeed 优化计算资源，提升训练速度。


Simplifine 适合希望利用 Hugging Face 生态系统中现有模型和数据集进行快速微调的开发者和研究人员。