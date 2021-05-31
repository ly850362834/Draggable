import getPrototypeOf = Reflect.getPrototypeOf;

class BasicsComponent {
    readonly type='basics';
    // readonly basicsComponentJson: Array<Object>=[];
    readonly name:string;
    readonly label:string;
    constructor(name:string,label:string) {
        this.name = name;
        this.label = label;
    }
};
// interface BasicsComponent {
//     basicsComponentJson: Array<object>
// }
// BasicsComponent.prototype.basicsComponentJson=[];
export {
    BasicsComponent,
}