import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to home page', async ({ page }) => {
    await expect(page).toHaveTitle(/Slot Buddy - Home/);
    await expect(page.locator('[data-testid="logo"]')).toContainText('Slot Buddy');
  });

  test('should navigate to banking page', async ({ page }) => {
    await page.click('[data-testid="nav-banking"]');
    await expect(page).toHaveURL('/banking');
    await expect(page).toHaveTitle(/Banking - Slot Buddy/);
    await expect(page.locator('h1')).toContainText('Banking');
  });

  test('should navigate to client list page', async ({ page }) => {
    await page.click('[data-testid="nav-client-list"]');
    await expect(page).toHaveURL('/client-list');
    await expect(page).toHaveTitle(/Client List - Slot Buddy/);
    await expect(page.locator('h1')).toContainText('Client List');
  });

  test('should show navigation links', async ({ page }) => {
    await expect(page.locator('[data-testid="navigation"]')).toBeVisible();
    await expect(page.locator('[data-testid="nav-home"]')).toBeVisible();
    await expect(page.locator('[data-testid="nav-banking"]')).toBeVisible();
    await expect(page.locator('[data-testid="nav-client-list"]')).toBeVisible();
  });
});
