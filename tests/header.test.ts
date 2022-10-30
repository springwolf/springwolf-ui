import { test, expect } from '@playwright/test';

test.describe('Header', ()=> {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('http://localhost:4200/');
  });

  test('github url is shown', async ({ page }) => {
    await expect(page.locator("mat-toolbar a")).toHaveAttribute('href', 'https://github.com/stavshamir/springwolf')
  });
})
