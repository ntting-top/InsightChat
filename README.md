# One Project

Welcome to One!

## Developing

Run your One app in development:

```bash
yarn dev
```

## Production

To build your app for production:

### Web

```bash
yarn build:web
```

### iOS

First, you'll need to generate the native code for your app:

```bash
yarn prebuild:native
```

Afterward, follow the instructions printed in the terminal to build and upload your iOS app for distribution.


# My Chat App

一个简单的跨端聊天应用，使用 One 框架和 React 构建。用户可以发送消息并接收硬编码的回复，同时支持语音发送功能。

## 功能介绍

- **用户消息输入**：用户可以在输入框中输入消息。
- **自动回复**：每当用户发送消息时，应用会自动回复 "hello"。
- **消息列表**：所有消息会在屏幕上显示，并且可以滚动查看。
- **语音发送**：用户可以点击语音按钮进行语音发送（功能尚未实现）。
- **可扩展性**：可以轻松添加更多功能，如图片发送等。

## 项目结构
├── src/
│ ├── components/
│ │ ├── ChatInput.tsx
│ │ ├── MessageList.tsx
│ │ ├── MessageItem.tsx
│ │ └── VoiceButton.tsx
│ ├── pages/
│ │ └── ChatPage.tsx
│ ├── App.tsx
│ └── index.tsx
├── public/
│ └── index.html
├── .eslintrc.js
├── tsconfig.json
└── package.json


## 安装与启动

1. **克隆项目**：
   ```bash
   git clone <your-repo-url>
   cd my-chat-app
   ```

2. **安装依赖**：
   使用 `mnpm` 安装项目依赖：
   ```bash
   mnpm install
   ```

3. **启动开发服务器**：
   使用以下命令启动项目：
   ```bash
   npx one dev
   ```

4. **构建项目**：
   如果你想构建项目以便在生产环境中使用，可以运行：
   ```bash
   npx one build
   ```

5. **查看生产环境**：
   使用以下命令启动静态文件服务器：
   ```bash
   npx one serve
   ```

## 技术栈

- **React**：用于构建用户界面。
- **One**：跨端框架，支持静态、服务器和客户端页面。
- **TypeScript**：用于类型安全的开发。
- **ESLint**：用于代码质量和风格检查。

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

本项目使用 MIT 许可证。请查看 [LICENSE](LICENSE) 文件以获取更多信息。
