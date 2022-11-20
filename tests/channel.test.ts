import { test, expect } from '@playwright/test';
import asyncApiJson from '../src/app/shared/mock/mock.springwolf-kafka-example.json'

test.describe('Channel section', ()=> {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('/');
  });

  test('clicking on channel updates the url', async ({ page }) => {
    // when
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()

    // then
    await expect(page).toHaveURL('http://localhost:4200/#channel-kafka-another-topic-publish-AnotherPayloadDto');
  })

  test('(first) channel example tab is rendered', async ({ page }) => {
    // when
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()

    // then
    await page.getByRole('tab', { name: 'Example' }).getByText('Example').click();
    await expect(page.getByRole('tabpanel', { name: 'Example' }).locator('textarea'))
      .toHaveValue(JSON.stringify(asyncApiJson.components.schemas.AnotherPayloadDto.example, null, 2))
  });

  test('(first) channel schema tab is rendered', async ({ page }) => {
    // when
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()

    // then
    await page.getByRole('tab', { name: 'Schema' }).getByText('Schema').click();
    await page.getByRole('heading', { name: 'AnotherPayloadDto #/components/schemas/AnotherPayloadDto' }).click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('string').click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('Foo field').click();
    await page.getByRole('cell', { name: 'string Foo field example: "bar"' }).getByText('example: "bar"').click();
  });

  test('(first) channel headers tab is rendered', async ({ page }) => {
    // when
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()

    // then
    await page.getByRole('tab', { name: 'Headers' }).getByText('Headers').click();
    await page.getByRole('heading', { name: 'HeadersNotDocumented #/components/schemas/HeadersNotDocumented' }).click();
    await expect(page.getByRole('tabpanel', { name: 'Headers' }).locator('textarea'))
      .toHaveValue(JSON.stringify(asyncApiJson.components.schemas.HeadersNotDocumented.example, null, 2))
  });

  test('(first) channel bindings tab is rendered', async ({ page }) => {
    // when
    await page.locator("#channel-kafka-another-topic-publish-AnotherPayloadDto").click()

    // then
    await page.getByRole('tab', { name: 'Bindings' }).getByText('Bindings').click();
    await page.getByText(/\{\s+"groupId":\s+\{\s+"type":\s+"string",\s+"enum":\s+\[\s+"example-group-id"\s+\]\s+\}\s+\}/).click();
  });
})
