---
title: "Graphpython"
date: "2024-01-01 00:00:00+08:00"
description: Graphpython Graphpython  Graphpython
slug: graphpython-python-microsoft-graph-api
tags:
- id
- entra
- microsoft
- aadinternals
- azure
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Graphpython

**Graphpython 简介**

Graphpython是一款模块化的Python工具，专门用于跨平台的Microsoft Graph API枚举和利用操作。它基于AADInternals (Killchain.ps1)、GraphRunner和TokenTactics(V2)的功能，提供了一个全面的解决方案，用于与Microsoft Graph API进行交互，主要应用于红队和云假设入侵操作。Graphpython涵盖了对多种Microsoft服务的外部侦察、身份验证/令牌操作、枚举以及利用后操作，这些服务包括Entra ID（Azure AD），Office 365（Outlook、SharePoint、OneDrive、Teams），和Intune（端点管理）。

**Graphpython的使用场景**

1. **外部侦察** ：包括通过外部身份进行的各种信息收集操作，如用户枚举和租户信息获取。
2. **身份验证和令牌操作** ：提供了多种方法来获取和操作Graph API的各种令牌，包括访问令牌和刷新令牌。
3. **在认证后的枚举** ：可以获取当前用户信息、组织信息、用户属性、组成员等详细信息。
4. **在认证后的利用** ：进行各种利用操作，如邀请客用户、赋予特权角色、更改用户密码、创建应用等。
5. **Intune设备管理** ：包括设备的枚举和管理，如获取管理的设备信息、配置策略、执行设备重启、锁定等操作。
6. **清理操作** ：如删除用户、删除组、移除组成员、擦除设备数据等。
7. **定位器功能** ：用于定位对象ID和权限ID。


**安装和使用**

Graphpython支持在Windows和Linux系统上使用，可以通过以下步骤进行安装：


git clone https://github.com/mlcsec/Graphpython.git
cd Graphpython
pip install .
Graphpython -h # 或者使用 python3 Graphpython.py -h


详细使用方法和命令详见项目的[Wiki](<https://github.com/mlcsec/Graphpython/wiki>)。

**总结**

Graphpython是一款功能强大的工具，适用于需要与Microsoft Graph API进行复杂交互的安全专家，尤其是红队和云安全测试场景。它提供了从外部侦察、身份验证、详细枚举到利用和清理的全方位支持，是一个不可多得的综合性工具。