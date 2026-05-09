---
title: "pypalettes"
date: "2024-01-01 00:00:00+08:00"
description: 'pypalettes pypalettes  pypalettes '
slug: pypalettes-python-pip-install-matplotlib
tags:
- np
- pypalettes
- install
- seaborn
- sns.heatmap
draft: false
related_tools:
- hunyuanportrait
- openppt
- openplexity pages
- openperplex
- pypalettes
---

## pypalettes

##### pypalettes 简介

pypalettes 是一个大型的 Python 颜色映射集合，包含超过2500种颜色方案。所有可用的颜色方案可以在[专用网站](<https://python-graph-gallery.com/color-palette-finder/>)上找到。

##### 安装

可以通过以下命令安装 pypalettes：


pip install pypalettes


##### 快速上手

加载一个颜色映射后，可以像在 `matplotlib` 或 `seaborn` 中使用其他颜色映射一样使用它。例如：


import matplotlib.pyplot as plt
import seaborn as sns
from pypalettes import load_cmap
import numpy as np

data = np.random.rand(10, 12)

cmap = load_cmap('Anemone')

sns.heatmap(data, cmap=cmap)
plt.show()


##### 使用说明

* **加载颜色映射：**

from pypalettes import load_cmap
cmap = load_cmap('Chaetodon_sedentarius')


* **将定性颜色映射转换为连续颜色映射：**

cmap = load_cmap('Chaetodon_sedentarius', type='continuous')


* **反转颜色映射：**

cmap = load_cmap('Chaetodon_sedentarius', reverse=True)


* **反转并连续：**

cmap = load_cmap('Chaetodon_sedentarius', reverse=True, type='continuous')


* **只保留颜色映射的前三种颜色：**

cmap = load_cmap('Chaetodon_sedentarius', keep_first_n=3)


* **只保留颜色映射的特定颜色：**

cmap = load_cmap('Chaetodon_sedentarius', keep=[True, True, False, False, True])


* **加载随机颜色映射：**

cmap = load_cmap()


* **获取颜色映射的十六进制值：**

from pypalettes import get_hex
get_hex('pupitar')


* **获取颜色映射的 RGB 值：**

from pypalettes import get_rgb
get_rgb('AirNomads')


##### 使用场景

pypalettes 适用于需要丰富颜色映射方案的各种数据可视化场景，例如热图、堆积面积图、气泡图等。它可以用于科学研究、数据分析、统计图形以及任何需要进行图表美化的项目。

##### 相关项目

pypalettes 深受 R 包 [paletteer](<https://github.com/EmilHvitfeldt/paletteer>) 和 Python 包 [palettable](<https://github.com/jiffyclub/palettable>) 的启发。

##### 数据收集来源

数据从以下网站收集：

* <https://coolors.co/palettes/trending>
* <https://pmassicotte.github.io/paletteer_gallery/>


更多信息请参阅 [parsers/README.md](<parsers/README.md>)。