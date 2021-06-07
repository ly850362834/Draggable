import {basicComponent} from "@/json/components/basics-components";
import {layoutComponent} from "@/json/components/layout-components";

class ComponentFunc {
    readonly basicComponent;
    readonly layoutComponent;
    constructor(basicComponent: any,layoutComponent:any) {
        this.basicComponent = basicComponent;
        this.layoutComponent = layoutComponent;
    }
}
const elementComponents:{[index: string]:any} = new ComponentFunc(basicComponent,layoutComponent);
export {
    elementComponents
}