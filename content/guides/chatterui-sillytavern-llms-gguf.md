---
title: "ChatterUI"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatterUI ChatterUI  ChatterUI '
slug: chatterui-sillytavern-llms-gguf
tags:
- horde
- lorebooks
- text-generation-webui
- sillytavern
- llama.rn
draft: false
related_tools:
- ama
- chatterui
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
---

## ChatterUI

##### ChatterUI 简介

ChatterUI 是一个为管理聊天文件和角色卡设计的原生移动前端应用，灵感来自于 SillyTavern。它的目的是为与大型语言模型（LLMs）交互提供移动友好的体验。ChatterUI 支持多种后端，甚至可以在本地设备上运行 GGUF 模型。

##### ChatterUI 的使用场景

1. **模型交互** : 使用 ChatterUI，在移动设备上方便地与大型语言模型进行交互，无论是通过本地模型还是在线服务。
2. **角色扮演** : 管理并使用角色卡，以实现模拟对话、角色扮演等趣味功能。
3. **文件管理** : 将聊天记录保存为文件，或者从兼容文件中导入聊天记录，方便管理和分类。
4. **教育与研究** : 在教育和研究中，使用 ChatterUI 作为移动平台，与不同的语言模型进行测试和互动。
5. **应用开发** : 开发者可以拓展 ChatterUI 的功能，适应自己的需求，如添加 NovelAI 支持和 Lorebooks 等。


##### 主要功能与支持后端

**支持的后端** :

* 本地使用 [llama.rn](<https://github.com/mybigday/llama.rn>)
* koboldcpp
* text-generation-webui
* 通用文本完成接口
* AI Horde
* Mancer
* Open Router
* OpenAI


##### 开发与构建

###### 克隆仓库并安装依赖:


git clone https://github.com/Vali-98/ChatterUI.git
npm install
npx expo run:android


###### 构建 APK:

1. 克隆仓库。
2. 将 `eas.json.example` 重命名为 `eas.json`。
3. 修改 `"ANDROID_SDK_ROOT"` 为 Android SDK 目录。
4. 运行以下命令:


npm install
eas build --platform android --local


##### 开发计划

* 支持 NovelAI
* Lorebooks 集成
* 聊天管理功能（导出、从兼容文件导入）


##### 未测试平台

目前尚未对 iOS 进行测试，寻求对此有经验的开发者提供帮助。

##### 开发中的文本流修复方法

（适用于 Expo SDK 51 及之前版本）

在 Android 开发版本中，ReactNativeFlipper 会导致文本流中断。解决方法如下：

1. 定位到文件 `android/app/src/main/java/com/Vali98/ChatterUI/MainApplication.kt`
2. 注释掉以下代码:


if (BuildConfig.DEBUG) {
// hacky fix for: https://github.com/react-native-community/fetch
// ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
}


##### 支持开发

您可以在以下链接上支持 ChatterUI 的开发工作：[支持开发者](<https://ko-fi.com/vali98>)

##### 界面截图

![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/recents.png) ![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/mainchat.png) ![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/charsmenu.png) ![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/sampler.png) ![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/instruct.png) ![](https://github.com/Vali-98/ChatterUI/blob/master/assets/screenshots/optionsmenu.png)