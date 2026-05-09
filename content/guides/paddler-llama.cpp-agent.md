---
title: "paddler paddler Paddler"
date: "2024-01-01 00:00:00+08:00"
description: 'paddler Paddler  llama.cpp '
slug: paddler-llama.cpp-agent
tags:
- git
- agent
- gi
- llama.cpp
- paddler
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## paddler

Paddler 是一个开源的负载均衡器和反向代理，专门为优化运行 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 的服务器而设计。

##### Paddler功能简单总结

* **负载均衡和反向代理** ：Paddler 能够分配和优化请求，确保各服务器负载合理。
* **监控服务器健康状态** ：通过安装在每个服务器旁边的代理（agent），Paddler 可以监控每个 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 实例的健康状态。
* **动态扩展** ：支持动态增加或移除 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 服务器，与自动扩展工具集成。


##### 典型使用场景

你会在以下情况下使用 Paddler：

1. **多服务器环境** ：当你管理多个运行 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 的服务器，并需要高效的负载分配时。
2. **需要高可靠性** ：如果你需要确保服务器的高可用性，Paddler 能通过健康监控和负载均衡来实现。
3. **需要自动扩展** ：当你希望根据流量自动增加或减少服务器数量时，Paddler 可以帮助你管理这个过程。
4. **高并发请求处理** ：如果你的系统需要处理高并发的请求，并且这些请求需要连续批处理，Paddler 的负载均衡机制则特别有效。


##### 如何使用Paddler

1. **安装** ：

* 下载最新版本或自己构建项目。

$ git clone git@github.com:distantmagic/paddler.git
$ cd paddler
$ pushd ./management
$ make esbuild # 为仪表板前端构建
$ popd
$ go build -o paddler


2. **运行代理（agent）** ：

* 代理需要与 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 一同安装在同一台服务器上。

./paddler agent \
--external-llamacpp-host 127.0.0.1 \
--external-llamacpp-port 8088 \
--local-llamacpp-host 127.0.0.1 \
--local-llamacpp-port 8088 \
--management-host 127.0.0.1 \
--management-port 8085


3. **运行负载均衡器（Load Balancer）** ：

* 设置负载均衡器，收集来自代理的健康数据并向外部世界暴露反向代理。

./paddler balancer \
--management-host 127.0.0.1 \
--management-port 8085 \
--reverseproxy-host 196.168.2.10 \
--reverseproxy-port 8080


* 如果希望通过仪表板查看代理状态，可以启用仪表板功能：

--management-dashboard-enable=true