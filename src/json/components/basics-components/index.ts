// import {input} from './input/input';
class BasicsComponent {
    readonly type='basics';
    readonly basicsComponentJson: Array<Object>=[];
    readonly name:string;
    constructor(name:string) {
            this.name = name;
    }
}
const basicsComponent = new BasicsComponent('basic');
class Input extends BasicsComponent{
    constructor(name: string) {
        super(name);
    }
}
const input = new Input('input');
basicsComponent.basicsComponentJson.push(input);
export {
    basicsComponent,
}
