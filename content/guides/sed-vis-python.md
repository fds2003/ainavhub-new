---
title: "sed_vis Python ，。 ： ：/，。，。 ：、"
date: "2024-01-01 00:00:00+08:00"
description: sed_vis sed_vis Python ，。 ： ：/，。，。 ：、...
slug: sed-vis-python
tags:
- numpy
- sed
- git
- setup.py
- scipy
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## sed_vis

`sed_vis` 是一个开源的 Python 工具箱，用于可视化声音事件检测系统的注释和系统输出。

主要特性：

1. **事件滚动类型的可视化工具** ：可以显示注释和/或系统输出，以及对应的音频信号。音频信号可以播放，通过指示条跟踪声音事件。
2. **互动式可视化工具** ：可以生成用于声音事件检测、音频标注和音频描述的演示视频。


使用场景：

1. **直接使用可视化脚本** ：适合不经常使用 Python 的用户。
2. **在 Python 代码中导入并调用** ：适合开发者在自身项目中进行集成。
3. **生成展示视频** ：用于演示声音事件检测的结果。


安装方式：

1. 使用 `pip` 进行安装：

git clone https://github.com/TUT-ARG/sed_vis.git
pip install -e sed_vis


2. 从源代码通过 `setup.py` 安装：

pip install -r requirements.txt
python setup.py install


依赖：

* Python 3.9
* numpy >= 1.7.0
* scipy >= 0.9.0
* matplotlib >= 1.4.0
* pyaudio >= 0.2.7
* dcase_util >= 0.1.5
* opencv-python >= 4.7.0 (用于视频生成)


**快速上手** ：

1. **使用可视化脚本** ：

./sed_visualizer.py -a ../tests/data/a001.wav -l ../tests/data/a001.ann ../tests/data/a001_system_output.ann -n reference system


2. **在 Python 代码中使用** ：

import sed_vis
import dcase_util

# Load audio signal
audio_container = dcase_util.containers.AudioContainer().load('tests/data/a001.wav')

# Load event lists
reference_event_list = dcase_util.containers.MetaDataContainer().load('tests/data/a001.ann')
estimated_event_list = dcase_util.containers.MetaDataContainer().load('tests/data/a001_system_output.ann')

event_lists = {'reference': reference_event_list, 'estimated': estimated_event_list}

# Visualize the data
vis = sed_vis.visualization.EventListVisualizer(event_lists=event_lists, audio_signal=audio_container.data, sampling_rate=audio_container.fs)
vis.show()


3. **生成展示视频** ：

import sed_vis
import dcase_util
import os

current_path = os.path.dirname(os.path.realpath(__file__))

generator = sed_vis.video.VideoGenerator(
source_video=os.path.join('data', 'street_traffic-london-271-8243.mp4'),
source_audio=os.path.join('data', 'street_traffic-london-271-8243.mp4'),
target=os.path.join('data', 'street_traffic-london-271-8243.output.mp4'),
event_lists={
'Reference': dcase_util.containers.MetaDataContainer().load(os.path.join(current_path, 'data', 'street_traffic-london-271-8243.ann')),
'Baseline': dcase_util.containers.MetaDataContainer().load(os.path.join(current_path, 'data', 'street_traffic-london-271-8243.ann')),
'Proposed': dcase_util.containers.MetaDataContainer().load(os.path.join(current_path, 'data', 'street_traffic-london-271-8243_sys2.ann'))
},
event_list_order=['Reference', 'Baseline', 'Proposed'],
layout=[['spectrogram', 'video'], ['mid_header'], ['event_roll', 'video_dummy']]
).generate()


总体来说，`sed_vis` 是一个功能强大的工具，适合研究和实际应用中的声音事件检测可视化任务。