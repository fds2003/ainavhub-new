---
title: "HumanLayer"
date: "2024-01-01 00:00:00+08:00"
description: HumanLayer HumanLayer Python
slug: humanlayer-python-llm
tags:
- python
- slack
- hl.human
- tool
- llm
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## HumanLayer

**HumanLayer** 是一个Python工具包，旨在使AI代理能够在基于工具和异步工作流中与人类进行沟通。通过将人类纳入工作流程，代理工具能够访问更强大和更有意义的工具调用和任务。这使得用户能够将自己的大型语言模型（LLM）与现有框架结合，赋予AI代理更安全的世界接入权限。

##### 主要功能

* **需要人工批准的函数调用** ：使用`@hl.require_approval()`装饰器，特定函数调用必须在咨询人类后才能执行。
* **人类作为工具** ：可以使用`hl.human_as_tool()`来联系某个人以获取答案、建议或反馈。
* **全渠道联系** ：通过Slack、电子邮件、Discord等多种渠道与人类进行沟通并收集回应。
* **灵活路由** ：可以将批准请求路由到特定团队或个人。
* **兼容性强** ：支持任意LLM和所有主要的工具调用框架。


##### 使用场景

1. **客户支持** ：AI可以向客户发送欢迎邮件，并在关键操作前请求人类的批准。
2. **自动化工作流** ：可创建涉及多个步骤的自动化任务，并确保每一步都经过人类审查。
3. **敏感数据处理** ：在对私密信息进行修改时，可以通过人类批准以避免潜在风险。
4. **团队合作** ：AI可以在需要时联系特定团队成员寻求意见或确认。


HumanLayer的设计确保了在高风险操作中的人类监督，从而提升AI在执行复杂任务时的安全性与可靠性。这为未来自治代理的开发奠定了基础，使它们能够在适当的人类监督下，跨越各种工具和函数更自主地工作。