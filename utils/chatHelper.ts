const responses = [
  "喵~ 很高兴见到你！",
  "让我想想看喵...",
  "这个问题很有趣呢！",
  "我觉得可以这样看喵~",
  "需要我帮你什么吗？",
  "让我们一起探讨这个问题吧！"
];

export const getChatResponse = () => {
  return responses[Math.floor(Math.random() * responses.length)];
};

export const analyzeChat = (messages: Message[]) => {
  const userMessages = messages.filter(m => m.isUser);
  return `分析结果喵：
    - 对话总数：${messages.length}条
    - 用户发言：${userMessages.length}条
    - 主要话题：${userMessages.map(m => m.content).join('、')}
  `;
};

export const summarizeChat = (messages: Message[]) => {
  return `总结一下我们聊了这些内容喵：
    ${messages.map(m => m.content).slice(-5).join('\n')}
  `;
};
