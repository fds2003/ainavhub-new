---
title: "SuperSplat"
date: "2024-01-01 00:00:00+08:00"
description: SuperSplat SuperSplat  Gaussian Splats
slug: supersplat-gaussian-splats-ply
tags:
- git
- ctrl
- splats
- playcanvas
- splat
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## SuperSplat

SuperSplat 是一个用于检查和编辑3D高斯点云（Gaussian Splats）的免费开源工具。它基于网页技术，运行在浏览器中，无需下载或安装。

用户可以通过拖放方式将PLY格式的高斯点云文件加载到应用页面中，或者通过“场景”菜单选择“打开”选项。加载文件时，还可以选择是否排除编辑器不需要的PLY数据，以节省浏览器内存。

加载文件后，用户可以在场景管理面板中对点云进行显示、隐藏、删除和旋转等操作，并选择当前要编辑的点云。下方工具栏提供了选择工具、变换工具以及撤销/重做功能。SPLAT数据面板则通过直方图展示场景的各种属性，用户可以直接在直方图上选择点云，并使用Shift键和Ctrl键调整选择范围。

编辑完成后，用户可以通过“场景”菜单保存、另存及导出场景，只有可见的点云会被写入。

当前，SuperSplat有以下限制：

* 仅支持高斯点云的PLY文件
* 导出时不会旋转球谐数据


如果用户希望进行本地开发，可以克隆仓库并运行本地开发服务器。具体步骤如下：

1. 克隆仓库：`git clone https://github.com/playcanvas/supersplat.git`
2. 进入目录：`cd supersplat`
3. 安装依赖：`npm i`
4. 运行开发服务器：`npm run develop`


本地开发服务器将运行在端口3000上，代码变更会自动触发编辑器的重新构建。打开浏览器并导航到 `http://localhost:3000` 即可访问本地实例。

SuperSplat的使用场景包括：

* 检查和编辑3D高斯点云数据
* 进行数据可视化和分析
* 在浏览器中无需安装任何软件进行3D点云的操作和编辑