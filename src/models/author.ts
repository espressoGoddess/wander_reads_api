import { Optional } from "sequelize";
import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { Book } from "./book";

interface AuthorAttributes {
  id: number;
  name?: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> {}

@Table
export class Author extends Model<AuthorAttributes, AuthorCreationAttributes> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Book)
  books!: Book[];
}
