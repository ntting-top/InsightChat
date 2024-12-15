import { useEffect, useRef } from 'react'
import { ScrollView } from 'tamagui'
import { ChatMessage } from './ChatMessage'
import { Message } from '../../types/chat'

interface Props {
  messages: Message[]
}

export function MessageList({ messages }: Props) {
  const scrollViewRef = useRef<any>(null)

  // 当消息更新时，滚动到底部
  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({ animated: true })
      }, 100)
    }
  }, [messages])

  return (
    <ScrollView
      ref={scrollViewRef}
      flex={1}
      contentContainerStyle={{
        paddingVertical: 20
      }}
      showsVerticalScrollIndicator={false}  // 隐藏滚动条
      bounces={false}  // 禁用弹性效果
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </ScrollView>
  )
}
