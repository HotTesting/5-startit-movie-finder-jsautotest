import { browser, $, $$, element, by} from 'protractor'

describe('Navigation ',async function() {
    
    it('should open "Upcoming movies" section', async function() {
        await browser.get('https://movies-finder.firebaseapp.com')

        let upcomingMoviesButton = await $$('.navbar-nav > li > a').first().click()
        expect(browser.getCurrentUrl()).toBe('https://movies-finder.firebaseapp.com/upcoming')
    })

    it('should open "Popular Series" section', async function(){
        await browser.get('https://movies-finder.firebaseapp.com')
        let popularSeriesButton = await $$('.navbar-nav > li > a').last().click()
        expect(browser.getCurrentUrl()).toBe('https://movies-finder.firebaseapp.com/popular/series')
    })

    it('should open "Action" category', async function(){
        await browser.get('https://movies-finder.firebaseapp.com')
        let actionButton = await $$('.nav-stacked a').first().click()
        expect(browser.getCurrentUrl()).toBe('https://movies-finder.firebaseapp.com/genres/28/Action')
    })
})