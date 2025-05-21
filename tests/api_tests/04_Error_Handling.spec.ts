import { test, expect } from '@playwright/test';
import { retryRequest } from '../../src/utils/retry-helper';

test.describe('Error handling and retry logic', () => {
  test('Should handle 404 error gracefully', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/poss');
    expect(response.status()).toBe(404);
  });

  test('Should retry on failure and eventually succeed', async ({ request }) => {
    const response = await retryRequest(request, 'https://jsonplaceholder.typicode.com/posts/1');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.id).toBe(1);
  });
});
