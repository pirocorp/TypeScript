// Variable types

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

export const test = color;

export default function (count: number) {
    console.log(`Exported function: ${count}`);    
}