// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByEnvinronmentFile(environment) {
  const pathToConfigFile = path.resolve('tests', 'testConfig', `cypress.${environment}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  require('cypress-terminal-report').installPlugin(on)
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })

  const environment = process.env.ENV || 'development'

  return getConfigurationByEnvinronmentFile(environment)

  // const testDataFileName = `../testData/${process.env.ENV}.js`;
  // console.log(`\nUsing test data file: ${testDataFileName}\n`)
  // const testDataFromFile = require(testDataFileName);

  // config.env.testData = testDataFromFile
  // config.testData = testDataFromFile
  // console.log(config)
  // console.log(config.env.testData.baseUrl)
  // return config
}
