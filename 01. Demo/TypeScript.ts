import { IProgramLang } from "./program-lang.interface.js";

export class TypeScript implements IProgramLang {
    #name: string;

    constructor(name){
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}   