import {input} from './input/input';
import { BasicsComponent } from './basicsComponent';
const basicsComponent = new BasicsComponent('basic','基础组件');
basicsComponent.basicsComponentJson.push(input);
export {
    basicsComponent,
}
