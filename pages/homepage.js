class HomePage {
    
    get title() { return $('h1.title-style')}
    get search() { return $('input.form-control') };
    get filter() { return $('button.input-button') };
    get loadMoreBtn() { return $('button.btn-custom') }    
    get linkAllGalleries() { return $('li:nth-child(1) > a)')}   
    get allLinks () {return $$('a')}; 
    get linkGallery() {return $('div:nth-child(2) > h2 > a')}
    get linkAutor() { return $('div:nth-child(2) > p > a')}

    getTitle() {
        this.title.waitForDisplayed()     
        this.title.getText();
    }
    enterSearch(text) {
        this.search.waitForDisplayed();
        this.search.setValue(text);
    }
    clearSearch(text) {
        this.search.setValue(text)     
        this.search.clearValue(text);
    }
    clickOnFilter() {
        this.filter.click();
    }
    clickOnLoadMore() {
        this.loadMoreBtn.click();
    }
    doSearch(text) {
        this.search.setValue(text)        
        this.filter.click()
    }  
    clickOnLinkAllGalleries () {
        this.linkAllGalleries.click();
    }    

}

module.exports = new HomePage()