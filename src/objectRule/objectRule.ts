export abstract class ObjectRule{

    protected dictionary: Map<string, any>;

    constructor(){
        this.dictionary = new Map<string, any>();
    }

    translate(data: string){
        return this.dictionary.get(data)
    }
}