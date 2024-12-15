import { XStack, Button, Text } from 'tamagui'
import { ChatAction } from '../../types/chat'
import { RefreshCw, Search, Book, PieChart, Trash } from '@tamagui/lucide-icons'

interface Props {
  onAction: (type: ChatActionType) => void;
}

export function BottomActions({ onAction }: Props) {
  const actions: ChatAction[] = [
    { 
      icon: <Search size={16} color="$yellow1" />, 
      label: '查询', 
      onClick: () => onAction('查询') 
    },
    { 
      icon: <Trash size={16} color="$yellow1" />, 
      label: '忘记', 
      onClick: () => onAction('忘记') 
    },
    { 
      icon: <Book size={16} color="$yellow1" />, 
      label: '总结', 
      onClick: () => onAction('总结') 
    },
    { 
      icon: <PieChart size={16} color="$yellow1" />, 
      label: '分析', 
      onClick: () => onAction('分析') 
    },
    { 
      icon: <RefreshCw size={16} color="$yellow1" />, 
      label: '重新启动', 
      onClick: () => onAction('重新启动') 
    },
  ]

  return (
    <XStack
      padding="$4"
      gap="$2"
      justifyContent="space-around"
      backgroundColor="$yellow3"
    >
      {actions.map((action) => (
        <Button
          key={action.label}
          size="$3"
          backgroundColor="$yellow6"
          onPress={action.onClick}
          icon={action.icon}
        >
          <Text color="$yellow1">{action.label}</Text>
        </Button>
      ))}
    </XStack>
  )
}
