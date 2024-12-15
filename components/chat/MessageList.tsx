import { ScrollView } from 'tamagui'
import { ChatMessage } from './ChatMessage'
import { Message } from '../../types/chat'

interface Props {
  messages: Message[]
}

export function MessageList({ messages }: Props) {
  return (
    <ScrollView
      flex={1}
      backgroundColor="$yellow1"
      contentContainerStyle={{
        paddingVertical: 20
      }}
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </ScrollView>
  )
}
