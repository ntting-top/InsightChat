import { Image } from '@tamagui/image'
import { XStack, Input, Button } from 'tamagui'
import { Image as ImageIcon, Mic } from '@tamagui/lucide-icons'

interface Props {
  value: string
  onChangeText: (text: string) => void
  onSend: () => void
  onImagePress: () => void
  onVoicePress: () => void
}

export function ChatInput({
  value,
  onChangeText,
  onSend,
  onImagePress,
  onVoicePress
}: Props) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <XStack
      padding="$4"
      gap="$2"
      backgroundColor="$yellow2"
      alignItems="center"
    >
      <Button
        size="$4"
        circular
        icon={<ImageIcon size={20} />}
        onPress={onImagePress}
      />
      
      <Input
        flex={1}
        backgroundColor="$yellow1"
        borderWidth={1}
        borderColor="$yellow5"
        value={value}
        onChangeText={onChangeText}
        onKeyPress={handleKeyPress}
        placeholder="说点什么吧..."
        height={44}
      />
      
      <Button
        size="$4"
        circular
        icon={<Mic size={20} />}
        onPress={onVoicePress}
      />
    </XStack>
  )
}
