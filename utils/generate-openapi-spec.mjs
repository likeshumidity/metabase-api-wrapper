#!/usr/bin/env node

import axios from 'axios'

import { readFileSync } from 'fs'
import { readdir } from 'fs/promises'

import { Command } from 'commander'

const loadJson = filePath => {
  const data = readFileSync(filePath)
  return JSON.parse(data.toString())
}

const packageJSON = loadJson('package.json')

const getMatchingUrlPaths = async (url) => {
  const data = await axios.get(url)

  return (data.data.tree).filter(item => {
    if (item.path.startsWith('docs/api')) {
      return true
    }

    return false
  })
}

const RepoScraperDocs = async ({ repo, tag, branch }) => {
  const createUrl = (tag, branch) => {
    const urlBase = `https://api.github.com/repos/${repo}/git/trees/`
    if (tag !== null) {
      return `${urlBase}${tag}?recursive=1`
    }

    return `${urlBase}${branch}?recursive=1`
  }

  const url = createUrl(tag, branch)

  console.log(`Scraping URL: ${url}`)

  const matchingPaths = await getMatchingUrlPaths(url)

  console.log(matchingPaths)

  const dataDir = process.env.API_WRAPPER_DATA_DIR || 'data'

  const dataDirContents = await readdir(dataDir, { recursive: true })

  console.log(dataDirContents)
  // 1. collect relevant paths
  // 2. retrieve files on relevant paths
  // 3. parse and interpret files
}

const cli = new Command()

cli
  .name('generate-openapi-spec')
  .description('CLI to generate OpenAPI 3 spec for Metabase API')
  .version(packageJSON.version)

// cli.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined
//     console.log(str.split(options.separator, limit))
//   })

cli.command('scrape-repo')
  .description('Scrape metabase/metabase repo')
  .option('-r, --repo <repo>', 'repo to scrape', 'metabase/metabase')
  .option('-t, --tag <tag>', 'tag to scrape', null)
  .option('-b, --branch <branch>', 'branch to scrape', 'master')
  .action((options) => {
    RepoScraperDocs(options)
  })

cli.command('generate')
  .description('Generate OpenAPI 3 spec from API docs, code, and enriched docs')
  .action((options) => {
    console.log(options)
  })

cli.parse()
