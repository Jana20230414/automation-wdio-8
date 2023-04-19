/**
 * Lesson 1: First running code
 */
describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        //await browser.url('/prihlaseni');
        await browser.url('https://team8-2022brno.herokuapp.com/');
        console.log(await browser.getUrl());

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        const allCookies = await browser.getCookies();
        console.log(allCookies);

        await browser.saveScreenshot('login_page_JMN.png');

        await browser.pause(5000);

    });

});
