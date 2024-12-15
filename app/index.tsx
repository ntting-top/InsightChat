import { Image } from '@tamagui/image-next'
import { Text, YStack } from 'tamagui'
import { ToggleThemeButton } from '~/code/ToggleThemeButton'
import oneBall from '~/public/app-icon.png'
import { ChatPage } from '../code/chatPage'
import { createRoot } from 'react-dom/client'

export function HomePage() {
  return (
    <YStack bg="$color1" mih="100%" gap="$4" ai="center" jc="center" f={1}>
        <ToggleThemeButton />
    </YStack>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<HomePage />)