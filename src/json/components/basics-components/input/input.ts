import {BasicsComponent} from '../index';
class Input extends BasicsComponent{
    constructor(name: string) {
        super(name);
    }
}
const input = new Input('input');
export {
    input,
}