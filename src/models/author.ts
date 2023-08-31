import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Book } from './book';

@Table
export class Author extends Model<Author> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Book)
  books!: Book[];
}
