export interface Message {
    id: string;
    content: string;
    type: 'text' | 'image';
    isUser: boolean;
    timestamp: Date;
  }
  
  export interface ChatAction {
    icon: string;
    label: string;
    onClick: () => void;
  }

  export type ChatActionType = '查询' | '忘记' | '总结' | '分析' | '重新启动';