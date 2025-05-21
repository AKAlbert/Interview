import {test, expect} from '@playwright/test'

// test.use({
//     baseURL: process.env.BASE_API_URL
// });

test('POST Posts test', async({request}) =>{
    const response = await request.post('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    const jsonResponse = await response.json();
    console.log('GET posts Response :' + JSON.stringify(jsonResponse, null, 2));

    expect (response.status()).toBe(201);
    expect (response.statusText()).toBe('Created');

    expect (response.body()).not.toBeNull();

});


