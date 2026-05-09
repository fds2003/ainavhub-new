---
title: "MimicBrush"
date: "2024-01-01 00:00:00+08:00"
description: MimicBrush MimicBrush MimicBrush
slug: mimicbrush
tags:
- const
- gitalk
- clientid
- ba3af7dcb9cbfcf08
- mimicbrush
draft: false
related_tools:
- graph-constrained reasoning
- mimicbrush
---

## MimicBrush

MimicBrush是一种零样本图像编辑工具，通过参考图像进行模仿编辑，帮助用户更方便地进行创作。该工具的核心在于用户只需指定源图像中的编辑区域（用白色蒙版标出），并提供一张预期编辑效果的参考图像。MimicBrush能够自动捕捉两者之间的语义对应关系，并在一次操作中完成编辑。

具体来说，MimicBrush通过在视频剪辑中随机选取两帧图像，一帧作为参考图像，另一帧作为源图像，对源图像的某些区域进行蒙版处理，然后使用参考图像中的信息来恢复这些蒙版区域。在训练过程中，它采用了生成训练框架进行自监督学习，使其能够在不同图像间捕捉语义对应关系。

实验结果表明，MimicBrush在各种测试案例中表现出较高的有效性，并且相较于现有的替代方案具有显著的优越性。研究人员还构建了一个基准来促进进一步的研究。

该工具展示了一系列多样化的编辑结果，包括局部区域编辑、纹理转移和后期处理优化等功能。MimicBrush的开发团队来自香港大学、阿里巴巴集团和蚂蚁集团。