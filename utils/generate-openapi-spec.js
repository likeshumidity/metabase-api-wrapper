#!/usr/bin/env node

const packageJSON = require('../package.json')

const { Command } = require('commander')
const program = new Command()

program
  .name('generate-openapi-spec')
  .description('CLI to generate OpenAPI 3 spec for Metabase API')
  .version(packageJSON.version)

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined
    console.log(str.split(options.separator, limit))
  })

program.command('scrape-repo')
  .description('Scrape metabase/metabase repo')
  .option('-t, --tag <tag>', 'tag to scrape', null)
  .option('-b, --branch <branch>', 'branch to scrape', 'master')
  .action((options) => {
    console.log(options.tag)
    console.log(options.branch)
  })

program.command('generate')
  .description('Generate OpenAPI 3 spec from API docs, code, and enriched docs')
  .action((options) => {
    console.log(options)
  })

program.parse()
