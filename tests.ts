import { OpenArrayItemInserter } from './OpenArrayItemInserter';


let insert = new OpenArrayItemInserter([1,2,3,4,5,6,7,8,9]);

insert.at(-3, [30,32]);
console.log(insert.data);

insert.middle(['in', 'the', 'middle']);
console.log(insert.data);

insert.middle(['another'], -2);
console.log(insert.data);

insert.middle([]);
console.log(insert.data);