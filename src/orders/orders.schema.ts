import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column('simple-json') // ✅ Stores items as JSON in SQLite/PostgreSQL
    items: { id: number; name: string; quantity: number }[];
}
