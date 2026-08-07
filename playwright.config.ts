
  //https://www.czone.com.pk/signin
  //https://practicetestautomation.com/practice-test-login/
  //https://the-internet.herokuapp.com/
  //https://www.saucedemo.com/
  //https://demoqa.com/
  //https://automationexercise.com/
  //https://vinothqaacademy.com/drop-down/
  //https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  //https://www.kayak.com/
  //https://vinothqaacademy.com/drop-down/

  import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // HTML test report
  reporter: [['html', { open: 'never' }]],

  use: {
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // Chromium
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Google Chrome
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },

    // Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

  ],
});

