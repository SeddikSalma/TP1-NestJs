import { TodoStatusEnum } from "src/todo/todo";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import WithDate from "./WithDate";

@Entity("tdo")
export default class TodoEntity extends WithDate{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar"
    })
    name: string;

    @Column({
        type: "varchar"
    })
    description: string;

    @Column({
        type: "enum",
        enum: TodoStatusEnum,
        default: TodoStatusEnum.waiting
    })
    status: TodoStatusEnum;
}