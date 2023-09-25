import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
} from "sequelize-typescript";
import { Author } from "./author";
import { Bookshelf } from "./bookshelf";
import { Review } from "./review";

interface BookAttributes {
  id: number;
  title: string;
  authorId: string;
  description?: string;
  coverUrl?: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

@Table
export class Book extends Model<BookAttributes, BookCreationAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
  })
  coverUrl!: string;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  authorId!: number;

  @BelongsTo(() => Author)
  author!: Author;

  @HasMany(() => Bookshelf)
  bookshelves!: Bookshelf[];

  @HasMany(() => Review)
  reviews!: Review[];
}
