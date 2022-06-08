import { LogicalCondition } from "./logicalCondition";

export class AND extends LogicalCondition{

    calculate(): boolean {
        return !this.arrayConditions.includes(false);
    }
}