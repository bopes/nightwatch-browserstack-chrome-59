module.exports = {
  'Chrome 59 - DOM' : function (browser) {
    browser.url('https://developer.ulsterbank.ie/')
		  .waitForElementVisible('body', 10000)
		  .assert.cssClassNotPresent('div.nav-left.nav-menu > a:nth-child(2)', 'is-active')
		  .click('div.nav-left.nav-menu > a:nth-child(2)')
			.assert.urlContains('/documentation')
		  .waitForElementVisible('.documentation-container', 10000)
		  .assert.cssClassPresent('div.nav-left.nav-menu > a:nth-child(2)', 'is-active')
		  .end()
  },
}