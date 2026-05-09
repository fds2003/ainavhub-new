---
title: "YetiHunter"
date: "2024-01-01 00:00:00+08:00"
description: YetiHunter YetiHunter YetiHunter Permiso Security
slug: yetihunter-permiso-security-snowflake
tags:
- permiso
- bin
- activate
- sql
- python
draft: false
related_tools:
- binglish
- linly-dubbing
- opensearch-sql
- mcp server for postgresql
- haiku sqlite rag
---

## YetiHunter

**YetiHunter**

YetiHunter是一款由Permiso Security开发的开源工具，旨在通过查询Snowflake环境中的数据来寻找潜在的安全威胁。这款工具基于Permiso和社区提供的威胁指标，帮助用户检测和追踪Snowflake环境中的可疑活动。

**使用场景**

1. **威胁检测** ：YetiHunter主要用于在Snowflake环境中检测是否存在安全入侵迹象。例如，通过查询一些根据已知威胁模式（从Permiso和社区收集的指标）定制的SQL语句，发现并识别潜在的安全威胁。

2. **安全调查** ：安全团队可以使用此工具对特定事件进行深入分析。例如，可以查询数据库用户的登录活动，查找是否存在异常登录行为。

3. **日常监控** ：YetiHunter也可以用作定期安全监控工具，帮助团队定期审查Snowflake数据库的使用情况和安全性，确保没有未被发现的潜在漏洞或威胁。


**安装方法**

1. **本地安装** ：

* 创建Python虚拟环境并安装所需库：

python3 -m venv ./venv
source venv/bin/activate
python3 -m pip install -r requirements.txt


* 运行工具：

python3 yetihunter.py -h


2. **使用Docker** ：

* 构建Docker镜像：

docker build -t yetihunter .


* 运行Docker容器并挂载相应目录：

docker run -v ~/yetihunter/output:/yetihunter/output -v ~/yetihunter/configfiles:/yetihunter/configfiles -it yetihunter -h


**使用指南**

1. **认证方式** ：

* 使用用户名和密码进行认证：

python3 main.py -a <account id> -u <user> -w <warehouse> -d <database> -am USERPASS


* 使用SSO进行认证：

python3 main.py -a <account id> -u <user> -w <warehouse> -d <database> -am SSO


2. **查询执行** ：

* YetiHunter根据`./queries/queries.json`文件中的查询语句进行数据查询。可以在该文件中添加新的查询语句，工具会自动执行这些查询。
3. **输出结果** ：

* 查询结果将以CSV文件格式保存在`output`目录中：

ls output/testout/


**参考资料**

* [UNC5537 Targets Snowflake Customer Instances for Data Theft and Extortion](<https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion>)
* [Detecting and Preventing Unauthorized User Access: Instructions](<https://community.snowflake.com/s/article/Communication-ID-0108977-Additional-Information>)
* [A guide to threat hunting and monitoring in Snowflake](<https://securitylabs.datadoghq.com/articles/a-guide-to-threat-hunting-and-monitoring-in-snowflake/>)