import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { Book } from "./book";
import { User } from "./user";

interface ReviewAttributes {
  id: number;
  userId: number;
  bookId: number;
  rating?: number;
  review?: string;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

@Table
export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> {
  @Column(DataType.INTEGER)
  rating!: number;

  @Column(DataType.TEXT)
  review!: string;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Book)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  bookId!: number;

  @BelongsTo(() => Book)
  book!: Book;
}
