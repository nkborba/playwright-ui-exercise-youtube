import { expect } from '@playwright/test';

export class YoutubePage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        
        this.searchButton       = page.getByRole('button', { name: 'Search', description: 'Search' });
        this.searchInputField   = page.getByPlaceholder('Search');
        this.filterTabAll       = page.getByRole('tab', { name: 'All' });
        // this.videoLink          = page.getByRole('link', { name: 'Docker Tutorial for Beginners'});
        this.videoLink          = page.locator('ytd-video-renderer a#video-title');
        this.playButton         = page.getByRole('button', { name: 'Play (k)' });
        this.videoTitle         = page.getByRole('heading').first();
        this.videoViews         = page.locator('#info span[dir="auto"]').first();

    }

    async open() {
        await this.page.goto('https://youtube.com/');
    }

    async search(term) {
        await this.searchInputField.click();
        await this.searchInputField.fill(term);
        await this.searchButton.click();
    }

    async scroll(x) {
        for(let i=0; i<x ; i++) {
            await this.page.mouse.wheel(0, 1000);
        }
    }

    async clickOnFirstDockerVideo() {
        await this.videoLink.first().click();
    }

}
