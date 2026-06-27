import { test, expect } from '@playwright/test';
import { YoutubePage } from '../pages/YoutubePage';

test('youtube element loading test', async ({page}) => {
    
    const youtube = new YoutubePage(page);
    // 1. Navigate to the https://youtube.com/ website.
    await youtube.open();
    
    // 2. Click on the search icon or bar & search for "freecodecamp docker"
    await youtube.search('freecodecamp docker');
    
    // 3. Scroll down twice to load more results.
    await expect(youtube.filterTabAll).toBeVisible();
    await youtube.scroll(2);

    // 4. Click on any video thumbnail from the search results
    await youtube.clickOnFirstDockerVideo();

    // 5. On the video page, wait for the video player and other elements to load completely.
    await expect(youtube.playButton).toBeVisible(); 

    // 7. Print video title and number of views
    console.log('Title:', await youtube.videoTitle.textContent());
    console.log('Views:', await youtube.videoViews.textContent());
})