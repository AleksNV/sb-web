import { test, expect } from '@playwright/test';

test.describe('Basic Functionality', () => {
  test('should load the application', async ({ page }) => {
    await page.goto('/');

    // Проверяем, что страница загрузилась
    await expect(page).toHaveTitle(/Slot Buddy/);

    // Проверяем, что есть основной контент
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have proper HTML structure', async ({ page }) => {
    await page.goto('/');

    // Проверяем HTML структуру
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('head')).toBeVisible();
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to banking page', async ({ page }) => {
    await page.goto('/banking');

    // Проверяем, что страница загрузилась
    await expect(page).toHaveTitle(/Banking/);
    await expect(page.locator('h1')).toContainText('Banking');
  });

  test('should navigate to client list page', async ({ page }) => {
    await page.goto('/client-list');

    // Проверяем, что страница загрузилась
    await expect(page).toHaveTitle(/Client List/);
    await expect(page.locator('h1')).toContainText('Client List');
  });
});
