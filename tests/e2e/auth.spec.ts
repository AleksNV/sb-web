import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show not authenticated status initially', async ({ page }) => {
    await expect(page.locator('[data-testid="auth-status"]')).toBeVisible();
    await expect(page.locator('text=Not authenticated')).toBeVisible();
  });

  test('should show auth status component', async ({ page }) => {
    await expect(page.locator('[data-testid="auth-status"]')).toBeVisible();
  });
});
