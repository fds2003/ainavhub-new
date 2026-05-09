---
title: "Follow-Your-Emoji"
date: "2024-01-01 00:00:00+08:00"
description: Follow-Your-Emoji Follow-Your-Emoji Follow-Your-Emoji
slug: follow-your-emoji
tags:
- emojibench
- follow-your-emoji
draft: false
related_tools:
- follow-your-emoji
---

## Follow-Your-Emoji

Follow-Your-Emoji，该框架可以通过目标标记序列对参考肖像进行动画处理。这个方法主要解决了保持参考肖像身份和迁移目标表情的挑战，同时维护了动画的时间一致性和真实性。

为了达到这些目标，Follow-Your-Emoji使用了两个经过精心设计的技术：首先，采用一种新的显性运动信号，即表情感知标记来引导动画过程。这种标记不仅能够确保参考肖像与目标运动之间的准确运动对齐，还能增强描绘夸张表情（如大幅度瞳孔运动）的能力，并避免身份泄露。其次，提出了一种面部细节损失，通过使用表情和面部遮罩来提高模型对细微表情感知和参考肖像外观重建的能力。

该方法展示了在控制自由风格肖像表情上的显著性能，包括真实人物、卡通、雕像，甚至动物的肖像。通过一种简单有效的渐进生成策略，扩展了模型的长时间动画稳定性，增加了其应用潜力。此外，为了应对这一领域缺乏基准的问题，研究团队引入了一个综合性基准EmojiBench，包含多样的肖像图像、驱动视频和标记。

总体来说，Follow-Your-Emoji在肖像动画的精准可控性和表达丰富性上展示了卓越的能力，并通过全面的评估验证了其优越性。