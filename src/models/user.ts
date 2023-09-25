import { Optional } from "sequelize";
import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { Bookshelf } from "./bookshelf";
import { Review } from "./review";

interface UserAttributes {
  id: number;
  email: string;
  name?: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Bookshelf)
  bookshelves!: Bookshelf[];

  @HasMany(() => Review)
  reviews!: Review[];
}
