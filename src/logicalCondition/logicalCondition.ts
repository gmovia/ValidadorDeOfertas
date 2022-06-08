export abstract class LogicalCondition{
    
    protected arrayConditions: Array<Boolean>;

    constructor(){
        this.arrayConditions = new Array<Boolean>();
    }

    add(booleanElement: boolean){
        this.arrayConditions.push(booleanElement);
    }

    abstract calculate(): boolean;
}