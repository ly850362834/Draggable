class Layout {
    readonly type='layout';
    readonly name:string;
    readonly label:string;
    readonly children: Array<object> = [];
    constructor(name:string,label:string) {
        this.name = name;
        this.label = label;
    }
};
export {
    Layout,
}