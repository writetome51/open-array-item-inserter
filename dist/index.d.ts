import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayInserter extends PublicArrayContainer {

	constructor(data?: any[]);


	at(index: number, values: any[]): this;


	middle(values: any[], offset?: number): this;
}
