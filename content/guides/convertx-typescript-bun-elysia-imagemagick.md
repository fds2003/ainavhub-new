---
title: "ConvertX"
date: "2024-01-01 00:00:00+08:00"
description: ConvertX ConvertX TypeScript
slug: convertx-typescript-bun-elysia-imagemagick
tags:
- elysia
- id
- clientsecret
- convertx
- jwt
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## ConvertX

ConvertX是一个使用TypeScript、Bun和Elysia开发的自托管在线文件转换服务，核心功能在于支持将文件转换为超过一千种不同的格式，并能同时处理多个文件，提供密码保护和多账户管理功能。它集成了包括ImageMagick、FFmpeg、Pandoc、Calibre、Vips在内的多种专业转换器，能够处理图像、视频、文档、电子书和3D资产等广泛类型的文件。该项目主要通过Docker进行部署，用户可自定义安全设置如JWT密钥、账户注册权限、HTTP访问等，并支持定期自动删除旧文件，旨在提供一个功能强大、可控且高度可定制的私有文件转换解决方案。