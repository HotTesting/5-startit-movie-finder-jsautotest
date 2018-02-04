import { browser, $, $$, element, by} from 'protractor'

describe('Search ', async function(){

    it('by exisiting name, should show first movie with complete name match', async function(){
        await browser.get('https://movies-finder.firebaseapp.com')

        let movieName = 'Spirited Away'
        let searchMovie = await $('[name="searchStr"]').sendKeys(movieName)
        let goFindMovie = await $('.input-group-btn > .btn-primary').click()
        let checkResult = await $('[title~=Spirited]').getText()
        await expect(checkResult).toBe('Spirited Away')
    })
/*
    it('results(all of them) should contain serach request', async function(){

    })

    fit('result should be empty, after request for nonexistent movie', async function(){
        await browser.get('https://movies-finder.firebaseapp.com')

        let movieName = 'bla bla bla movie'
        let searchMovie = await $('[name="searchStr"]').sendKeys(movieName)
        let goFindMovie = await $('.input-group-btn > .btn-primary').click()
        let checkResult = await $$('.caption a').getText()
        await expect(checkResult).toBe(movieName)
    })
    */
})