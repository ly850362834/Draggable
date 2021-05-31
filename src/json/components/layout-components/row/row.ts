import {Layout} from '../layout'
class Row extends Layout{
    constructor(name: string,label: string) {
        super(name,label)
    }
}
const row = new Row('Row','栅格');
export {
    row,
};