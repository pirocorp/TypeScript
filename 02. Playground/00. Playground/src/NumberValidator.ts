export class NumberValidator {
    static validate(arg: any): boolean {
        return !isNaN(arg);
    }
}