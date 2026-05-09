---
title: "Google AI SDK for Android Google AI SDK for Android Google AI SDK for Android"
date: "2024-01-01 00:00:00+08:00"
description: Google AI SDK for Android Google AI SDK for Android  Google
slug: google-sdk-android-gemini-api
tags:
- android
- api
- gemini
- google
- sdk
draft: false
related_tools:
- android mcp server
- diffusion - 为android开发的强大的稳定扩散网络界面客户端，支持文本到图像、图像到图像、图像修复等多种功能
- grok2api
- gemini cli to api proxy
- geminicli2api
---

## Google AI SDK for Android

Google AI SDK for Android 是一个让开发者可以使用Google先进的生成式AI模型（如Gemini）来构建AI驱动功能和应用的工具包。尽管这个SDK推荐用于原型开发，如果你打算启用计费，我们强烈建议你使用后端SDK来访问Google AI Gemini API，因为直接在Android应用中嵌入API密钥或在运行时远程获取密钥，可能会将密钥暴露给恶意行为者。

##### 功能

这个SDK的主要功能包括：

1. **生成文字（文本输入）** ：可以根据输入的纯文本生成相应输出。
2. **生成文字（文本和图片输入）** ：支持多模态输入，既可以提供文本也可以提供图片，从而生成相应的文字内容。例如，输入一张饼干的照片和一句询问它是手工制作还是店里买的，系统将根据图片和文本生成一个答案。
3. **构建多轮对话** ：支持创建多轮对话系统，适用于聊天机器人等应用。


##### 使用场景

你可以在以下情况下使用Google AI SDK for Android：

* **创新应用开发** ：你想快速开发一个AI驱动的功能原型，例如智能问答系统、图片描述生成等。
* **多模态输入应用** ：你需要处理混合文本和图像的输入，并生成相应的输出。
* **对话系统** ：你在构建聊天机器人或其他需要多轮对话交互的应用。


##### 示例代码

以下是一个使用多模态功能生成文字内容的示例代码：


val generativeModel = GenerativeModel(
modelName = "gemini-1.5-pro-latest",
apiKey = BuildConfig.apiKey
)

val cookieImage: Bitmap = // ...  // 你的图片变量
val inputContent = content() {
image(cookieImage)
text("Does this look store-bought or homemade?")
}

val response = generativeModel.generateContent(inputContent)
print(response.text)


##### 快速开始

要快速上手Google AI SDK for Android，你可以按照以下步骤进行操作：

1. 克隆示例项目：`git clone https://github.com/google/generative-ai-android`
2. 获取API密钥：[点击获取API密钥](<https://makersuite.google.com/app/apikey>)
3. 在Android Studio中打开并构建示例应用。
4. 将API密钥粘贴到`local.properties`文件中的`apiKey`属性中。
5. 运行应用。


##### 安装依赖

在你的Android项目中添加以下依赖项：


implementation("com.google.ai.client.generativeai:generativeai:<version>")


详细的初始化和使用方法请参考官方文档中的[快速开始](<https://ai.google.dev/tutorials/android_quickstart>)。

##### 完整文档

找到Google AI SDK和Gemini模型的完整文档，可以访问： <https://ai.google.dev/docs>

##### 贡献

有关如何贡献代码，请参考[贡献指南](<https://github.com/google/generative-ai-android/blob/main/CONTRIBUTING.md>)。

##### 许可证

此代码库的内容遵循[Apache License, version 2.0](<http://www.apache.org/licenses/LICENSE-2.0>)。