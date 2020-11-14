[![https://travis-ci.com/ronerlih/express-sequelize-box](https://travis-ci.com/ronerlih/express-sequelize-box.svg?branch=main&status=passed)](https://travis-ci.com/ronerlih/express-sequelize-box) [![https://app.codacy.com/project/badge/Grade/d54fbe2005594f5884b61dbdf22ea604](https://app.codacy.com/project/badge/Grade/d54fbe2005594f5884b61dbdf22ea604)](https://app.codacy.com/gh/ronerlih/express-sequelize-box/dashboard) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/d54fbe2005594f5884b61dbdf22ea604)](https://www.codacy.com/gh/ronerlih/express-sequelize-box/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ronerlih/express-sequelize-box&utm_campaign=Badge_Coverage)

# 📦 Express Sequelize box

## Use

-   Fork or clone and copy what you need

## 🗒️  Development notes

### 🗃️ Folder structure
```sh
.
├── assets         <- # project management
├── node_modules
├── config         <- # sequelize connection config
├── db             <- # sql schema and seed for reference
├── models         <- # database tables
│   ├── Test.js
│   └── index.js
├── public         <- # static files ((requested by the clients) 
│   └── assets
│       ├── css
│       ├── images
│       └── js
├── views          <- # handlebars
│   ├── index.handlebars
│   ├── layouts
│   │   └── main.handlebars
│   ├── partials
│   │   ├── postComments.handlebars 
│   │   └── viewComments.handlebars
│   └── helpers    <- # registering handlebars helper functions
│       ├── index.js
│       └── tests
├── routes         <- # routes (split ro html & api routes)
│   ├── api-routes
│   │   ├── comments.js
│   │   └── index.js
│   └── html-routes
│       ├── comments.js
│       └── index.js
├── utils          <- # server side scripts: seed DB, error handling (for now)
│   ├── errorHandler.js
│   ├── seed.js
│   └── tests
├── .env           <- # local credentials (VAR_NAME=value)
├── .eslintignore  <- # eslint ignore patterns 
├── .eslintrc.json <- # eslint config
├── .gitignore     <- # git ignore patterns
├── .remarkrc      <- # remark linter config
├── .stylelintrc.json <- # css lint config
├── .travis.yml       <- # Travis CI config
├── package-lock.json
├── package.json   <- # manifest: dependencies, scripts, project info
├── readme.md      
└── server.js      <- # 🚀server start (npm run start)
```

### ⚙️ CI
##### Will approve branch merges to *main* only after all tests pass. 

-   **TravisCI** travis.com (config: `.travis.yml`) runs:
    -   **eslint**: https://www.npmjs.com/package/eslint
        -   lint locally in the command line: `eslint .`
        -   ignore: `.eslintignore`
    -   **Jest**: jestjs.io
        -   test locally in the command line: `jest`

-   **CODACY** (codacy.com) runs:
      -   **styleLint** (css linter): https://github.com/stylelint/stylelint
          -   lint locally in the command line: `stylelint "**/*.css"` 
          -   config: `.stylelintrc.json`
      -   **remark** (markdown linter): https://www.npmjs.com/package/remark
          -   lint locally in the command line: `remark .` 
          -   config: `.remarkrc`
      -   more linters on the codacy config (codady.com)
-   **Monitoring dashboard**: [loggly.com](https://ronerlih.loggly.com/search?terms=tag:heroku&from=-20m&until=now&source_group=&newtab=1#terms=&from=2020-11-07T12:03:00.296Z&until=2020-11-07T13:03:00.296Z&source_group=)

### 📉 Diagrams examples 

!["assets/PROJECT-02-diagrams-templates.png"](assets/PROJECT-02-diagrams-templates.png)

### 🧪 Unit tests
##### Run tests with `npm run test` from the command line.
**Tests notes**:
-   utils/**errorHandler**.js:
    -   *To-Do*: use supertest: https://www.npmjs.com/package/supertest
    -   mocked sideeffects: console.log, 
    -   *To-Do*: log library (currently using heroku default logs, not incorporated into tests)
-   utils/**seed**.js:
    -   Testing db in test env
-   views/**helpers**/index.js: 
    -   getLength helper


### ⛑️ To-Do 
###### 🌟 issues-feature requests are welcome!

-   write routes tests (supertest?)
-   write sequelize tests (models folder)
-   send test reports to code covarage
-   log (winston/ bunyan/ log4js/ morgan/?), currently Heroku defualt logs


### 🔮 Further Development

-   express best practices: https://expressjs.com/en/advanced/best-practice-performance.html
