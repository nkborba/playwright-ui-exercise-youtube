import { test, expect } from '@playwright/test';

test('youtube element loading test', async ({page}) => {
    
    // 1. Navigate to the https://m.youtube.com/ website.
    await page.goto('https://m.youtube.com/');
    
    // 2. Click on the search icon or bar.
    await page.getByPlaceholder('Search').click();
    
    
    // 3. Input "freecodecamp docker"
    await page.getByPlaceholder('Search').fill('freecodecamp docker');
    await page.getByRole('button', { name: 'Search', description: 'Search' }).click();
    // await page.waitForLoadState('load'); 
    
    await expect(page.getByRole('tab', { name: 'All' })).toBeVisible();
    
    // 4. Scroll down twice to load more results.
    await page.mouse.wheel(0, 1000);   // rola 1000px pra baixo
    await page.mouse.wheel(0, 1000);   // de novo

    // 5. Click on any video thumbnail from the search results
    await page.getByRole('link', { name: 'Docker Tutorial for Beginners'}).first().click();

    // 6. On the video page, wait for the video player and other elements to load completely.
    // await page.waitForLoadState();
    await expect(page.getByRole('button', { name: 'Play (k)' })).toBeVisible(); 

    // 7. Print video title and number of views
    const title = await page.getByRole('heading').first().textContent();
    const views = await page.locator('#info span[dir="auto"]').first().textContent();
    console.log('Title:', title);
    console.log('Views:', views);
})