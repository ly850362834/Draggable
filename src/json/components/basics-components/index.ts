import {input} from './input/input';
import { BasicAttribute } from './basics';
class BasicComponent extends BasicAttribute {
    readonly componentJson: Array<object> = [];
    constructor(name: string,label: string) {
        super(name,label)
    }
}
const basicComponent = new BasicComponent('基础组件','基础组件');
basicComponent.componentJson.push(input);
export {
    basicComponent,
}
