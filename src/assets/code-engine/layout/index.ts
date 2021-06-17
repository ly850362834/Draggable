import {createCode} from "@/assets/code-engine";

function createLayoutCode(item: any){
    return `
            <row>
                ${item.children.map((child: any) => `
                    <col>
                        ${createCode(child.list)}
                    </col>
                  `).join('')}
            </row>
            `
}
export {createLayoutCode};
//
// `
// <col>
//     ${col)}
// </col>
// `)}
// <col>
//     ${createCode(item.children[1].list)}
// </col>