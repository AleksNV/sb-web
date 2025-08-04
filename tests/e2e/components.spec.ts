import { test, expect } from '@playwright/test';

test.describe('UI Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with logo', async ({ page }) => {
    await expect(page.locator('[data-testid="header"]')).toBeVisible();
    await expect(page.locator('[data-testid="logo"]')).toContainText('Slot Buddy');
  });

  test('should display main content area', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('head')).toBeVisible();
    await expect(page.locator('body')).toBeVisible();
  });
});
