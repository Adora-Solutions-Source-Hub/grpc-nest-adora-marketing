/** @format */

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  DataType
} from 'sequelize-typescript';

@Table({ modelName: 'campaigns' })
export class Campaign extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  user_id: number;


  @AllowNull
  @Column({ type: DataType.ARRAY(DataType.JSON), allowNull: true })
  assignment: Array<number>

  @AllowNull
  @Column
  brief_id: number;

  @AllowNull
  @Column
  research_metadata_id: number;
}
