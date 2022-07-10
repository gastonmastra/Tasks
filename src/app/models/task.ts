import { TaskTag } from "../enums/task-tag";

export class Task {
    name: string;
    description?: string;
    since: Date;
    endDate?: Date;
    tag?: TaskTag[];
}
