# WanderReads API

Supports the [WanderReads](https://github.com/espressogoddess/wander_reads) application.

This service is built with [node](https://nodejs.org/) and [express.js](https://expressjs.com/), using [Sequelize](https://sequelize.org/) to interact with a [Postgres](https://www.postgresql.org/) database.

## Getting Started

1. Clone the repo + install dependencies: `npm install`
1. For local development, you will need a Postgres server available
	1. To run a Postgres server with [docker-compose](https://docs.docker.com/compose/): <br/>
	`cd db && docker-compose up` (optionally: `-d` to run in the background)
1. Copy the `.env.example` file and rename it to `.env`
1. Populate your `.env` with the connection string for your local Postgres database
	1. If using docker-compose: 
	`DATABASE_URL="postgres://postgres:secret@localhost:5432/postgres"`
1. Start the dev server: `npm run dev`
1. (Optional) Run the seed scripts:
`npm run db:seed`