import { LogicalCondition } from "./logicalCondition";

export class OR extends LogicalCondition{

    calculate(): boolean {
        return this.arrayConditions.includes(true);
    }
}