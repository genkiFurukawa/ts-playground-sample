import { test, expect } from '@playwright/test';

test.describe(`Happy Path Tests`, () => {
  test('全ステップ実行', async ({ page, baseURL }) => {
    console.log(`Start Happy Path Test`);

    // ステップ1
    await test.step('ステップ1', async () => {
      console.log(`STEP1 baseURL: ${baseURL}`);
      // 例えば、ここでページ遷移などの操作を行う
      // await page.goto(baseURL!);
    });

    // ステップ2
    await test.step('ステップ2', async () => {
      console.log(`STEP2 baseURL: ${baseURL}`);
      // ステップ2で行う操作
    });

    // ステップ3
    await test.step('ステップ3', async () => {
      console.log(`STEP3 baseURL: ${baseURL}`);
      // ステップ3で行う操作
    });

    console.log(`Happy Path Test Finished`);
  });
});
