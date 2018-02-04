import { browser, $, $$, element, by} from 'protractor'

describe('Movie card ', async function(){

    it('should have name', async function(){
        let movieName = $$('text-ellipsis a').first()
        await browser.sleep(5000)
        console.log(movieName)
    })

    it('should have "raiting" pointer', async function(){

    })

    it('should open appropriate "movie details" page, after click on "name" field'), async function(){
        
    }
})