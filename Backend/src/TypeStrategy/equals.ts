import { TypeStrategy } from "./typeStrategy";

export class Equals extends TypeStrategy{
    isApply(value: any, otherValue: any): boolean {return value == otherValue}
}