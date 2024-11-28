import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const filePath = './server-list/list.json';
const servers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test.describe('Deployment Version Check', () => {
  for (const server of servers) {
    test(`Check version on ${server.host}`, async ({ page }) => {
      await page.goto(server.host);

      // footer 要素を取得
      const footer = await page.locator('footer');
      await expect(footer).toBeVisible();
    
      // バージョン情報を取得
      const versionText = await footer.textContent();
    
      // バージョン情報を確認
      const expectedVersion = 'v20.0.0';
      expect(versionText).toContain(expectedVersion);
    });
  }
});
