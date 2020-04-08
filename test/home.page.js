const HomePage = require('../pages/homepage');
const assert = require('assert');
const fetch = require('node-fetch');

describe("TestCase#1 - Test page functionality", () => {
    it('Step#1 - Check page url', () => {
        browser.url('/');
        assert.equal(browser.getUrl(), 'https://gallery-app.vivifyideas.com/', 'correct page url');
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#1.png');
    });

    it('Step#2 - get page title', () => {
        browser.url('/');
        HomePage.getTitle();
        assert.equal('ALL GALLERIES', HomePage.title.getText())
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#2.png');
    });

    it("Step#3 - should enter value in search filed", () => {
        browser.url('/');
        HomePage.enterSearch('My test gallery - Jasmina')
        assert.equal('My test gallery - Jasmina', HomePage.search.getValue());
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#3.png');
    })
    it("Step#4 - should clear entered search value", () => {
        browser.url('/')
        HomePage.clearSearch('My test gallery - Jasmina')
        assert.equal('', HomePage.search.getValue());
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#4.png');
    });
    it("Step#5 - should click on filter button", () => {
        browser.url('/');
        HomePage.clickOnFilter();
        browser.pause('3000');
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#5.png');
    });

    it("Step#6 - should click on Load More button", () => {
        browser.url('/');
        HomePage.clickOnLoadMore();
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#6.png');
    });
    it("Step#7 - should click on link AllGalleries", () => {
        browser.url('/');
        HomePage.clickOnLinkAllGalleries;
        browser.saveScreenshot('./screenshoot/TestCase#1/Step#7.png');
    });

})


describe('TestCase#2 - Test search option', () => {
    it("Step#1 - should return coresponding entered search value", () => {
        browser.url('/');
        HomePage.doSearch('My test gallery - Jasmina');
        browser.pause('5000');
        browser.saveScreenshot('./screenshoot/TestCase#2/Step#1.png');
    });
})

describe('TestCase#3 - Navigation', () => {
    it('Step#1 - should go to Gallery page https://gallery-app.vivifyideas.com/galleries/172', () => {
        browser.url('/');
        HomePage.linkGallery.click()
        browser.waitUntil(() => browser.getUrl().includes('/galleries/172'));
        browser.pause('2000');
        browser.saveScreenshot('./screenshoot/TestCase#3/Step#1.png');
    });

    it('Step#2 - should go to Autors page https://gallery-app.vivifyideas.com/authors/19', () => {
        browser.url('/');
        HomePage.linkAutor.click()
        browser.waitUntil(() => browser.getUrl().includes('/authors/19'));
        browser.pause('2000');
        browser.saveScreenshot('./screenshoot/TestCase#3/Step#2.png');
    });
});

describe('TestCase#4 - Check for broken links', () => {
    it('Step#1 - should check the page for broken links', () => {
        browser.url('/');
        const urls = HomePage.allLinks.map(link => link.getAttribute('href'));
        urls.forEach(async (url) => {
            const response = await fetch(url);
            console.log("test.js :15", response);
            expect(response).to.be.below(400);
        });
    })
})


