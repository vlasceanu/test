var wtb_search_page = function(){
	
	this.isLogoPresent = function(){
		var logo = element(by.css('[class="castrol-logo full-h"]'));
		expect(logo.getAttribute('src')).toEqual('http://159.8.151.205:9080/wtb/images/web/logo.png');
		expect(logo.isDisplayed).toBeTruthy();	
	}
	
	this.enterAddress = function(value){
		var searchInput = $('#inputSearch');
		searchInput.clear();
		searchInput.sendKeys(value).then(function(){
			browser.wait(function() {
				var results = element.all(by.css(".pac-container .pac-item"));
				var deferred = protractor.promise.defer();
				results.first().isPresent().then(function(isPresent){
					var condition = isPresent;
					deferred.fulfill(condition);
				});
				return deferred.promise;
			});
			var results = element.all(by.css(".pac-container .pac-item"));
			results.first().click();
		});
	}
	
	this.validateResultsNumber = function(input){
		var results = element.all(by.repeater('item in itemList | filterSelected : selectedItem  | limitTo: 7'));
		expect(results.count()).toEqual(input);
	}
	
	this.validateFirstRetailer = function(){
		var results = element.all(by.repeater('item in itemList | filterSelected : selectedItem  | limitTo: 7'));
		expect(results.first().getText()).toContain('Balham High Road');
	}
	
	this.validateLastRetailer = function(){
		var results = element.all(by.repeater('item in itemList | filterSelected : selectedItem  | limitTo: 7'));
		expect(results.last().getText()).toContain('Great West Road');
	}

}

module.exports = new wtb_search_page();