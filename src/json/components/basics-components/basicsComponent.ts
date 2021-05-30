class BasicsComponent {
    readonly type='basics';
    readonly basicsComponentJson: Array<Object>=[];
    readonly name:string;
    readonly label:string;
    constructor(name:string,label:string) {
        this.name = name;
        this.label = label;
    }
};
export {
    BasicsComponent,
}