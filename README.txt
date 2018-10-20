The OpenArrayItemInserter class is a dependency of the OpenArray class
( package:  @writetome51/open-array ).

To instantiate, pass the actual array it will contain into its constructor:

let inserter = new OpenArrayItemInserter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

filter.data = [1,2,3,4,...];

OpenArrayItemInserter has methods that increase the length of the array.

This inserts values at index:

.at(index, values) // index can be negative or positive.


This inserts values in middle of the array:

.middle(values, offset = 0)

By default, if the array has odd number of items, values will be inserted just before the
middle item. If you want to change the insert position, set the optional offset parameter to +
or - whatever integer you want.
