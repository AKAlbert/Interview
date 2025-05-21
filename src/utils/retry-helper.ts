import { APIRequestContext } from '@playwright/test';

export async function retryRequest(
  request: APIRequestContext,
  url: string,
  options: any = {},
  maxRetries: number = 3,
  retryDelay: number = 1000
) {
  let lastError;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await request.get(url, options);
      if (response.ok()) {
        return response;
      }
      lastError = new Error(`Request failed with status ${response.status()}`);
    } catch (error) {
      lastError = error;
    }
    
    console.log(`Attempt ${attempt + 1} failed, retrying in ${retryDelay}ms...`);
    await new Promise(resolve => setTimeout(resolve, retryDelay));
  }
  
  throw lastError;
}

