import { Table, Column, Model, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { Author } from './author';
import { Bookshelf } from './bookshelf';
import { Review } from './review';

@Table
export class Book extends Model<Book> {
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
