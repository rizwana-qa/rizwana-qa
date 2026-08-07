
import { test } from '@playwright/test';

abstract class AITestGenerator {

    abstract generateTestCases(): void;

}

class ChatGPT extends AITestGenerator {

    generateTestCases() {
        console.log("Generating Playwright test cases using ChatGPT.");
    }

}

class Gemini extends AITestGenerator {

    generateTestCases() {

        console.log("Generating Playwright test cases using Gemini.");
    }

}
test('AI Test Generator - Abstraction', async () => {

    const ai = new ChatGPT();
    ai.generateTestCases();

    const AI=new Gemini
    AI.generateTestCases();
    });