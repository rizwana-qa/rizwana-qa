//Inheritenance

import { test } from '@playwright/test';
class QAEngineer {

    testApplication() {
        console.log("QA Engineer is testing the application.");
    }

    reportBug() {
        console.log("QA Engineer reported a bug.");
    }
}

class AITester extends QAEngineer {

    testAIModel() {
        console.log("AI Tester is validating the AI model.");
  
    const tester = new AITester();

    tester.testApplication();
    tester.reportBug();
    tester.testAIModel();
    }
};

