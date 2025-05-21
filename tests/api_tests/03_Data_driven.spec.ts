import {test, expect } from '@playwright/test';
import {testUsers, testPosts} from '../../test-data/TestDataUsers';
import { request } from 'http';

test.describe('Data driven test with Playwright', () => {
    for (const user of testUsers) {
        test(`GET users/{userId} test`, async({request}) =>{
            const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        })
    }
})