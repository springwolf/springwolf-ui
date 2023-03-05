![version](https://img.shields.io/github/v/release/springwolf/springwolf-ui)
![springwolf-ui](https://github.com/springwolf/springwolf-ui/workflows/springwolf-ui/badge.svg)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Springwolf UI
##### Web UI for Springwolf

## Usage
Add the following dependencies:

```groovy
dependencies {
    runtimeOnly 'io.github.springwolf:springwolf-ui:0.6.0'
}
```

After starting the application, visit: `localhost:8080/springwolf/asyncapi-ui.html`.

## Development
1. Run `npm i`
2. Run `ng serve`

### Mock Data

The application renders content based on mock data in `src/app/shared/mock`.
It contains multiple mocks - including the ones from the springwolf-core examples projects.

To update the mock data, run `npm run update-mocks`.

## E2E tests

E2E tests are written with [playwright](https://playwright.dev).

Execute them with: `npm run test`
(This starts the angular dev server in the background as defined in `playwright.config.ts` in the `webServer` section)

During development of test you might find the codegen feature useful:
`npx playwright codegen localhost:4200`
(This assumes that the angular dev server is running `npm run start`)

## Release

Releasing is done by running the gradle task `publish`. For local development, use `publishToMavenLocal`.

### Setup the signing keys

If you do not have gpg keys yet, generate one with: `gpg --full-gen-key` You will need to set password.

Use the following environment variables:
- ORG_GRADLE_PROJECT_SIGNINGKEY: Output of `gpg --armor --export-secret-key`
- ORG_GRADLE_PROJECT_SIGNINGPASSWORD: Password for the gpg key
