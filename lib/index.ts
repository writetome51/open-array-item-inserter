import { insertAt } from '@writetome51/array-insert-at';
import { insertMiddle } from '@writetome51/array-insert-middle';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export class PublicArrayInserter extends PublicArrayContainer {


	// These methods only increase the length of the array, and return the class instance.


	// index can be negative or positive.  If positive, existing items beginning at
	// that index will be pushed to the right to make room.  If negative, existing
	// items ending at that index will be pushed to the left to make room.

	at(index, values: any[]): this {
		return this._returnThis_after(insertAt(index, values, this.data));
	}


	// By default, if this.data has odd number of items, values will be inserted just before the
	// middle item. If you want to change the insert position, set the optional offset parameter to +
	// or - whatever integer you want.

	middle(values: any[], offset = 0): this {
		return this._returnThis_after(insertMiddle(values, this.data, offset));
	}


}
