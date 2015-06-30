var wtb_search_page = require('./wtb_search_page.js');
require('../../../serverAddress.js');

describe('Castrol Where To Buy - Search Page - Functional Tests - Desktop', function(){
	
	browser.get(serverAddress);
		
	describe('S01 - Verify the application initial state page', function(){
		it('should navigate to the application path (URL)', function(){
			expect(browser.getCurrentUrl()).toContain('/wtb');
		});
		
		it('should have the correct page title', function(){
			expect(browser.getTitle()).toEqual('Castrol - Where To Buy Tool');
		});
		
		it('should have castrol logo displayed', function(){
			wtb_search_page.isLogoPresent();
		});

	});
	
	describe('S02 - Find Castrol Retailers', function(){
		it('should enter the address where to search for Castrol Retailers - London', function(){
			wtb_search_page.enterAddress('London');
		});
		
		xit('should display Castrol Retailers for the searched location', function(){
			wtb_search_page.validateResultsNumber(7);
		});
		
		xit('should validate first and last Castrol Retailer address from the list', function(){
			wtb_search_page.validateFirstRetailer();
			wtb_search_page.validateLastRetailer();
		});
	});

});