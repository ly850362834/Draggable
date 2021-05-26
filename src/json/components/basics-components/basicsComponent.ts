class BasicsComponent {
    readonly type='basics';
    readonly basicsComponentJson: Array<Object>=[];
    readonly name:string;
    constructor(name:string) {
        this.name = name;
    }
};
export {
    BasicsComponent,
}