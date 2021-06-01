import {Layout} from '../layout'
class Row extends Layout{
    constructor(name: string,label: string) {
        super(name,label);
        this.children.push({name:'col',label:'栅格',list:[],type:'basic'})
        this.children.push({name:'col',label:'栅格',list:[],type:'basic'})
    }
}
const row = new Row('Row','栅格');
export {
    row,
};