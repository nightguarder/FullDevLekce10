# FullDevLekce10
Dockerize my blog post app

# Domácí úkol 10

- Deadline: 9.1.2024 23:59
- Počet bodů: 5

__Cílem tohoto úkolu je použít některou NoSQL databázi__

## První varianta - cache
- implementuje cache pro endpointy za pomocí Redisu
- klíč bude URL, hodnota pak data
- první request na daný endpoint vrátí data z databáze,
- každý další pak vrátí data z cache
- nastav TTL tak aby cache vypršela po nějaké době

## Druhá varianta - počítadlo návštěv

## Třetí varianta - mongo

- [ ] Dockerize app
- [ ] Load sample dataset from [MongoDB JSON Data](https://github.com/ozlerhakan/mongodb-json-files.git)
- [ ] Create multiple endpoints with CRUD 

## Setup

1. Run local Docker instance
    ```shell
    docker compose up
    ```

2. Load Tweets dataset
Data can be restored with:
    ```shell
    mongorestore -u admin  -p mongopwd --authenticationDatabase admin sample/dump/
    ```
- *Note* You have to have [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/) installed to run this command.

3. Use the dataset
- Use MongoDB Client app to play with the data! [Compass](https://www.mongodb.com/try/download/compass)