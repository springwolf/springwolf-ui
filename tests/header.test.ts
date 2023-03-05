import { test, expect } from '@playwright/test';

test.describe('Header section', ()=> {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('/');
  });

  test('github url is shown as link', async ({ page }) => {
    // then
    await expect(page.locator("mat-toolbar a")).toHaveAttribute('href', 'https://github.com/stavshamir/springwolf')
  });
})
