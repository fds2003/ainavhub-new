---
title: "AI Math Notes AI Math Notes AI Math Notes AI Math Notes"
date: "2024-01-01 00:00:00+08:00"
description: AI Math Notes AI Math Notes AI Math Notes  LLM
slug: math-notes-llm-large-language
tags:
- requirements.txt
- math
- install
- pil
- apple
draft: false
related_tools:
- rstar-math
- pdfmathtranslate
- ai math notes
- claude autopilot
- github copilot
---

## AI Math Notes

# AI Math Notes

AI Math Notes 是一个互动式绘图应用程序，用户可以在画布上绘制数学方程。一旦方程被绘制完成，应用程序将使用多模态LLM（Large Language Model）来计算并显示结果在等号的右侧。该应用程序是使用Python编程语言开发的，采用Tkinter库来实现图形用户界面，使用PIL进行图像处理。其灵感来源于Apple在WWDC 2024上的“Math Notes”演示。

## 设置与安装

1. 安装依赖库：`pip install -r requirements.txt`
2. 将OpenAI API设为环境变量


## 使用方法

1. 运行应用程序：`python main.py`


##### 应用程序界面

* 画布：使用鼠标在画布上绘制方程。画布背景为黑色，绘图颜色为白色。
* 清除按钮：清除整个画布。
* 撤销按钮（Ctrl/Cmd Z）：撤销上一次绘图操作。
* 计算按钮（Enter/Return）：计算所绘制的方程，并在等号旁显示结果。


##### 使用示例

1. 在画布上绘制一个方程，例如 `5 + 3 =`
2. 按Enter键或点击计算按钮。
3. 结果（如8）会以橙色显示在等号的右侧。


## 未来改进计划

* 自动检测等号：实现一个计算机视觉模型来检测等号，这样等号就不必是最后绘制的内容，从而提高使用的便捷性和结果显示的准确性。
* 欢迎任何贡献！


## 许可证

该项目采用MIT许可证。

## 使用场景

1. **教育领域** ：AI Math Notes 可以用作教学工具，帮助学生练习数学运算，提高他们的动手能力和理解能力。
2. **科研和工程** ：研究人员和工程师可以快速绘制和计算复杂的数学公式，从而提高工作效率。
3. **一般用户** ：任何需要快速进行数学计算的用户都可以使用这个应用程序，以便在手绘的基础上简便地得到计算结果。