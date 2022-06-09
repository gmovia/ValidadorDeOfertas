import { LogicalCondition } from "./logicalCondition";

export class NOT extends LogicalCondition{

    calculate(): boolean {
        return !this.arrayConditions[0];
    }
}