import { LogicalCondition } from "./logicalCondition";

export class OR extends LogicalCondition{

    calculate(arrayConditions: Array<Boolean>): boolean {
        return arrayConditions.includes(true);
    }
}