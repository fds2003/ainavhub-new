---
title: "YoloDotNet"
date: "2024-01-01 00:00:00+08:00"
description: 'YoloDotNet YoloDotNet  NET 8 '
slug: yolodotnet-net-ml.net-onnx-runtime
tags:
- gpu
- yolodotnet
- segmentation
- onnx
- ml.net
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- yolodotnet
- finecontrolnet
- bitnet.cpp
---

## YoloDotNet

YoloDotNet 是一个基于 .NET 8 的 C# 实现，用于实时检测图像和视频中的物体。它利用了 ML.NET 和 ONNX runtime，并支持通过 CUDA 进行 GPU 加速。

##### YoloDotNet 支持的功能：

* **分类 (Classification)** : 对图像进行分类。
* **物体检测 (Object Detection)** : 在单个图像中检测多个物体。
* **旋转边界框检测 (OBB Detection)** : 类似于一般的物体检测，但使用旋转边界框。
* **分割 (Segmentation)** : 使用像素掩码分割检测到的物体。
* **姿态估计 (Pose Estimation)** : 识别图像中特定关键点的位置。


##### 使用场景：

1. **实时监控** : 在视频流中，实时检测和跟踪物体，例如监控摄像头中的人员和车辆。
2. **图像分类** : 对静态图像进行分类，可以用于图像库管理或内容识别。
3. **自动驾驶** : 检测道路上的车辆、行人和其他障碍物。
4. **无人机监控** : 从无人机拍摄的图像中检测和分类感兴趣的物体，如建筑、车辆等。
5. **工业自动化** : 在生产线中检测和识别产品的状态和位置。
6. **姿态评估** : 在运动或医疗应用中，用于分析人体姿态。


##### 安装和使用：

1. **安装 YoloDotNet 包** :

> dotnet add package YoloDotNet


2. **安装 CUDA（可选）** :

* 下载安装 [CUDA v11.8](<https://developer.nvidia.com/cuda-toolkit-archive>)。
* 下载并解压 [cuDNN v8.9.7](<https://developer.nvidia.com/rdp/cudnn-archive>)，将 bin 文件夹中的 DLL 复制到 CUDA bin 文件夹。
* 将 CUDA bin 文件夹路径添加到环境变量 `Path` 中。
3. **导出 Yolov8 模型为 ONNX 格式** :

* 参考 Ultralytics 的文档导出模型。
4. **示例 - 图像推理** :

using YoloDotNet;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

// 加载 ONNX 模型
using var yolo = new Yolo(@"path\to\your_model.onnx");

// 加载图像
using var image = Image.Load<Rgba32>(@"path\to\image.jpg");

// 执行分类操作
var results = yolo.RunClassification(image, 5);

image.Draw(results);
image.Save(@"path\to\save\image.jpg");


5. **示例 - 视频推理** :

* 下载 [FFmpeg](<https://ffmpeg.org/download.html>)，并将其添加到环境变量 `Path` 中。

using SixLabors.ImageSharp;
using YoloDotNet;

// 加载 ONNX 模型
using var yolo = new Yolo(@"path\to\your_model.onnx");

// 视频选项
var options = new VideoOptions
{
VideoFile = @"path\to\video.mp4",
OutputDir = @"path\to\output\folder"
};

// 执行分类操作
var results = yolo.RunClassification(options, 5);


YoloDotNet 提供了强大的图像和视频分析功能，适用于各种计算机视觉应用。其可定制性和 GPU 加速支持使其成为处理大规模图像和视频数据的理想选择。