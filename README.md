To include in your project:

    import {PublicArrayInserter} from '@writetome51/public-array-inserter';

PublicArrayInserter has methods that increase the length of the array,  
and return the class instance.

To instantiate, pass the actual array it will contain into its constructor:

    let insert = new PublicArrayInserter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    insert.data = [1,2,3,4,...];

All the methods:

    
    at(index, values): this 
        // inserts values at index.  index can be negative or positive.
        // If positive, existing items beginning at that index will be pushed to the right to   
        // make room.  If negative, existing items ending at that index will be pushed to the   
        // left to make room.  Either way, once the operation is done the new values will occupy  
        // that specified index. 


    
    middle(values, offset = 0): this
        // inserts values in middle of the array
        // By default, if the array has odd number of items, values will be inserted just before the
        // middle item. If you want to change the insert position, set the optional offset parameter to +
        // or - whatever integer you want.

