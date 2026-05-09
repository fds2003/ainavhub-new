---
title: "ccundo"
date: "2024-01-01 00:00:00+08:00"
description: 'ccundo ccundo  Claude Code '
slug: ccundo-claude-code
tags:
- claude
- const
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
- clientsecret
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## ccundo

`ccundo` 项目是一个专为 Claude Code 会话设计的智能撤销和重做工具。它通过直接读取 Claude Code 的会话文件，实现对文件创建、编辑、删除、重命名以及目录操作等各类文件操作的精细化跟踪与管理。该项目的核心功能在于提供详细的操作预览，使用户在执行撤销/重做前能清晰了解将发生的变化；其独有的级联撤销和重做机制，确保了项目状态的一致性，即撤销某一步操作会自动回滚后续所有相关操作，重做时也会自动还原其前置的依赖操作。此外，`ccundo` 还能跟踪 bash 命令，在执行任何变更前自动创建安全备份，支持多语言（包括英语和日语），并且无需额外配置即可开箱即用，同时支持对多个 Claude Code 会话进行管理。