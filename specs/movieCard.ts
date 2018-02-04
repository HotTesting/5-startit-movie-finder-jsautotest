import { browser, $, $$, element, by} from 'protractor'

describe('Movie card ', async function(){

    it('should have name', async function(){
        await browser.get('https://movies-finder.firebaseapp.com');
        let movieName = await $$('.text-ellipsis').first().getText()
        expect(await movieName).toBe('Dilwale Dulhania Le Jayenge')

    })

    it('should have "raiting" pointer', async function(){
        await browser.get('https://movies-finder.firebaseapp.com');
        let ratingPoint = await $$('.label').first().getText()

        expect(await ratingPoint).toBe('9.1')
    })

    it('should open appropriate movie details page, after click on name field', async function(){
        await browser.get('https://movies-finder.firebaseapp.com');
        let movie = await $$('.text-ellipsis a').first().click()
        await browser.sleep(5000)
        expect(browser.getCurrentUrl()).toBe('https://movies-finder.firebaseapp.com/movie/19404')
    })
})