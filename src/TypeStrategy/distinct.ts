import { TypeStrategy } from "./typeStrategy";

export class Distinct extends TypeStrategy{
    isApply(value: any, otherValue: any){return value != otherValue}
}