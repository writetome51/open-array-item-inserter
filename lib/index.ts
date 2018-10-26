import { insertAt } from '@writetome51/array-insert-at/insertAt';
import { insertMiddle } from '@writetome51/array-insert-middle/insertMiddle';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export class PublicArrayItemInserter extends PublicArrayContainer {


	constructor(data: any[] = []) {
		super(data);
	}


	// These methods only increase the length of the array, and return the class instance.


	// index can be negative or positive.
	at(index, values: any[]): this {
		return this.returnThis_after(insertAt(index, values, this.data));
	}


	// By default, if this.data has odd number of items, values will be inserted just before the
	// middle item. If you want to change the insert position, set the optional offset parameter to +
	// or - whatever integer you want.

	middle(values: any[], offset = 0): this {
		return this.returnThis_after(insertMiddle(values, this.data, offset));
	}


}
