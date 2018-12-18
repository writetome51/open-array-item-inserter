# PublicArrayInserter

An array-manipulating Typescript/Javascript class with methods that   
increase the length of the array.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-inserter
```

## Loading

    // if using Typescript:
    import {PublicArrayInserter} from '@writetome51/public-array-inserter';
    // if using ES5 Javascript:
    var PublicArrayInserter = 
            require('@writetome51/public-array-inserter').PublicArrayInserter;


## Instantiation

    let insert = new PublicArrayInserter( [item1, item2, item3,...] );
    // Or, instantiate with an empty array:
    let insert = new PublicArrayInserter();

You can also reset the array by accessing the class `.data` property:

    insert.data = [1,2,3,4,...];


## Properties

    data : any[] (read-writable) // the actual array

    className: string (read-only)


## Methods
``` 
at(index, values): this 
    // inserts values at index.  index can be negative or positive.
    // If positive, existing items beginning at that index will be pushed to 
    // the right to make room.  If negative, existing items ending at that 
    // index will be pushed to the left to make room.
    
middle(values, offset = 0): this
    // inserts values in middle of the array.
    // By default, if the array has odd number of items, values will be 
    // inserted just before the middle item. If you want to change the insert 
    // position, set the optional offset parameter to + or - whatever integer 
    // you want.

protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

## Inheritance Chain

PublicArrayInserter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)