import { execSync } from 'child_process';

// 临时清除可能导致问题的环境变量
const originalEnv = process.env;
process.env = {
  NODE_ENV: originalEnv.NODE_ENV,
  PATH: originalEnv.PATH,
};

// 执行构建
execSync('vite build', {
  stdio: 'inherit',
  env: process.env
}); 