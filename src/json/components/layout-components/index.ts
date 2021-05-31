import {Layout} from './layout';
import {row} from './row/row';
class LayoutComponent extends Layout {
    readonly layoutComponentJson: Array<object> = [];
    constructor(name: string,label: string) {
        super(name,label)
    }
}
const layoutComponent = new LayoutComponent('布局组件','布局组件');
layoutComponent.layoutComponentJson.push(row);
export {
    layoutComponent
}
