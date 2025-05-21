import {test, expect} from '@playwright/test'

// test.use({
//     baseURL: process.env.BASE_API_URL
// });

test('GET Posts test', async({request}) =>{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    const jsonResponse = await response.json();
    console.log('GET posts Response :' + JSON.stringify(jsonResponse, null, 2))

    expect (response.status()).toBe(201);
    expect (response.statusText()).toBe('OK')

});

test('GET Specific Posts test', async({request}) =>{
    const postId = 1;
    const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log(response);
    const jsonResponse = await response.json();
    console.log('GET posts Response :' + JSON.stringify(jsonResponse, null, 2))

});


