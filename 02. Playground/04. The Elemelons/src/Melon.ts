export abstract class Melon {
    protected _elementIndex: number;

    constructor(public weight: number, public melonSort: string, protected element: string) { 
        this._elementIndex = this.weight * this.melonSort.length;       
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString(): string {
        const myString: string[] = [
            `Element: ${this.element}`,
            `Sort: ${this.melonSort}`,
            `Element Index: ${this._elementIndex}`
        ];

        return myString.join('\n');
    }
}