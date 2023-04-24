describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        // sem vypracuj domácí úkol  
        await browser.url('/registrace');
        console.log(await browser.getUrl());

        await browser.saveScreenshot('screenshots/screenshot_homework01.png');

        const windowSize = await browser.getWindowSize();
        console.log("Velikost okna je .... " + windowSize);
        console.log(windowSize);

    });

});


