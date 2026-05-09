---
title: "Look Once to Hear Look Once to Hear Look Once to Hear"
date: "2024-01-01 00:00:00+08:00"
description: Look Once to Hear Look Once to Hear LOTH
slug: look-once-hear-loth-chi
tags:
- chi
- activate
- ts-hear
- once
- brir
draft: false
related_tools:
- chitu
- codemachine cli
- chinarxiv
- chinese-tiny-llm
- chinese-llama-alpaca-3
---

## Look Once to Hear

Look Once to Hear（LOTH）是一种智能听觉系统，用户只需看目标说话者几秒钟，系统即可识别并增强目标语音，即使在嘈杂环境中也不受影响。此系统在CHI 2024大会上荣获最佳论文荣誉提名。LOTH的训练数据包括清晰语音、背景声音、头相关传输函数（HRTF）和双耳房间脉冲响应（BRIR），使用Scaper工具包进行音频混合的合成。

##### 使用场景

1. **嘈杂环境中的语音识别** ：例如在拥挤的场合或聚会中，用户可以通过看目标人物来专注于他们的讲话。
2. **助听器设备** ：为听力受损的人提供清晰的目标语音，增强听觉体验。
3. **远程会议** ：在多人的视频会议中，帮助用户专注于特定发言者，提高会议效率。
4. **安全和监控** ：在监控系统中，通过看某人来识别其说话内容，有助于确认其身份或获取重要信息。


##### 安装与训练

1. 创建并激活conda环境：

conda create -n ts-hear python=3.9
conda activate ts-hear
pip install -r requirements.txt


2. 下载并解压训练数据到 `data/` 目录后，执行训练命令：

python -m src.trainer --config <configs/tsh.json> --run_dir <runs/tsh> [--frac <0.05 (% train/val batches)>]


3. 如需恢复部分训练运行：

python -m src.trainer --config <configs/tsh.json> --run_dir <runs/tsh>


##### 评估

下载所需模型检查点并运行评估脚本：


python src.ts_hear_test


LOTH系统通过高效的语音混合和目标识别算法，在复杂的听觉环境中提供准确的语音增强和分离，为用户带来便捷的听觉体验。