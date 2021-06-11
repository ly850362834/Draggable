import {createCode} from "@/assets/code-engine";

function createLayoutCode(item: any){
    return `
            <row>
                <col>
                    ${createCode(item.children[0].list)}
                </col>
                <col>
                    ${createCode(item.children[1].list)}
                </col>
            </row>
            `
}
export {createLayoutCode};