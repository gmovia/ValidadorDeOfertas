import { TypeStrategy } from "./typeStrategy";

export class In extends TypeStrategy{
    isApply(value: any, otherValue: any): boolean {return otherValue.includes(value);}
}