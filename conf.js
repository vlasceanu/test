// conf.js
exports.config = {
 
  allScriptsTimeout: 99999,
  getPageTimeout: 99999,
  
  sauceUser: 'castroltoolkit',
  sauceKey: '8ccca600-c572-4d67-96c9-e4f35fb25872',
  
  baseUrl: "http://159.8.151.205:9080/wtb/",
  
  specs:['./e2e/desktop/search/wtb_search_spec.js'],
  
  capabilities: {
	browserName: 'chrome',
	platform: 'Windows 7',
	name: 'Castrol WTB - Desktop tests',
	build: '#1',
	recordvideo: true,
	videoUploadOnPass: true,
	recordScreenshots: true,
	recordLogs: true,
	"public": 'share',
	screenResolution: '1280x960',
	
	maxDuration: 1800,
	commandTimeout: 600,
	idleTimeout: 600
    },

	onPrepare: function() {
		require('jasmine-reporters');
		jasmine.getEnv().addReporter(
			new jasmine.JUnitXmlReporter('results', true, true)
		);
	},
  
  jasmineNodeOpts: {
	onComplete: null,
	isVerbose: true,
	showColors: true,
	includeStackTrace: true,
	defaultTimeoutInterval: 99999
	}
}
