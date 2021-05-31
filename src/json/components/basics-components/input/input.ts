import { BasicAttribute } from '../basics';

class Input extends BasicAttribute{
    constructor(name: string,label: string) {
        super(name,label)
    }
}
const input = new Input('input','输入框');
export {
    input,
}