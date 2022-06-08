import { TypeStrategy } from "./typeStrategy";

export class In extends TypeStrategy{
    isApply(value: any, otherValue: any){return otherValue.includes(value);}
}