// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  timeout: 90000,
  reporter: 'html',

  use: {
    ...devices['Desktop Chrome'],
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1440, height: 900 },
    actionTimeout: 20000,
    navigationTimeout: 60000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
    acceptDownloads: true,
    launchOptions: {
      slowMo: 1200
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});