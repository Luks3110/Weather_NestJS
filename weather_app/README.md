## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Setup

```bash
$ npm install
$ npm install -g node-mongo-seeds
$ docker-compose -f "mongo-docker-compose.yml" up -d --build
```

## Node-Mongo-Seeds

Node Mongo Seeds is a library/tool used to seed a MongoDB database with a JSON file or a JS file containing the data that will be used to populate the database. The data needs to be on a seeds folder.
node-mongo-seeds can be installed locally on the project too

## Seeding the database
On the root of the project

```bash
$ seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
