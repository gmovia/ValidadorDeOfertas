import { TypeStrategy } from "./typeStrategy";

export class Lower extends TypeStrategy{
    isApply(value: any, otherValue: any): boolean {return value < otherValue;}
}