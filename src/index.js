
import {getclasses} from './getclasses';
console.log("Ran from index js");
getclasses();

const obj = {a:'alpha', b:'bravo1' }
const newobj = { ...obj, c:'charliE'}
console.log(newobj);

