To include in your project:

    import {PublicArrayInserter} from '@writetome51/public-array-inserter';

PublicArrayInserter has methods that increase the length of the array,  
and return the class instance.

To instantiate, pass the actual array it will contain into its constructor:

    let insert = new PublicArrayInserter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    insert.data = [1,2,3,4,...];

All the methods:

    // inserts values at index
    at(index, values): this // index can be negative or positive.


    // inserts values in middle of the array
    middle(values, offset = 0): this
    // By default, if the array has odd number of items, values will be inserted just before the
    // middle item. If you want to change the insert position, set the optional offset parameter to +
    // or - whatever integer you want.

