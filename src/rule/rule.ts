import { ObjectRule } from '../objectRule/objectRule'

export abstract class Rule{
    abstract isApply(objectRule: ObjectRule): boolean;
    abstract getCode(): string;
}