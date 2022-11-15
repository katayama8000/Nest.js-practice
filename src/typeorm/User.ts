import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_adress',
    nullable: false,
    default: '',
  })
  emailAdress: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
