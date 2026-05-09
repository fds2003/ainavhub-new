---
title: "V-Express"
date: "2024-01-01 00:00:00+08:00"
description: V-Express V-Express  Dropout
slug: v-express-dropout
tags:
- v-express
- install
- diffusers
- image
- dropout
draft: false
related_tools:
- v-express
- gemini 2.0 flash image generation and editing
- 4o-image-generation
- awesome gpt-4o images
- gpt-image-1
---

## V-Express

**V-Express** 是一种用于人像视频生成的条件Dropout渐进训练方法，能够在生成视频时平衡多种控制信号。随着单张图像生成视频的应用越来越普遍，生成模型常被用来增强各种控制信号。然而，控制信号的强弱存在很大差异，比如文本、音频、图像参考、姿态、深度图等。我们在研究中发现，音频信号常常被更强的信号（如姿态和原始图像）干扰，导致生成的效果不理想。为了解决这一问题，我们提出了V-Express方法，通过一系列渐进的Dropout操作平衡不同的控制信号，使得较弱信号也能有效控制生成过程，从而兼顾姿态、输入图像和音频的生成能力。

##### V-Express的使用场景

1. **场景1：A的照片和A说话的视频** 如果拥有A的照片和A在不同场景中的说话视频，可以生成一致性很高的说话视频。

2. **场景2：A的照片和任意说话音频** 如果只有A的照片和任意说话音频，可以生成固定面部的生动嘴部动作视频。

3. **场景3：A的照片和B说话的视频** 通过一种简单重新定位策略，生成A的照片和B的说话视频相结合的生动嘴部和面部动作视频。


##### 使用步骤

1. 安装依赖：

pip install diffusers==0.24.0 imageio-ffmpeg==0.4.9 insightface==0.7.3
pip install omegaconf==2.2.3 onnxruntime==1.16.3 safetensors==0.4.2
pip install torch==2.0.1 torchaudio==2.0.2 torchvision==0.15.2
pip install transformers==4.30.2 einops==0.4.1 tqdm==4.66.1 xformers==0.0.22 av==11.0.0


2. 下载代码和模型：

git clone https://github.com/tencent-ailab/V-Express
cd V-Express
git lfs install
git clone https://huggingface.co/tk93/V-Express
mv V-Express/model_ckpts model_ckpts


3. 运行示例：

* 提取音频和面部关键点序列：

python scripts/extract_kps_sequence_and_audio.py --video_path "./test_samples/short_case/AOC/gt.mp4" --kps_sequence_save_path "./test_samples/short_case/AOC/kps.pth" --audio_save_path "./test_samples/short_case/AOC/aud.mp3"


* 生成视频：

python inference.py --reference_image_path "./test_samples/short_case/AOC/ref.jpg" --audio_path "./test_samples/short_case/AOC/aud.mp3" --kps_path "./test_samples/short_case/AOC/kps.pth" --output_path "./output/short_case/talk_AOC_no_retarget.mp4" --retarget_strategy "no_retarget" --num_inference_steps 25


##### 注意事项

* 对于说话人和参考图片不是同一个人的场景，选取与参考面部姿态更相似的视频能得到更好的结果。目前模型在英语上的表现最好，其他语言尚待测试。


通过这种方式，V-Express 可用于生成高质量的说话人像视频，广泛应用于视频创作、虚拟主播以及其他娱乐和研究领域。