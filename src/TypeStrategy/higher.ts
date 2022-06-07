import { TypeStrategy } from "./typeStrategy";

export class Higher extends TypeStrategy{
    isApply(value: any, otherValue: any){return value > otherValue;}
}