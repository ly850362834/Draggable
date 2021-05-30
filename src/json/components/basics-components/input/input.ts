import { BasicsComponent } from '../basicsComponent';

class Input extends BasicsComponent{
    constructor(name: string,label: string) {
        super(name,label)
    }
}
const input = new Input('input','输入框');
export {
    input,
}