const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 9000,

  env: {
    /*update base url  FROM TESTURL/PREPROD URL 
    environmentS ARE 'TEST1' if Testurl  AND 'PREPROD1' if preprodurl
    */
    baseurl: 'https://demoqa.com/',
    Testurl:'https://demoqa.com/',
    Preprodurl:'https://staging.example.com',
    environment:'TEST1'
   
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
