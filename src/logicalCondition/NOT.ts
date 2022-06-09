import { LogicalCondition } from "./logicalCondition";

export class NOT extends LogicalCondition{

    calculate(arrayConditions: Array<Boolean>): boolean {
        return !arrayConditions[0];
    }
}