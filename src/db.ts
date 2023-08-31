import { Sequelize } from "sequelize-typescript";
import process from "process";
import { Author } from "./models/author";
import { Book } from "./models/book";
import { Bookshelf } from "./models/bookshelf";
import { Review } from "./models/review";
import { User } from "./models/user";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/sequelize.js")[env];

// Define database connection
let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize.addModels([
  Author,
  Book,
  Bookshelf,
  Review,
  User,
]);

// Initialize Models
export async function initialize() {
  return sequelize.sync();
}