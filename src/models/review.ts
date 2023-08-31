import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Book } from './book';
import { User } from './user';

@Table
export class Review extends Model<Review> {
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