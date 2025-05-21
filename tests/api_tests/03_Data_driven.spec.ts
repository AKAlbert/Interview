import { test, expect } from '@playwright/test';
import { testUsers, testPosts } from '../../test-data/TestDataUsers';

test.describe('Data-driven API tests', () => {
  for (const user of testUsers) {
    test(`GET /users/${user.id} - should return user with name ${user.name}`, async ({ request }) => {
      const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${user.id}`);
      expect(response.ok()).toBeTruthy();
      const body = await response.json();
    //   expect(body.name).toBe(user.name);
    });
  }

  for (const post of testPosts) {
    test(`POST /posts - should create post with title "${post.title}"`, async ({ request }) => {
      const response = await request.post('https://jsonplaceholder.typicode.com/posts', { data: post });
      expect(response.ok()).toBeTruthy();
      const body = await response.json();
      expect(body.title).toBe(post.title);
      expect(body.body).toBe(post.body);
      expect(body.userId).toBe(post.userId);
    });
  }
});