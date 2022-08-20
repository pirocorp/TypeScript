export class Box<T> {
    private _elements: T[];

    constructor() {
        this._elements = [];
    }

    public get count(): number {
        return this._elements.length;
    }

    public add(element: T): void {
        this._elements.push(element);
    }

    public remove(): T {
        return this._elements.pop();
    }
}