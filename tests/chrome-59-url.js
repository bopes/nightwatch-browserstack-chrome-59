module.exports = {
  'Chrome 59 - URL' : function (browser) {
  	browser.url('https://developer.ulsterbank.ie/')
		  .waitForElementVisible('body', 10000)
		  .click('body nav > div > div.nav-left.nav-menu > a:nth-child(2)')
		  .assert.urlContains('/documentation')
		  .waitForElementVisible('.documentation-container', 10000)
		  .click('.login-button')
		  .waitForElementVisible('.login-container', 10000)
		  .assert.urlContains('/login')
		  .end()
  }
};
