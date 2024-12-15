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
  return (
    <XStack
      padding="$4"
      gap="$2"
      backgroundColor="$yellow2"
      borderTopWidth={1}
      borderColor="$yellow3"
    >
      <Button
        size="$4"
        circular
        icon={<ImageIcon size={20} />}
        onPress={onImagePress}
      />
      
      <Input
        flex={1}
        value={value}
        onChangeText={onChangeText}
        backgroundColor="$white"
        borderRadius="$4"
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
