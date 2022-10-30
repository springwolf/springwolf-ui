import { test, expect } from '@playwright/test';
import asyncApiJson from '../src/app/shared/mock/mock.springwolf-kafka-example.json'

test.describe('Info', ()=> {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('http://localhost:4200/');
  });

  test('section is shown', async ({ page }) => {
    await expect(page.locator('app-info h1')).toHaveText('Springwolf example project - Kafka' );
    await expect(page.locator('app-info h5')).toHaveText('API VERSION 1.0.0 - AsyncAPI JSON file' );
    await expect(page.locator('app-info p')).toHaveText('Springwolf example project to demonstrate springwolfs abilities' );
  });

  test('download of AsyncApi json', async ({ page }) => {
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'AsyncAPI JSON file' }).click()
    ]);
    const popupContent = await popup.evaluate('document.body.textContent') as string
    await expect(JSON.parse(popupContent)).toStrictEqual(asyncApiJson)
  });
})
