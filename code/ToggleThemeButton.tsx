import { useState } from 'react'
import { YStack } from 'tamagui'
import { ChatHeader } from '../components/chat/ChatHeader'
import { MessageList } from '../components/chat/MessageList'
import { ChatInput } from '../components/chat/ChatInput'
import { BottomActions } from '../components/chat/BottomActions'
import { Message, ChatActionType } from '../types/chat'


export function ToggleThemeButton() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')

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
      content: '喵~ ' + inputText,
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
        setMessages([])
        break
      
      case '总结':
        const summaryMessage: Message = {
          id: Date.now().toString(),
          content: '这是我们的对话总结喵~',
          type: 'text',
          isUser: false,
          timestamp: new Date()
        }
        setMessages([...messages, summaryMessage])
        break
      
      case '分析':
        const analysisMessage: Message = {
          id: Date.now().toString(),
          content: '让我分析一下对话内容喵~',
          type: 'text',
          isUser: false,
          timestamp: new Date()
        }
        setMessages([...messages, analysisMessage])
        break
    }
  }

  return (
    <YStack flex={1}>
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


