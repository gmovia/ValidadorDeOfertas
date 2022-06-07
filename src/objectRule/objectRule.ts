export abstract class ObjectRule{
    abstract isType(type: string): boolean;
    abstract translate(data: string): string;
}