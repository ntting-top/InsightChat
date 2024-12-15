import { View, Text, YStack, XStack } from 'tamagui'
import { ChevronLeft, Search, Menu } from '@tamagui/lucide-icons'

export function ChatHeader() {
  return (
    <XStack
      backgroundColor="$yellow2"
      padding="$4"
      alignItems="center"
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap="$2">
        <ChevronLeft size={24} color="$gray11" />
        <Text fontSize={16} color="$gray11">猫猫助理</Text>
      </XStack>
      
      <XStack gap="$4">
        <Search size={20} color="$gray11" />
        <Menu size={20} color="$gray11" />
      </XStack>
    </XStack>
  )
}
