# FullDevLekce10

Dockerize my blog post app

# Domácí úkol 10

- Deadline: 9.1.2024 23:59
- Počet bodů: 5

**Cílem tohoto úkolu je použít některou NoSQL databázi**

## První varianta - cache

- implementuje cache pro endpointy za pomocí Redisu
- klíč bude URL, hodnota pak data
- první request na daný endpoint vrátí data z databáze,
- každý další pak vrátí data z cache
- nastav TTL tak aby cache vypršela po nějaké době

## Druhá varianta - počítadlo návštěv

## Třetí varianta - mongo

- [x] Dockerize app
- [x] Load sample dataset from [MongoDB JSON Data](https://github.com/ozlerhakan/mongodb-json-files.git)
- [x] Create multiple endpoints with CRUD
- [ ] Advanced operations with data
- [ ] Add Users to the blog database
## Setup

1. Run local Docker instance

   ```shell
   docker compose up
   ```

2. Load Tweets dataset
   Data can be restored with:
   `shell
    mongorestore -u admin  -p mongopwd --authenticationDatabase admin sample/dump/
    `

- _Note_ You have to have [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/) installed to run this command.

3. Use the dataset

- Use MongoDB Client app to play with the data! [Compass](https://www.mongodb.com/try/download/compass)

# Notes

[Express + TypeScript](https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf)

1. Install dependencies

```shell
pnpm i express cors dotenv
```

2. Installing TypeScript command

```shell
npm install  -D typescript ts-node-dev @types/express @types/cors
```

&&

`npx tsc --init`

3. Configure EsLint & Prettier:

- [Complete Tutorial](https://blog.logrocket.com/linting-typescript-eslint-prettier/)

  - `pnpm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript prettier@^2.8.8`

  - `npx eslint --init` to run the commandline setup

  - `npm eslint .`

- add this to rules in `eslintrc.`

```json
"@typescript-eslint/no-unused-vars": "warn",
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
```

- in package.json add "lint" script:

`"lint": "eslint --ignore-path .eslintignore --ext .js,.ts",`
