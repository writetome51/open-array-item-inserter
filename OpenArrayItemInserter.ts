import { insertAt } from '@writetome51/array-insert-replace-basic/insertAt';
import { insertMiddle } from '@writetome51/array-insert-replace-basic/insertMiddle';
import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';


export class OpenArrayItemInserter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions increase the length of the array, and return the class instance.


	// index can be negative or positive.
	at(index, values: any[]): this {
		return this.returnThis_after(insertAt(index, values, this.data));
	}


	// By default, if this.data has odd number of items, values will be inserted just
	// before the middle item.  Example:
	// this.data is [1,2,3,4,5] .  You call .middle([9,10]) and result is [1,2,9,10,3,4,5]
	// If you want to slightly change the insert position, set the optional offset
	// parameter to + or - whatever integer you want.
	middle(values: any[], offset = 0): this {
		return this.returnThis_after(insertMiddle(values, this.data, offset));
	}


}
