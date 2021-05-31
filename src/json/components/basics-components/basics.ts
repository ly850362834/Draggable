class BasicAttribute {
    readonly type='basic';
    readonly name:string;
    readonly label:string;
    constructor(name:string,label:string) {
        this.name = name;
        this.label = label;
    }
};
export {
    BasicAttribute,
}