require('ts-node').register();
let specFiles = "specs/*.ts"
module.exports.config = {
    specs: [specFiles],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false
}