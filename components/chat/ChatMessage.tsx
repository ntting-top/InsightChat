import { Image } from '@tamagui/image'
import { Text, YStack, XStack } from 'tamagui'
import { Message } from '../../types/chat'

interface Props {
  message: Message
}

export function ChatMessage({ message }: Props) {
  return (
    <XStack
      padding="$4"
      justifyContent={message.isUser ? 'flex-end' : 'flex-start'}
    >
      {!message.isUser && (
        <Image
          source={require('../../assets/cat-avatar.png')}
          width={40}
          height={40}
          borderRadius={20}
          marginRight="$2"
        />
      )}
      
      <YStack
        backgroundColor={message.isUser ? '$yellow8' : '$white'}
        padding="$3"
        borderRadius={16}
        maxWidth="70%"
      >
        {message.type === 'image' ? (
          <Image
            source={{ uri: message.content }}
            width={200}
            height={200}
            borderRadius={8}
          />
        ) : (
          <Text color={message.isUser ? '$white' : '$gray11'}>
            {message.content}
          </Text>
        )}
      </YStack>
    </XStack>
  )
}
