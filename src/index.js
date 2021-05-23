
import {getclasses} from './getclasses';
console.log("Ran from index js");
getclasses();

const obj = {a:'alpha', b:'bravo' }
const newobj = { ...obj, c:'charlie'}
console.log(newobj);

