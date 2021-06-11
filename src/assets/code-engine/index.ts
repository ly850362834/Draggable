import {createBasicCode} from "@/assets/code-engine/basic/index";
import {createLayoutCode} from "@/assets/code-engine/layout/index";

function createCode(json: any){
    let str = ``;
    json.map((item: any)=>{
        if (item.type == 'basic') {
            str=str+createBasicCode(item);
        } else if (item.type == "layout") {
            str=str+createLayoutCode(item);
        }
    })
    return str
}
export {createCode}