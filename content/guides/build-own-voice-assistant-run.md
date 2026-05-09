---
title: "Build your own voice assistant and run it locally Build your own voice assistant"
date: "2024-01-01 00:00:00+08:00"
description: 'Build your own voice assistant and run it locally  Whisper + Ollama
  + Bark '
slug: build-own-voice-assistant-run
tags:
- suno-bark
- build
- voice
- fr
- whisper
draft: false
related_tools:
- suno
- ai website builder
- building agentic rag with llamaindex
- genwebbuilder - 将图像转化为令人惊艳的网站
- knowledge graph builder app
---

## Build your own voice assistant and run it locally

## 构建和本地运行语音助手：Whisper + Ollama + Bark

在这篇文章中，作者展示了如何构建一个语音助手，该助手集合了大型语言模型的对话能力和语音的听说功能，可以在本地计算机上离线运行。这个语音助手类似于《钢铁侠》中的Jarvis或Friday。本文使用Python语言实现，并提供了一些扩展应用的建议。

##### 技术栈

首先，需要设置一个虚拟Python环境，可以使用pyenv、virtualenv、诗歌等工具。本文选用Poetry。以下是需要安装的关键库：

* **rich** : 提供美观的控制台输出。
* **openai-whisper** : 进行语音转文本的工具。
* **suno-bark** : 进行高质量文本转语音的库。
* **langchain** : 一个与大型语言模型（LLMs）交互的简单库。
* **sounddevice** 、**pyaudio** 和 **speechrecognition** : 用于音频录制和播放的工具。


还需要一个大型语言模型（LLM）的后端，这里使用Ollama。在开始前，需要下载并运行Ollama应用以提供语言模型服务。

##### 架构

整个应用由三个主要部分组成：

1. **语音识别** ：使用 OpenAI 的 Whisper 将语音转换为文本。
2. **对话链** : 使用 Langchain 接口与 Llama-2 语言模型进行对话，该模型由 Ollama 提供。
3. **语音合成** : 通过 Suno AI 的 Bark 模型将文本转换为语音。


工作流程如下: 录制语音 -> 转换为文本 -> 生成语言模型响应 -> 使用Bark合成语音并播放。

##### 实现

**TextToSpeechService** 类用于进行文本到语音的转换，支持处理较长文本：


import nltk
import torch
import warnings
import numpy as np
from transformers import AutoProcessor, BarkModel

warnings.filterwarnings("ignore", message="torch.nn.utils.weight_norm is deprecated in favor of torch.nn.utils.parametrizations.weight_norm.")

class TextToSpeechService:
def __init__(self, device: str = "cuda" if torch.cuda.is_available() else "cpu"):
self.device = device
self.processor = AutoProcessor.from_pretrained("suno/bark-small")
self.model = BarkModel.from_pretrained("suno/bark-small")
self.model.to(self.device)

def synthesize(self, text: str, voice_preset: str = "v2/en_speaker_1"):
inputs = self.processor(text, voice_preset=voice_preset, return_tensors="pt")
inputs = {k: v.to(self.device) for k, v in inputs.items()}

with torch.no_grad():
audio_array = self.model.generate(**inputs, pad_token_id=10000)

audio_array = audio_array.cpu().numpy().squeeze()
sample_rate = self.model.generation_config.sample_rate
return sample_rate, audio_array

def long_form_synthesize(self, text: str, voice_preset: str = "v2/en_speaker_1"):
pieces = []
sentences = nltk.sent_tokenize(text)
silence = np.zeros(int(0.25 * self.model.generation_config.sample_rate))

for sent in sentences:
sample_rate, audio_array = self.synthesize(sent, voice_preset)
pieces += [audio_array, silence.copy()]

return self.model.generation_config.sample_rate, np.concatenate(pieces)


然后，初始化必要的组件，包括语音到文本（Whisper）、对话链（Langchain）和文本到语音（Bark）的实例：


import time
import threading
import numpy as np
import whisper
import sounddevice as sd
from queue import Queue
from rich.console import Console
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.prompts import PromptTemplate
from langchain_community.llms import Ollama
from tts import TextToSpeechService

console = Console()
stt = whisper.load_model("base.en")
tts = TextToSpeechService()

template = """
You are a helpful and friendly AI assistant. You are polite, respectful, and aim to provide concise responses of less
than 20 words.
The conversation transcript is as follows:
{history}
And here is the user's follow-up: {input}
Your response:
"""
PROMPT = PromptTemplate(input_variables=["history", "input"], template=template)
chain = ConversationChain(
prompt=PROMPT,
verbose=False,
memory=ConversationBufferMemory(ai_prefix="Assistant:"),
llm=Ollama(),
)


定义录音、转录、获取语言模型响应和播放音频的函数：


def record_audio(stop_event, data_queue):
def callback(indata, frames, time, status):
if status:
console.print(status)
data_queue.put(bytes(indata))

with sd.RawInputStream(
samplerate=16000, dtype="int16", channels=1, callback=callback
):
while not stop_event.is_set():
time.sleep(0.1)

def transcribe(audio_np: np.ndarray) -> str:
result = stt.transcribe(audio_np, fp16=False)  # Set fp16=True if using a GPU
text = result["text"].strip()
return text

def get_llm_response(text: str) -> str:
response = chain.predict(input=text)
if response.startswith("Assistant:"):
response = response[len("Assistant:") :].strip()
return response

def play_audio(sample_rate, audio_array):
sd.play(audio_array, sample_rate)
sd.wait()


最后，定义主应用逻辑来处理用户互动：


if __name__ == "__main__":
console.print("[cyan]Assistant started! Press Ctrl+C to exit.")

try:
while True:
console.input(
"Press Enter to start recording, then press Enter again to stop."
)

data_queue = Queue()  # type: ignore[var-annotated]
stop_event = threading.Event()
recording_thread = threading.Thread(
target=record_audio,
args=(stop_event, data_queue),
)
recording_thread.start()

input()
stop_event.set()
recording_thread.join()

audio_data = b"".join(list(data_queue.queue))
audio_np = (
np.frombuffer(audio_data, dtype=np.int16).astype(np.float32) / 32768.0
)

if audio_np.size > 0:
with console.status("Transcribing...", spinner="earth"):
text = transcribe(audio_np)
console.print(f"[yellow]You: {text}")

with console.status("Generating response...", spinner="earth"):
response = get_llm_response(text)
sample_rate, audio_array = tts.long_form_synthesize(response)

console.print(f"[cyan]Assistant: {response}")
play_audio(sample_rate, audio_array)
else:
console.print(
"[red]No audio recorded. Please ensure your microphone is working."
)

except KeyboardInterrupt:
console.print("\n[red]Exiting...")

console.print("[blue]Session ended.")


##### 使用场景

1. **个人助理** ：可以作为日常个人助理，处理事务提醒、日程安排等。
2. **客户服务** ：在本地运行的语音助手可用于提供客户服务，响应用户询问。
3. **学习和教育** ：作为学习辅助工具，帮助用户进行语言学习或提供即时答案。
4. **智能家居** ：集成到智能家居设备中，进行语音控制。
5. **隐私保护** ：本地运行能够确保用户数据不会上传到云端，保护隐私。


通过这篇教程，即使是初学者也可以实现一个初步的语音助手，并在需要时增加更多的功能和优化。