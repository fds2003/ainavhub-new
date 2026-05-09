---
title: "AI learns to play Snake"
date: "2024-01-01 00:00:00+08:00"
description: AI learns to play Snake AI learns to play Snake
slug: learns-play-snake-rust-ratatui
tags:
- rust-snake-ai-ratatui.git
- net-100.json
- play
- low
- detail
draft: false
related_tools:
- playwright mcp server
- playwright mcp
- sora 2 playground
- playwrightess mcp
- deeproleplay
---

## AI learns to play Snake!

# AI learns to play Snake!

## 概述

“AI learns to play Snake!” 是一个项目，展示了如何使用神经网络来学习和玩转经典的贪吃蛇游戏。该项目利用Rust编程语言和Ratatui库实现。用户可以通过该项目训练AI，使其能够在不同配置的贪吃蛇游戏环境中取得优异表现。

![截图](%E9%93%BE%E6%8E%A5%E5%9C%A8%E5%8E%9F%E6%96%87)

## 使用方式

1. 克隆仓库

git clone git@github.com:bones-ai/rust-snake-ai-ratatui.git
cd rust-snake-ai-ratatui


2. 运行模拟

cargo run --release


## 配置选项

* 配置文件在 `src/configs.rs` 下
* 设置 `IS_LOW_DETAIL_MODE` 为最小UI模式，可以加速运行速度
* 设置 `IS_SAVE_BEST_NET` 来训练你自己的网络，训练好的网络保存在 `data/net.json`，可以通过设定 `IS_LOAD_SAVED_NET` 使用已训练的网络
* 使用 `data/net-100.json` 文件可以观看AI在15x15棋盘尺寸上完成游戏
* 使用 `USE_GAME_CANVAS` 为true并更新 `VIZ_GAME_SCALE` 来缩放游戏画面


## 其他信息

* 项目作者主要在 [Twitter - @BonesaiDev](<https://x.com/BonesaiDev>) 上发布相关内容
* 观看AI完成游戏的视频 [链接](<https://x.com/BonesaiDev/status/1806738659296891032>)
* 了解更多项目详情，参考 [工作原理](<https://twitter.com/BonesaiDev/status/1804941703431991473>) 和 [输入](<https://twitter.com/BonesaiDev/status/1804941885158686831>)
* 其他项目：[链接](<https://bones-ai.bearblog.dev/projects/>)
* 了解更多关于作者的信息：[链接](<https://bones-ai.bearblog.dev/>)


## 使用场景

该项目可以应用在以下场景：

1. **教育和研究** \- 学习和研究人工智能、机器学习和神经网络的实际应用。
2. **软件开发实践** \- 使用Rust语言和Ratatui库的实际开发练习。
3. **游戏AI开发** \- 为游戏开发AI对手或智能组件。
4. **体验和展示** \- 展示AI在控制游戏中的表现，作为竞赛或者演示用途。