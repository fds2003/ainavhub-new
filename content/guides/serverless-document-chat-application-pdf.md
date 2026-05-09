---
title: "Serverless document chat application Serverless document chat application Server"
date: "2024-01-01 00:00:00+08:00"
description: Serverless document chat application Serverless  PDF
slug: serverless-document-chat-application-pdf
tags:
- aws
- pdf
- document
- tailwindcss
- serverless
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Serverless document chat application

# Serverless 文档聊天应用程序

这个示例应用程序允许你对任何上传的PDF文档进行自然语言问答。它结合了大模型（LLM）的文本生成和分析能力以及文档内容的向量搜索能力。该解决方案使用了无服务器服务，例如通过 [Amazon Bedrock](<https://aws.amazon.com/bedrock/>) 访问基础模型，使用 [AWS Lambda](<https://aws.amazon.com/lambda/>) 运行 [LangChain](<https://github.com/hwchase17/langchain>)，并利用 [Amazon DynamoDB](<https://aws.amazon.com/dynamodb/>) 进行对话记忆。

## 关键特性

* 使用 Amazon Bedrock 进行无服务器的嵌入和推理
* 通过 LangChain 构建问答大模型链
* 使用 FAISS 进行向量存储
* 利用 Amazon DynamoDB 进行无服务器的对话记忆
* 使用 AWS Lambda 进行无服务器计算
* 前端使用 React、TypeScript、TailwindCSS 和 Vite 构建
* 可本地运行或部署到 AWS Amplify Hosting
* 使用 Amazon Cognito 进行认证


## 应用场景

1. **教育和培训** ：学生可以上传教材PDF，直接在上面提问，获取实时解答。
2. **法律与合规** ：律师和合规官可以上传法律文档，快速查询相关法规和判例。
3. **企业文档管理** ：员工可以上传企业政策或技术文档，进行快速问答，提高工作效率。
4. **医疗和健康** ：医生或患者可以上传医学报告或指南，进行条件查询和解答。
5. **科研和学术** ：研究人员可以上传研究论文，进行内容查询和分析。


##### 部署说明

该项目使用 [AWS SAM CLI](<https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html>) 进行构建和部署，前端可选择本地运行或者通过 AWS Amplify Hosting 部署。项目代码可以从 [GitHub 仓库](<https://github.com/aws-samples/serverless-pdf-chat>) 获取，详细的部署和配置步骤请参见仓库中的部署说明文档。

> 注意：本应用目前仅作示范和教育用途，不适合生产环境。具体详细的安全和成本考虑请参考AWS官方文档和定价页面。