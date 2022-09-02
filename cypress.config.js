const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    charts: true, 
    reportPageTitle: 'report-cypressDemoBlaze',
    embeddedScreenshot: true,
    inlineAssets: true,
    saveAllAttempts: false,
    video: false,
    screenshotsFolder: 'images'
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
