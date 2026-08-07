import { test } from '@playwright/test';

test('AI Tools Polymorphism', async () => {
    console.log('🔥 POLY TEST IS RUNNING');

    class AITool {
        useTool() {
            console.log('AI tool helps users.');
        }
    }

    class ChatGPT extends AITool {
        useTool() {
            console.log('ChatGPT is best for coding, automation, debugging, and learning.');
        }
    }

    const chatgpt = new ChatGPT();
    chatgpt.useTool();
});