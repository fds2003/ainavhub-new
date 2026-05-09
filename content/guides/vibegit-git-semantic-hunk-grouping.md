---
title: "VibeGit"
date: "2024-01-01 00:00:00+08:00"
description: 'VibeGit VibeGit AI Git ， Git ，。 VibeGit ： (Semantic Hunk Grouping):
  VibeGit ，...'
slug: vibegit-git-semantic-hunk-grouping
tags:
- grouping
- messages
- git
- modes
- semantic
draft: false
related_tools:
- pi
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## VibeGit

VibeGit 是一个 AI 驱动的 Git 代码管理工具，旨在帮助开发者减少手动清理 Git 仓库的麻烦，从而可以花更多时间在编写代码上。

**VibeGit 的核心功能包括：**

* **语义化的代码块分组 (Semantic Hunk Grouping):** VibeGit 不仅关注文件名，还会分析代码的实际功能，将相关的代码更改组合在一起，以便于提交。
* **AI 生成提交信息 (AI-Generated Commit Messages):** 它能根据代码的变更内容生成合理的、格式良好的提交信息，减少手动编写 commit message 的工作。
* **交互式配置向导 (Interactive Configuration Wizard):** 首次使用时提供友好的设置流程，帮助配置 AI 模型和 API 密钥。
* **多种工作模式 (Multiple Workflow Modes):**
* **YOLO 模式:** 自动应用 VibeGit 的所有建议。
* **交互模式:** 逐个审查每个提议的提交，并在默认编辑器中编辑提交信息，然后逐个应用。
* **摘要模式:** 在深入了解之前，快速了解 VibeGit 的计划。
* **排除更改 (Exclude Changes):** 自动排除不应提交的更改，例如 API 密钥或未完成的工作。


**VibeGit 的使用场景：**

* 当你花费大量时间在一个功能上，但忘记定期分组和提交更改时。
* 当你面对大量的未提交更改，并且需要整理成完美的原子提交时。
* 当你不想花费大量时间使用 `git add -p` 命令仔细审查差异时。
* 当你不想编写模糊的提交信息，或者承诺以后再进行 `rebase -i` 操作时。


**安装和配置：**

* VibeGit 需要 Python 3.11 及以上版本。
* 可以通过 `pip install vibegit` 或 `pipx install vibegit` 进行安装。
* 首次运行时，会启动一个交互式配置向导，帮助你选择 LLM 模型（Gemini，GPT 或自定义）并配置 API 密钥。


**VibeGit 的定制化：**

* 可以使用 `.vibegitrules` 文件来提供自定义指令，例如提交信息风格、提交范围和粒度，以及排除特定文件或更改。
* 可以使用 `--instruction` 标志，通过 `vibegit commit` 命令提供一次性的自定义指令，而无需修改 `.vibegitrules` 文件。


**未来发展方向：**

VibeGit 的目标是扩展到 Git 的更多方面，例如：

* `vibegit merge` (冲突解决)
* `vibegit rebase` (交互式变基建议)
* `vibegit checkout` (推荐相关分支)


**总而言之，VibeGit 旨在通过 AI 自动化 Git 代码仓库的维护工作，提高开发者的工作效率，并改善代码提交的质量。**