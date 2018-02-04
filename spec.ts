import {browser, element, By, $, $$} from 'protractor'
import { async } from 'q';

describe('Protractor', function () {
    it('Should be alivefff', async function () {
        await browser.waitForAngularEnabled(false);
        browser.get('http://google.com');   
    })

    it('Should be alivefff 2', async function () {
        await browser.waitForAngularEnabled(false);
        browser.get('http://google.com');      
        console.log('sleep start')
        await browser.sleep(5000);
        console.log('sleep finished')
        console.time('sleep 2')
        await browser.sleep(5000);
        console.timeEnd('sleep 2');
    })

    it('should show cool thing', async function(){
        let browser2 = await browser.forkNewDriverInstance().ready

        await browser2.get('/');
        await browser2.sleep(5000);

        browser2.$('div')


    })
})

