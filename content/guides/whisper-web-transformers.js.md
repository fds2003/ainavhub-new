---
title: "Whisper Web Whisper Web Whisper Web"
date: "2024-01-01 00:00:00+08:00"
description: 'Whisper Web Whisper Web  Transformers.js '
slug: whisper-web-transformers.js
tags:
- 'true'
- xenova
- http
- install
- whisper
draft: false
related_tools:
- nova
- local whisper
- whisper app
- betterwhisperx
- whisper-tiktok
---

## Whisper Web

Whisper Web 是一个基于机器学习技术的网页端语音识别工具，使用 [🤗 Transformers.js](<https://github.com/xenova/transformers.js>) 构建。它可以直接在浏览器中进行语音识别，无需安装额外的软件。

##### 使用场景

1. **实时字幕生成** ：可用于在线会议、网络直播等场景，实时生成字幕，提高内容可访问性。
2. **语音搜索** ：在网页端实现语音输入搜索，提升用户体验。
3. **语音智能助手** ：结合网页应用开发智能语音助手，提供互动性更强的用户服务。
4. **语音笔记** ：在浏览器中直接将语音转换为文本，方便会议记录和笔记整理。


##### 如何本地运行

1. 克隆代码库并安装依赖：

git clone https://github.com/xenova/whisper-web.git
cd whisper-web
npm install


2. 运行开发服务器：

npm run dev


> 注意：Firefox 用户需在 `about:config` 中将 `dom.workers.modules.enabled` 设置为 `true` 以启用 Web Workers 。 更多详情请查看 [相关问题](<https://github.com/xenova/whisper-web/issues/8>) 。

3. 在浏览器中打开链接（如：<http://localhost:5173/>）。


对于想要使用 GPU 加速的用户，实验性 WebGPU 支持已添加到 [这个分支](<https://github.com/xenova/whisper-web/tree/experimental-webgpu>)（[演示](<https://huggingface.co/spaces/Xenova/whisper-webgpu>)）。