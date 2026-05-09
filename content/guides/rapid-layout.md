---
title: "Rapid Layout Rapid Layout"
date: "2024-01-01 00:00:00+08:00"
description: 'Rapid Layout  Rapid Layout '
slug: rapid-layout
tags:
- table.onnx
- figure
- caption
- text
- title
draft: false
related_tools:
- videocaptioner
- minimax-text-01
- textdistiller
- model context protocol
- whisper-speech-to-text-api
---

## Rapid Layout

##### 📖 Rapid Layout

##### 简介

Rapid Layout 是一个主要用于文档类图像版面分析的工具。其核心功能是分析给定的文档图像（如论文截图、研报等），并能够识别定位文档中的标题、段落、表格和图片等不同部分。

注意：由于不同场景下的版面存在很大差异，目前没有一个单一的模型可以适用于所有场景。如果模型效果不佳，建议用户根据实际需求构建自己的训练集进行微调。

##### 支持的版面类型及模型

`model_type` | 版面类型 | 模型名称 | 支持类别
---|---|---|---
`pp_layout_table` | 表格 | `layout_table.onnx` | `["table"]`
`pp_layout_publaynet` | 英文 | `layout_publaynet.onnx` | `["text", "title", "list", "table", "figure"]`
`pp_layout_cdla` | 中文 | `layout_cdla.onnx` | `['text', 'title', 'figure', 'figure_caption', 'table', 'table_caption', 'header', 'footer', 'reference', 'equation']`
`yolov8n_layout_paper` | 论文 | `yolov8n_layout_paper.onnx` | `['Text', 'Title', 'Header', 'Footer', 'Figure', 'Table', 'Toc', 'Figure caption', 'Table caption']`
`yolov8n_layout_report` | 研报 | `yolov8n_layout_report.onnx` | `['Text', 'Title', 'Header', 'Footer', 'Figure', 'Table', 'Toc', 'Figure caption', 'Table caption']`
`yolov8n_layout_publaynet` | 英文 | `yolov8n_layout_publaynet.onnx` | `["Text", "Title", "List", "Table", "Figure"]`
`yolov8n_layout_general6` | 通用 | `yolov8n_layout_general6.onnx` | `["Text", "Title", "Figure", "Table", "Caption", "Equation"]`

##### 安装


$ pip install rapid-layout


##### 使用方式

###### Python脚本运行


import cv2
from rapid_layout import RapidLayout, VisLayout

layout_engine = RapidLayout(conf_thres=0.5, model_type="pp_layout_cdla")
img = cv2.imread('test_images/layout.png')
boxes, scores, class_names, elapse = layout_engine(img)
ploted_img = VisLayout.draw_detections(img, boxes, scores, class_names)
if ploted_img is not None:
cv2.imwrite("layout_res.png", ploted_img)


###### 终端运行


$ rapid_layout -h
usage: rapid_layout [-h] -img IMG_PATH
[-m {pp_layout_cdla,pp_layout_publaynet,pp_layout_table,yolov8n_layout_paper,yolov8n_layout_report,yolov8n_layout_publaynet,yolov8n_layout_general6}]
[--conf_thres {pp_layout_cdla,pp_layout_publaynet,pp_layout_table,yolov8n_layout_paper,yolov8n_layout_report,yolov8n_layout_publaynet,yolov8n_layout_general6}]
[--iou_thres {pp_layout_cdla,pp_layout_publaynet,pp_layout_table,yolov8n_layout_paper,yolov8n_layout_report,yolov8n_layout_publaynet,yolov8n_layout_general6}]
[--use_cuda] [--use_dml] [-v]

# 示例
$ rapid_layout -v -img test_images/layout.png


##### GPU推理


pip install rapid_layout
pip uninstall onnxruntime
pip install onnxruntime-gpu


##### 示例代码


import cv2
from rapid_layout import RapidLayout
from pathlib import Path

layout_engine = RapidLayout(conf_thres=0.5, model_type="pp_layout_cdla", use_cuda=True)
layout_engine("images/12027_5.png")
elapses = []
img_list = list(Path('images').iterdir())
for img_path in img_list:
boxes, scores, class_names, elapse = layout_engine(img_path)
print(f"{img_path}: {elapse}s")
elapses.append(elapse)

avg_elapse = sum(elapses) / len(elapses)
print(f'avg elapse: {avg_elapse:.4f}')


##### 可视化结果

![layout_res](https://github.com/RapidAI/RapidLayout/releases/download/v0.0.0/layout_res.png)

##### 参考项目

* [PP-Structure](<https://github.com/PaddlePaddle/PaddleOCR/blob/133d67f27dc8a241d6b2e30a9f047a0fb75bebbe/ppstructure/layout/README_ch.md>)
* [360LayoutAnalysis](<https://github.com/360AILAB-NLP/360LayoutAnalysis>)
* [ONNX-YOLOv8-Object-Detection](<https://github.com/ibaiGorordo/ONNX-YOLOv8-Object-Detection>)
* [ChineseDocumentPDF](<https://github.com/SWHL/ChineseDocumentPDF>)