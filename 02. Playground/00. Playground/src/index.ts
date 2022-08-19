import * as _ from 'underscore';
import * as express from 'express';

import { test } from './Playground';
import func from './Playground';

import Vehicles from './namespace';
const { Suv, SmallSuv } = Vehicles;

import { KeyValuePair } from './KeyValuePair';
import { NumberValidator } from './NumberValidator';

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

interface IMyObj {
    name: string;
    age: number;
    data: boolean[];
}

interface IMyObj2 extends IMyObj{
    test: Direction[]
}

class User {

    private isAlive: boolean;

    constructor(public name: string, public age: number){
        this.isAlive = true;
    }

    doSomething(obj: IMyObj){
        return _.range(0, 10, 1);        
    }

    doSomethingElse<T extends IMyObj>(obj: T) {
        return obj;
    }
}

class Employee extends User {
    constructor(name: string, age: number){
        super(name, age);
    }
}

function main() {
    const ivan = new User("Ivan", 20);

    console.log(ivan);

    const obj1: IMyObj = {
        name: "asd",
        age: 32,
        data: [true, false, true]
    }

    ivan.doSomething(obj1);

    const obj2: IMyObj2 = {
        name: "ppp",
        age: 44,
        data: [true, true, true],
        test: [Direction.Up, Direction.Down, Direction.Left]
    }

    ivan.doSomethingElse(obj1);
    ivan.doSomethingElse(obj2);

    console.log(test);
    func(24);

    const suv = new Suv("X5");
    console.log(`${suv.drive()} (log)`);

    const small = new SmallSuv("X1", 1);
    console.log(small.drive());
    small.park()

    const kvp = new KeyValuePair<string, number>();
    kvp.key = "test"
    kvp.value = 1;
    console.log(kvp);

    console.log(NumberValidator.validate("-1"));
}

main();