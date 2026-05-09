---
title: "ComfyUI-Unique3D"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-Unique3D ComfyUI-Unique3D  AiuniAI/Unique3D '
slug: comfyui-unique3d-aiuniai-unique3d-comfyui-windows
tags:
- build
- mrforexample
- nvidia
- install
- custom
draft: false
related_tools:
- ai website builder
- building agentic rag with llamaindex
- genwebbuilder - 将图像转化为令人惊艳的网站
- knowledge graph builder app
- build your own voice assistant and run it locally
---

## ComfyUI-Unique3D

**ComfyUI-Unique3D** 是一个将 [AiuniAI/Unique3D](<https://github.com/AiuniAI/Unique3D>) 集成到 ComfyUI 中的自定义节点集合。

![示例图](docs/1.png)

**强烈建议下载一个新的 ComfyUI 包来尝试这个功能！**

## (Windows) VS Build 工具设置

可能需要安装 Visual Studio Build Tools。可以从 [Visual Studio Build Tools](<https://visualstudio.microsoft.com/downloads/?q=build+tools>) 下载。

## ComfyUI 3D Pack - 设置

1. 在 `custom_notes` 文件夹中克隆 `ComfyUI-3D-Pack`

git clone https://github.com/MrForExample/ComfyUI-3D-Pack.git


2. 运行 `install_windows_portable_win_py311_cu121.bat` 安装所需环境
3. 运行 `ComfyUI (run_nvidia_gpu.bat)` 检查 3D-Pack 是否成功安装


如果遇到 `pytorch3d` 或 `torch_scatter` 的导入错误，按照本文说明解决。

## ComfyUI Unique3D - 设置

1. 在 `custom_notes` 文件夹中克隆 `ComfyUI-Unique3D`

git clone https://github.com/jtydhr88/ComfyUI-Unique3D.git


2. 下载 `triton` wheel 文件（适用于 py311），放在 `ComfyUI-Unique3D` 文件夹内
3. 运行 `install_windows_portable_win_py311_cu121.bat` 安装所需环境
4. 从 [huggingface spaces](<https://huggingface.co/spaces/Wuvin/Unique3D/tree/main/ckpt>) 或 [Tsinghua Cloud Drive](<https://cloud.tsinghua.edu.cn/d/319762ec478d46c8bdf7/>) 下载权重文件并解压到 `ckpt/*`


## 运行时注意事项

1. 输出文件夹为 `ComfyUI/output/Unique3D/`
2. `onnxruntime` 可能出现错误，但不会影响网格生成。如需修复，请参考 TensorRT 的相关文档。


## 工作流程

提供了两个示例工作流程，可参考 `workflow/example-workflow1.json` 和 `docs/example-workflow2.json`。第二个示例工作流程需要以下模型：

* 主检查点： [ReV Animated](<https://civitai.com/models/7371/rev-animated>)
* Lora： [Clay Render Style](<https://civitai.com/models/108464/clay-render-style>)


运行后会生成石膏风格的 3D 模型：

![example-workflow2](docs/example-workflow2.png)

## 节点解释

当前有三个自定义节点：

* Unique3DLoadPipeline
* Unique3DRun - MVPrediction
* Unique3DRun - Geo Reconstruct


## 贡献者与致谢

* [AiuniAI/Unique3D](<https://github.com/AiuniAI/Unique3D>) \- 从单张图像生成高质量高效的 3D 网格
* [ComfyUI](<https://github.com/comfyanonymous/ComfyUI>) \- 一个强大且模块化的稳定扩散 GUI
* [ComfyUI-3D-Pack](<https://github.com/MrForExample/ComfyUI-3D-Pack>) \- 深入的节点集合，使 ComfyUI 能够使用先进的算法处理 3D 输入


## 我的 ComfyUI 扩展

* [ComfyUI-Unique3D](<https://github.com/jtydhr88/ComfyUI-Unique3D>)
* [ComfyUI-LayerDivider](<https://github.com/jtydhr88/ComfyUI-LayerDivider>)
* [ComfyUI-InstantMesh](<https://github.com/jtydhr88/ComfyUI-InstantMesh>)
* [ComfyUI-ImageMagick](<https://github.com/jtydhr88/ComfyUI-ImageMagick>)
* [ComfyUI-Workflow-Encrypt](<https://github.com/jtydhr88/ComfyUI-Workflow-Encrypt>)


## 我的稳定扩散 WebUI 扩展

* [3D 模型/姿势加载器](<https://github.com/jtydhr88/sd-3dmodel-loader>)
* [画布编辑器](<https://github.com/jtydhr88/sd-canvas-editor>)
* [StableStudio 适配器](<https://github.com/jtydhr88/sd-webui-StableStudio>)
* [文本/图像到 3D 模型](<https://github.com/jtydhr88/sd-webui-txt-img-to-3d-model>)
* [3D 编辑器](<https://github.com/jtydhr88/sd-webui-3d-editor>)


**使用场景** ：ComfyUI-Unique3D 适用于从单张图像高效生成高质量的 3D 网格，特别在需要快速生成 3D 模型的场合，比如游戏开发、动画制作和虚拟现实应用等领域。