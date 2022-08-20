export class KeyValuePair<TKey, TValue> {
    private key: TKey;
    private value: TValue;

    public setKeyValue(key: TKey, value: TValue): void {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);        
    }
}