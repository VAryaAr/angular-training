import { Users } from "./users";
import { Departments } from "./departments";

export class Bugs {
    id: number;
    title: string;
    summary: string;
    assignee: Users;
    department: Departments;
    createdBy: Users;
    createDate: Date;
    lastUpdate:Date;
    status: string;
}
