import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Book } from './book';
import { User } from './user';

@Table
export class Bookshelf extends Model<Bookshelf> {
  @Column({
    type: DataType.ENUM('want_to_read', 'already_read'),
  })
  shelfType!: 'want_to_read' | 'already_read';
  
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bookId!: number;

  @BelongsTo(() => Book)
  book!: Book;

}
