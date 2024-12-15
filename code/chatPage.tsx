// code/ChatPage.tsx
import { useState } from 'react'
import { YStack } from 'tamagui'
import { ChatHeader } from '../components/chat/ChatHeader'
import { MessageList } from '../components/chat/MessageList'
import { ChatInput } from '../components/chat/ChatInput'
import { BottomActions } from '../components/chat/BottomActions'
import { Message, ChatActionType } from '../types/chat'

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  content: '又看見你啦，新的一天是美好的一天哦 😊',
  type: 'text',
  isUser: false,
  timestamp: new Date()
}

const BOT_RESPONSES = [
  '喵~ 这个想法很有趣呢！',
  '让我想想看喵...',
  '说得对呢！',
  '需要我帮你什么吗？',
  '真是个好主意呢！',
  '我们一起来探索这个问题吧！'
]

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [inputText, setInputText] = useState('')

  const getRandomResponse = () => {
    const index = Math.floor(Math.random() * BOT_RESPONSES.length)
    return BOT_RESPONSES[index]
  }

  const handleSend = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputText,
      type: 'text',
      isUser: true,
      timestamp: new Date()
    }

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: getRandomResponse(),
      type: 'text',
      isUser: false,
      timestamp: new Date()
    }

    setMessages([...messages, userMessage, botMessage])
    setInputText('')
  }

  const handleAction = (type: ChatActionType) => {
    switch (type) {
      case '重新启动':
        setMessages([WELCOME_MESSAGE])
        break
      
      case '总结':
        const summaryMessage: Message = {
          id: Date.now().toString(),
          content: '让我帮你总结一下我们的对话喵~ 我们聊了很多有趣的话题呢！',
          type: 'text',
          isUser: false,
          timestamp: new Date()
        }
        setMessages([...messages, summaryMessage])
        break
      
      case '分析':
        const analysisMessage: Message = {
          id: Date.now().toString(),
          content: '分析一下我们的对话内容：我们聊得很开心呢！继续保持这种愉快的交流吧~',
          type: 'text',
          isUser: false,
          timestamp: new Date()
        }
        setMessages([...messages, analysisMessage])
        break
    }
  }

  return (
    <YStack flex={1} backgroundColor="$yellow1">
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput
        value={inputText}
        onChangeText={setInputText}
        onSend={handleSend}
        onImagePress={() => {}}
        onVoicePress={() => {}}
      />
      <BottomActions onAction={handleAction} />
    </YStack>
  )
}
