import { LogicalCondition } from "./logicalCondition";

export class AND extends LogicalCondition{

    calculate(arrayConditions: Array<Boolean>): boolean {
        return !arrayConditions.includes(false);
    }
}