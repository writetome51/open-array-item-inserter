import { PublicArrayItemInserter } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let insert = new PublicArrayItemInserter([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let otherArr = insert.data;

// Test 1
insert.at(-3, [30, 32]);
if (arraysMatch(insert.data, [1, 2, 3, 4, 5, 6, 30, 32, 7, 8, 9])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
if (arraysMatch(insert.data, otherArr)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
insert.at(0, [30, 32]);
if (arraysMatch(insert.data, [30, 32, 1, 2, 3, 4, 5, 6, 30, 32, 7, 8, 9])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
if (arraysMatch(insert.data, otherArr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
insert.middle(['in', 'the', 'middle']);
if (arraysMatch(insert.data, [30, 32, 1, 2, 3, 4, 'in', 'the', 'middle', 5, 6, 30, 32, 7, 8, 9]))
	console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6
if (arraysMatch(insert.data, otherArr)) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
insert.middle(['another'], -2);
if (arraysMatch(insert.data, [30, 32, 1, 2, 3, 4, 'another', 'in', 'the', 'middle', 5, 6, 30, 32, 7, 8, 9]))
	console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
if (arraysMatch(insert.data, otherArr)) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
insert.middle([]);
if (arraysMatch(insert.data, [30, 32, 1, 2, 3, 4, 'another', 'in', 'the', 'middle', 5, 6, 30, 32, 7, 8, 9]))
	console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10
if (arraysMatch(insert.data, otherArr)) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11
let errorTriggered = false;
try{
	insert.middle(1);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


// Test 12
errorTriggered = false;
try{
	insert.at(20, [30, 32]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 12 passed');
else console.log('test 12 FAILED');