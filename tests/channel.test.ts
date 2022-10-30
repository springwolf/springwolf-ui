import { test, expect } from '@playwright/test';
import asyncApiJson from '../src/app/shared/mock/mock.springwolf-kafka-example.json'

test.describe('Channel', ()=> {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('http://localhost:4200/');
  });

  test('first collapsible is rendered', async ({ page }) => {
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()
    await expect(page).toHaveURL('http://localhost:4200/#channel-kafka-another-topic-publish-AnotherPayloadDto');

    await expect(page.getByRole('tabpanel', { name: 'Example' }).locator('textarea'))
      .toHaveValue(JSON.stringify(asyncApiJson.components.schemas.AnotherPayloadDto.example, null, 2))

    await page.getByRole('tab', { name: 'Schema' }).getByText('Schema').click();
    await page.getByRole('heading', { name: 'AnotherPayloadDto #/components/schemas/AnotherPayloadDto' }).click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('string').click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('Foo field').click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('example: "bar"').click();

    await page.getByRole('tab', { name: 'Headers' }).getByText('Headers').click();
    await page.getByRole('heading', { name: 'HeadersNotDocumented #/components/schemas/HeadersNotDocumented' }).click();
    await expect(page.getByRole('tabpanel', { name: 'Headers' }).locator('textarea'))
      .toHaveValue(JSON.stringify(asyncApiJson.components.schemas.HeadersNotDocumented.example, null, 2))

    await page.getByRole('tab', { name: 'Bindings' }).getByText('Bindings').click();
    await page.getByText(/\{\s+"groupId":\s+\{\s+"type":\s+"string",\s+"enum":\s+\[\s+"example-group-id"\s+\]\s+\}\s+\}/).click();
  });
})
