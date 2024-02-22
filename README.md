# metabase-api-wrapper
OpenAPI 3 Spec generator for Metabase API and OpenAPI Generator clients


## Usage

```bash
$ ./utils/generate-openapi-spec help
$ ./utils/generate-openapi-spec scrape-repo --help
$ ./utils/generate-openapi-spec generate --help
```

## TODO
- [ ] document Metabase API using OpenAPI 3
    - [ ] scrape [Metabase repo](https://github.com/metabase/metabase) docs for API spec
        - [ ] Try [marked](https://github.com/markedjs/marked) for parsing Markdown
        - [ ] `/docs/api/`
        - [ ] `/docs/api/ee/`
    - [ ] scrape [Metabase repo](https://github.com/metabase/metabase) clojure code for API spec (maybe use clojurescript?)
        - [ ] Try [clojarse-js](https://github.com/mattfenwick/clojarse-js/tree/master) for Clojure to AST
        - [ ] `/src/metabase/api/`
        - [ ] `/enterprise/backend/src/metabase_enterprise/api/`
    - [ ] add additional docs to enrich what is included in docs and code
    - [ ] ?improve docs based on enriched docs
- [ ] generate OpenAPI spec from documneted Metabase API from scraping and enriched docs
    - [ ] verify scraped data version matches
    - [ ] combine API spec data scraped from repo and enriched docs
    - [ ] process API data and generate OpenAPI 3 spec output to YAML
    - [ ] ?add [AJV](https://ajv.js.org/) validation
- [ ] ?use Malli to create OpenAPI spec
- [ ] use [OpenAPI Generator](https://openapi-generator.tech/) to create API clients for:
    - [ ] Typescript
    - [ ] Python

